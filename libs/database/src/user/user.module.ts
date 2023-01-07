import { KeypairModule } from '@shared';
import { PrismaModule } from '@database';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
    imports: [PrismaModule, KeypairModule],
    exports: [UserService],
    providers: [UserService],
})
export class UserModule {}
