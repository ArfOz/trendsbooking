import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, UserToken } from '@prisma/client';

@Injectable()
export class UserTokenService {
    constructor(private prisma: PrismaService) {}

    async get(
        where: Prisma.UserTokenWhereUniqueInput,
    ): Promise<UserToken | undefined> {
        return this.prisma.userToken.findUnique({
            where,
        });
    }

    async find(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserTokenWhereUniqueInput;
        where?: Prisma.UserTokenWhereInput;
        orderBy?: Prisma.UserTokenOrderByWithRelationInput;
    }): Promise<UserToken[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.userToken.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async create(data: Prisma.UserTokenCreateInput): Promise<UserToken> {
        return this.prisma.userToken.create({ data });
    }

    async update(params: {
        where: Prisma.UserTokenWhereUniqueInput;
        data: Prisma.UserTokenUpdateInput;
    }): Promise<UserToken> {
        const { where, data } = params;
        return this.prisma.userToken.update({
            data,
            where,
        });
    }

    async delete(where: Prisma.UserTokenWhereUniqueInput): Promise<UserToken> {
        return this.prisma.userToken.delete({
            where,
        });
    }
}
