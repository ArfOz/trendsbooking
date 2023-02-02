import { SendEmailDto } from '@mail-utils';
import { OTPType } from '@prisma/client';
import { CreateCompanyUserJsonDto } from './dtos/companyUser-response.dto';
import { AuthService, MailModeType } from '@auth';
import authConfig from '@auth/config/auth.config';
import {
    PrismaService,
    UserOtpCodeService,
    UserService,
    CompanyUserService,
} from '@database';
import { MailUtilsService } from '@mail-utils';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
    AlreadyExistsException,
    AlreadyExistsExceptionType,
    BadRequestExceptionType,
    KeypairService,
    VerifyCodeExceptionType,
} from '@shared';
import generalConfig from '@shared/config/general.config';
import ResponseMessage from '@shared/enums/response-message.json';
import { BadRequestException } from '@shared';
import * as bcrypt from 'bcrypt';
import { generate } from 'generate-password';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CompanyUsersService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
        @Inject(authConfig.KEY)
        private readonly authCfg: ConfigType<typeof authConfig>,
        // private readonly prismaService: PrismaService,
        private readonly companyUserService: CompanyUserService,
        private readonly userService: UserService,
        private readonly keypairService: KeypairService,
        // private readonly authService: AuthService,
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
            !input.Phone ||
            !input.Username ||
            !input.FirstName ||
            !input.LastName
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
        const newUser = await this.companyUserService.create({
            Email: input.Email,
            FirstName: input.FirstName,
            LastName: input.LastName,
            Username: input.Username,
            Phone: input.Phone,
            CbFirst: input.CbFirst,
            Country: input.Country,
            CreatedAt: new Date(),
            UpdatedAt: new Date(),
            Password: await bcrypt.hash(input.Password, 10),
            PrivateKey: privKey,
            PublicKey: pubKey,
            City: input.City,
            District: input.District,
            IBAN: input.IBAN,
            Neighborhood: input.Neighborhood,
            Salon: input.Salon,
            TaxAdmin: input.TaxAdmin,
            TaxNo: input.TaxNo,
            TCKN: input.TCKN,
            Sector: input.Sector,
            IsActive: false,
        });

        // Verification code
        const code = 
            generate({
                numbers: true,
                symbols: false,
                uppercase: false,
                lowercase: false,
                length: 4,
            })
        ;

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
}
