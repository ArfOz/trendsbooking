import { UserOtpCodeService } from '@database/user-otp-code/user-otp-code.service';
import authConfig from '@auth/config/auth.config';
import { AuthModule, AuthService } from '@auth';
import { PrismaService } from '@database';
import { KeypairModule } from '@shared';
import generalConfig from '@shared/config/general.config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MailUtilsModule } from '@mail-utils';
import { ServiceUsersController } from './serviceUsers.controller';
import { ServiceUsersService } from './serviceUsers.service';

@Module({
    imports: [
        KeypairModule,
        ConfigModule.forFeature(generalConfig),
        ConfigModule.forFeature(authConfig),
        AuthModule,
        MailUtilsModule
    ],
    controllers: [ServiceUsersController],
    providers: [PrismaService, ServiceUsersService, AuthService, UserOtpCodeService],
    exports: [ServiceUsersService],
})
export class ServiceUsersModule {}
