import { PrismaService } from '@database';
import { WorkerService } from './../../../../../libs/database/src/worker/worker.service';
import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';
import { KeypairModule } from '@shared';

@Module({
    imports:[KeypairModule],
    providers: [WorkersService, WorkerService, PrismaService],
    controllers: [WorkersController],
})
export class WorkersModule {}
