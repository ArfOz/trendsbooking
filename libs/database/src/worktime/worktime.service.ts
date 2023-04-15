import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import { Prisma, WorkTime } from '@prisma/client';
import { BadRequestException, BadRequestExceptionType } from '@shared';

@Injectable()
export class WorkTimeService {
    constructor(private prisma: PrismaService) {}

    async findUnique(where: Prisma.WorkTimeWhereUniqueInput) {
        try {
            const user = await this.prisma.workTime.findUnique({
                where,
                // select: {
                //     Id: true,
                //     FirstName: true,
                //     LastName: true,
                //     Email: true,
                //     Phone: true,
                //     Role: true,
                //     Password: true,
                // },
            });

            return user;
        } catch (error) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(error),
                400,
            );
        }
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.WorkTimeWhereUniqueInput;
        where?: Prisma.WorkTimeWhereInput;
        orderBy?: Prisma.WorkTimeOrderByWithAggregationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;

        const worktimes = await this.prisma.workTime.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            // select: {
            //     Id: true,
            //     FirstName: true,
            //     LastName: true,
            //     Phone: true,
            //     Email: true,
            //     DepartmentId: true,
            //     Role: true,
            //     WorkTime: true,
            // },
        });

        return worktimes;
    }

    async findFirst(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.WorkTimeWhereUniqueInput;
        where?: Prisma.WorkTimeWhereInput;
        orderBy?: Prisma.WorkTimeOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;

        const searchWhere = where;

        let encryptedEmail;

        const workTime = await this.prisma.workTime.findFirst({
            skip,
            take,
            cursor,
            orderBy,
            where: searchWhere,
            // select: {
            //     Id: true,
            //     DepartmentId: true,
            //     Email: true,
            //     FirstName: true,
            //     LastName: true,
            //     Phone: true,
            //     Role: true,
            //     WorkTime: {
            //         select: {
            //             Id: true,
            //             Days: true,
            //             MorningStartAt: true,
            //             MorningEndAt: true,
            //             ShiftStart: true,
            //             ShiftEnd: true,
            //             NightStartAt: true,
            //             NightEndAt: true,
            //         },
            //     },
            // },
        });

        return workTime;
    }

    async create(data: Prisma.WorkTimeCreateInput) {
        try {
            const createdWorkTime = await this.prisma.workTime.create({
                data,
            });

            return createdWorkTime;
        } catch (error) {
            console.log('errr', error);
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(error),
                400,
            );
        }
    }

    async createMany(worktime: Prisma.WorkTimeCreateManyInput) {
        try {
            const createdWorkTime = await this.prisma.workTime.createMany({
                data: worktime,
            });

            return createdWorkTime;
        } catch (error) {
            console.log('errr', error);
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(error),
                400,
            );
        }
    }

    async update(params: {
        where: Prisma.WorkTimeWhereUniqueInput;
        data: Prisma.WorkTimeUpdateInput;
    }): Promise<WorkTime> {
        const { where, data } = params;

        const updatedWorkTime = await this.prisma.workTime.update({
            data: {
                ...data,
            },
            where: {
                ...where,
            },
        });

        return updatedWorkTime;
    }

    async updateMany(params: {
        data: Prisma.WorkTimeUpdateManyMutationInput;
        where: Prisma.WorkTimeWhereInput;
    }) {
        const { where, data } = params;
        const response = await this.prisma.workTime.updateMany({ data, where });

        return response;
    }

    async delete(where: Prisma.WorkTimeWhereUniqueInput) {
        const response = await this.prisma.workTime.delete({
            where,
        });
        return response;
    }
}
