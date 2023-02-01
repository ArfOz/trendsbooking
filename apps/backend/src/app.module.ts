import generalConfig from '@shared/config/general.config';
import { UsersModule } from './modules/users/users.module';
import { CompanyUsersModule } from './modules/companyUsers/companyUsers.module';
import { DatabaseModule } from '@database';
import { AuthGuard } from '@guard';
import { Module } from '@nestjs/common';
import { TestModule } from './modules/test/test.module';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true,
            load: [generalConfig],
        }),
        TestModule,
        UsersModule,
        DatabaseModule,
        CompanyUsersModule
    ],

    controllers: [],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class AppModule {}
