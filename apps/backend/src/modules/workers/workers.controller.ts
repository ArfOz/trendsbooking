import { AllowUnauthorizedRequest, RolesRequired, UserParam } from '@shared/decorators';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserParamsDto } from '../users/dtos';
import { WorkersService } from './workers.service';
import { WorkersAddJsonDto } from './dtos/workers.dto';

@Controller('workers')
export class WorkersController {
    constructor(private readonly workersService: WorkersService) {}

    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedCompanyUser() {
        return 'test departments page';
    }

    @RolesRequired(['Provider'])
    @Post('add')
    async add(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersAddJsonDto
        ) {
        return this.workersService.add(user,input);
    }
}
