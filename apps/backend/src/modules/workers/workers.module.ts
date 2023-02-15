import { Module } from '@nestjs/common';

import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';

// Libs area
import { PrismaService, WorkerService } from '@database';
import { KeypairModule } from '@shared';

@Module({
    imports: [KeypairModule],
    providers: [WorkersService, WorkerService, PrismaService],
    controllers: [WorkersController],
})
export class WorkersModule {}
