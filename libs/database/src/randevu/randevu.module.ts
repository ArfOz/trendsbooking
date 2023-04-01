import { Module } from '@nestjs/common';
import { RandevuService } from './randevu.service';
import { PrismaService } from '@database/prisma';

@Module({
    exports: [RandevuService],
    providers: [RandevuService, PrismaService],
})
export class RandevuModule {}
