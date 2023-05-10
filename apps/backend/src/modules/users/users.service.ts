// Npm packages

import { Injectable, Inject, HttpException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { generate } from 'generate-password';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

// Import modules
import { MailUtilsService, SendEmailDto } from '@mail-utils';
import { MailModeType, AuthService } from '@auth';
import {
    ExpiredReasonType,
    OTPType,
    Prisma,
    RandevuStatus,
} from '@prisma/client';
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
    ForbiddenExceptionType,
    NotVerifiedException,
} from '@shared';
import {
    UserService,
    UserOtpCodeService,
    ServicesService,
    UserTokenService,
    DepartmentService,
} from '@database';
import ResponseMessage from '@shared/enums/response-message.json';
import {
    RegisterUserJsonDto,
    LoginUserDto,
    VerifyCodeDTO,
    SendCodeDTO,
    ResponseRegisterUserDTO,
    ResponseLoginUserDTO,
    ResponseUserProfileUserDTO,
    UserParamsDto,
    UserProfileUpdateDto,
    RandevuCreateDto,
} from './dtos';
import {
    GetDepartmentsFilterDTO,
    GetDepartmentsParamsDTO,
    UserPassChangeDto,
    UserRefreshTokenDTO,
} from './dtos/user-response.dto';
import { RandevuService } from '@database/randevu/randevu.service';

