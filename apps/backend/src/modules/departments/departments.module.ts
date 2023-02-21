import { Module } from '@nestjs/common';

import { DepartmentController } from './departments.controller';
import { DepartmentsService } from './departments.service';

// Libs area
import { KeypairModule } from '@shared';
import { DepartmentPhotosService, DepartmentService, PrismaService } from '@database';

@Module({
    imports: [KeypairModule],
    providers: [DepartmentsService, DepartmentService, PrismaService, DepartmentPhotosService],
    controllers: [DepartmentController],
})
export class DepartmentsModule {}
