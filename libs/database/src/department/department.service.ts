// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
    BadRequestExceptionType,
    BadRequestException,
    KeypairService,
} from '@shared';
import { Injectable } from '@nestjs/common';
import { CompanyUser, Prisma, Department } from '@prisma/client';
import { isString } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentService {
    constructor(
        private prisma: PrismaService,
        private readonly keypairService: KeypairService,
    ) {}

    async get(where: Prisma.DepartmentWhereUniqueInput) {
        return this.prisma.department.findUnique({
            where,
        });
    }

    async find(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DepartmentWhereUniqueInput;
        where?: Prisma.DepartmentWhereInput;
        orderBy?: Prisma.DepartmentOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.department.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select: {
                Salon: true,
                ServiceType: true,
                Workers: {
                    select: {
                        FirstName: true,
                        LastName: true,
                        Phone: true,
                        Id: true,
                        WorkTime: true,
                        Services: true,
                        DepartmentId: true,
                    },
                },
                Id: true,
            },
        });
    }

    async create(data: Prisma.DepartmentCreateInput): Promise<Department> {
        return this.prisma.department.create({ data });
    }

    async update(params: {
        where: Prisma.DepartmentWhereUniqueInput;
        data: Prisma.DepartmentUpdateInput;
    }): Promise<Department> {
        const { where, data } = params;
        return this.prisma.department.update({
            data,
            where,
        });
    }

    async delete(
        where: Prisma.DepartmentWhereUniqueInput,
    ): Promise<Department> {
        return this.prisma.department.delete({
            where,
        });
    }
}
