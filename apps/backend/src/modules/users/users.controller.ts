import {
    RegisterUserJsonDto,
    VerifyCodeDTO,
    SendCodeDTO,
    UserParamsDto,
    LoginUserDto,
    UserProfileUpdateDto,
    UserRefreshTokenDTO,
    UserPassChangeDto,
} from './dtos';
import { UserParam } from '@shared';

import { UsersService } from './users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AllowUnauthorizedRequest, RolesRequired } from '@shared/decorators';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';

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

    @ApiBearerAuth('Authorization')
    @Post('changepassword')
    async updatePassword(
        @UserParam() user: UserParamsDto,
        @Body() data: UserPassChangeDto,
    ) {
        return this.usersService.changePassword(user, data);
    }

    @ApiBearerAuth('Authorization')
    @RolesRequired(['Normal'])
    @Get('profile')
    async profile(@UserParam() user: UserParamsDto) {
        return this.usersService.profile(user);
    }

    // Email update işlemi sonra eklenecek orada mail kontrolü de olacak. Yani maile bildirim gidecek.
    @ApiBearerAuth('Authorization')
    @Post('updateprofile')
    async updateProfile(
        @UserParam() user: UserParamsDto,
        @Body() data: UserProfileUpdateDto,
    ) {
        return this.usersService.updateProfile(user, data);
    }

    @RolesRequired(['Normal'])
    @ApiBearerAuth('Authorization')
    @Post('refreshtoken')
    async refreshUserToken(@Body() refreshToken: UserRefreshTokenDTO) {
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
    @ApiBearerAuth('Authorization')
    @Get('logout')
    async logout(@UserParam() user: UserParamsDto) {
        return this.usersService.logout(user);
    }
}
