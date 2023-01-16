import { ExpiredReasonType } from '@prisma/client';
import { UserResponseDto } from './../../../../../libs/auth/src/dtos/user-response.dto';
import { UserPayloadDto, AuthService, CreateUserJsonDto } from '@auth';
import authConfig from '@auth/config/auth.config';
import { ConfigType } from '@nestjs/config';
import generalConfig from '@shared/config/general.config';
import {
    BadRequestException,
    BadRequestExceptionType,
    AlreadyExistsExceptionType,
    AlreadyExistsException,
    KeypairService,
    TrendsException,
} from '@shared';
import { UserService, PrismaService, LoginUserDto } from '@database';
import { Injectable, Inject, HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

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

    async register(input: CreateUserJsonDto): Promise <UserResponseDto>{

        if (!input.CbFirst) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error('Please check the box!!!'),

                // Error code gönderilir
                // ErrorCode.201(asdsad)
            );
        }

        if (!input.Email || !input.Password || !input.Phone || !input.Username || !input.Gender || !input.FirstName || !input.LastName || !input.BirthDate) {
            throw new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error('Email, Password, Phone, Username, Gender, FirstName, LastName, BirthDate are required.'),
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
            throw new AlreadyExistsException(
                AlreadyExistsExceptionType.USER_ALREADY_EXISTS,
                new Error('Ooops... User already exists')
            );
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
        const response = await this.userService.create({
            Email: input.Email,
            FirstName: input.FirstName,
            LastName: input.LastName ,
            Username: input.Username,
            BirthDate: new Date(input.BirthDate),
            Phone: input.Phone,
            CbFirst:input.CbFirst,
            Country: input.Country,
            Gender:input.Gender,

            Password: await bcrypt.hash(input.Password, 10),
            PrivateKey: privKey,
            PublicKey: pubKey,
        });

        return response;
    }

    async loginUser(cred: LoginUserDto) {
        const user = await this.userService.findFirst({
            where: {
                Email: cred.Email,
            },
        });

        if (!user) {
            throw new HttpException('Invalid credentials', 401);
        }

        // if (!user.IsEmailVerified) {
        //     throw new TrendsException('You need to verify your account', 400);
        // }

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

        throw new TrendsException('Password or Email is not correct', 400);
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
}
