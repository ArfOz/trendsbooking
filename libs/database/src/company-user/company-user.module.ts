import { PrismaModule } from '@database';
import { Module } from '@nestjs/common';
import { KeypairModule } from '@shared';
import { CompanyUserService} from './company-user.service';

@Module({
    imports: [PrismaModule, KeypairModule],
    exports: [CompanyUserService],
    providers: [CompanyUserService],
})
export class CompanyUserModule {}
