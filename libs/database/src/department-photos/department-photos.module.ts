import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { KeypairModule, KeypairService } from '@shared';
import { DepartmentPhotosService } from './department-photos.service';

@Module({
    imports: [KeypairModule],
    exports: [DepartmentPhotosService],
    providers: [DepartmentPhotosService, PrismaService, KeypairService],
})
export class DepartmentPhotosModule {}
