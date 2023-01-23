import { UserOtpCodeModule } from './../../database/src/user-otp-code/user-otp-code.module';
import { MailUtilsService } from './../../mail-utils/src/mail-utils.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/src/database.module';
import { UserModule } from './../../database/src/user/user.module';
import { PrismaModule } from '@database';
import authConfig from './config/auth.config';
import generalConfig from '@shared/config/general.config';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { MailUtilsModule } from '@mail-utils';

@Module({
    imports: [
        ConfigModule.forFeature(generalConfig),
        ConfigModule.forFeature(authConfig),
        PrismaModule,
        UserModule,
        DatabaseModule,
        MailUtilsModule,
        UserOtpCodeModule,
    ],
    exports: [AuthService],
    providers: [AuthService, MailUtilsService],
})
export class AuthModule {}
