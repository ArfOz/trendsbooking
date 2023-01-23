import { OtpCodeNotFoundException } from './../../shared/src/exceptions/otpcode-not-found.exception';
import { BadRequestExceptionType } from './../../shared/src/enums/exception.type';
import { BadRequestException } from './../../shared/src/exceptions/bad-request.exception';
import { UserOtpCodeService } from './../../database/src/user-otp-code/user-otp-code.service';
import { MailUtilsService } from '@mail-utils';

import { NotFoundException } from './../../shared/src/exceptions/not-found.exception';
import { MailModeType } from './enums/mailmode.enum';
import { UserProfileData } from './dtos/user-profile-data';
import { TrendsException } from './../../shared/src/exceptions/trends.exception';
import { UserService } from './../../database/src/user/user.service';
import { ExpiredReasonType, OTPType } from '@prisma/client';
import { PrismaService } from './../../database/src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UserPayloadDto } from '@auth';
import { ConfigType } from '@nestjs/config';
import generalConfig from '@shared/config/general.config';
import { Injectable, Inject } from '@nestjs/common';
import authConfig from './config/auth.config';
import * as jwt from 'jsonwebtoken';
import { SendEmailDto } from 'libs/mail-utils/src/dtos';

@Injectable()
export class AuthService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        @Inject(authConfig.KEY)
        private readonly authCfg: ConfigType<typeof authConfig>,
        private readonly prismaService: PrismaService,
        private readonly userService: UserService,
        private readonly mailUtilsService:MailUtilsService,
        private readonly userOtpCodeService: UserOtpCodeService
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
                UserId: userPayload.Id,
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
            Id: userPayload.Id,
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
            Id: user.Id,
            Email: user.Email,
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

    async generateAndSendEmailLink(
        mode: MailModeType,
        email: string,
        newEmail?: string,
    ) {

        // Burası hazırlanacak daha sonra email bypass edilecek ki daha hızlı giriş yapalım
        // const config = await this.prismaService.config.findUnique({
        //     where: {
        //         Id: ConfigModelType.BYPASS_EMAIL,
        //     },
        // });

        // const bypassEmail = config && config.Value.toLowerCase() === 'true';

        // if (bypassEmail) {
        //     throw new BadRequestException(
        //         BadRequestExceptionType.BAD_REQUEST,
        //         new Error('Email service is temporarily disabled'),
        //     );
        // }

        if (mode === MailModeType.EmailChange && !newEmail) {
            throw new TrendsException('New Email field required', 400);
        }

        const user = await this.userService.findFirst({
            where: {
                Email: email,
            },
        });

        if (!user) {
            throw new NotFoundException(new Error('User not found'));
        }

        // if (mode === MailModeType.VerifyEmail && user.IsEmailVerified) {
        //     throw new BadRequestException(
        //         BadRequestExceptionType.BAD_REQUEST,
        //         new Error('Your user email has been verified'),
        //     );
        // }

        const payload = {
            mode,
            email,
            Id: user.Id,
        };

        const token = jwt.sign(payload, this.authCfg.jwt_secret, {
            expiresIn: `${this.authCfg.codeValidationTime}m`,
        });

        const url = `${
            mode === MailModeType.ResetPassword
                ? this.authCfg.forgotPasswordURL
                : this.authCfg.emailConfirmURL
        }?mode=${mode}&oobCode=${token}`;

        const template = await this.mailTemplateGenerator(mode);

        let subject:string= "";
        switch (mode) {
            case MailModeType.VerifyEmail:
                subject = "TrendsBooking'e Hoşgeldiniz!";
                break;
            case MailModeType.ResetPassword:
                subject = 'Şifre Güncelleme Talebiniz';
                break;
            case MailModeType.EmailChange:
                subject = 'TrendsBooking için kullandığınız giriş e-postasını değiştirin';
                break;
            default:
                break;
        }
        const html = await this.mailTemplateReplacer(MailModeType ,url, user);
        console.log("subject", subject, html )

        const optionsSendEmail: SendEmailDto = {
            subject,
            to: user.Email,
            html,
        };

        const response = await this.mailUtilsService.sendEmail(optionsSendEmail);

        console.log("responseeeeeeeeee", response)
        return user;
    }

    private async mailTemplateReplacer(
        MailModeType: any,
        url: string,
        user: any,
    ){
 
        const emptyFirstName = 'Sayın';
        const emptyLastName = 'TrendsBooking Kullanıcısı';

        const replaceText = [
            { key: '{url}', value: url },
            {
                key: '{name}',
                value:
                    user.FirstName && user.FirstName !== 'First Name'
                        ? user.FirstName
                        : emptyFirstName,
            },
            {
                key: '{surname}',
                value:
                    user.LastName && user.LastName !== 'Last Name'
                        ? user.LastName
                        : emptyLastName,
            },
        ];

        let html :string = " ";
        console.log("replace", replaceText)
        replaceText.forEach((replace) => {
            // eslint-disable-next-line no-param-reassign
            html = html.replaceAll(replace.key, replace.value);
        });

        console.log("asdasd", html)

        return `<b>Hello, <strong>{{asd}}</strong>, Your password is:\n<b>{{ password }}</b></p>`;
    }

    
    async verifyEmail(user: User, code: number): Promise<User> {
        const otpCode = await this.userOtpCodeService.find({
            where: {
                UserId: user.Id,
                Type: OTPType.VerifyEmail,
                Code: code,
                IsDeleted: false,
                ExpiredAt: {
                    gte: new Date(),
                },
            },
            orderBy: {
                CreatedAt: 'desc',
            },
            take: 1,
        });

        if (!otpCode || !otpCode.length) {
            throw new OtpCodeNotFoundException(new Error('OTP code not found'));
        }

        if (otpCode[0].Attempts >= 5) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error('Your trial count is over'),
            );
        }

        const updatedUser = await this.userService.update({
            where: {
                Id: user.Id,
            },
            data: {
                IsEmailVerified: true,
            },
        });

        return updatedUser;
    }


    async mailTemplateGenerator(
        mode: MailModeType,
    ){

        // const template = 

    }


}
