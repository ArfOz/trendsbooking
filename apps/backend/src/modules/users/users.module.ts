import { ConfigModule } from '@nestjs/config';
import { forwardRef, Module } from '@nestjs/common';

import { AuthModule, AuthService } from '@auth';
import { DatabaseModule, PrismaService, UserService, UserOtpCodeService } from '@database';
import { UsersService } from './users.service';
import { KeypairModule } from '@shared';
import { UsersController } from './users.controller';
import { MailUtilsModule } from '@mail-utils';
// Config settings
import generalConfig from '@shared/config/general.config';
import authConfig from '@auth/config/auth.config';

@Module({
    imports: [
        KeypairModule,
        ConfigModule.forFeature(generalConfig),
        ConfigModule.forFeature(authConfig),
        forwardRef(() => AuthModule),
        MailUtilsModule,
        forwardRef(() => DatabaseModule)
    ],
    providers: [UserService, PrismaService, UsersService, AuthService, UserOtpCodeService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}
