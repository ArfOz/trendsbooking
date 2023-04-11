// Npm Packages
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { generate } from 'generate-password';
import * as jwt from 'jsonwebtoken';
import { OTPType, ExpiredReasonType } from '@prisma/client';

// Libs area
import { SendEmailDto } from '@mail-utils';

import { AuthService, MailModeType } from '@auth';
import authConfig from '@auth/config/auth.config';
import {
    PrismaService,
    UserOtpCodeService,
    UserService,
    CompanyUserService,
} from '@database';
import { MailUtilsService } from '@mail-utils';

import { ConfigType } from '@nestjs/config';
import {
    AlreadyExistsException,
    AlreadyExistsExceptionType,
    BadRequestExceptionType,
    ForbiddenExceptionType,
    KeypairService,
    NotFoundException,
    NotVerifiedException,
    OtpCodeNotFoundException,
    TokenExceptionType,
    TrendsException,
    VerifyCodeExceptionType,
    BadRequestException,
} from '@shared';
import generalConfig from '@shared/config/general.config';
import ResponseMessage from '@shared/enums/response-message.json';

// DTO area
import {
    LoginUserDto,
    SendCodeDTO,
    UserParamsDto,
    VerifyCodeDTO,
} from '../users/dtos';

import {
    ActivateCompanyUserDto,
    CompanyUserParamsDto,
    CreateCompanyUserJsonDto,
    ResponseLoginCompanyUserDTO,
} from './dtos/companyUser-response.dto';

