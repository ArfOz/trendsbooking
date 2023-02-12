import { Prisma } from '@prisma/client';
import { BadRequestExceptionType } from './../../../../../libs/shared/src/enums/exception.type';
import { BadRequestException } from './../../../../../libs/shared/src/exceptions/bad-request.exception';
import ResponseMessage from '@shared/enums/response-message.json';
import { AddDepartmentsJsonDto } from './dtos/departments.dto';
import { Injectable } from '@nestjs/common';
import { DepartmentService } from '@database';
import { UserParamsDto } from '../users/dtos';

@Injectable()
export class DepartmentsService {
    constructor(private readonly departmentService: DepartmentService) {}
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
        return {
            Success: true,
            Data: data,
        };
    }
}
