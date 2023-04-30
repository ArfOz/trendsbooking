// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
    BadRequestExceptionType,
    BadRequestException,
    KeypairService,
} from '@shared';
import { Injectable } from '@nestjs/common';
import { CompanyUser, Prisma } from '@prisma/client';
import { isString } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompanyUserService {
    constructor(
        private prisma: PrismaService,
        private readonly keypairService: KeypairService,
    ) {}

    async findUnique(where: Prisma.CompanyUserWhereUniqueInput) {
        try {
            if (where && where.Email) {
                where.Email = this.keypairService.encryptWithAppKeys(
                    where.Email,
                );
            }
            const user = await this.prisma.companyUser.findUnique({
                where,
                select: {
                    CreatedAt: true,
                    Departments: {
                        select: {
                            Salon: true,
                            ServiceType: true,
                            Id: true,
                        },
                    },
                    Email: true,
                    FirstName: true,
                    Id: true,
                    IsEmailVerified: true,
                    LastName: true,
                    Phone: true,
                    Role: true,
                    Username: true,
                    TCKN: true,
                    Password: true,
                },
            });

            if (user && user.Email) {
                user.Email = this.keypairService.decryptWithAppKeys(user.Email);
            }

            if (user && user.Phone) {
                user.Phone = this.keypairService.decryptWithAppKeys(user.Phone);
            }

            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async find(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.CompanyUserOrderByWithAggregationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;

        const companyUsers = await this.prisma.companyUser.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select: {
                CbFirst: true,

                CreatedAt: true,
                Email: true,
                FirstName: true,
                IsActive: true,
                IsEmailVerified: true,
                LastName: true,
                Phone: true,
                TCKN: true,
                UpdatedAt: true,
                Username: true,
            },
        });

        for (let i = 0; i <= companyUsers.length; i++) {
            if (
                companyUsers[i] &&
                companyUsers[i].Email &&
                companyUsers[i].Phone
            ) {
                companyUsers[i].Email = this.keypairService.decryptWithAppKeys(
                    companyUsers[i].Email,
                );
                companyUsers[i].Phone = this.keypairService.decryptWithAppKeys(
                    companyUsers[i].Phone,
                );
            }
        }

        // if (companyUsers && companyUsers.Phone) {
        //     user.Phone = this.keypairService.decryptWithAppKeys(companyUsers.Phone);
        // }
        return companyUsers;
    }

    async findFirst(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.CompanyUserOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;

        const searchWhere = where;

        let encryptedEmail;
        let encryptedPhone;

        if (where.Email) {
            encryptedEmail = this.keypairService.encryptWithAppKeys(
                where.Email,
            );
            searchWhere.Email = encryptedEmail;
        }

        if (where.Phone) {
            encryptedPhone = this.keypairService.encryptWithAppKeys(
                where.Phone,
            );
            searchWhere.Phone = encryptedPhone;
        }

        const user = await this.prisma.companyUser.findFirst({
            skip,
            take,
            cursor,
            orderBy,
            where: searchWhere,
        });

        if (user && user.Email) {
            user.Email = this.keypairService.decryptWithAppKeys(user.Email);
        }

        if (user && user.Phone) {
            user.Phone = this.keypairService.decryptWithAppKeys(user.Phone);
        }

        return user;
    }

    async create(data: Prisma.CompanyUserCreateInput) {
        try {
            let encryptedEmail;
            let encryptedPhone;

            if (data.Email)
                encryptedEmail = this.keypairService.encryptWithAppKeys(
                    data.Email,
                );
            if (data.Phone)
                encryptedPhone = this.keypairService.encryptWithAppKeys(
                    data.Phone,
                );

            const createdUser = await this.prisma.companyUser.create({
                data: { ...data, Email: encryptedEmail, Phone: encryptedPhone },
                select: {
                    Email: true,
                    Phone: true,
                    FirstName: true,
                    LastName: true,
                    Username: true,
                    Id: true,
                    Role: true,
                },
            });

            if (data.Email) createdUser.Email = data.Email;
            if (data.Phone) createdUser.Phone = data.Phone;

            return createdUser;
        } catch (error) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(error),
                400,
            );
        }
    }

    async update(params: {
        where: Prisma.CompanyUserWhereUniqueInput;
        data: Prisma.CompanyUserUpdateInput;
    }): Promise<CompanyUser> {
        const { where, data } = params;

        let encryptedDataEmail;
        let encryptedDataPhone;

        let newData: Prisma.UserUpdateInput = { ...data };

        where.Email = this.keypairService.encryptWithAppKeys(where.Email);
        if (data.Email) {
            encryptedDataEmail = this.keypairService.encryptWithAppKeys(
                isString(data.Email) ? data.Email : data?.Email?.set,
            );
            newData = {
                ...data,
                Email: encryptedDataEmail,
            };
            console.log('encrypt', encryptedDataEmail);
            data.Email = encryptedDataEmail;
        }

        if (data.Phone) {
            encryptedDataPhone = this.keypairService.encryptWithAppKeys(
                isString(data.Phone) ? data?.Phone : data?.Phone?.set,
            );

            newData = {
                ...data,
                Phone: encryptedDataPhone,
            };
        }

        const updatedUser = await this.prisma.companyUser.update({
            data: {
                ...data,
                Email: encryptedDataEmail,
                Phone: encryptedDataPhone,
            },
            where: {
                Email: where.Email,
            },
        });

        if (updatedUser.Email)
            updatedUser.Email = this.keypairService.decryptWithAppKeys(
                updatedUser.Email,
            );

        if (updatedUser.Phone)
            updatedUser.Phone = this.keypairService.decryptWithAppKeys(
                updatedUser.Phone,
            );

        return updatedUser;
    }

    async delete(
        where: Prisma.CompanyUserWhereUniqueInput,
    ): Promise<CompanyUser> {
        return this.prisma.companyUser.delete({
            where,
        });
    }
}
