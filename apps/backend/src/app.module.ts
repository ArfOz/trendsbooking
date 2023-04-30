import { UsersModule } from './modules/users/users.module';
import { CompanyUsersModule } from './modules/companyUsers/companyUsers.module';
import { DatabaseModule } from '@database';
import { AuthGuard } from '@guard';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DepartmentsModule } from './modules/departments/departments.module';
import { WorkersModule } from './modules/workers/workers.module';
import authConfig from '@auth/config/auth.config';
import generalConfig from '@shared/config/general.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true,
            load: [generalConfig, authConfig],
        }),
        DatabaseModule,
        UsersModule,
        CompanyUsersModule,
        DepartmentsModule,
        WorkersModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class AppModule {}
