import { Module, forwardRef } from '@nestjs/common';

import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';

// Libs area
import { PrismaService, WorkerService } from '@database';
import { KeypairModule } from '@shared';
import { AuthModule } from '@auth';

@Module({
    imports: [KeypairModule, forwardRef(() => AuthModule)],
    providers: [WorkersService, WorkerService, PrismaService],
    controllers: [WorkersController],
})
export class WorkersModule {}
