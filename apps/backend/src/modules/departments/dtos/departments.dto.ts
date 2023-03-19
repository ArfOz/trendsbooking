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

enum ServiceTypeEnum {
    Hair = 'Hair',
    Nail = 'Nail',
    MakeUp = 'MakeUp',
    Massage = 'Massage',
    Wax = 'Wax',
    Solarium = 'Solarium',
    SkinCare = 'SkinCare',
    LaserHairRemoval = 'LaserHairRemoval',
    Tattoo = 'Tattoo',
    Others = 'Others',
}

export class WorkTime {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    MorningStartAt: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    MorningEndAt: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ShiftStart: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ShiftEnd: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    NightStartAt: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    NightEndAt: string;
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

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    WorkTime: WorkTime;
}

export class UpdateDepartmentsJsonDto {
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

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    WorkTime: WorkTime;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    ServiceTimes?: object

    // Photos?: DepartmentPhotosUpdateManyWithoutDepartmentNestedInput
    
}

export class DepartmentDetailsJsonDto {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    Id: number;
}

export class DepartmentIdParamsDto{
    @ApiProperty()
    @IsOptional()
    @IsString()
    DepartmentId: string
}
