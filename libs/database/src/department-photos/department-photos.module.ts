import { Module } from '@nestjs/common';
import { DepartmentPhotosService } from './department-photos.service';

@Module({
    providers: [DepartmentPhotosService],
})
export class DepartmentPhotosModule {}
