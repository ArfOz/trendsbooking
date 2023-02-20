import { PrismaService } from '@database';
import { Module } from '@nestjs/common';
import { KeypairModule } from '@shared';
import { WorkerService } from './worker.service';

@Module({
    imports: [KeypairModule],
    exports: [WorkerService],
    providers: [WorkerService, PrismaService],
})
export class WorkerModule {}
