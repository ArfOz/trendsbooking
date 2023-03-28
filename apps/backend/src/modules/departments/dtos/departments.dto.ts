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

enum WorkerRoles {
    Normal = 'Normal',
    Admin = 'Admin',
}

enum ServiceGender {
    Male = 'Male',
    Female = 'Female',
    Unisex = 'Unisex',
}

export class WorkTime {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Id: number;

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
    ServiceTimes?: object;

    // Photos?: DepartmentPhotosUpdateManyWithoutDepartmentNestedInput
}

export class DepartmentDetailsJsonDto {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    Id: number;
}

export class DepartmentIdParamsDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    DepartmentId: string;
}

export class AddWorkerJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    DepartmentId: number;

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

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    WorkTime: WorkTime;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    Services?: object;
}

export class AddServiceJsonDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    ServiceType: ServiceTypeEnum;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ServiceName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ServiceTimes: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ServiceGender: ServiceGender;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Price: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Prim: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    Department?: number;
}

export class Services {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    ServiceId: number;
}

export class UpdateWorkerJsonDto {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    WorkerId?: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    FirstName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    LastName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Phone?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    DepartmentId?: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Roles?: WorkerRoles;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    WorkTime?: WorkTime;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    Services: Services;
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    ServiceWorkerId?: number;
}
