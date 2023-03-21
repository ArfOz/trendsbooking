import { PrismaService } from '@database/prisma';
import { Module } from '@nestjs/common';
import { KeypairModule, KeypairService } from '@shared';
import { ServicesService } from './services.service';

@Module({
    imports: [KeypairModule],
    providers: [ServicesService, PrismaService, KeypairService],
})
export class ServicesModule {}
