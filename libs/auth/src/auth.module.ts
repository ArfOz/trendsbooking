import { Module, forwardRef } from '@nestjs/common';
import {
    DatabaseModule,
    UserModule,
    CompanyUserModule,
    UserOtpCodeModule,
} from '@database';
import { PrismaModule } from '@database';
import { MailUtilsService } from '@mail-utils';
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
        forwardRef(() => DatabaseModule),
        MailUtilsModule,
        UserModule,
        UserOtpCodeModule,
        CompanyUserModule,
    ],
    exports: [AuthService],
    providers: [AuthService, MailUtilsService],
})
export class AuthModule {}
