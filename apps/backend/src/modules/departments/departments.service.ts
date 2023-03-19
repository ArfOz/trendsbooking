import { Injectable } from '@nestjs/common';
import { Prisma, DepartmentPhotos } from '@prisma/client';
import sharp from 'sharp';

// Libs area
import ResponseMessage from '@shared/enums/response-message.json';
import { BadRequestExceptionType, BadRequestException, ImageServerService } from '@shared';
import { DepartmentService, DepartmentPhotosService } from '@database';

// DTO area
import { UserParamsDto } from '../users/dtos';
import { AddDepartmentsJsonDto, UpdateDepartmentsJsonDto } from './dtos/departments.dto';

@Injectable()
export class DepartmentsService {
    constructor(
        private readonly departmentService: DepartmentService,
        private readonly departmentPhotosService: DepartmentPhotosService,
        private readonly imageServer: ImageServerService,
    ) {}
    async add(user: UserParamsDto, input: AddDepartmentsJsonDto) {
        if (!input.Salon || !input.ServiceType || !input.Workers) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR426),
                426,
            );
        }

        const data: Prisma.DepartmentCreateInput = {
            Workers: {
                create: {
                    FirstName: input.Workers.FirstName,
                    LastName: input.Workers.LastName,
                    Phone: input.Workers.Phone,
                    WorkTime: {
                        create: {
                            MorningStartAt: input.WorkTime.MorningStartAt,
                            MorningEndAt: input.WorkTime.MorningEndAt,
                            ShiftStart: input.WorkTime.ShiftStart,
                            ShiftEnd: input.WorkTime.ShiftEnd,
                            NightStartAt: input.WorkTime.NightStartAt,
                            NightEndAt: input.WorkTime.NightEndAt,
                        },
                    },
                },
            },
            Salon: input.Salon,
            ServiceType: input.ServiceType,
            CompanyUser: { connect: { Id: user.Id } },
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

    async updateDepartments(user: UserParamsDto,input: UpdateDepartmentsJsonDto){

        const data : Prisma.DepartmentUpdateInput={
            CompanyUser: {
                connect:{Id:user.Id}
            },
            ServiceTimes:input.ServiceTimes

        }

        const where : Prisma.DepartmentWhereUniqueInput={
            Id:user.Id
        }


        await this.departmentService.update({data, where})

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
            .resize(
                1200,
                630,
                {
                    fit: sharp.fit.inside,
                    withoutEnlargement: true,
                },
            )
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
}
