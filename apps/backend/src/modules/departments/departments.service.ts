import { Prisma } from '@prisma/client';
import { BadRequestExceptionType } from './../../../../../libs/shared/src/enums/exception.type';
import { BadRequestException } from './../../../../../libs/shared/src/exceptions/bad-request.exception';
import ResponseMessage from '@shared/enums/response-message.json';
import { AddDepartmentsJsonDto } from './dtos/departments.dto';
import { Injectable } from '@nestjs/common';
import { DepartmentService } from '@database';

@Injectable()
export class DepartmentsService {

    constructor(
        private readonly departmentService: DepartmentService,
    ){

    }
    async add(user, input: AddDepartmentsJsonDto) {
        console.log(user, input);

        if (!input.Salon || !input.ServiceType || !input.Workers) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR426),
                426,
            );
        }

        const data :Prisma.DepartmentCreateInput= {
            Workers: input.Workers?,
            Salon: input.Salon,
            // ServiceType?: DepartmentCreateServiceTypeInput | Enumerable<ServiceType>
            // CompanyUser?: CompanyUserCreateNestedOneWithoutDepartmentsInput
        }

        await this.departmentService.create({

        })


        return {
            Data: ResponseMessage.TR204,
            Success: true,
        };
    }
}
