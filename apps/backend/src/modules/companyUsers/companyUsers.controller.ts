import { Controller, Post, Body } from '@nestjs/common';
import { AllowUnauthorizedRequest } from '@shared/decorators';
import { CreateCompanyUserJsonDto } from './dtos';

@Controller('companyUsers')
export class CompanyUsersController {
    constructor(private readonly CompanyUsersService: CompanyUsersService) {}


    @AllowUnauthorizedRequest()
    @Post('register')
    async registerWithEmail(@Body() input: CreateCompanyUserJsonDto) {
        return this.CompanyUsersService.register(input);
    }
}