@Injectable()
export class UsersService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        @Inject(authConfig.KEY)
        private readonly authCfg: ConfigType<typeof authConfig>,
        private readonly userService: UserService,
        private readonly keypairService: KeypairService,
        private readonly authService: AuthService,
        private readonly userOtpCodeService: UserOtpCodeService,
        private readonly mailUtilsService: MailUtilsService,
        private readonly randevuService: RandevuService,
        private readonly serviceService: ServicesService,
        private readonly userTokenService: UserTokenService,
        private readonly departmentsService: DepartmentService,
    ) {}

    async register(
        input: RegisterUserJsonDto,
    ): Promise<ResponseRegisterUserDTO> {
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
            !input.Phone ||
            !input.Username ||
            !input.Gender ||
            !input.FirstName ||
            !input.LastName ||
            !input.BirthDate
        ) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR412),
                412,
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
        const code = generate({
            numbers: true,
            symbols: false,
            uppercase: false,
            lowercase: false,
            length: 4,
        });

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

    async loginUser(cred: LoginUserDto): Promise<ResponseLoginUserDTO> {
        const user = await this.userService.findFirst({
            where: {
                Email: cred.Email,
            },
        });

        if (!user) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR406),
                406,
            );
        }
        if (!user.IsEmailVerified) {
            throw new NotVerifiedException(
                VerifyCodeExceptionType.NOT_VERIFIED,
                new Error(ResponseMessage.TR404),
                404,
            );
        }
        if (user && (await bcrypt.compare(cred.Password, user.Password))) {
            const {
                AccessToken,
                RefreshToken,
                ExpiresAccessToken,
                ExpiresRefreshToken,
            } = await this.authService.generateAccessAndRefreshToken(user);

            await this.userTokenService.create({
                AccessToken: AccessToken,
                RefreshToken: RefreshToken,
                User: {
                    connect: { Id: user.Id },
                },
                ExpiresIn: ExpiresAccessToken,
                ExpiresInRefresh: ExpiresRefreshToken,
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
            new Error(ResponseMessage.TR403),
            403,
            // new Error('Wrong Password or Email'),
        );
    }

    async changePassword(user: UserParamsDto, cred: UserPassChangeDto) {
        if (!(await bcrypt.compare(cred.OldPassword, user.Password))) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR403),
                403,
            );
        }
        if (!cred.NewPassword || !cred.OldPassword) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR436),
                436,
            );
        }

        if (cred.NewPassword == cred.OldPassword) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR443),
                443,
            );
        }

        const userData = await this.userService.findUnique({
            Id: user.Id,
        });

        if (!userData) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR406),
                406,
            );
        }

        if (
            userData &&
            (await bcrypt.compare(cred.OldPassword, userData.Password))
        ) {
            await this.userService.update({
                where: {
                    Email: userData.Email,
                },
                data: {
                    Password: await bcrypt.hash(cred.NewPassword, 10),
                },
            });

            // Response varsa Success
            return {
                Data: ResponseMessage.TR211,
                Success: true,
            };
        }

        throw new BadRequestException(
            BadRequestExceptionType.BAD_REQUEST,
            new Error(ResponseMessage.TR403),
            403,
        );
    }

    async profile(user: UserParamsDto): Promise<ResponseUserProfileUserDTO> {
        const response = await this.userService.findUnique({ Id: user.Id });

        delete response.Password;
        return response;
    }

    async updateProfile(user: UserParamsDto, data: UserProfileUpdateDto) {
        if (
            !data.BirthDate &&
            !data.Country &&
            !data.FirstName &&
            !data.Gender &&
            !data.LastName &&
            !data.Password &&
            !data.Phone &&
            !data.Username
        ) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR431),
                431,
            );
        }
        const userData = await this.userService.findUnique({
            Id: user.Id,
        });

        if (!userData) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR406),
                406,
            );
        }
        const response = await this.userService.update({
            where: {
                Email: userData.Email,
            },
            data,
        });

        return {
            Data: ResponseMessage.TR206,
            UserData: response,
            Success: true,
            statusCode: 206,
        };
    }

    async refreshUserToken(data: UserRefreshTokenDTO) {
        if (!data.RefreshToken) {
            throw new BadRequestException(
                BadRequestExceptionType.MISSING_FILE,
                new Error(ResponseMessage.TR442),
                442,
            );
        }
        const { AccessToken, RefreshToken, User } =
            await this.authService.refreshToken(data.RefreshToken, false);

        const expireTime = new Date(
            Date.now() + parseInt(this.authCfg.jwt_expired, 10) * 60 * 1000,
        );
        const expiretimeRefresh = new Date(
            Date.now() +
                parseInt(this.authCfg.jwt_refresh_expired, 10) * 60 * 1000,
        );

        const userToken = await this.userTokenService.findFirst({
            where: {
                UserId: User.Id,
                RefreshToken: data.RefreshToken,
            },
            include: {
                User: true,
            },
        });
        if (!userToken) {
            throw new HttpException(ResponseMessage.TR405, 401);
        }

        await this.userTokenService.update({
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
            if (!data.Code || !data.Token) {
                throw new AlreadyExistsException(
                    VerifyCodeExceptionType.NOT_VERIFIED,
                    new Error(ResponseMessage.TR404),
                    404,
                );
            }

            const payload = jwt.verify(data.Token, this.authCfg.jwt_secret);

            if (
                payload['mode'] === OTPType.ResetPassword &&
                !data.NewPassword
            ) {
                throw new BadRequestException(
                    BadRequestExceptionType.BAD_REQUEST,
                    new Error(ResponseMessage.TR441),
                    441,
                );
            }
            if (
                typeof payload === 'object' &&
                'email' in payload &&
                data.Code
            ) {
                const user = await this.userService.findUnique({
                    Id: payload.Id,
                });

                if (!user) {
                    throw new NotFoundException(
                        ForbiddenExceptionType.FORBIDDEN,
                        new Error(ResponseMessage.TR406),
                        406,
                    );
                }

                const otpCode = await this.userOtpCodeService.find({
                    where: {
                        UserId: payload.Id,
                        Type: payload.mode,
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

                // if (otpCode[0].Attempts >= 5) {
                //     throw new BadRequestException(
                //         BadRequestExceptionType.BAD_REQUEST,
                //         new Error('Your trial count is over'),
                //     );
                // }

                let updatedUser;

                if (otpCode[0].Type === OTPType.ResetPassword) {
                    updatedUser = await this.userService.update({
                        where: {
                            Email: payload.email,
                        },
                        data: {
                            Password: await bcrypt.hash(data.NewPassword, 10),
                        },
                    });
                } else if (otpCode[0].Type === OTPType.VerifyEmail) {
                    updatedUser = await this.userService.update({
                        where: {
                            Email: payload.email,
                        },
                        data: {
                            IsEmailVerified: true,
                        },
                    });
                } else {
                    throw new OtpCodeNotFoundException(
                        VerifyCodeExceptionType.CODE_NOT_FOUND,
                        new Error(ResponseMessage.TR439),
                        439,
                    );
                }

                await this.userOtpCodeService.update({
                    where: {
                        Id: otpCode[0].Id,
                    },
                    data: {
                        IsDeleted: true,
                    },
                });

                const responseMessage =
                    payload.mode === OTPType.VerifyEmail
                        ? ResponseMessage.TR201
                        : ResponseMessage.TR211;

                return {
                    Email: updatedUser.Email,
                    Data: responseMessage,
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
                error.response.Error,
                new Error(error.response.Details),
                error.response.Code,
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
                409,
            );
        }
        if (user.IsEmailVerified && data.MailReason === OTPType.VerifyEmail) {
            throw new AlreadyExistsException(
                VerifyCodeExceptionType.VERIFIED,
                new Error(ResponseMessage.TR410),
                410,
            );
        }

        if (!(data.MailReason in MailModeType) || !data.Email) {
            throw new AlreadyExistsException(
                VerifyCodeExceptionType.VERIFIED,
                new Error(ResponseMessage.TR438),
                438,
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

        let subject;
        switch (data.MailReason) {
            case MailModeType.VerifyEmail:
                subject = "Trendsbooking'e hoşheldiniz";
                break;

            case MailModeType.ResetPassword:
                subject = 'Trendsbooking Şifre Sıfırlama İsteğiniz';
                break;

            default:
                throw new AlreadyExistsException(
                    AlreadyExistsExceptionType.NOT_EXIST,
                    new Error(ResponseMessage.TR437),
                    437,
                );
        }

        const options: SendEmailDto = {
            to: data.Email,
            html: `<h1>Doğrulama kodunuz: ${code}</h1>`,
            subject,
        };

        await this.mailUtilsService.sendEmail(options);

        const payload = {
            mode: data.MailReason,
            email: data.Email,
            Id: user.Id,
        };

        const token = jwt.sign(payload, this.authCfg.jwt_secret, {
            expiresIn: `${this.authCfg.codeValidationTime}m`,
        });

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
            Type: data.MailReason,
        });

        return {
            Email: user.Email,
            Data: ResponseMessage.TR212,
            Token: token,
            Success: true,
        };
    }

    async createRandevu(user: UserParamsDto, input: RandevuCreateDto) {
        if (!input.Service || !input.Worker || !input.Service) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR444),
                444,
            );
        }
        const data: Prisma.RandevuCreateInput = {
            Worker: {
                connect: {
                    Id: input.Worker,
                },
            },
            Service: {
                connect: {
                    Id: input.Service,
                },
            },
            User: {
                connect: {
                    Id: user.Id,
                },
            },
            StartTime: input.StartTime,
            EndTime: input.EndTime,
            Status: RandevuStatus.Waiting,
        };
        const response = await this.randevuService.create(data);
        return response;
    }

    async logout(cred: UserParamsDto) {
        const user = await this.userService.findFirst({
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

        const userToken = await this.userTokenService.findFirst({
            where: {
                UserId: cred.Id,
            },
            orderBy: { CreatedAt: 'desc' },
        });

        await this.userTokenService.update({
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

    async getdepartments(user: UserParamsDto, input: GetDepartmentsParamsDTO) {
        let where: Prisma.DepartmentWhereInput = {};
        if (input?.where) {
            input.where.City
                ? (where = { ...where, City: input.where?.City })
                : where;
            input.where.Country
                ? (where = { ...where, Country: input.where?.Country })
                : where;

            input.where.District
                ? (where = { ...where, District: input.where?.District })
                : where;

            input.where.Neighborhood
                ? (where = {
                      ...where,
                      Neighborhood: input.where?.Neighborhood,
                  })
                : where;

            input.where.Salon
                ? (where = { ...where, Salon: { contains: input.where.Salon } })
                : where;

            input.where.ServiceType
                ? (where = {
                      ...where,
                      ServiceType: { hasEvery: input.where?.ServiceType },
                  })
                : where;

            input.where.Sector
                ? (where = {
                      ...where,
                      Sector: { hasEvery: input.where.Sector },
                  })
                : where;
            // Service area
            // Starts
            input.where.Services?.ServiceName
                ? (where = {
                      ...where,
                      Services: {
                          some: {
                              ServiceName: input.where.Services.ServiceName,
                          },
                      },
                      //   Services: {
                      //       some: {
                      //           ServiceName: input.where.Services.ServiceName,
                      //       },
                      //   },
                  })
                : where;

            console.log(
                'where 2222222222',
                where,
                input.where.Services.ServiceGender,
            );
            input.where.Services?.ServiceGender
                ? (where = {
                      ...where,
                      Services: {
                          ...where.Services,
                          every: {
                              ServiceGender: input.where.Services.ServiceGender,
                          },
                      },
                  })
                : where;

            console.log(
                'where 2222222222',
                where,
                input.where.Services.ServiceGender,
            );
        }

        // Service area
        // Ends

        console.log('take', input.take, where);
        const response = await this.departmentsService.find({
            where: where,
            skip: input?.skip,
            take: input?.take,
        });
        // console.log('resss', response);
        return response;
    }

    // async getservices(cred: UserParamsDto) {
    //     20 km uzağımdaki berber slaonları

    //     Department

    //     filtreleme where (department.filter(saç kesimi == true))
    //     const response = await this.serviceService.find({});
    //     console.log('resss', response);
    //     return null;
    // }

    async cancelRandevu(user: UserParamsDto) {
        return null;
    }
    async detailsRandevu(user: UserParamsDto) {
        return null;
    }
}
