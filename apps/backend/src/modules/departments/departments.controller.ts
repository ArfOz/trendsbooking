import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    HttpException,
    HttpStatus,
    MaxFileSizeValidator,
    ParseFilePipe,
    ParseFilePipeBuilder,
    Post,
    UploadedFile,
    UseInterceptors,
    ValidationError,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiConsumes,
    ApiHeader,
    ApiTags,
} from '@nestjs/swagger';
import { Express } from 'express';
import { diskStorage, Multer } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

import { DepartmentsService } from './departments.service';

// Libs area
import {
    AllowUnauthorizedRequest,
    UserParam,
    RolesRequired,
    BadRequestException,
    BadRequestExceptionType,
    imageFileFilter,
} from '@shared';

// DTO area
import { UserParamsDto } from './../users/dtos/user-response.dto';
import {
    AddDepartmentsJsonDto,
    AddServiceJsonDto,
    AddWorkerJsonDto,
    DeleteServiceJsonDto,
    DepartmentDetailsJsonDto,
    DepartmentIdParamsDto,
    PhotosDeleteJsonDto,
    UpdateDepartmentsJsonDto,
    UpdateServiceJsonDto,
    UpdateWorkerJsonDto,
} from './dtos/departments.dto';
import { WorkersGetJsonDto } from '../workers/dtos/workers.dto';
import { extname } from 'path';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @Get('test')
    @AllowUnauthorizedRequest()
    getLoggedCompanyUser() {
        return 'test departments page';
    }

    @Post('add')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async add(
        @UserParam() user: UserParamsDto,
        @Body() input: AddDepartmentsJsonDto,
    ) {
        return this.departmentsService.add(user, input);
    }

    @Post('getdetails')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async getWorkers(
        @UserParam() user: UserParamsDto,
        @Body() input?: DepartmentDetailsJsonDto,
    ) {
        return this.departmentsService.getdetails(user, input);
    }

    @Post('updatedepartment')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async update(
        @UserParam() user: UserParamsDto,
        @Body() input: UpdateDepartmentsJsonDto,
    ) {
        return this.departmentsService.updateDepartments(user, input);
    }

    @Post('addphotos')
    @RolesRequired(['Provider'])
    @UseInterceptors(
        FileInterceptor('file', {
            fileFilter: imageFileFilter,
            limits: {
                fileSize: 10 * 1024 * 1024, //10 mb
            },
        }),
    )
    @ApiBody({
        required: true,
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @ApiConsumes('multipart/form-data')
    async addPhotos(
        @UserParam() user: UserParamsDto,
        @Body() data: DepartmentIdParamsDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const response = await this.departmentsService.addphotos(
            user,
            parseInt(data.DepartmentId),
            file,
        );

        return response;
    }

    @RolesRequired(['Provider'])
    @Get('getphotos')
    async getPhotos(@UserParam() user: UserParamsDto) {
        const response = await this.departmentsService.getphoto(user);

        return response;
    }

    @RolesRequired(['Provider'])
    @Post('deletephoto')
    async deletephotos(
        @UserParam() user: UserParamsDto,
        @Body() input: PhotosDeleteJsonDto,
    ) {
        return await this.departmentsService.deletePhoto(user, input);
    }

    @Post('addservice')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async addService(
        @UserParam() user: UserParamsDto,
        @Body() input: AddServiceJsonDto,
    ) {
        return this.departmentsService.addService(user, input);
    }

    @Post('updateservice')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async updateService(
        @UserParam() user: UserParamsDto,
        @Body() input: UpdateServiceJsonDto,
    ) {
        return this.departmentsService.updateService(user, input);
    }

    @Post('deleteservice')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async deleteService(
        @UserParam() user: UserParamsDto,
        @Body() input: DeleteServiceJsonDto,
    ) {
        return this.departmentsService.deleteService(user, input);
    }

    @Post('addworker')
    @RolesRequired(['Provider'])
    @UseInterceptors(
        FileInterceptor('file', {
            fileFilter: imageFileFilter,
            limits: {
                fileSize: 1 * 1024 * 1024, //1 mb
            },
        }),
    )
    @ApiBody({
        required: true,
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @ApiConsumes('multipart/form-data')
    @ApiBearerAuth('Authorization')
    async addWorker(
        @UploadedFile() file: Express.Multer.File,
        @UserParam() user: UserParamsDto,
        @Body() input: object,
    ) {
        const data = JSON.parse(input.input);
        console.log('data', data);
        return this.departmentsService.addworker(file, user, data);
    }

    @Post('updateworker')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async updateWorker(
        @UserParam() user: UserParamsDto,
        @Body() input: UpdateWorkerJsonDto,
    ) {
        return this.departmentsService.updateworker(user, input);
    }

    @Post('deleteworker')
    @RolesRequired(['Provider'])
    @ApiBearerAuth('Authorization')
    async deleteWorker(
        @UserParam() user: UserParamsDto,
        @Body() input: WorkersGetJsonDto,
    ) {
        return this.departmentsService.deleteworker(user, input);
    }
}
