import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserOtpCodeModule } from './user-otp-code/user-otp-code.module';
import { CompanyUserModule } from './company-user';
import { DepartmentModule } from './department/department.module';
import { WorkerModule } from './worker/worker.module';
import { DepartmentPhotosModule } from './department-photos/department-photos.module';

@Module({
    imports: [
        ConfigModule,
        PrismaModule,
        UserModule,
        UserOtpCodeModule,
        DepartmentModule,
        CompanyUserModule,
        WorkerModule,
        DepartmentPhotosModule,
    ],
    providers: [PrismaModule, UserModule, UserOtpCodeModule, DepartmentModule],
    exports: [PrismaModule, UserModule, UserOtpCodeModule, DepartmentModule],
})
export class DatabaseModule {}