@Injectable()
export class CompanyUsersService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        @Inject(authConfig.KEY)
        private readonly authCfg: ConfigType<typeof authConfig>,
        private readonly prismaService: PrismaService,
        private readonly companyUserService: CompanyUserService,
        private readonly userService: UserService,
        private readonly keypairService: KeypairService,
        private readonly authService: AuthService,
        private readonly userOtpCodeService: UserOtpCodeService,
        private readonly mailUtilsService: MailUtilsService,
    ) {}

    async register(input: CreateCompanyUserJsonDto) {
        if (!input.CbFirst) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR411),
                411,
            );
        }

        if (
            !input.Email ||
            !input.Password ||
            !input.FirstName ||
            !input.LastName ||
            !input.Phone ||
            !input.Username ||
            !input.TCKN ||
            !input.CbFirst ||
            !input.TaxNo ||
            !input.TaxAdmin ||
            !input.IBAN ||
            !input.Sector ||
            !input.Salon
        ) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR412),
                412,
            );
        }

        // // // Checking password validation
        // // const validationPassword = this.validatePassword(input.Password);

        // if (!validationPassword) {
        //     throw new BadRequestException(
        //         BadRequestExceptionType.BAD_REQUEST,
        //         new Error('The password you entered is not valid!'),
        //     );
        // }

        if (!input.CbFirst) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR411),
                411,
            );
        }

        // Check if the user already exists

        const companyUser = await this.companyUserService.findFirst({
            where: { Email: input.Email },
        });
        const user = await this.userService.findFirst({
            where: { Email: input.Email },
        });
        if (user) {
            throw new AlreadyExistsException(
                VerifyCodeExceptionType.NOT_VERIFIED,
                new Error(ResponseMessage.TR419),
                419,
            );
        }

        if (companyUser) {
            if (!companyUser.IsActive) {
                throw new AlreadyExistsException(
                    VerifyCodeExceptionType.NOT_VERIFIED,
                    new Error(ResponseMessage.TR404),
                    404,
                );
            } else {
                throw new AlreadyExistsException(
                    AlreadyExistsExceptionType.USER_ALREADY_EXISTS,
                    new Error(ResponseMessage.TR413),
                    413,
                );
            }
        }

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
        const newUser = await this.companyUserService.create({
            FirstName: input.FirstName,
            LastName: input.LastName,
            Email: input.Email,
            Password: await bcrypt.hash(input.Password, 10),
            Phone: input.Phone,
            Username: input.Username,
            CbFirst: input.CbFirst,
            CreatedAt: new Date(),
            UpdatedAt: new Date(),
            PrivateKey: privKey,
            PublicKey: pubKey,
            TCKN: input.TCKN,
            IsActive: false,
            Departments: {
                create: {
                    City: input.City,
                    Country: input.Country,
                    District: input.District,
                    Neighborhood: input.Neighborhood,
                    IBAN: input.IBAN,
                    Salon: input.Salon,
                    TaxAdmin: input.TaxAdmin,
                    TaxNo: input.TaxNo,
                },
            },
        });

        // Verification code
        const code = generate({
            numbers: true,
            symbols: false,
            uppercase: false,
            lowercase: false,
            length: 4,
        });
        await this.userOtpCodeService.create({
            CompanyUser: {
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
    }

    async verifyCode(data: VerifyCodeDTO) {
        try {
            const payload = jwt.verify(data.Token, this.authCfg.jwt_secret);
            if (
                typeof payload === 'object' &&
                'email' in payload &&
                data.Code
            ) {
                const companyUser = await this.companyUserService.findUnique({
                    Id: payload.Id,
                });

                if (!companyUser) {
                    throw new NotFoundException(
                        ForbiddenExceptionType.FORBIDDEN,
                        new Error(ResponseMessage.TR406),
                        406,
                    );
                }

                const otpCode = await this.userOtpCodeService.find({
                    where: {
                        CompanyUserId: payload.Id,
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
                        407,
                    );
                }

                // Burası ilerleyen zamanlarda yapılacak en fazla 5 defa denenebilecek.
                // if (otpCode[0].Attempts >= 5) {
                //     throw new BadRequestException(
                //         BadRequestExceptionType.BAD_REQUEST,
                //         new Error('Your trial count is over'),
                //     );
                // }

                const companyUpdatedUser = await this.companyUserService.update(
                    {
                        where: {
                            Id: payload.Id,
                        },
                        data: {
                            IsEmailVerified: true,
                        },
                    },
                );
                await this.userOtpCodeService.update({
                    where: {
                        Id: otpCode[0].Id,
                    },
                    data: {
                        IsDeleted: true,
                    },
                });

                return {
                    Email: companyUpdatedUser.Email,
                    Data: ResponseMessage.TR201,
                    Success: true,
                };
            }
        } catch (error) {
            if (error?.name === 'TokenExpiredError') {
                throw new TrendsException(
                    TokenExceptionType.EXPIRED_TOKEN,
                    new Error(ResponseMessage.TR408),
                    400,
                );
            }

            throw new TrendsException(
                TokenExceptionType.EXPIRED_TOKEN,
                new Error(error),
                400,
            );
        }
    }

    async sendEmailCode(data: SendCodeDTO) {
        const companyUser = await this.companyUserService.findFirst({
            where: { Email: data.Email },
        });

        if (!companyUser) {
            throw new AlreadyExistsException(
                AlreadyExistsExceptionType.NOT_EXIST,
                new Error(ResponseMessage.TR409),
                409,
            );
        }
        if (companyUser.IsEmailVerified) {
            throw new AlreadyExistsException(
                VerifyCodeExceptionType.VERIFIED,
                new Error(ResponseMessage.TR410),
                410,
            );
        }
        // Verification code
        const code = generate({
            numbers: true,
            symbols: false,
            uppercase: false,
            lowercase: false,
            length: 4,
        });

        await this.userOtpCodeService.create({
            CompanyUser: {
                connect: {
                    Id: companyUser.Id,
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
            Id: companyUser.Id,
        };

        const token = jwt.sign(payload, this.authCfg.jwt_secret, {
            expiresIn: `${this.authCfg.codeValidationTime}m`,
        });

        return {
            Email: companyUser.Email,
            Data: ResponseMessage.TR202,
            Token: token,
            Success: true,
        };
    }

    async login(cred: LoginUserDto): Promise<ResponseLoginCompanyUserDTO> {
        const companyUser = await this.companyUserService.findUnique({
            Email: cred.Email,
        });

        if (!companyUser) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR406),
                406,
            );
        }
        if (!companyUser.IsEmailVerified) {
            throw new NotVerifiedException(
                VerifyCodeExceptionType.NOT_VERIFIED,
                new Error(ResponseMessage.TR404),
                404,
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
        if (
            companyUser &&
            (await bcrypt.compare(cred.Password, companyUser.Password))
        ) {
            const {
                AccessToken,
                RefreshToken,
                ExpiresAccessToken,
                ExpiresRefreshToken,
            } = await this.authService.generateAccessAndRefreshToken(
                companyUser,
            );

            await this.prismaService.userToken.create({
                data: {
                    AccessToken: AccessToken,
                    RefreshToken: RefreshToken,
                    CompanyUser: {
                        connect: { Id: companyUser.Id },
                    },
                    ExpiresIn: ExpiresAccessToken,
                    ExpiresInRefresh: ExpiresRefreshToken,
                },
            });
            delete companyUser.Password;
            delete companyUser.Id;

            // Response varsa Success
            return {
                AccessToken,
                RefreshToken,
                ExpireTime: ExpiresAccessToken,
                ExpireTimeRefresh: ExpiresRefreshToken,
                User: companyUser,
                Success: true,
            };
        }

        throw new BadRequestException(
            BadRequestExceptionType.BAD_REQUEST,
            new Error(ResponseMessage.TR403),
            403,
        );
    }

    async companies(data) {
        const companies = await this.companyUserService.find({ where: data });
        return { companies, Success: true };
    }

    async activate(data: ActivateCompanyUserDto) {
        if (!data.Email) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR421),
                421,
            );
        }
        const companyUser = await this.companyUserService.findFirst({
            where: { Email: data.Email },
        });

        if (!companyUser) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR409),
                409,
            );
        }

        if (companyUser.IsActive) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR422),
                409,
            );
        }

        const email = this.keypairService.encryptWithAppKeys(data.Email);

        await this.companyUserService.update({
            where: { Email: email },
            data: {
                IsActive: true,
            },
        });

        return {
            Data: `${data.Email} hesabı aktif edilmiştir.`,
            Success: true,
        };
    }

    async logout(cred: UserParamsDto) {
        const user = await this.companyUserService.findFirst({
            where: {
                Id: cred.Id,
            },
        });

        if (!user) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR406),
                406,
            );
        }
        const userToken = await this.prismaService.userToken.findFirst({
            where: {
                CompanyUserId: cred.Id,
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
                ExpiredReason: ExpiredReasonType.Logout,
            },
        });
        return {
            Success: true,
            Details: ResponseMessage.TR203,
        };
    }

    async profile(
        user: CompanyUserParamsDto, // : Promise<ResponseCompanyUserProfileUserDTO>
    ) {
        return await this.companyUserService.findUnique({ Id: user.Id });
    }
}
