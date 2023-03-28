import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    HttpStatus,
    MaxFileSizeValidator,
    ParseFilePipe,
    ParseFilePipeBuilder,
    Post,
    UploadedFile,
    UseInterceptors,
    ValidationError,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Express } from 'express';
import { diskStorage, Multer } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

import { DepartmentsService } from './departments.service';

// Libs area
import {
    AllowUnauthorizedRequest,
    UserParam,
    RolesRequired,
    BadRequestException,
    BadRequestExceptionType,
} from '@shared';

// DTO area
import { UserParamsDto } from './../users/dtos/user-response.dto';
import {
    AddDepartmentsJsonDto,
    AddServiceJsonDto,
    AddWorkerJsonDto,
    DepartmentDetailsJsonDto,
    DepartmentIdParamsDto,
    UpdateDepartmentsJsonDto,
    UpdateWorkerJsonDto,
} from './dtos/departments.dto';
import { WorkersGetJsonDto } from '../workers/dtos/workers.dto';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @AllowUnauthorizedRequest()
    @Get('test')
    getLoggedCompanyUser() {
        console.log('test sayfası');
        return 'test departments page';
    }

    @RolesRequired(['Provider'])
    @Post('add')
    async add(
        @UserParam() user: UserParamsDto,
        @Body() input: AddDepartmentsJsonDto,
    ) {
        return this.departmentsService.add(user, input);
    }

    @RolesRequired(['Provider'])
    @Post('updatedepartment')
    async update(
        @UserParam() user: UserParamsDto,
        @Body() input: UpdateDepartmentsJsonDto,
    ) {
        return this.departmentsService.updateDepartments(user, input);
    }

    @RolesRequired(['Provider'])
    @Post('addservice')
    async addService(
        @UserParam() user: UserParamsDto,
        @Body() input: AddServiceJsonDto,
    ) {
        return this.departmentsService.addService(user, input);
    }

    @RolesRequired(['Provider'])
    @Post('addworker')
    async addWorker(
        @UserParam() user: UserParamsDto,
        @Body() input: AddWorkerJsonDto,
    ) {
        return this.departmentsService.addworker(user, input);
    }

    @RolesRequired(['Provider'])
    @Post('updateworker')
    async updateWorker(
        @UserParam() user: UserParamsDto,
        @Body() input: UpdateWorkerJsonDto,
    ) {
        return this.departmentsService.updateworker(user, input);
    }

    @RolesRequired(['Provider'])
    @Post('deleteworker')
    async deleteWorker(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersGetJsonDto,
    ) {
        return this.departmentsService.deleteworker(user, input);
    }

    @RolesRequired(['Provider'])
    @Post('getdetails')
    async getWorkers(
        @UserParam() user: UserParamsDto,
        @Body() input?: DepartmentDetailsJsonDto,
    ) {
        return this.departmentsService.getdetails(user, input.Id);
    }

    // // Resim kalitesi düşürülecek.
    // // @AllowUnauthorizedRequest()
    // @RolesRequired(['Provider'])
    // @Post('addphotos')
    // @UseInterceptors(FileInterceptor('file'))
    // @ApiBody({
    //     required: true,
    //     type: 'multipart/form-data',
    //     schema: {
    //         type: 'object',
    //         properties: {
    //             file: {
    //                 type: 'string',
    //                 format: 'binary',
    //             },
    //         },
    //     },
    // })
    // @ApiConsumes('multipart/form-data')
    // async addPhotos(
    //     @UserParam() user: UserParamsDto,
    //     @Body() data: DepartmentIdParamsDto,
    //     @UploadedFile() file: Express.Multer.File,
    // ) {
    //     const response = await this.departmentsService.addphotos(
    //         user,
    //         parseInt(data.DepartmentId),
    //         file,
    //     );

    //     // return `<html><body><img src="data:${response.data.MimeType};base64,${response.data.ImageBuffer}" /></body></html>`;

    //     return response;
    // }

    // @RolesRequired(['Provider'])
    // @Get('getphotos')
    // async getPhotos(){

    //     const response = await this.departmentsService.getphoto(
    //     );

    // }
}
