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

enum ServiceTypeEnum{
    Hair="Hair",
    Nail="Nail",
    MakeUp="MakeUp",
    Massage="Massage",
    Wax="Wax",
    Solarium="Solarium",
    SkinCare="SkinCare",
    LaserHairRemoval="LaserHairRemoval",
    Tattoo="Tattoo",
    Others="Others"

}
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
    ServiceType: ServiceTypeEnum;
}

export class DepartmentDetailsJsonDto{

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    Id: number;

}

