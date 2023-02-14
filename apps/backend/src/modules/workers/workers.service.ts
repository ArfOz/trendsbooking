import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

// Libs area
import ResponseMessage from '@shared/enums/response-message.json';
import { WorkerService } from '@database';
import { BadRequestException, BadRequestExceptionType } from '@shared';

// DTOs area
import { UserParamsDto } from '../users/dtos';
import { WorkersAddJsonDto, WorkersGetJsonDto } from './dtos/workers.dto';

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
    async addworker(user: UserParamsDto, input: WorkersAddJsonDto) {
        if (!input.FirstName || !input.LastName || !input.Phone) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR427),
                427,
            );
        }

        const response = await this.workerService.find({
            where: {
                DepartmentId: input.DepartmentId,
                Department: { CompanyUserId: user.Id },
            },
        });

        if (!response || response.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }

        const data: Prisma.WorkerCreateInput = {
            FirstName: input.FirstName,
            LastName: input.LastName,
            Phone: input.Phone,
            Department: { connect: { Id: input.DepartmentId } },
            WorkTime:{
                create:{
                    MorningStartAt:input.WorkTime.MorningStartAt ,
                    MorningEndAt:input.WorkTime.MorningEndAt,
                    ShiftStart:input.WorkTime.ShiftStart,
                    ShiftEnd:input.WorkTime.ShiftEnd,
                    NightStartAt:input.WorkTime.NightStartAt,
                    NightEndAt:input.WorkTime.NightEndAt
                }
            }
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
                428
            );
        }

        const response = await this.workerService.find({
            where: {
                Id:input.WorkerId,
                Department: { CompanyUserId: user.Id },
            },
        });

        if (!response || response.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
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
