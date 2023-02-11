import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from '@database';
import { KeypairModule } from '@shared';
import { CompanyUserService} from './company-user.service';

@Module({
    imports: [KeypairModule],
    exports: [CompanyUserService],
    providers: [CompanyUserService, PrismaService],
})
export class CompanyUserModule {}
