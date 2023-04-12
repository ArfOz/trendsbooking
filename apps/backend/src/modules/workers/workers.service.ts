import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// Libs area
import ResponseMessage from '@shared/enums/response-message.json';
import { PrismaService, WorkerService } from '@database';
import { BadRequestException, BadRequestExceptionType } from '@shared';

// DTOs area
import { UserParamsDto } from '../users/dtos';
import {
    WorkerLoginDto,
    WorkersAddJsonDto,
    WorkersGetJsonDto,
    WorkersUpdateJsonDto,
} from './dtos/workers.dto';
import { AuthService } from '@auth';

@Injectable()
export class WorkersService {
    constructor(
        private readonly workerService: WorkerService,
        private readonly authService: AuthService,
        private readonly prismaService: PrismaService,
    ) {}

    async login(cred: WorkerLoginDto) {
        const worker = await this.workerService.findUnique({
            Email: cred.Email,
        });

        if (!worker) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR406),
                406,
            );
        }

        // Burası randevu açıldığında düzenlenecek. Admin tarafından onaylanana kadar randevu alamayacak.
        // if (!companyUser.IsActive) {
        //     throw new NotVerifiedException(
        //         VerifyCodeExceptionType.NOT_VERIFIED,
        //         new Error(ResponseMessage.TR420),
        //         404,
        //     );
        // }
        if (worker && (await bcrypt.compare(cred.Password, worker.Password))) {
            const {
                AccessToken,
                RefreshToken,
                ExpiresAccessToken,
                ExpiresRefreshToken,
            } = await this.authService.generateAccessAndRefreshToken(worker);

            await this.prismaService.userToken.create({
                data: {
                    AccessToken: AccessToken,
                    RefreshToken: RefreshToken,
                    Worker: {
                        connect: {
                            Id: worker.Id,
                        },
                    },
                    ExpiresIn: ExpiresAccessToken,
                    ExpiresInRefresh: ExpiresRefreshToken,
                },
            });
            delete worker.Password;

            // Response varsa Success
            return {
                AccessToken,
                RefreshToken,
                ExpireTime: ExpiresAccessToken,
                ExpireTimeRefresh: ExpiresRefreshToken,
                User: worker,
                Success: true,
            };
        }

        throw new BadRequestException(
            BadRequestExceptionType.BAD_REQUEST,
            new Error(ResponseMessage.TR403),
            403,
        );
    }
    async getDetails(user: UserParamsDto, workerId: number) {
        if (!workerId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR428),
                428,
            );
        }
        let data;

        console.log('user data', user);

        if (user.Role === 'WorkerBasic') {
            if (user.Id !== workerId) {
                throw new BadRequestException(
                    BadRequestExceptionType.BAD_REQUEST,
                    new Error(ResponseMessage.TR424),
                    424,
                );
            }
            data = await this.workerService.findFirst({
                where: {
                    Id: user.Id,
                },
            });
        } else if (user.Role === 'Provider') {
            data = await this.workerService.findFirst({
                where: {
                    Id: workerId,
                    Department: {
                        CompanyUserId: user.Id,
                    },
                },
            });
        } else if (user.Role === 'WorkerAdmin') {
            data = await this.workerService.findFirst({
                where: {
                    Id: workerId,
                    DepartmentId: user.DepartmentId,
                },
            });
        }

        if (!data || data.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR430),
                430,
            );
        }
        return {
            Success: true,
            Data: data,
        };
    }

    async updateWorker(user: UserParamsDto, input: WorkersUpdateJsonDto) {
        if (!input.WorkerId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR428),
                428,
            );
        }

        console.log('user', user);

        const data: Prisma.WorkerUpdateInput = {
            Email: input.Email,
            FirstName: input.FirstName,
            LastName: input.LastName,
            Password: input.Password,
            Phone: input.Password,
            WorkTime: {
                updateMany: {
                    where: {
                        WorkerId: input.WorkerId,
                    },
                    data: input.WorkTime,
                },
            },
        };

        let response;

        if (user.Role === 'WorkerBasic') {
            if (user.Id !== input.WorkerId) {
                throw new BadRequestException(
                    BadRequestExceptionType.BAD_REQUEST,
                    new Error(ResponseMessage.TR424),
                    424,
                );
            }
            response = await this.workerService.update({
                where: {
                    Id: input.WorkerId,
                },
                data,
            });
        } else if (user.Role === 'Provider') {
            response = await this.workerService.updateMany({
                where: {
                    Id: input.WorkerId,
                    Department: {
                        CompanyUserId: user.Id,
                    },
                },
                data,
            });
        } else if (user.Role === 'WorkerAdmin') {
            response = await this.workerService.updateMany({
                where: {
                    Id: input.WorkerId,
                    DepartmentId: user.DepartmentId,
                },
                data,
            });
        }
        // const worker = await this.workerService.findMany({
        //     where: {
        //         Id: input.WorkerId,
        //         Department: {
        //             CompanyUserId: user.Id,
        //         },
        //     },
        // });

        // if (!worker || worker.length < 1) {
        //     throw new BadRequestException(
        //         BadRequestExceptionType.BAD_REQUEST,
        //         new Error(ResponseMessage.TR430),
        //         430,
        //     );
        // }

        // const where: Prisma.WorkerWhereUniqueInput = {
        //     Id: input.WorkerId,
        // };

        return {
            Success: true,
            Data: response,
        };
    }
    async deleteWorker(user: UserParamsDto, input: WorkersGetJsonDto) {
        if (!input.WorkerId) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR428),
                428,
            );
        }

        let response;
        if (user.Role === 'Admin') {
            response = await this.workerService.findMany({
                where: {
                    Id: input.WorkerId,
                    Department: {
                        Workers: {
                            every: {
                                Id: user.Id,
                            },
                        },
                    },
                },
            });
        }
        // } else if (user.Role === 'Provider') {
        //     response = await this.workerService.find({
        //         where: {
        //             Id: input.WorkerId,
        //             Department: { CompanyUserId: user.Id },
        //         },
        //     });
        // }

        if (!response || response.length < 1) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR429),
                429,
            );
        }
        // const data = await this.workerService.delete({
        //     Id: input.WorkerId,
        // });
        return {
            Success: true,
            Data: 'data',
        };
    }
}
