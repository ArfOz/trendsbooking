import { UserOtpCodeService } from '@database/user-otp-code/user-otp-code.service';
import authConfig from '@auth/config/auth.config';
import { AuthModule, AuthService } from '@auth';
import { PrismaService } from '@database';
import { KeypairModule } from '@shared';
import generalConfig from '@shared/config/general.config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MailUtilsModule } from '@mail-utils';
import { CompanyUsersController } from './companyUsers.controller';
import { CompanyUsersService } from './companyUsers.service';

@Module({
    imports: [
        KeypairModule,
        ConfigModule.forFeature(generalConfig),
        ConfigModule.forFeature(authConfig),
        AuthModule,
        MailUtilsModule
    ],
    controllers: [CompanyUsersController],
    providers: [PrismaService, CompanyUsersService, AuthService, UserOtpCodeService],
    exports: [CompanyUsersService],
})
export class CompanyUsersModule {}
