import authConfig from '@auth/config/auth.config';
import { AuthModule, AuthService } from '@auth';
import { PrismaService, UserService } from '@database';
import { UsersService } from './users.service';
import { KeypairModule } from '@shared';
import generalConfig from '@shared/config/general.config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
    imports: [
        KeypairModule,
        ConfigModule.forFeature(generalConfig),
        ConfigModule.forFeature(authConfig),
        AuthModule,
    ],
    controllers: [UsersController],
    providers: [UserService, PrismaService, UsersService, AuthService],
    exports: [UsersService],
})
export class UsersModule {}
