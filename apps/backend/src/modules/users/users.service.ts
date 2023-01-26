import { UnauthorizedExceptionType, ForbiddenExceptionType } from './../../../../../libs/shared/src/enums/exception.type';
import { NotVerifiedException } from './../../../../../libs/shared/src/exceptions/not-verified.exception';
// Npm packages
import { Injectable, Inject, HttpException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { generate } from 'generate-password';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

// Import modules
import { MailUtilsService, SendEmailDto } from '@mail-utils';
import {
    MailModeType,
    SendCodeDTO,
    VerifyCodeDTO,
    UserPayloadDto,
    AuthService,
    CreateUserJsonDto,
} from '@auth';
import { ExpiredReasonType, OTPType } from '@prisma/client';
import authConfig from '@auth/config/auth.config';
import generalConfig from '@shared/config/general.config';
import {
    BadRequestException,
    BadRequestExceptionType,
    AlreadyExistsExceptionType,
    AlreadyExistsException,
    KeypairService,
    TrendsException,
    TokenExceptionType,
    OtpCodeNotFoundException,
    VerifyCodeExceptionType,
    NotFoundException,
    ResponseMessage,
} from '@shared';
import {
    UserService,
    PrismaService,
    LoginUserDto,
    UserOtpCodeService,
} from '@database';

@Injectable()
export class UsersService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        @Inject(authConfig.KEY)
        private readonly authCfg: ConfigType<typeof authConfig>,
        private readonly prismaService: PrismaService,
        private readonly userService: UserService,
        private readonly keypairService: KeypairService,
        private readonly authService: AuthService,
        private readonly userOtpCodeService: UserOtpCodeService,
        private readonly mailUtilsService: MailUtilsService,
    ) {}

    // async getUser(Email: string): Promise<User> {

    //     const user = await this.prismaService.user.findUnique({
    //         where: { Email }
    //     });

    //     if(!user) {
    //         throw new NotFoundException();
    //     }

    //     delete user.Password;
    //     return user;

    // }

    // async createUser(data: CreateUserDto): Promise<User> {

    //     const createdUser = await this.userService.createUser(data)
    //     return createdUser;
    // }

    async register(input: CreateUserJsonDto) {
        if (!input.CbFirst) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR411),
            );
        }
        if (
            !input.Email ||
            !input.Password ||
            !input.Phone ||
            !input.Username ||
            !input.Gender ||
            !input.FirstName ||
            !input.LastName ||
            !input.BirthDate
        ) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(
                    ResponseMessage.TR412,
                ),
            );
        }

        // // Checking password validation
        // const validationPassword = this.validatePassword(input.Password);

        // if (!validationPassword) {
        //     throw new BadRequestException(
        //         BadRequestExceptionType.BAD_REQUEST,
        //         new Error('The password you entered is not valid!'),
        //     );
        // }

        // if (!input.Agreement) {
        //     throw new BadRequestException(
        //         BadRequestExceptionType.BAD_REQUEST,
        //         new Error('You have to accept the agreement!'),
        //     );
        // }

        // Check if the user already exists

        const user = await this.userService.findFirst({
            where: { Email: input.Email },
        });

        if (user) {
            if (!user.IsEmailVerified) {
                throw new AlreadyExistsException(
                    VerifyCodeExceptionType.NOT_VERIFIED,
                    new Error(ResponseMessage.TR404),
                );
            } else {
                throw new AlreadyExistsException(
                    AlreadyExistsExceptionType.USER_ALREADY_EXISTS,
                    new Error(ResponseMessage.TR413),
                );
            }
        }

        // Generate a username

        // Generate a public/private key pair
        const keys = this.keypairService.generateKey();

        // Encrypt the public and private keys
        const pubKey = this.keypairService.encryptData(
            this.generalCfg.publicKey,
            this.generalCfg.privateKey,
            keys.publicKey,
        );
        const privKey = this.keypairService.encryptData(
            this.generalCfg.publicKey,
            this.generalCfg.privateKey,
            keys.secretKey,
        );

        // const referralCode = uniqid();

        // Burası sözleşme imzalatılırsa orada tutulacak.
        // await this.prisma.userConsent.create({
        //     data: {
        //         Agreement: input.Agreement,
        //         Campaign: input.Campaign,
        //         User: {
        //             connect: {
        //                 Id: response.Id,
        //             },
        //         },
        //     },
        // });

        // delete response.Password;

        // Create a new user
        const newUser = await this.userService.create({
            Email: input.Email,
            FirstName: input.FirstName,
            LastName: input.LastName,
            Username: input.Username,
            BirthDate: new Date(input.BirthDate),
            Phone: input.Phone,
            CbFirst: input.CbFirst,
            Country: input.Country,
            Gender: input.Gender,
            CreatedAt: new Date(),
            UpdatedAt: new Date(),
            Password: await bcrypt.hash(input.Password, 10),
            PrivateKey: privKey,
            PublicKey: pubKey,
        });

        // Verification code
        const code = parseInt(
            generate({
                numbers: true,
                symbols: false,
                uppercase: false,
                lowercase: false,
                length: 4,
            }),
        );

        await this.userOtpCodeService.create({
            User: {
                connect: {
                    Id: newUser.Id,
                },
            },
            Code: code,
            ExpiredAt: new Date(
                Date.now() +
                    parseInt(this.authCfg.codeValidationTime, 10) * 60 * 1000,
            ),
            Type: OTPType.VerifyEmail,
        });

        const options: SendEmailDto = {
            to: input.Email,
            html: `<h1>Doğrulama kodunuz: ${code}</h1>`,
            subject: "Trendsbooking'e hoşheldiniz",
        };

        await this.mailUtilsService.sendEmail(options);

        const payload = {
            mode: MailModeType.VerifyEmail,
            email: input.Email,
            Id: newUser.Id,
        };

        const token = jwt.sign(payload, this.authCfg.jwt_secret, {
            expiresIn: `${this.authCfg.codeValidationTime}m`,
        });

        return {
            Email: newUser.Email,
            Data: ResponseMessage.TR202,
            Token: token,
            Success: true,
        };
        // // Response varsa Success
        // return response;
    }

    async loginUser(cred: LoginUserDto) {
        const user = await this.userService.findFirst({
            where: {
                Email: cred.Email,
            },
        });

        if (!user) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR403)
            );
        }
        if (!user.IsEmailVerified) {
            throw new NotVerifiedException(
                VerifyCodeExceptionType.NOT_VERIFIED,
                new Error(ResponseMessage.TR404)
            );
        }

        if (user && (await bcrypt.compare(cred.Password, user.Password))) {
            const {
                AccessToken,
                RefreshToken,
                ExpiresAccessToken,
                ExpiresRefreshToken,
            } = await this.authService.generateAccessAndRefreshToken(user);

            await this.prismaService.userToken.create({
                data: {
                    AccessToken: AccessToken,
                    RefreshToken: RefreshToken,
                    User: {
                        connect: { Id: user.Id },
                    },
                    ExpiresIn: ExpiresAccessToken,
                    ExpiresInRefresh: ExpiresRefreshToken,
                },
            });
            delete user.Password;
            delete user.Id;

            // Response varsa Success
            return {
                AccessToken,
                RefreshToken,
                ExpireTime: ExpiresAccessToken,
                ExpireTimeRefresh: ExpiresRefreshToken,
                User: user,
                Success: true,
            };
        }

        throw new BadRequestException(
            BadRequestExceptionType.BAD_REQUEST,
            new Error(ResponseMessage.TR403)
            // new Error('Wrong Password or Email'),
        );
    }

    async userProfile(user: UserPayloadDto) {
        return await this.userService.get({ Id: user.Id });
    }

    async refreshUserToken(refreshToken: string) {
        const { AccessToken, RefreshToken, User } =
            await this.authService.refreshToken(refreshToken);
        const expireTime = new Date(
            Date.now() + parseInt(this.authCfg.jwt_expired, 10) * 60 * 1000,
        );
        const expiretimeRefresh = new Date(
            Date.now() +
                parseInt(this.authCfg.jwt_refresh_expired, 10) * 60 * 1000,
        );

        const userToken = await this.prismaService.userToken.findFirst({
            where: {
                UserId: User.Id,
                RefreshToken: refreshToken,
            },
            include: {
                User: true,
            },
        });
        if (!userToken) {
            throw new HttpException(ResponseMessage.TR405, 401);
        }

        await this.prismaService.userToken.update({
            data: {
                AccessToken: AccessToken,
                RefreshToken: RefreshToken,
                ExpiresIn: expireTime,
                ExpiresInRefresh: expiretimeRefresh,
                ExpiredReason: ExpiredReasonType.TokenRefreshed,
                CreatedAt: new Date(),
            },
            where: { Id: userToken.Id },
        });
        delete User.Password;
        delete User.Id;

        return {
            AccessToken,
            RefreshToken,
            ExpireTime: expireTime,
            ExpireTimeRefresh: expiretimeRefresh,
            User,
            Success: true,
        };
    }

    async verifyCode(data: VerifyCodeDTO) {
        try {
            const payload = jwt.verify(data.Token, this.authCfg.jwt_secret);
            if (
                typeof payload === 'object' &&
                'email' in payload &&
                data.Code
            ) {
                let user = await this.userService.get({
                    Id: payload.Id,
                });

                if (!user) {
                    throw new NotFoundException(
                        ForbiddenExceptionType.FORBIDDEN,
                        new Error(ResponseMessage.TR406)
                        );
                }

                const otpCode = await this.userOtpCodeService.find({
                    where: {
                        UserId: payload.Id,
                        Type: OTPType.VerifyEmail,
                        // For test cancelled manually
                        // Code: data.Code,
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
                    throw new OtpCodeNotFoundException(
                        VerifyCodeExceptionType.CODE_NOT_FOUND,
                        new Error(ResponseMessage.TR407),
                    );
                }

                // if (otpCode[0].Attempts >= 5) {
                //     throw new BadRequestException(
                //         BadRequestExceptionType.BAD_REQUEST,
                //         new Error('Your trial count is over'),
                //     );
                // }

                user = await this.userService.update({
                    where: {
                        Id: payload.Id,
                    },
                    data: {
                        IsEmailVerified: true,
                    },
                });
                await this.userOtpCodeService.update({
                    where: {
                        Id: otpCode[0].Id,
                    },
                    data: {
                        IsDeleted: true,
                    },
                });

                return {
                    Email: user.Email,
                    Data: ResponseMessage.TR201,
                    Success: true,
                };
            }
        } catch (error) {
            if (error?.name === 'TokenExpiredError') {
                throw new TrendsException(
                    TokenExceptionType.EXPIRED_TOKEN,
                    400,
                    new Error(ResponseMessage.TR408),
                );
            }

            throw new TrendsException(
                TokenExceptionType.EXPIRED_TOKEN,
                400,
                new Error(error),
            );
        }
    }

    async sendEmailCode(data: SendCodeDTO) {
        const user = await this.userService.findFirst({
            where: { Email: data.Email },
        });

        if (!user) {
            throw new AlreadyExistsException(
                AlreadyExistsExceptionType.NOT_EXIST,
                new Error(ResponseMessage.TR409),
            );
        }
        if (user.IsEmailVerified) {
            throw new AlreadyExistsException(
                VerifyCodeExceptionType.VERIFIED,
                new Error(ResponseMessage.TR410),
            );
        }
        // Verification code
        const code = parseInt(
            generate({
                numbers: true,
                symbols: false,
                uppercase: false,
                lowercase: false,
                length: 4,
            }),
        );

        await this.userOtpCodeService.create({
            User: {
                connect: {
                    Id: user.Id,
                },
            },
            Code: code,
            ExpiredAt: new Date(
                Date.now() +
                    parseInt(this.authCfg.codeValidationTime, 10) * 60 * 1000,
            ),
            Type: OTPType.VerifyEmail,
        });

        const options: SendEmailDto = {
            to: data.Email,
            html: `<h1>Doğrulama kodunuz: ${code}</h1>`,
            subject: "Trendsbooking'e hoşheldiniz",
        };

        await this.mailUtilsService.sendEmail(options);

        const payload = {
            mode: MailModeType.VerifyEmail,
            email: data.Email,
            Id: user.Id,
        };

        const token = jwt.sign(payload, this.authCfg.jwt_secret, {
            expiresIn: `${this.authCfg.codeValidationTime}m`,
        });

        return {
            Email: user.Email,
            Data: ResponseMessage.TR202,
            Token: token,
            Success: true,
        };
    }

    async logout(cred: UserPayloadDto) {
        const user = await this.userService.findFirst({
            where: {
                Id: cred.Id,
            },
        });

        if (!user) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR406),
            );
        }

        const userToken = await this.prismaService.userToken.findFirst({
            where: {
                UserId: cred.Id,
            },
            orderBy: { CreatedAt: 'desc' },
        });

        await this.prismaService.userToken.update({
            where: {
                Id: userToken.Id,
            },
            data: {
                AccessToken: ' ',
                RefreshToken: ' ',
                ExpiredReason:ExpiredReasonType.Logout
            },
        });
        return {
            Success: true,
            Details: ResponseMessage.TR203,
        };
    }
}
