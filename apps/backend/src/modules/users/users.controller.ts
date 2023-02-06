import { RegisterUserJsonDto, VerifyCodeDTO, SendCodeDTO, UserParamsDto, LoginUserDto} from './dtos';
import { UserParam } from '@shared';

import { UsersService } from './users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AllowUnauthorizedRequest, RolesRequired } from '@shared/decorators';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('User')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @AllowUnauthorizedRequest()
    @Get('testuser')
    getLoggedUser() {
        return 'test page';
    }

    @AllowUnauthorizedRequest()
    @Post('register')
    async registerWithEmail(@Body() input: RegisterUserJsonDto) {
        return this.usersService.register(input);
    }

    @AllowUnauthorizedRequest()
    @Post('login')
    async login(@Body() data: LoginUserDto) {
        return this.usersService.loginUser(data);
    }

    @RolesRequired(['Normal'])
    @Get('profile')
    async profile(@UserParam() user: UserParamsDto) {
        return this.usersService.profile(user);
    }

    @RolesRequired(['Normal'])
    @AllowUnauthorizedRequest()
    @Post('refreshusertoken')
    async refreshUserToken(@Body('RefreshToken') refreshToken: string) {
        return this.usersService.refreshUserToken(refreshToken);
    }

    @AllowUnauthorizedRequest()
    @Post('verifycode')
    async verifyCode(@Body() verifyCode: VerifyCodeDTO) {
        return this.usersService.verifyCode(verifyCode);
    }

    @AllowUnauthorizedRequest()
    @Post('sendcode')
    async sendEmailCode(@Body() sendCode: SendCodeDTO) {
        return this.usersService.sendEmailCode(sendCode);
    }

    @RolesRequired(['Normal'])
    @Get('logout')
    async logout(@UserParam() user: UserParamsDto) {
        return this.usersService.logout(user);
    }
}
