import { Inject, Injectable } from '@nestjs/common';
import { Prisma, DepartmentPhotos } from '@prisma/client';
import sharp from 'sharp';
import { generate } from 'generate-password';
import * as bcrypt from 'bcrypt';

// Libs area
import ResponseMessage from '@shared/enums/response-message.json';
import {
    BadRequestExceptionType,
    BadRequestException,
    ImageServerService,
    KeypairService,
} from '@shared';
import {
    DepartmentService,
    DepartmentPhotosService,
    WorkerService,
    ServicesService,
    ServiceWorkerService,
    CompanyUserService,
} from '@database';

// DTO area
import { UserParamsDto } from '../users/dtos';
import {
    AddDepartmentsJsonDto,
    AddServiceJsonDto,
    AddWorkerJsonDto,
    DeleteServiceJsonDto,
    UpdateDepartmentsJsonDto,
    UpdateServiceJsonDto,
    UpdateWorkerJsonDto,
} from './dtos/departments.dto';
import { WorkersGetJsonDto } from '../workers/dtos/workers.dto';
import generalConfig from '@shared/config/general.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class DepartmentsService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        private readonly departmentService: DepartmentService,
        private readonly departmentPhotosService: DepartmentPhotosService,
        private readonly imageServer: ImageServerService,
        private readonly workerService: WorkerService,
        private readonly serviceService: ServicesService,
        private readonly serviceWorkerService: ServiceWorkerService,
        private readonly keypairService: KeypairService,
    ) {}
    async add(user: UserParamsDto, input: AddDepartmentsJsonDto) {
        if (
            !input.Salon ||
            !input.ServiceType ||
            !input.TaxNo ||
            !input.TaxAdmin ||
            !input.IBAN ||
            !input.City ||
            !input.District ||
            !input.Neighborhood
        ) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR426),
                426,
            );
        }

        const departmentId = generate({
            numbers: true,
            symbols: false,
            uppercase: false,
            lowercase: false,
            length: 6,
        });

        const data: Prisma.DepartmentCreateInput = {
            Country: input.Country || 'Türkiye',
            City: input.City,
            District: input.District,
            IBAN: input.IBAN,
            Neighborhood: input.Neighborhood,
            TaxAdmin: input.TaxAdmin,
            TaxNo: input.TaxNo,
            Sector: input.Sector,
            Salon: input.Salon,
            CompanyUser: { connect: { Id: user.Id } },
            DepartmentID: departmentId,
        };

        if (input.WorkTime) {
            data.WorkTime = {
                createMany: {
                    data: input.WorkTime,
                },
            };
        }

        await this.departmentService.create(data);

        return {
            Data: ResponseMessage.TR204,
            Success: true,
        };
    }

    async getdetails(user: UserParamsDto, DepartmentId?: number) {
        const data = await this.departmentService.findMany({
            where: {
                CompanyUserId: user.Id,
                Id: DepartmentId,
            },
        });

        if (!data || data.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }
        return {
            Success: true,
            Data: data,
        };
    }

    async updateDepartments(
        user: UserParamsDto,
        input: UpdateDepartmentsJsonDto,
    ) {
        if (!input.DepartmentId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR432),
                432,
            );
        }

        const companyDepartment = await this.departmentService.findfirst({
            CompanyUserId: user.Id,
            Id: input.DepartmentId,
        });
        if (!companyDepartment) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }

        const data: Prisma.DepartmentUpdateInput = {
            CompanyUser: {
                connect: { Id: user.Id },
            },
            Salon: input.Salon || companyDepartment.Salon,
            ServiceType: input.ServiceType || companyDepartment.ServiceType,
            Sector: { set: input.Sector || companyDepartment.Sector },
            WorkTime: {
                deleteMany: {
                    Date: input.WorkTime.Date,
                    Days: input.WorkTime.Days,
                    DepartmentId: companyDepartment.Id,
                },
                createMany: {
                    data: input.WorkTime,
                },
            },
        };
        const where: Prisma.DepartmentWhereUniqueInput = {
            Id: input.DepartmentId,
        };

        await this.departmentService.update({ data, where });

        return {
            Data: ResponseMessage.TR207,
            Success: true,
        };
    }

    async addphotos(
        user: UserParamsDto,
        departmentId: number,
        file: Express.Multer.File,
    ) {
        const authorizator = await this.departmentService.findMany({
            where: {
                CompanyUserId: {},
                AND: {
                    Id: {
                        equals: departmentId,
                    },
                },
            },
        });

        // const arif = Buffer.from(file.buffer).toString('base64')
        console.log('fileeeeeeeeeeeeeeee', file);

        // İmage resize
        const reImage = await sharp(file.buffer)
            .resize(1200, 630, {
                fit: sharp.fit.inside,
                withoutEnlargement: true,
            })
            .toBuffer();
        file['buffer'] = reImage;
        console.log('reimage', reImage);
        const responseServer = await this.imageServer.addPhoto(file);

        // console.log("asdasds", file)

        if (!authorizator || authorizator.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }

        const data: Prisma.DepartmentPhotosCreateInput = {
            ImageName: file.originalname,
            ImageType: responseServer.fileType,
            ImageServerName: responseServer.fileName,
            Department: {
                connect: {
                    Id: departmentId,
                },
            },
        };

        const response: DepartmentPhotos =
            await this.departmentPhotosService.create(data);
        return {
            data: response.ImageName,
            Success: true,
        };
    }

    // async getphoto(){

    //     const responseServer = await this.imageServer.getPhoto();

    //     return responseServer
    // }

    async addService(user: UserParamsDto, input: AddServiceJsonDto) {
        if (!input.DepartmentId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR432),
                432,
            );
        }

        const companyDepartment: Prisma.DepartmentWhereInput = {
            CompanyUserId: user.Id,
            Id: input.DepartmentId,
        };

        const company = await this.departmentService.findMany({
            where: companyDepartment,
        });

        if (!company || company.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }
        const data: Prisma.ServicesCreateInput = {
            Price: input.Price,
            Prim: input.Prim,
            ServiceGender: input.ServiceGender,
            ServiceName: input.ServiceName,
            ServiceTimes: input.ServiceTimes,
            ServiceType: input.ServiceType,
            Department: {
                connect: {
                    Id: input.DepartmentId,
                },
            },
        };

        const response = await this.serviceService.create(data);
        return { Data: response, Success: true };
    }

    async updateService(user: UserParamsDto, input: UpdateServiceJsonDto) {
        if (!input.DepartmentId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR432),
                432,
            );
        }

        const whereUser: Prisma.DepartmentWhereInput = {
            Id: input.DepartmentId,
            CompanyUserId: {
                equals: user.Id,
            },
        };
        const companyDepartment = await this.departmentService.findMany({
            where: whereUser,
        });

        if (!companyDepartment || companyDepartment.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }

        const where: Prisma.ServicesWhereUniqueInput = {
            Id: input.Id,
        };
        const data: Prisma.ServicesUpdateInput = {
            Department: {
                connect: {
                    Id: input.DepartmentId,
                },
            },
            Price: input?.Price,
            Prim: input?.Prim,
            ServiceGender: input?.ServiceGender,
            ServiceName: input?.ServiceName,
            ServiceTimes: input?.ServiceTimes,
            ServiceType: input?.ServiceType,
            ServiceWorker: {},
        };

        const response = await this.serviceService.update({ data, where });
        return {
            Data: response,
            Success: true,
        };
    }

    async deleteService(user: UserParamsDto, input: DeleteServiceJsonDto) {
        if (!input.DepartmentId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR432),
                432,
            );
        }

        const whereUser: Prisma.DepartmentWhereInput = {
            Id: input.DepartmentId,
            CompanyUserId: {
                equals: user.Id,
            },
        };
        const companyDepartment = await this.departmentService.findMany({
            where: whereUser,
        });

        if (!companyDepartment || companyDepartment.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }

        const where: Prisma.ServicesWhereInput = {
            Id: input.ServiceId,
            ServiceWorker: {
                every: {
                    ServiceId: input.ServiceId,
                },
            },
        };

        await this.serviceService.deleteMany(where);

        return {
            Data: ResponseMessage.TR210,
            Success: true,
        };
    }

    async addworker(user: UserParamsDto, input: AddWorkerJsonDto) {
        const departmentData: Prisma.DepartmentWhereInput = {
            Id: input.DepartmentId,
            CompanyUserId: user.Id,
        };
        const department = await this.departmentService.findMany({
            where: departmentData,
        });

        if (!department || department.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }
        if (!input.FirstName || !input.LastName || !input.Phone) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR427),
                427,
            );
        }
        const exist = await this.workerService.findUnique({
            Email: input.Email,
        });

        if (exist) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR434),
                434,
            );
        }

        const worker = await this.workerService.findMany({
            where: {
                Email: input.Email,
            },
        });
        if (worker.length > 0) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR433),
                433,
            );
        }

        // Generate a public/private key pair
        const keys = this.keypairService.generateKey();

        // Encrypt the public and private keys
        const pubKey = this.keypairService.encryptData(
            this.generalCfg.publicKey,
            this.generalCfg.privateKey,
            keys.publicKey,
        );
        const privKey = this.keypairService.encryptData(
            this.generalCfg.publicKey,
            this.generalCfg.privateKey,
            keys.secretKey,
        );

        const data: Prisma.WorkerCreateInput = {
            FirstName: input.FirstName,
            LastName: input.LastName,
            Phone: input.Phone,
            Department: { connect: { Id: input.DepartmentId } },
            Email: input.Email,
            Password: await bcrypt.hash(input.Password, 10),
            PrivateKey: privKey,
            PublicKey: pubKey,
            Role: input.Roles,
            FirstPass: true,
            WorkTime: {
                createMany: {
                    data: input?.WorkTime,
                },
            },
            // Buralaer varsa eklenecek
            // ServiceWorker: {
            //     createMany: {
            //         data: input?.Services,
            //     },
            // },
        };

        await this.workerService.create(data);

        return {
            Data: ResponseMessage.TR205,
            Success: true,
        };
    }

    async updateworker(user: UserParamsDto, input: UpdateWorkerJsonDto) {
        const departmentData: Prisma.DepartmentWhereInput = {
            Id: input.DepartmentId,
            CompanyUserId: user.Id,
        };
        const department = await this.departmentService.findMany({
            where: departmentData,
        });

        if (!department || department.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }

        const where: Prisma.WorkerWhereUniqueInput = {
            Id: input.Id,
        };

        let data: Prisma.WorkerUpdateInput = {
            FirstName: input?.FirstName,
            LastName: input?.LastName,
            Phone: input?.Phone,
            Department: {
                connect: {
                    Id: input?.DepartmentId,
                },
            },
            Role: input.Roles,
        };
        if (input.Services) {
            let dataArray;
            for (const o in input.Services) {
                const auth = department[0].Services.find(
                    (item) => item.Id === input.Services[o].ServiceId,
                );

                if (!auth) {
                    throw new BadRequestException(
                        BadRequestExceptionType.BAD_REQUEST,
                        new Error(ResponseMessage.TR447),
                        447,
                    );
                }
            }

            await this.serviceWorkerService.deleteMany({
                where: {
                    WorkerId: input.Id,
                },
            });

            data = {
                ...data,
                ServiceWorker: {
                    createMany: {
                        data: input.Services,
                    },
                },
            };
        }

        const response = await this.workerService.update({ where, data });

        return {
            Data: ResponseMessage.TR208,
            Success: true,
            Worker: response,
        };
    }

    async deleteworker(user: UserParamsDto, input: WorkersGetJsonDto) {
        const whereWorker: Prisma.WorkerWhereInput = {
            Id: input.WorkerId,
            Department: {
                CompanyUserId: user.Id,
            },
        };
        const data = await this.workerService.findMany({ where: whereWorker });

        if (!data || data.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR430),
                430,
            );
        }
        const where: Prisma.WorkerWhereUniqueInput = {
            Id: input.WorkerId,
        };

        await this.workerService.delete(where);
        return {
            Data: ResponseMessage.TR209,
            Success: true,
        };
    }
}
