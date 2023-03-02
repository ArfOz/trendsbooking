import { ImageServerService } from './../../../../../libs/shared/src/modules/image-server/image-server.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

// Libs area
import ResponseMessage from '@shared/enums/response-message.json';
import { BadRequestExceptionType, BadRequestException } from '@shared';
import { DepartmentService, DepartmentPhotosService  } from '@database';

// DTO area
import { UserParamsDto } from '../users/dtos';
import { AddDepartmentsJsonDto } from './dtos/departments.dto';

@Injectable()
export class DepartmentsService {
    constructor(
        private readonly departmentService: DepartmentService,
        private readonly departmentPhotosService: DepartmentPhotosService,
        private readonly imageServer: ImageServerService
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

        if (!data || data.length<1){
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

    async addphotos(user:UserParamsDto, departmentId : number,file: Express.Multer.File){

        const authorizator = await this.departmentService.find(
            {
                where:{
                    CompanyUserId:{},
                    AND:{
                        Id:{
                            equals:departmentId
                        }
                    }
                }
            }
        )

        // const arif = Buffer.from(file.buffer).toString('base64')
        // console.log("fileeeeeeeeeeeeeeee", file)

        await this.imageServer.addPhoto(file)
        
        // console.log("asdasds", file)

        if (!authorizator|| authorizator.length<1){
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }

        // const data :Prisma.DepartmentPhotosCreateInput={
        //     ImageBuffer:Buffer.from(file.buffer).toString('base64'),
        //     MimeType:file.mimetype,
        //     Department:{
        //         connect:{
        //             Id:departmentId,
        //         }
        //     }
        // }

        // await this.httpService.get(
            
        // )


        console.log("data")
        // const response = await this.departmentPhotosService.create(data)
        return {
            data:"asdasd",
            Success:true
        }
    }
}
