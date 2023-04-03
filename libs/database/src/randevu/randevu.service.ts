import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import { Prisma, Randevu } from '@prisma/client';

@Injectable()
export class RandevuService {
    constructor(private prisma: PrismaService) {}

    async get(where: Prisma.RandevuWhereUniqueInput) {
        return this.prisma.randevu.findUnique({
            where,
        });
    }

    async find(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.RandevuWhereUniqueInput;
        where?: Prisma.RandevuWhereInput;
        orderBy?: Prisma.RandevuOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.randevu.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async create(data: Prisma.RandevuCreateInput): Promise<Randevu> {
        return this.prisma.randevu.create({ data });
    }

    async update(params: {
        where: Prisma.RandevuWhereUniqueInput;
        data: Prisma.RandevuUpdateInput;
    }): Promise<Randevu> {
        const { where, data } = params;
        return this.prisma.randevu.update({
            data,
            where,
        });
    }

    async delete(where: Prisma.RandevuWhereUniqueInput): Promise<Randevu> {
        return this.prisma.randevu.delete({
            where,
        });
    }
}
