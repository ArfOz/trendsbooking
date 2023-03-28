import { Injectable } from '@nestjs/common';
import { Prisma, DepartmentPhotos } from '@prisma/client';
import sharp from 'sharp';
import { generate } from 'generate-password';

// Libs area
import ResponseMessage from '@shared/enums/response-message.json';
import {
    BadRequestExceptionType,
    BadRequestException,
    ImageServerService,
} from '@shared';
import {
    DepartmentService,
    DepartmentPhotosService,
    WorkerService,
    ServicesService,
    ServiceWorkerService,
} from '@database';

// DTO area
import { UserParamsDto } from '../users/dtos';
import {
    AddDepartmentsJsonDto,
    AddServiceJsonDto,
    AddWorkerJsonDto,
    UpdateDepartmentsJsonDto,
    UpdateWorkerJsonDto,
} from './dtos/departments.dto';
import { WorkersGetJsonDto } from '../workers/dtos/workers.dto';

@Injectable()
export class DepartmentsService {
    constructor(
        private readonly departmentService: DepartmentService,
        private readonly departmentPhotosService: DepartmentPhotosService,
        private readonly imageServer: ImageServerService,
        private readonly workerService: WorkerService,
        private readonly serviceService: ServicesService,
        private readonly serviceWorkerService: ServiceWorkerService,
    ) {}
    async add(user: UserParamsDto, input: AddDepartmentsJsonDto) {
        if (!input.Salon || !input.ServiceType) {
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
            Salon: input.Salon,
            ServiceType: input.ServiceType,
            CompanyUser: { connect: { Id: user.Id } },
            DepartmentID: departmentId,
        };

        await this.departmentService.create(data);

        return {
            Data: ResponseMessage.TR204,
            Success: true,
        };
    }

    async getdetails(user: UserParamsDto, DepartmentId?: number) {
        const data = await this.departmentService.find({
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
        const data: Prisma.DepartmentUpdateInput = {
            CompanyUser: {
                connect: { Id: user.Id },
            },
        };

        const where: Prisma.DepartmentWhereUniqueInput = {
            Id: user.Id,
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
        const authorizator = await this.departmentService.find({
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
        const data: Prisma.ServicesCreateInput = {
            Price: input.Price,
            Prim: input.Prim,
            ServiceGender: input.ServiceGender,
            ServiceName: input.ServiceName,
            ServiceTimes: input.ServiceTimes,
            ServiceType: input.ServiceType,
        };

        const response = await this.serviceService.create(data);
        return response;
    }

    async addworker(user: UserParamsDto, input: AddWorkerJsonDto) {
        if (!input.FirstName || !input.LastName || !input.Phone) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR427),
                427,
            );
        }

        const data: Prisma.WorkerCreateInput = {
            FirstName: input.FirstName,
            LastName: input.LastName,
            Phone: input.Phone,
            Department: { connect: { Id: input.DepartmentId } },
            WorkTime: {
                create: {
                    MorningStartAt: input?.WorkTime?.MorningStartAt || '',
                    MorningEndAt: input?.WorkTime?.MorningEndAt || '',
                    ShiftStart: input?.WorkTime?.ShiftStart || '',
                    ShiftEnd: input?.WorkTime?.ShiftEnd || '',
                    NightStartAt: input?.WorkTime?.NightStartAt || '',
                    NightEndAt: input?.WorkTime?.NightEndAt || '',
                },
            },
            ServiceWorker: {
                createMany: {
                    data: input?.Services,
                },
            },
        };

        await this.workerService.create(data);

        return {
            Data: ResponseMessage.TR205,
            Success: true,
        };
    }

    async updateworker(user: UserParamsDto, input: UpdateWorkerJsonDto) {
        console.log('burası');
        const where: Prisma.WorkerWhereUniqueInput = {
            Id: input.WorkerId,
        };

        // Burada service worker ile serviceworkertablosundan id alınıp update e eklenecek.

        const data: Prisma.WorkerUpdateInput = {
            FirstName: input?.FirstName,
            LastName: input?.LastName,
            Phone: input?.Phone,
            Department: {
                connect: {
                    Id: input?.DepartmentId,
                },
            },
            Roles: input.Roles,
        };

        let response = await this.workerService.update({ where, data });

        await this.serviceWorkerService.deleteMany({
            where: {
                WorkerId: input.WorkerId,
            },
        });

        if (input.Services) {
            response = await this.workerService.update({
                where: {
                    Id: input.WorkerId,
                },
                data: {
                    ServiceWorker: {
                        createMany: {
                            data: input.Services,
                        },
                    },
                },
            });
        }

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
        const data = await this.workerService.find({ where: whereWorker });

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
