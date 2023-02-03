import { Controller, Post, Body, Get } from '@nestjs/common';
import { AllowUnauthorizedRequest, StaticTokenRequired } from '@shared/decorators';
import { LoginUserDto, SendCodeDTO, VerifyCodeDTO } from '../users/dtos';
import { CompanyUsersService } from './companyUsers.service';
import { CreateCompanyUserJsonDto, GetCompaniesWhereFilter } from './dtos';
// import { CreateCompanyUserJsonDto } from './dtos';

@Controller('companyusers')
export class CompanyUsersController {
    constructor(private readonly companyUsersService: CompanyUsersService
        ) {}


    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedCompanyUser() {
        return 'test company user page';
    }

    @AllowUnauthorizedRequest()
    @Post('register')
    async registerWithEmail(@Body() input: CreateCompanyUserJsonDto) {
        return this.companyUsersService.register(input);
    }

    @AllowUnauthorizedRequest()
    @Post('verifycode')
    async verifyCode(@Body() verifyCode: VerifyCodeDTO) {
        return this.companyUsersService.verifyCode(verifyCode);
    }

    @AllowUnauthorizedRequest()
    @Post('sendcode')
    sendEmailCode(@Body() sendCode: SendCodeDTO) {
        return this.companyUsersService.sendEmailCode(sendCode);
    }

    @AllowUnauthorizedRequest()
    @Post('login')
    login(@Body() data: LoginUserDto) {
        return this.companyUsersService.login(data);
    }


    @StaticTokenRequired()
    @Get('companies')
    companies(@Body() data: GetCompaniesWhereFilter){
        return this.companyUsersService.companies(data);
    }


    @StaticTokenRequired()
    @Post('activate')
    activate(@Body() data) {
        return this.companyUsersService.activate(data);
    }
}
