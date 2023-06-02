import { Body, Controller, Get, Post } from '@nestjs/common';
import { AllowUnauthorizedRequest, RolesRequired, UserParam } from '@shared';
import { UserParamsDto } from '../users/dtos';
import { WorkersService } from './workers.service';
import {
    RandevuUpdateDTO,
    WorkerLoginDto,
    WorkerPassChangeDto,
    WorkersAddJsonDto,
    WorkersGetJsonDto,
    WorkersUpdateJsonDto,
} from './dtos/workers.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Workers')
@Controller('workers')
export class WorkersController {
    constructor(private readonly workersService: WorkersService) {}

    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedCompanyUser() {
        return 'test departments page';
    }

    @AllowUnauthorizedRequest()
    @Post('login')
    async login(@Body() data: WorkerLoginDto) {
        return this.workersService.login(data);
    }

    @ApiBearerAuth('Authorization')
    @Post('changepassword')
    async updatePassword(@Body() data: WorkerPassChangeDto) {
        return this.workersService.changePass(data);
    }

    @RolesRequired(['Provider', 'WorkerAdmin', 'WorkerBasic'])
    @ApiBearerAuth('Authorization')
    @Post('getdetails')
    async getDetails(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersGetJsonDto,
    ) {
        return this.workersService.getDetails(user, input.WorkerId);
    }

    @RolesRequired(['Provider', 'WorkerAdmin', 'WorkerBasic'])
    @ApiBearerAuth('Authorization')
    @Post('updateworker')
    async updateworker(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersUpdateJsonDto,
    ) {
        return this.workersService.updateWorker(user, input);
    }

    @RolesRequired(['Provider', 'WorkerAdmin'])
    @ApiBearerAuth('Authorization')
    @Post('deleteworker')
    async deleteworker(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersGetJsonDto,
    ) {
        return this.workersService.deleteWorker(user, input);
    }

    @RolesRequired(['Provider', 'WorkerAdmin', 'WorkerBasic'])
    @ApiBearerAuth('Authorization')
    @Get('getrandevu')
    async getrandevu(@UserParam() user: UserParamsDto) {
        return this.workersService.getrandevu(user);
    }

    @RolesRequired(['Provider', 'WorkerAdmin', 'WorkerBasic'])
    @ApiBearerAuth('Authorization')
    @Post('approverandevu')
    async approverandevu(
        @UserParam() user: UserParamsDto,
        @Body() input: RandevuUpdateDTO,
    ) {
        return this.workersService.approverandevu(user, input);
    }
}
