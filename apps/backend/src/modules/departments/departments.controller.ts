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

//     @AllowUnauthorizedRequest()
//     @Post('add')
//     async registerWithEmail(@Body() input: CreateCompanyUserJsonDto) {
//         return this.departmentsService.add(input);
//     }
}
