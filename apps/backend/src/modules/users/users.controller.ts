import { UserParam } from '@shared';
import { CreateUserJsonDto, UserPayloadDto } from '@auth';
import { LoginUserDto } from '@database';
import { UsersService } from './users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AllowUnauthorizedRequest } from '@shared/decorators';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedUser() {
        return 'test page';
    }

    @AllowUnauthorizedRequest()
    @Post('register')
    async registerWithEmail(@Body() input: CreateUserJsonDto) {
        return this.UsersService.register(input);
    }

    @AllowUnauthorizedRequest()
    @Post('login')
    login(@Body() data: LoginUserDto) {
        return this.UsersService.loginUser(data);
    }

    @Get('userprofile')
    userProfile(@UserParam() user: UserPayloadDto) {
        return this.UsersService.userProfile(user);
    }

    @AllowUnauthorizedRequest()
    @Post('refreshusertoken')
    refreshUserToken(@Body('RefreshToken') refreshToken: string) {
        return this.UsersService.refreshUserToken(refreshToken);
    }
}
