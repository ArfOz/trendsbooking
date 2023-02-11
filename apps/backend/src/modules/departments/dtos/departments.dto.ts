import { CompanyUserParamsDto } from './../../companyUsers/dtos/companyUser-response.dto';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    IsOptional,
    IsBoolean,
    IsObject,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WorkerCreateJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    FirstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    LastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Phone: string;
}

export class AddDepartmentsJsonDto {
    @ApiProperty()
    @IsOptional()
    @IsObject()
    Workers: WorkerCreateJsonDto;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Salon: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ServiceType: string;
}
