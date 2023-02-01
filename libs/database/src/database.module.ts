import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserOtpCodeModule } from './user-otp-code/user-otp-code.module';
import { CompanyUserModule } from './company-user';

@Module({
    imports: [
        ConfigModule,
        PrismaModule,
        UserModule,
        UserOtpCodeModule,
        // CompanyUserModule,
    ],
    providers: [PrismaModule, UserModule, UserOtpCodeModule],
    exports: [PrismaModule, UserModule,  UserOtpCodeModule],
})
export class DatabaseModule {}
