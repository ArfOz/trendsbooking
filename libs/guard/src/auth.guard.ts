import { UserRole, WorkerRole } from '@prisma/client';
// noinspection JSMethodCanBeStatic
import {
    CanActivate,
    ExecutionContext,
    Inject,
    Injectable,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';
import { isDefined } from 'class-validator';
import { ConfigType } from '@nestjs/config';
import {
    TrendsException,
    ForbiddenException,
    UnauthorizedException,
    UserNotExistException,
    ForbiddenExceptionType,
    UnauthorizedExceptionType,
} from '@shared';
import generalConfig from '@shared/config/general.config';

import jwt from 'jsonwebtoken';
import { PrismaService, UserService } from '@database';
import { ExpiredReasonType } from '@prisma/client';
import ResponseMessage from '@shared/enums/response-message.json';
import { UserPayloadDto, UserType } from '@auth';

const Roles = { ...UserRole, ...WorkerRole };

type Role = keyof typeof Roles;
export interface req extends Request {
    user: string; // or any other type
}
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @Inject(generalConfig.KEY)
        private generalCfg: ConfigType<typeof generalConfig>,
        private reflector: Reflector,
        private readonly prisma: PrismaService,
        private readonly userService: UserService,
    ) {}

    canActivate(context: ExecutionContext): Promise<boolean> | boolean {
        let ctx = null;
        let req = null;

        const ctxType = context.getType() as string; // GraphQL is not part of the union type?

        switch (ctxType) {
            case 'http':
                ctx = context.switchToHttp();
                req = ctx.getRequest();
                break;
            default:
                throw new ForbiddenException(
                    ForbiddenExceptionType.FORBIDDEN,
                    new Error('Yetkisiz Giriş'),
                    500,
                );
        }

        const allowUnauthorizedRequest = this.reflector.get<boolean>(
            'allowUnauthorizedRequest',
            context.getHandler(),
        );

        const staticTokenRequired = this.reflector.get<boolean>(
            'staticTokenRequired',
            context.getHandler(),
        );

        const rolesRequired = this.reflector.get<Role[]>(
            'rolesRequired',
            context.getHandler(),
        );
        return (
            allowUnauthorizedRequest ||
            this.validateRequest(req, staticTokenRequired, rolesRequired)
        );
    }

    private async validateRequest(
        req,
        staticTokenRequired: boolean,
        rolesRequired?: Role[],
    ): Promise<boolean> {
        // Get token from headers
        const token = this.getBearerToken(
            req.headers ?? req[Symbol('kHeaders')],
        );

        if (!rolesRequired && staticTokenRequired) {
            req.hasStaticToken = this.generalCfg.apiAccessToken === token;
            return req.hasStaticToken;
        }
        // tokendan user bilgilerini alıyoruz.
        let userPayload;
        try {
            userPayload = jwt.verify(
                token,
                process.env.JWT_SECRET,
            ) as UserPayloadDto;
        } catch (err) {
            throw new TrendsException(
                'Can not verify token!',
                new Error(ResponseMessage.TR417),
                417,
            );
        }
        // Burada role göre token var mı yok mu bakılacak
        let exist;
        switch (userPayload.Role) {
            case UserType.Provider:
                exist = await this.prisma.userToken.findFirst({
                    where: {
                        CompanyUserId: userPayload.Id,
                        AccessToken: token,
                    },
                });
                break;

            case UserType.Normal:
                exist = await this.prisma.userToken.findFirst({
                    where: { UserId: userPayload.Id, AccessToken: token },
                });
                break;

            case UserType.WorkerAdmin:
                exist = await this.prisma.userToken.findFirst({
                    where: { WorkerId: userPayload.Id, AccessToken: token },
                });

                break;

            case UserType.WorkerBasic:
                exist = await this.prisma.userToken.findFirst({
                    where: { WorkerId: userPayload.Id, AccessToken: token },
                });

                break;
            default:
                throw new TrendsException(
                    UnauthorizedExceptionType.NO_USER_ROLE,
                    new Error(ResponseMessage.TR425),
                    425,
                );
        }

        if (!exist) {
            throw new TrendsException(
                'Token is not valid',
                new Error(ResponseMessage.TR418),
                418,
            );
        }

        if (exist.ExpiresIn < new Date()) {
            await this.prisma.userToken.update({
                where: {
                    Id: exist.Id,
                },
                data: {
                    ExpiredReason:
                        exist.ExpiredReason ?? ExpiredReasonType.Expired,
                },
            });

            // if (
            //     exist.ExpiredReason ===
            //     ExpiredReasonType.SignInFromDifferentLocation
            // ) {
            //     throw new TrendsException(
            //         'Logged in from different device!',
            //         new Error('Token is expired!'),
            //         401,
            //     );
            // }
            throw new TrendsException(
                'Token is expired!',
                new Error(ResponseMessage.TR416),
                416,
            );
        }

        // Burada kullanıcı tipine göre kullanıcı bilgileri kontrol edilecek.Ve requeste eklenecek.
        let user;
        switch (userPayload.Role) {
            case UserType.Provider:
                user = await this.prisma.companyUser.findUnique({
                    where: { Id: userPayload.Id },
                });
                break;
            case UserType.Normal:
                user = await this.prisma.user.findUnique({
                    where: { Id: userPayload.Id },
                });
                break;

            case UserType.WorkerAdmin:
                user = await this.prisma.worker.findUnique({
                    where: { Id: userPayload.Id },
                });
                break;

            case UserType.WorkerBasic:
                user = await this.prisma.worker.findUnique({
                    where: { Id: userPayload.Id },
                });
                break;
            default:
                throw new TrendsException(
                    UnauthorizedExceptionType.NO_USER_ROLE,
                    new Error(ResponseMessage.TR425),
                    422,
                );
        }
        if (!user) {
            throw new UserNotExistException(
                UnauthorizedExceptionType.USER_NOT_REGISTERED,
                new Error(ResponseMessage.TR415),
                415,
            );
        }
        // Admin de eklenecek.
        if (
            rolesRequired &&
            user.Role !== 'Admin' &&
            !rolesRequired.includes(user.Role)
        ) {
            throw new TrendsException(
                UnauthorizedExceptionType.UNAUTHORIZED_ACCESS,
                new Error(ResponseMessage.TR424),
                424,
            );
        }

        req.user = {
            ...userPayload,
            ...user,
        };

        return true;
    }

    // private async validateFirebase(
    //     idToken: string,
    //     req: Request,
    // ): Promise<boolean> {
    //     const cachedUser = await this.cacheManager.get(idToken);

    //     if (cachedUser) {
    //         req.user = cachedUser as User;
    //         return true;
    //     }

    //     return this.fbAdmin
    //         .getAuth()
    //         .verifyIdToken(idToken)
    //         .then(async (user) => {
    //             if (!user.email_verified) {
    //                 throw new ForbiddenException(
    //                     ForbiddenExceptionType.EMAIL_NOT_VERIFIED,
    //                 );
    //             }

    //             try {
    //                 const dbuser = await this.userService.get({
    //                     Uid: user.uid,
    //                 });
    //                 if (!isDefined(dbuser)) {
    //                     throw new UserNotExistException();
    //                 }

    //                 const userWithIdData: User = {
    //                     ...user,
    //                     ...dbuser,
    //                 };
    //                 req.user = userWithIdData;
    //                 this.cacheManager.set(idToken, userWithIdData);

    //                 return true;
    //             } catch (error) {
    //                 if (error instanceof EkipException) {
    //                     throw error;
    //                 }
    //                 throw new UnauthorizedException(
    //                     UnauthorizedExceptionType.USER_NOT_REGISTERED,
    //                     error,
    //                 );
    //             }
    //         })
    //         .catch((error) => {
    //             if (error instanceof EkipException) {
    //                 throw error;
    //             }
    //             throw new UnauthorizedException(undefined, error);
    //         });
    // }

    private getBearerToken(headers: IncomingHttpHeaders) {
        if (this.isNotExistsBearerToken(headers)) {
            throw new UnauthorizedException(
                UnauthorizedExceptionType.NO_AUTHORIZATION_TOKEN,
                new Error('Token yok!'),
                500,
            );
        }
        const auth =
            headers['static-token']?.toString() ??
            headers.authorization?.toString();
        return auth.split('Bearer ')[1];
    }

    private isNotExistsBearerToken(headers: IncomingHttpHeaders): boolean {
        const authorization: string =
            headers['static-token']?.toString() ??
            headers.authorization?.toString();
        return (
            !isDefined(authorization) || !authorization.startsWith('Bearer ')
        );
    }
}
