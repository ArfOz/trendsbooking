import { CreateServiceUserJsonDto } from '@auth';
import { Controller, Post, Body } from '@nestjs/common';
import { AllowUnauthorizedRequest } from '@shared/decorators';

@Controller('serviceUsers')
export class ServiceUsersController {
    ServiceUsersService: any;
    //constructor(private readonly UsersService: UsersService) {}


    @AllowUnauthorizedRequest()
    @Post('register')
    async registerWithEmail(@Body() input: CreateServiceUserJsonDto) {
        return this.ServiceUsersService.register(input);
    }

}
