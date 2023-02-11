
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import authConfig from '@auth/config/auth.config';
import { PrismaService, UserService, CompanyUserService, UserOtpCodeService  } from '@database';
import { KeypairModule } from '@shared';
import generalConfig from '@shared/config/general.config';
import { MailUtilsModule } from '@mail-utils';
import { CompanyUsersController } from './companyUsers.controller';
import { CompanyUsersService } from './companyUsers.service';
import { AuthModule } from '@auth';

@Module({
    imports: [
        KeypairModule,
        ConfigModule.forFeature(generalConfig),
        ConfigModule.forFeature(authConfig),
        // forwardRef(()=>DatabaseModule),

        forwardRef(() => AuthModule),
        MailUtilsModule,
    ],
    providers: [CompanyUsersService, CompanyUserService, PrismaService, UserService, UserOtpCodeService],
    controllers: [CompanyUsersController],
    exports: [CompanyUsersService],
})
export class CompanyUsersModule {}
