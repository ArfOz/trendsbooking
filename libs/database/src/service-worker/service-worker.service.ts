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

    async find(params: {
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
                // ServiceType: true,
                // Workers: {
                //     select: {
                //         FirstName: true,
                //         LastName: true,
                //         Phone: true,
                //         Id: true,
                //         WorkTime: true,
                //     },
                // },
                Id: true,
            },
        });
    }

    async create(data: Prisma.ServiceWorkerCreateInput) {
        return this.prisma.serviceWorker.create({ data });
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

    async delete(where: Prisma.ServiceWorkerWhereUniqueInput) {
        return this.prisma.services.delete({
            where,
        });
    }
}
