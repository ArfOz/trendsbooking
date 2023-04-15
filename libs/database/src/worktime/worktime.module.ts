import { Module } from '@nestjs/common';
import { WorkTimeService } from './worktime.service';
import { PrismaService } from '@database';

@Module({
    providers: [WorkTimeService, PrismaService],
})
export class WorktimeModule {}
