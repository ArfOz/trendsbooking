import { UserParam } from './../../../../../libs/shared/src/decorators/user.decorator';
import { UserParamsDto } from './../users/dtos/user-response.dto';
import { RolesRequired } from '@shared/decorators';
import { AddDepartmentsJsonDto } from './dtos/departments.dto';
import { AllowUnauthorizedRequest } from './../../../../../libs/shared/src/decorators/unauthorized-request.decorator';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentsService } from './departments.service';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedCompanyUser() {
        return 'test departments page';
    }

    @RolesRequired(['Provider'])
    @Post('add')
    async add(
        @UserParam() user: UserParamsDto,
        @Body() input: AddDepartmentsJsonDto
        ) {
        return this.departmentsService.add(user,input);
    }

    @RolesRequired(['Provider'])
    @Post('getdetails')
    async getWorkers(
        @UserParam() user: UserParamsDto,
        @Body() id?: number
        ) {
        return this.departmentsService.getdetails(user,id);
    }
}
