import { DatabaseModule } from './../../database/src/database.module';
import { UserModule } from './../../database/src/user/user.module';
import { PrismaService } from './../../database/src/prisma/prisma.service';
import { PrismaModule } from '@database';
import { Prisma } from '@prisma/client';
import authConfig from './config/auth.config';
import generalConfig from '@shared/config/general.config';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ConfigModule.forFeature(generalConfig),
        ConfigModule.forFeature(authConfig),
        PrismaModule,
        UserModule,
        DatabaseModule,
    ],
    exports: [AuthService],
    providers: [AuthService],
})
export class AuthModule {}
