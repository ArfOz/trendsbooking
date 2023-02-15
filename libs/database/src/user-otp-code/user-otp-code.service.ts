import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, UserOTPCode } from '@prisma/client';

@Injectable()
export class UserOtpCodeService {
    constructor(private prisma: PrismaService) {}

    async get(
        where: Prisma.UserOTPCodeWhereUniqueInput,
    ): Promise<UserOTPCode | undefined> {
        return this.prisma.userOTPCode.findUnique({
            where,
        });
    }

    async find(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserOTPCodeWhereUniqueInput;
        where?: Prisma.UserOTPCodeWhereInput;
        orderBy?: Prisma.UserOTPCodeOrderByWithRelationInput;
    }): Promise<UserOTPCode[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.userOTPCode.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async create(data: Prisma.UserOTPCodeCreateInput): Promise<UserOTPCode> {
        return this.prisma.userOTPCode.create({ data });
    }

    async update(params: {
        where: Prisma.UserOTPCodeWhereUniqueInput;
        data: Prisma.UserOTPCodeUpdateInput;
    }): Promise<UserOTPCode> {
        const { where, data } = params;
        return this.prisma.userOTPCode.update({
            data,
            where,
        });
    }

    async delete(
        where: Prisma.UserOTPCodeWhereUniqueInput,
    ): Promise<UserOTPCode> {
        return this.prisma.userOTPCode.delete({
            where,
        });
    }
}
