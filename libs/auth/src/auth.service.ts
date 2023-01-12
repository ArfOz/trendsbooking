import { UserProfileData } from './dtos/user-profile-data';
import { TrendsException } from './../../shared/src/exceptions/trends.exception';
import { UserService } from './../../database/src/user/user.service';
import { ExpiredReasonType } from '@prisma/client';
import { PrismaService } from './../../database/src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UserPayloadDto } from '@auth';
import { ConfigType } from '@nestjs/config';
import generalConfig from '@shared/config/general.config';
import { Injectable, Inject } from '@nestjs/common';
import authConfig from './config/auth.config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        @Inject(authConfig.KEY)
        private readonly authCfg: ConfigType<typeof authConfig>,
        private readonly prismaService: PrismaService,
        private readonly userService: UserService,
    ) {}

    async refreshToken(
        token: string,
    ): Promise<{ AccessToken: string; RefreshToken: string; User: any }> {
        const userPayload = jwt.verify(
            token,
            this.authCfg.jwt_secret_refresh!,
        ) as UserPayloadDto;

        const userToken = await this.prismaService.userToken.findFirst({
            where: {
                UserId: userPayload.id,
                RefreshToken: token,
            },
            include: {
                User: true,
            },
        });

        if (!userToken) {
            throw new TrendsException('Refresh Token ', 400);
        }
        await this.prismaService.userToken.update({
            where: {
                Id: userToken.Id,
            },
            data: {
                ExpiresIn: new Date(),
                ExpiredReason: ExpiredReasonType.TokenRefreshed,
            },
        });

        const user = await this.userService.get({
            Id: userPayload.id,
        });

        // const userLoginHistory = await this.prismaService.userLoginHistory.findFirst({
        //     where: {
        //         UserId: user.Id,
        //     },
        //     orderBy: {
        //         Date: 'desc',
        //     },
        // });

        const { AccessToken, RefreshToken } =
            await this.generateAccessAndRefreshToken(user);

        return {
            AccessToken,
            RefreshToken,
            User: user,
        };
    }

    // convertContextToRequest(context: any): Request {
    //     context.req.headers = {
    //         ...context.req[Symbol('kHeaders')],
    //         ...context.req.headers,
    //     };
    //     return context.req as Request;
    // }

    // public validatePassword(password: string) {
    //     const reg =
    //         /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-ZÇĞŞİÜÖ])(?!.* )(?=.*[a-z])(?=.*[^A-Za-z0-9ÇĞŞİÜÖçğşıüö]).*/;
    //     return reg.test(password);
    // }

    async generateAccessAndRefreshToken(user: any): Promise<{
        AccessToken: string;
        RefreshToken: string;
        ExpiresAccessToken: Date;
        ExpiresRefreshToken: Date;
    }> {
        const payload: UserPayloadDto = {
            id: user.id,
            email: user.email,
        };

        const expiresAccessToken = new Date(
            Date.now() + parseInt(this.authCfg.jwt_expired!, 10) * 60 * 1000,
        );

        const expiresRefreshToken = new Date(
            Date.now() +
                parseInt(this.authCfg.jwt_refresh_expired!, 10) *
                    3600 *
                    1000 *
                    24,
        );

        const accessToken = jwt.sign(payload, this.authCfg.jwt_secret!, {
            expiresIn: `${this.authCfg.jwt_expired}m`,
        });

        const refreshToken = jwt.sign(
            payload,
            this.authCfg.jwt_secret_refresh!,
            {
                expiresIn: `${this.authCfg.jwt_refresh_expired}d`,
            },
        );

        return {
            AccessToken: accessToken,
            RefreshToken: refreshToken,
            ExpiresAccessToken: expiresAccessToken,
            ExpiresRefreshToken: expiresRefreshToken,
        };
    }
}
