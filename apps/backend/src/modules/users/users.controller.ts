import { RegisterUserJsonDto, VerifyCodeDTO, SendCodeDTO, UserParamsDto, LoginUserDto} from './dtos';
import { UserParam } from '@shared';

import { UsersService } from './users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AllowUnauthorizedRequest } from '@shared/decorators';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('User')
@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @AllowUnauthorizedRequest()
    @Get('testuser')
    getLoggedUser() {
        return 'test page';
    }

    @AllowUnauthorizedRequest()
    @Post('register')
    async registerWithEmail(@Body() input: RegisterUserJsonDto) {
        return this.UsersService.register(input);
    }

    @AllowUnauthorizedRequest()
    @Post('login')
    async login(@Body() data: LoginUserDto) {
        return this.UsersService.loginUser(data);
    }

    @Get('userprofile')
    async userProfile(@UserParam() user: UserParamsDto) {
        return this.UsersService.userProfile(user);
    }

    @AllowUnauthorizedRequest()
    @Post('refreshusertoken')
    async refreshUserToken(@Body('RefreshToken') refreshToken: string) {
        return this.UsersService.refreshUserToken(refreshToken);
    }

    @AllowUnauthorizedRequest()
    @Post('verifycode')
    async verifyCode(@Body() verifyCode: VerifyCodeDTO) {
        return this.UsersService.verifyCode(verifyCode);
    }

    @AllowUnauthorizedRequest()
    @Post('sendcode')
    async sendEmailCode(@Body() sendCode: SendCodeDTO) {
        return this.UsersService.sendEmailCode(sendCode);
    }

    @Get('logout')
    async logout(@UserParam() user: UserParamsDto) {
        return this.UsersService.logout(user);
    }
}
