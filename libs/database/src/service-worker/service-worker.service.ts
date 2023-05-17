import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { KeypairService } from '@shared';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServiceWorkerService {
    constructor(private prisma: PrismaService) {}

    async get(where: Prisma.ServiceWorkerWhereUniqueInput) {
        return this.prisma.serviceWorker.findUnique({
            where,
        });
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ServiceWorkerWhereUniqueInput;
        where?: Prisma.ServiceWorkerWhereInput;
        orderBy?: Prisma.ServiceWorkerOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.serviceWorker.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select: {
                Services: {
                    select: {
                        Id: true,
                        ServiceName: true,
                    },
                },
                Worker: {
                    select: {
                        FirstName: true,
                        LastName: true,
                        Phone: true,
                        Id: true,
                        WorkTime: true,
                    },
                },
                Id: true,
            },
        });
    }

    async create(data: Prisma.ServiceWorkerCreateInput) {
        return this.prisma.serviceWorker.create({ data });
    }

    async createMany(data: Prisma.ServiceWorkerCreateManyInput) {
        return this.prisma.serviceWorker.createMany({ data });
    }

    async update(params: {
        where: Prisma.ServiceWorkerWhereUniqueInput;
        data: Prisma.ServiceWorkerUpdateInput;
    }) {
        const { where, data } = params;
        return this.prisma.serviceWorker.update({
            data,
            where,
        });
    }

    async deleteMany(where: Prisma.ServiceWorkerDeleteManyArgs) {
        return this.prisma.serviceWorker.deleteMany(where);
    }

    // async updateMany(
    //     data: Prisma.ServiceWorkerUncheckedUpdateManyInput,
    //     where?: Prisma.ServiceWorkerWhereInput,
    // ) {
    //     return this.prisma.serviceWorker.upsert({ data, where });
    // }
}
