// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
    BadRequestExceptionType,
    BadRequestException,
    KeypairService,
} from '@shared';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { isString } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private readonly keypairService: KeypairService,
    ) {}

    async get(where: Prisma.UserWhereUniqueInput) {
        try {
            const user = await this.prisma.user.findUnique({
                where,
                select: {
                    Id: true,
                    Email: true,
                    FirstName: true,
                    LastName: true,
                    Username: true,
                    BirthDate: true,
                    Phone: true,
                    Country: true,
                    Gender: true,
                },
            });

            if (user && user.Email) {
                user.Email = this.keypairService.decryptWithAppKeys(user.Email);
            }

            if (user && user.Phone) {
                user.Phone = this.keypairService.decryptWithAppKeys(user.Phone);
            }

            delete user.Id;
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    // async find(params: {
    //     skip?: number;
    //     take?: number;
    //     cursor?: Prisma.UserWhereUniqueInput;
    //     where?: Prisma.UserWhereInput;
    //     orderBy?: Prisma.UserOrderByWithRelationAndSearchRelevanceInput;
    // }): Promise<User[]> {
    //     const { skip, take, cursor, where, orderBy } = params;
    //     return this.prisma.user.findMany({
    //         skip,
    //         take,
    //         cursor,
    //         where,
    //         orderBy,
    //     });
    // }

    // async findFirst(params: {
    //     skip?: number;
    //     take?: number;
    //     cursor?: Prisma.UserWhereUniqueInput;
    //     where?: Prisma.UserWhereInput;
    //     orderBy?: Prisma.UserOrderByWithRelationAndSearchRelevanceInput;
    // }) {
    //     const { skip, take, cursor, where, orderBy } = params;

    //     const searchWhere = where;

    //     let encryptedEmail;
    //     let encryptedPhone;

    //     if (where.Email) {
    //         encryptedEmail = this.keypairService.encryptWithAppKeys(
    //             where.Email,
    //         );
    //         searchWhere.Email = encryptedEmail;
    //     }

    //     if (where.Phone) {
    //         encryptedPhone = this.keypairService.encryptWithAppKeys(
    //             where.Phone,
    //         );
    //         searchWhere.Phone = encryptedPhone;
    //     }

    //     const user = await this.prisma.user.findFirst({
    //         skip,
    //         take,
    //         cursor,
    //         orderBy,
    //         where: searchWhere,
    //     });

    //     if (user && user.Email) {
    //         user.Email = this.keypairService.decryptWithAppKeys(user.Email);
    //     }

    //     if (user && user.Phone) {
    //         user.Phone = this.keypairService.decryptWithAppKeys(user.Phone);
    //     }

    //     return user;
    // }

    async create(data: Prisma.UserCreateInput) {
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

            const createdUser = await this.prisma.user.create({
                data: { ...data, Email: encryptedEmail, Phone: encryptedPhone },
                select: {
                    BirthDate: true,
                    Email: true,
                    Phone: true,
                    Country: true,
                    FirstName: true,
                    LastName: true,
                    Username: true,
                    Gender: true,
                    Id: true,
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
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        try {
            const { where, data } = params;

            let encryptedDataEmail;
            let encryptedDataPhone;

            let newData: Prisma.UserUpdateInput = { ...data };
            if (where.Email) {
                encryptedDataEmail = this.keypairService.encryptWithAppKeys(
                    isString(data.Email) ? data.Email : data.Email.set,
                );
                newData = {
                    ...data,
                    Email: encryptedDataEmail,
                };
                console.log('encrypt', encryptedDataEmail);
                where.Email = encryptedDataEmail;
            }

            if (data.Phone) {
                encryptedDataPhone = this.keypairService.encryptWithAppKeys(
                    isString(data.Phone) ? data.Phone : data.Phone.set,
                );

                newData = {
                    ...data,
                    Phone: encryptedDataPhone,
                };
            }
            console.log(newData);

            const updatedUser = await this.prisma.user.update({
                data: {
                    ...newData,
                },
                where: {
                    Email: where.Email,
                },
            });

            // if (updatedUser.Email)
            //     updatedUser.Email = this.keypairService.decryptWithAppKeys(
            //         updatedUser.Email,
            //     );

            // if (updatedUser.Phone)
            //     updatedUser.Phone = this.keypairService.decryptWithAppKeys(
            //         updatedUser.Phone,
            //     );

            return updatedUser;
        } catch (error) {
            console.log('err', error);
        }
    }

    async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        });
    }

    async findFirst(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
    }) {
        const { skip, take, cursor, where } = params;

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

        const user = await this.prisma.user.findFirst({
            skip,
            take,
            cursor,
            where: searchWhere,
            select: {
                Id: true,
                BirthDate: true,
                Country: true,
                Email: true,
                FirstName: true,
                IsEmailVerified: true,
                Gender: true,
                LastName: true,
                Username: true,
                Password: true,
                Phone: true,
                Role: true,
            },
        });

        if (user && user.Email) {
            user.Email = this.keypairService.decryptWithAppKeys(user.Email);
        }

        if (user && user.Phone) {
            user.Phone = this.keypairService.decryptWithAppKeys(user.Phone);
        }

        return user;
    }
}
