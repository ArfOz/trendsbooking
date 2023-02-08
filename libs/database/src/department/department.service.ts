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

    async get(
        where: Prisma.DepartmentWhereUniqueInput,
    ){
        return this.prisma.userOTPCode.findUnique({
            where,
        });
    }
}
