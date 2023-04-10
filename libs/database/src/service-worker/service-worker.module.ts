import { PrismaService } from '@database/prisma';
import { Module } from '@nestjs/common';
import { ServiceWorkerService } from './service-worker.service';

@Module({
    providers: [ServiceWorkerService, PrismaService],
})
export class ServiceWorkerModule {}
