import { Prisma, Worker } from '@prisma/client';
import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import {
    BadRequestException,
    BadRequestExceptionType,
    KeypairService,
} from '@shared';

@Injectable()
export class WorkerService {
    constructor(
        private prisma: PrismaService,
        private readonly keypairService: KeypairService,
    ) {}

    async findUnique(where: Prisma.WorkerWhereUniqueInput) {
        try {
            if (where && where.Email) {
                where.Email = this.keypairService.encryptWithAppKeys(
                    where.Email,
                );
            }
            const user = await this.prisma.worker.findUnique({
                where,
                select: {
                    Id: true,
                    FirstName: true,
                    LastName: true,
                    Email: true,
                    Phone: true,
                    Role: true,
                    Password: true,
                    FirstPass: true,
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
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(error),
                400,
            );
        }
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.WorkerWhereUniqueInput;
        where?: Prisma.WorkerWhereInput;
        orderBy?: Prisma.WorkerOrderByWithAggregationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;

        const companyUsers = await this.prisma.worker.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select: {
                Id: true,
                FirstName: true,
                LastName: true,
                Phone: true,
                Email: true,
                DepartmentId: true,
                Role: true,
                WorkTime: true,
            },
        });

        // if (companyUsers && companyUsers.Email) {
        //     companyUsers.Email = this.keypairService.decryptWithAppKeys(
        //         companyUsers.Email,
        //     );
        // }

        // if (companyUsers && companyUsers.Phone) {
        //     companyUsers.Phone = this.keypairService.decryptWithAppKeys(
        //         companyUsers.Phone,
        //     );
        // }

        return companyUsers;
    }

    async findFirst(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.WorkerWhereUniqueInput;
        where?: Prisma.WorkerWhereInput;
        orderBy?: Prisma.WorkerOrderByWithRelationInput;
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

        // if (where.Phone) {
        //     encryptedPhone = this.keypairService.encryptWithAppKeys(
        //         where.Phone,
        //     );
        //     searchWhere.Phone = encryptedPhone;
        // }

        const user = await this.prisma.worker.findFirst({
            skip,
            take,
            cursor,
            orderBy,
            where: searchWhere,
            select: {
                Id: true,
                DepartmentId: true,
                Email: true,
                FirstName: true,
                LastName: true,
                Phone: true,
                Role: true,
                WorkTime: {
                    select: {
                        Id: true,
                        Days: true,
                        MorningStartAt: true,
                        MorningEndAt: true,
                        ShiftStart: true,
                        ShiftEnd: true,
                        NightStartAt: true,
                        NightEndAt: true,
                    },
                },
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

    async create(data: Prisma.WorkerCreateInput) {
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

            const createdWorker = await this.prisma.worker.create({
                data: { ...data, Email: encryptedEmail, Phone: encryptedPhone },
                select: {
                    Email: true,
                    Phone: true,
                    FirstName: true,
                    LastName: true,
                    Id: true,
                    Role: true,
                },
            });

            if (data.Email) createdWorker.Email = data.Email;
            if (data.Phone) createdWorker.Phone = data.Phone;

            return createdWorker;
        } catch (error) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(error),
                400,
            );
        }
    }

    async update(params: {
        where: Prisma.WorkerWhereUniqueInput;
        data: Prisma.WorkerUpdateInput;
    }) {
        const { where, data } = params;

        // let encryptedDataEmail;
        // let encryptedDataPhone;

        // if (data.Email) {
        //     encryptedDataEmail = this.keypairService.encryptWithAppKeys(
        //         isString(data.Email) ? data.Email : data.Email.set,
        //     );
        // }

        // if (data.Phone) {
        //     encryptedDataPhone = this.keypairService.encryptWithAppKeys(
        //         isString(data.Phone) ? data.Phone : data.Phone.set,
        //     );
        // }

        // const updatedUser = await this.prisma.worker.update({
        //     data: {
        //         ...data,
        //         Email: encryptedDataEmail,
        //         Phone: encryptedDataPhone,
        //     },
        //     where,
        // });

        // if (updatedUser.Email)
        //     updatedUser.Email = this.keypairService.decryptWithAppKeys(
        //         updatedUser.Email,
        //     );

        // if (updatedUser.Phone)
        //     updatedUser.Phone = this.keypairService.decryptWithAppKeys(
        //         updatedUser.Phone,
        //     );

        const updatedUser = await this.prisma.worker.update({
            data: {
                ...data,
            },
            where: {
                ...where,
            },
            select: {
                FirstName: true,
                LastName: true,
                Id: true,
                Phone: true,
                Email: true,
                Password: true,
                Role: true,
                PrivateKey: true,
                PublicKey: true,
                ServiceWorker: {
                    select: {
                        Services: {
                            select: {
                                ServiceType: true,
                                ServiceName: true,
                                ServiceTimes: true,
                                ServiceGender: true,
                                Price: true,
                                Prim: true,
                            },
                        },
                    },
                },
                WorkTime: true,
                Department: true,
                DepartmentId: true,
            },
        });

        return updatedUser;
    }

    async updateMany(params: {
        data: Prisma.WorkerUpdateManyMutationInput;
        where: Prisma.WorkerWhereInput;
    }) {
        const { where, data } = params;
        const response = await this.prisma.worker.updateMany({ data, where });

        return response;
    }

    async delete(where: Prisma.WorkerWhereUniqueInput) {
        const response = await this.prisma.worker.delete({
            where,
        });
        return response;
    }
}
