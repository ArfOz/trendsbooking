import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserOtpCodeModule } from './user-otp-code/user-otp-code.module';
import { ServiceUserModule } from './service-user/service-user.module';

@Module({
    imports: [
        ConfigModule,
        PrismaModule,
        UserModule,
        UserOtpCodeModule,
        ServiceUserModule,
    ],
    providers: [PrismaModule, UserModule],
    exports: [PrismaModule, UserModule],
})
export class DatabaseModule {}
