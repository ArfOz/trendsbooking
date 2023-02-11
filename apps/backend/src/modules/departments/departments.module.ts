import { KeypairModule } from './../../../../../libs/shared/src/modules/keypair/keypair.module';
import { PrismaService } from './../../../../../libs/database/src/prisma/prisma.service';
import { DepartmentService } from '@database';
import { Module } from '@nestjs/common';
import { DepartmentController } from './departments.controller';
import { DepartmentsService } from './departments.service';

@Module({
    imports:[KeypairModule],
    providers: [DepartmentsService, DepartmentService, PrismaService],
    controllers: [DepartmentController],

})
export class DepartmentsModule {}
