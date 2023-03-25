import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

// Libs area
import ResponseMessage from '@shared/enums/response-message.json';
import { WorkerService } from '@database';
import { BadRequestException, BadRequestExceptionType } from '@shared';

// DTOs area
import { UserParamsDto } from '../users/dtos';
import {
    WorkersAddJsonDto,
    WorkersGetJsonDto,
    WorkersUpdateJsonDto,
} from './dtos/workers.dto';

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
        const data = await this.workerService.find({
            where: {
                Id: workerId,
                Department: {
                    CompanyUserId: user.Id,
                },
            },
        });

        if (!data || data.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR430),
                430,
            );
        }
        return {
            Success: true,
            Data: data,
        };
    }
    async addWorker(user: UserParamsDto, input: WorkersAddJsonDto) {
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
            Services: input.Services,
        };

        // await this.workerService.create(data);

        return {
            Data: ResponseMessage.TR205,
            Success: true,
        };
    }

    async deleteWorker(user: UserParamsDto, input: WorkersGetJsonDto) {
        if (!input.WorkerId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR428),
                428,
            );
        }

        const response = await this.workerService.find({
            where: {
                Id: input.WorkerId,
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

    async updateWorker(user: UserParamsDto, input: WorkersUpdateJsonDto) {
        if (!input.WorkerId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR428),
                428,
            );
        }

        const worker = await this.workerService.find({
            where: {
                Id: input.WorkerId,
                Department: {
                    CompanyUserId: user.Id,
                },
            },
        });

        if (!worker || worker.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR430),
                430,
            );
        }

        const where: Prisma.WorkerWhereUniqueInput = {
            Id: input.WorkerId,
        };
        const data: Prisma.WorkerUpdateInput = {
            FirstName: input.FirstName,
            LastName: input.LastName,
            Phone: input.Phone,
            Roles: input.Roles,
            Services: input.Services,
            WorkTime: {
                update: {
                    where: {
                        Id: worker[0].WorkTime[0].Id,
                    },
                    data: input.WorkTime,
                },
            },
        };
        const updatedData = await this.workerService.update({ where, data });

        return {
            Success: true,
            Data: updatedData,
        };
    }
}
