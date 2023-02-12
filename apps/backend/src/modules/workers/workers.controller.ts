import { AllowUnauthorizedRequest, RolesRequired, UserParam } from '@shared/decorators';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserParamsDto } from '../users/dtos';
import { WorkersService } from './workers.service';
import { WorkersAddJsonDto, WorkersGetJsonDto } from './dtos/workers.dto';

@Controller('workers')
export class WorkersController {
    constructor(private readonly workersService: WorkersService) {}

    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedCompanyUser() {
        return 'test departments page';
    }

    @RolesRequired(['Provider'])
    @Post('getdetails')
    async getDetails(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersGetJsonDto
        ) {
        return this.workersService.getDetails(user,input.WorkerId);
    }

    @RolesRequired(['Provider'])
    @Post('addworkers')
    async addworker(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersAddJsonDto
        ) {
        return this.workersService.addworker(user,input);
    }

    @RolesRequired(['Provider'])
    @Post('deleteworker')
    async deleteworker(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersGetJsonDto
        ) {
        return this.workersService.deleteworker(user,input);
    }


}
