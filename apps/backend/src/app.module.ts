import generalConfig from '@shared/config/general.config';
import { UsersModule } from './modules/users/users.module';
import { CompanyUsersModule } from './modules/companyUsers/companyUsers.module';
import { DatabaseModule } from '@database';
import { AuthGuard } from '@guard';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DepartmentModule } from './modules/departments/departments.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true,
            load: [generalConfig],
        }),
        DatabaseModule,
        UsersModule,
        CompanyUsersModule,
        DepartmentModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class AppModule {}
