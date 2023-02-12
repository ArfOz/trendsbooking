import ResponseMessage from '@shared/enums/response-message.json';
import { WorkerService } from '@database';
import { Injectable } from '@nestjs/common';
import { UserParamsDto } from '../users/dtos';
import { WorkersAddJsonDto, WorkersGetJsonDto } from './dtos/workers.dto';
import { BadRequestException, BadRequestExceptionType } from '@shared';
import { Prisma } from '@prisma/client';

@Injectable()
export class WorkersService {
    constructor(private readonly workerService: WorkerService) {}

    async getDetails(user: UserParamsDto, workerId: number) {
        if (!workerId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR428),
                428,
            );
        }
        const data = await this.workerService.get({
            Id: workerId,
        });
        return {
            Success: true,
            Data: data,
        };
    }
    // To do her company kendine ait olan departmana ekleme yapacak bunun kontrolü de olacak.
    async addworker(user: UserParamsDto, input: WorkersAddJsonDto) {
        if (!input.FirstName || !input.LastName || !input.Phone) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR427),
                427,
            );
        }

        const response = await this.workerService.find({
            where: { DepartmentId: input.DepartmentId },
        });

        console.log("ressss", response)

        const data: Prisma.WorkerCreateInput = {
            FirstName: input.FirstName,
            LastName: input.LastName,
            Phone: input.Phone,
            Department: { connect: { Id: input.DepartmentId } },
        };

        await this.workerService.create(data);

        return {
            Data: ResponseMessage.TR205,
            Success: true,
        };
    }

    async deleteworker(user: UserParamsDto, input: WorkersGetJsonDto) {
        if (!input.WorkerId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR428),
                428,
            );
        }
        const data = await this.workerService.delete({
            Id: input.WorkerId,
        });
        return {
            Success: true,
            Data: data,
        };
    }
}
