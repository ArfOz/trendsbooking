
import authConfig from '@auth/config/auth.config';

import { DatabaseModule, PrismaService } from '@database';
import { KeypairModule } from '@shared';
import generalConfig from '@shared/config/general.config';
import { ConfigModule } from '@nestjs/config';
import { forwardRef, Module } from '@nestjs/common';
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
        // forwardRef(() => AuthModule),
    ],
    providers: [CompanyUsersService],
    controllers: [CompanyUsersController],
    exports: [CompanyUsersService],
})
export class CompanyUsersModule {}
