import { PrismaModule } from '@database';
import { Module } from '@nestjs/common';
import { UserTokenService } from './user-token.service';

@Module({
    imports: [PrismaModule],
    exports: [UserTokenService],
    providers: [UserTokenService],
})
export class UserTokenModule {}
