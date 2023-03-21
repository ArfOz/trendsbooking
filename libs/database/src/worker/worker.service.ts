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

    async get(where: Prisma.WorkerWhereUniqueInput) {
        try {
            const user = await this.prisma.worker.findUnique({
                where,
                // select: {
                //     City:true,
                //     Country: true,
                //     CreatedAt:true,
                //     Departments:{
                //         select:{
                //             Salon:true,
                //             ServiceType:true,
                //             Id:true
                //         }
                //     },
                //     District:true,
                //     Email: true,
                //     FirstName: true,
                //     IBAN:true,
                //     Id: true,
                //     IsEmailVerified:true,
                //     LastName: true,
                //     Neighborhood:true,
                //     Phone: true,
                //     Role:true,
                //     Salon:true,
                //     Sector:true,
                //     Username: true,
                //     TaxNo:true,
                //     TaxAdmin:true,
                //     TCKN:true,

                // },
            });

            // if (user && user.Email) {
            //     user.Email = this.keypairService.decryptWithAppKeys(user.Email);
            // }

            // if (user && user.Phone) {
            //     user.Phone = this.keypairService.decryptWithAppKeys(user.Phone);
            // }

            delete user.Id;
            return user;
        } catch (error) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(error),
                400,
            );
        }
    }

    async find(params: {
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
                DepartmentId: true,
                Roles: true,
                WorkTime: true,
                Services: true,
            },
        });

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

        // if (where.Email) {
        //     encryptedEmail = this.keypairService.encryptWithAppKeys(
        //         where.Email,
        //     );
        //     searchWhere.Email = encryptedEmail;
        // }

        if (where.Phone) {
            encryptedPhone = this.keypairService.encryptWithAppKeys(
                where.Phone,
            );
            searchWhere.Phone = encryptedPhone;
        }

        const user = await this.prisma.worker.findFirst({
            skip,
            take,
            cursor,
            orderBy,
            where: searchWhere,
        });

        // if (user && user.Email) {
        //     user.Email = this.keypairService.decryptWithAppKeys(user.Email);
        // }

        if (user && user.Phone) {
            user.Phone = this.keypairService.decryptWithAppKeys(user.Phone);
        }

        return user;
    }

    async create(data: Prisma.WorkerCreateInput) {
        try {
            const createdUser = await this.prisma.worker.create({
                select: {
                    Phone: true,
                    FirstName: true,
                    LastName: true,
                    Id: true,
                },
                data,
            });

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
        where: Prisma.WorkerWhereUniqueInput;
        data: Prisma.WorkerUpdateInput;
    }): Promise<Worker> {
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
                Id: where.Id,
            },
        });

        return updatedUser;
    }

    async delete(where: Prisma.WorkerWhereUniqueInput): Promise<Worker> {
        return this.prisma.worker.delete({
            where,
        });
    }
}
