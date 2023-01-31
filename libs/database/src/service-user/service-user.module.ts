import { Module } from '@nestjs/common';
import { ServiceUserService } from './service-user.service';

@Module({
    providers: [ServiceUserService],
})
export class ServiceUserModule {}
