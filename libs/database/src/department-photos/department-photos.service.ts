// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
    BadRequestExceptionType,
    BadRequestException,
    KeypairService,
} from '@shared';
import { Injectable } from '@nestjs/common';
import { CompanyUser, Prisma, DepartmentPhotos } from '@prisma/client';
import { isString } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentPhotosService {
    constructor(
        private prisma: PrismaService,
        private readonly keypairService: KeypairService,
    ) {}

    async get(where: Prisma.DepartmentPhotosWhereUniqueInput) {
        return this.prisma.departmentPhotos.findUnique({
            where,
        });
    }

    async find(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DepartmentPhotosWhereUniqueInput;
        where?: Prisma.DepartmentPhotosWhereInput;
        orderBy?: Prisma.DepartmentPhotosOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.departmentPhotos.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select: {
                CreatedAt: true,
                ImageName: true,
                ImageServerName: true,
                Department: {
                    select: {
                        DepartmentID: true,
                        Salon: true,
                    },
                },
            },
        });
    }

    async create(
        data: Prisma.DepartmentPhotosCreateInput,
    ): Promise<DepartmentPhotos> {
        return this.prisma.departmentPhotos.create({ data });
    }

    async update(params: {
        where: Prisma.DepartmentPhotosWhereUniqueInput;
        data: Prisma.DepartmentPhotosUpdateInput;
    }): Promise<DepartmentPhotos> {
        const { where, data } = params;
        return this.prisma.departmentPhotos.update({
            data,
            where,
        });
    }

    async delete(
        where: Prisma.DepartmentPhotosWhereUniqueInput,
    ): Promise<DepartmentPhotos> {
        return this.prisma.departmentPhotos.delete({
            where,
        });
    }
}
