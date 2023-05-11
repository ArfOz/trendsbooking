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
            select: {
                Id: true,
                Country: true,
                City: true,
                District: true,
                Neighborhood: true,
                Salon: true,
                Sector: true,
                Services: true,
                ServiceType: true,
                WorkTime: true,
                Workers: {
                    select: {
                        FirstName: true,
                        LastName: true,
                        ServiceWorker: {
                            select: {
                                Services: {
                                    select: {
                                        ServiceName: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
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
        const response = await this.prisma.department.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select: {
                Id: true,
                Salon: true,
                ServiceType: true,
                CompanyUserId: true,
                // Workers: {
                //     select: {
                //         FirstName: true,
                //         LastName: true,

                //         Id: true,
                //         WorkTime: true,
                //         DepartmentId: true,
                //         ServiceWorker: {
                //             select: {
                //                 Services: true,
                //             },
                //         },
                //     },
                // },
                Sector: true,
                Country: true,
                City: true,
                District: true,
                Neighborhood: true,
                Services: true,
                WorkTime: true,
            },
        });

        return response;
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
