import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
    AllowUnauthorizedRequest,
    StaticTokenRequired,
    UserParam,
    RolesRequired
} from '@shared/decorators';
import { LoginUserDto, SendCodeDTO, UserParamsDto, VerifyCodeDTO } from '../users/dtos';
import { CompanyUsersService } from './companyUsers.service';
import {
    ActivateCompanyUserDto,
    CreateCompanyUserJsonDto,
    GetCompaniesWhereFilter,
} from './dtos';
// import { CreateCompanyUserJsonDto } from './dtos';

@ApiTags('CompanyUser')
@Controller('companyusers')
export class CompanyUsersController {
    constructor(private readonly companyUsersService: CompanyUsersService) {}

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
    async sendEmailCode(@Body() sendCode: SendCodeDTO) {
        return this.companyUsersService.sendEmailCode(sendCode);
    }

    @AllowUnauthorizedRequest()
    @Post('login')
    async login(@Body() data: LoginUserDto) {
        return this.companyUsersService.login(data);
    }

    @StaticTokenRequired()
    @Get('companies')
    async companies(@Body() data: GetCompaniesWhereFilter) {
        return this.companyUsersService.companies(data);
    }

    @StaticTokenRequired()
    @Post('activate')
    async activate(@Body() data: ActivateCompanyUserDto) {
        return this.companyUsersService.activate(data);
    }

    @RolesRequired(['Provider'])
    @Get('profile')
    async profile(@UserParam() user: UserParamsDto) {
        return this.companyUsersService.profile(user);
    }

    @Get('logout')
    async logout(@UserParam() user: UserParamsDto) {
        return this.companyUsersService.logout(user);
    }
}
