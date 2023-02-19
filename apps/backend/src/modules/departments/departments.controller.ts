import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Express } from 'express';
import { diskStorage, Multer } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

import { DepartmentsService } from './departments.service';

// Libs area
import { AllowUnauthorizedRequest, UserParam, RolesRequired } from '@shared';

// DTO area
import { UserParamsDto } from './../users/dtos/user-response.dto';
import {
    AddDepartmentsJsonDto,
    DepartmentDetailsJsonDto,
} from './dtos/departments.dto';

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
        @Body() input: AddDepartmentsJsonDto,
    ) {
        return this.departmentsService.add(user, input);
    }

    @RolesRequired(['Provider'])
    @Post('getdetails')
    async getWorkers(
        @UserParam() user: UserParamsDto,
        @Body() input?: DepartmentDetailsJsonDto,
    ) {
        return this.departmentsService.getdetails(user, input.Id);
    }

    @AllowUnauthorizedRequest()
    // @RolesRequired(['Provider'])
    @Post('addphotos')
    @UseInterceptors(
        FileInterceptor("file"))
      @ApiBody({
        required: true,
        type: "multipart/form-data",
        schema: {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "binary",
            },
          },
        },
      })
      @ApiConsumes("multipart/form-data")
    async addPhotos(
      // @UserParam() user: UserParamsDto,
      @UploadedFile() file: Express.Multer.File) {
        console.log("asdasdasd",file);

        const myimage = await Buffer.from(file.buffer).toString('base64');
        const mimeType = 'image/jpeg'

        // await this.departmentsService.addphotos(user, file)
        return `<html><body><img src="data:${mimeType};base64,${myimage}" /></body></html>`
    }

}
