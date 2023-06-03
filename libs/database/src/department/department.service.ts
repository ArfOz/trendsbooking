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

    async findUnique(where: Prisma.DepartmentWhereUniqueInput) {
        const departmentdata = await this.prisma.department.findUnique({
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
                        Id: true,
                        FirstName: true,
                        LastName: true,
                        Email: true,
                        ImageUrl: true,
                        ImageName: true,
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

        if (departmentdata && departmentdata.Workers) {
            for (let i = 0; i < departmentdata.Workers.length; i++) {
                departmentdata.Workers[i].Email =
                    this.keypairService.decryptWithAppKeys(
                        departmentdata.Workers[i].Email,
                    );
            }
        }
        return departmentdata;
    }

    async findfirst(where: Prisma.DepartmentWhereInput) {
        return this.prisma.department.findFirst({ where });
    }

    async findMany(params: {
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
                Workers: {
                    select: {
                        Id: true,
                        FirstName: true,
                        LastName: true,
                        WorkTime: true,
                        DepartmentId: true,
                        ServiceWorker: {
                            select: {
                                Services: true,
                            },
                        },
                        Randevu: true,
                    },
                },
                Sector: true,
                Country: true,
                City: true,
                District: true,
                Neighborhood: true,
                Services: true,
                WorkTime: true,
                DepartmentID: true,
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
