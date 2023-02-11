import { PrismaService } from './../prisma/prisma.service';
import { PrismaModule } from '@database';
import { Module } from '@nestjs/common';
import { KeypairModule } from '@shared';
import { DepartmentService } from './department.service';
import { KeypairService } from './../../../shared/src/modules/keypair/keypair.service';

@Module({
    imports: [KeypairModule],
    exports: [DepartmentService],
    providers: [DepartmentService, PrismaService, KeypairService],
})
export class DepartmentModule {}
