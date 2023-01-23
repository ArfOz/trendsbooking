import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserOtpCodeService } from './user-otp-code.service';

@Module({
    imports: [PrismaModule],
    exports: [UserOtpCodeService],
    providers: [UserOtpCodeService],
})
export class UserOtpCodeModule {}
