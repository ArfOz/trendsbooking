import { PrismaModule } from '@database/prisma';
import { Module } from '@nestjs/common';
import { KeypairModule } from '@shared';
import { DepartmentService } from './department.service';

@Module({
    imports: [PrismaModule, KeypairModule],
    exports: [DepartmentService],
    providers: [DepartmentService],
})
export class DepartmentModule {}
