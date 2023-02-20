import { PrismaService } from './../prisma/prisma.service';
import { KeypairModule } from '@shared';
import { PrismaModule } from '@database';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
    imports: [KeypairModule],
    exports: [UserService],
    providers: [UserService, PrismaService],
})
export class UserModule {}
