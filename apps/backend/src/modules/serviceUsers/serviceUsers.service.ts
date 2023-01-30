import * as jwt from 'jsonwebtoken';
import { MailUtilsService, SendEmailDto} from '@mail-utils';
import { OTPType } from '@prisma/client';
import { AuthService, MailModeType} from '@auth';
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
    VerifyCodeExceptionType 
} from '@shared';
import { UserService, PrismaService, UserOtpCodeService } from '@database';
import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import ResponseMessage  from '@shared/enums/response-message.json';
import { RegisterUserJsonDto } from '../users/dtos';

@Injectable()
export class ServiceUsersService {
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

    async register(input: RegisterUserJsonDto): Promise<object | Error> {
        if (!input.CbFirst) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR414),
                414,
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
            Data: 'Waiting email verification',
            Token: token,
        };
    }
}
