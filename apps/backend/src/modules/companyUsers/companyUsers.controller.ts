import { Controller, Post, Body, Get } from '@nestjs/common';
import { AllowUnauthorizedRequest } from '@shared/decorators';
import { CompanyUsersService } from './companyUsers.service';
import { CreateCompanyUserJsonDto } from './dtos';
// import { CreateCompanyUserJsonDto } from './dtos';

@Controller('companyusers')
export class CompanyUsersController {
    constructor(private readonly CompanyUsersService: CompanyUsersService
        ) {}


    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedCompanyUser() {
        return 'test company user page';
    }

    @AllowUnauthorizedRequest()
    @Post('register')
    async registerWithEmail(@Body() input: CreateCompanyUserJsonDto) {
        return this.CompanyUsersService.register(input);
    }
}
