import { Injectable } from '@nestjs/common';
import { Prisma, Services } from '@prisma/client';
import { KeypairService } from '@shared';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServicesService {
    constructor(
        private prisma: PrismaService,
        private readonly keypairService: KeypairService,
    ) {}

    async get(where: Prisma.ServicesWhereUniqueInput) {
        return this.prisma.services.findUnique({
            where,
        });
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ServicesWhereUniqueInput;
        where?: Prisma.ServicesWhereInput;
        orderBy?: Prisma.ServicesOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.services.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select: {
                ServiceType: true,
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

    fin;

    async create(data: Prisma.ServicesCreateInput): Promise<Services> {
        return this.prisma.services.create({ data });
    }

    async update(params: {
        where: Prisma.ServicesWhereUniqueInput;
        data: Prisma.ServicesUpdateInput;
    }): Promise<Services> {
        const { where, data } = params;
        return this.prisma.services.update({
            data,
            where,
        });
    }

    async updateMany(params: {
        where: Prisma.ServicesWhereInput;
        data: Prisma.ServicesUpdateManyMutationInput;
    }) {
        const { where, data } = params;
        return this.prisma.services.updateMany({
            data,
            where,
        });
    }

    async delete(where: Prisma.ServicesWhereUniqueInput): Promise<Services> {
        return this.prisma.services.delete({
            where,
        });
    }

    async deleteMany(where: Prisma.ServicesWhereInput) {
        return this.prisma.services.deleteMany({
            where,
        });
    }
}
