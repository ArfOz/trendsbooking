import { ServicesService } from './../../../../../libs/database/src/services/services.service';
import { Module } from '@nestjs/common';

import { DepartmentController } from './departments.controller';
import { DepartmentsService } from './departments.service';

// Libs area
import { KeypairModule, ImageServerService } from '@shared';
import {
    DepartmentPhotosService,
    DepartmentService,
    PrismaService,
    WorkerService,
} from '@database';

@Module({
    imports: [KeypairModule],
    providers: [
        DepartmentsService,
        DepartmentService,
        PrismaService,
        DepartmentPhotosService,
        ImageServerService,
        WorkerService,
        ServicesService,
    ],
    controllers: [DepartmentController],
})
export class DepartmentsModule {}
