import { Module } from '@nestjs/common';
import { DepartmentController } from './departments.controller';
import { DepartmentsService } from './departments.service';

@Module({
    providers: [DepartmentsService],
    controllers: [DepartmentController],

})
export class DepartmentModule {}
