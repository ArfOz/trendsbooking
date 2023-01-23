import { OtpCodeNotFoundException } from './../../../../../libs/shared/src/exceptions/otpcode-not-found.exception';
import { IsEmail } from 'class-validator';
import { VerifyCodeExceptionType } from './../../../../../libs/shared/src/enums/exception.type';

import { ForbiddenException } from './../../../../../libs/shared/src/exceptions/forbidden.exception';
import { NotFoundException } from './../../../../../libs/shared/src/exceptions/not-found.exception';
import { VerifyCodeDTO } from './../../../../../libs/auth/src/dtos/user-verify-email.dto';
import * as jwt from 'jsonwebtoken';
import { MailUtilsService } from './../../../../../libs/mail-utils/src/mail-utils.service';
import { MailModeType } from './../../../../../libs/auth/src/enums/mailmode.enum';
import { UserResponseDto } from './../../../../../libs/auth/src/dtos/user-response.dto';
import { ExpiredReasonType, OTPType, User } from '@prisma/client';
import { UserPayloadDto, AuthService, CreateUserJsonDto } from '@auth';
import authConfig from '@auth/config/auth.config';
import { generate } from 'generate-password';
import { ConfigType } from '@nestjs/config';
import generalConfig from '@shared/config/general.config';
import {
    BadRequestException,
    BadRequestExceptionType,
    AlreadyExistsExceptionType,
    AlreadyExistsException,
    KeypairService,
    TrendsException,
    TokenExceptionType,
} from '@shared';
import { UserService, PrismaService, LoginUserDto } from '@database';
import { Injectable, Inject, HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserOtpCodeService } from '@database/user-otp-code/user-otp-code.service';
import { SendEmailDto } from 'libs/mail-utils/src/dtos';

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

    async register(input: CreateUserJsonDto): Promise<Object> {
        if (!input.CbFirst) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error('Please check the box!!!'),
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
                    'Email, Password, Phone, Username, Gender, FirstName, LastName, BirthDate and are required.',
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
            if(!user.IsEmailVerified){
                throw new AlreadyExistsException(
                    VerifyCodeExceptionType.NOT_VERIFIED,
                    new Error('Please verify your email account...'),
                ); 
            }
            else{
                throw new AlreadyExistsException(
                    AlreadyExistsExceptionType.USER_ALREADY_EXISTS,
                    new Error('Ooops... User already exists'),
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
        const code = parseInt(generate({
            numbers: true,
            symbols: false,
            uppercase: false,
            lowercase: false,
            length: 4,
        }));

        console.log('özkan', code);

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

        console.log('options', options);

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
            Data: 'Waiting email verification',
            Token: token,
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
                new Error(
                    'Wrong Password or Email',
                ),
            );
        }

        if (!user.IsEmailVerified) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(
                    'Please Verify Your Account',
                ),
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
                Token: {
                    AccessToken,
                    RefreshToken,
                    ExpireTime: ExpiresAccessToken,
                    ExpireTimeRefresh: ExpiresRefreshToken,
                    User: user,
                },
            };
        }

        throw new BadRequestException(
            BadRequestExceptionType.BAD_REQUEST,
            new Error(
                'Wrong Password or Email',
            ),
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
            throw new HttpException('Invalid refreshToken', 401);
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
            Token: {
                AccessToken,
                RefreshToken,
                ExpireTime: expireTime,
                ExpireTimeRefresh: expiretimeRefresh,
                User,
            },
        };
    }

    async verifyCode(data: VerifyCodeDTO) {
        try {
            const payload = jwt.verify(data.Token, this.authCfg.jwt_secret);
            if (typeof payload === 'object' && 'email' in payload && data.Code) {
                let user = await this.userService.get({
                    Id: payload.Id,
                    
                });

                if (!user) {
                    throw new NotFoundException(new Error('User not found'));
                }

                const otpCode = await this.userOtpCodeService.find({
                    where: {
                        UserId: payload.Id,
                        Type: OTPType.VerifyEmail,
                        Code: data.Code,
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
                    throw new OtpCodeNotFoundException(new Error('Geçersiz Kod'));
                }
        
                if (otpCode[0].Attempts >= 5) {
                    throw new BadRequestException(
                        BadRequestExceptionType.BAD_REQUEST,
                        new Error('Your trial count is over'),
                    );
                }
                console.log("userotp", otpCode)

                user = await this.userService.update({
                    where: {
                        Id: payload.Id,
                    },
                    data: {
                        IsEmailVerified: true,
                    },
                });
                await this.userOtpCodeService.update({
                    where:{
                        Id: otpCode[0].Id, 
                    },
                   data:{
                    IsDeleted: true,
                   }
                });

                return {
                    Email: user.Email,
                    Data: 'Your email is verificated'
                };
            }
        } catch (error) {
            if (error?.name === 'TokenExpiredError') {
                throw new TrendsException(
                    TokenExceptionType.EXPIRED_TOKEN,
                    400,
                    new Error('Email confirmation token expired'),
                );
            }

            throw new TrendsException(
                TokenExceptionType.EXPIRED_TOKEN,
                400,
                new Error(error),
            );
        }
    }

    async sendEmailCode(email:string){

        const user = await this.userService.findFirst({
            where: { Email: email },
        });

        if(!user){
            throw new AlreadyExistsException(
                AlreadyExistsExceptionType.NOT_EXIST,
                new Error('No Email... Please Register.'),
            );
        }
        if(user.IsEmailVerified){
            throw new AlreadyExistsException(
                VerifyCodeExceptionType.VERIFIED,
                new Error('You Account Is Verified'),
            ); 
        }
        // Verification code
        const code = parseInt(generate({
            numbers: true,
            symbols: false,
            uppercase: false,
            lowercase: false,
            length: 4,
        }));

        console.log('özkan', code);

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
            to: email,
            html: `<h1>Doğrulama kodunuz: ${code}</h1>`,
            subject: "Trendsbooking'e hoşheldiniz",
        };

        console.log('options', options);

        await this.mailUtilsService.sendEmail(options);

        const payload = {
            mode: MailModeType.VerifyEmail,
            email: email,
            Id: user.Id,
        };

        const token = jwt.sign(payload, this.authCfg.jwt_secret, {
            expiresIn: `${this.authCfg.codeValidationTime}m`,
        });

        return {
            Email: user.Email,
            Data: 'Waiting email verification',
            Token: token,
        };
    }
}
