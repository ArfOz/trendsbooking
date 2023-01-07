import { UserModule } from '@database/user/user.module';
import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Module({
    imports: [UserModule],
    controllers: [],
    providers: [AuthGuard],
    exports: [AuthGuard],
})
export class GuardModule {}
