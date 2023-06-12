import { CompanyUserParamsDto } from './../../companyUsers/dtos/companyUser-response.dto';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    IsOptional,
    IsBoolean,
    IsObject,
    IsDateString,
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
    WorkerBasic = 'WorkerBasic',
    WorkerAdmin = 'WorkerAdmin',
}

enum ServiceGender {
    Male = 'Male',
    Female = 'Female',
    Unisex = 'Unisex',
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

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Days: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Holiday?: boolean | null;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    Date?: Date | string | null;
}

export class ServicesUpdate {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ServiceType: ServiceTypeEnum;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ServiceName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ServiceTimes: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ServiceGender: ServiceGender;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Price: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Prim: string;
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

    @ApiProperty({ enum: ServiceTypeEnum })
    @IsNotEmpty()
    @IsString()
    ServiceType: ServiceTypeEnum;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    WorkTime: WorkTime;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    TaxNo: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    TaxAdmin: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    IBAN: string;

    @ApiProperty({ enum: ServiceGender })
    @IsNotEmpty()
    @IsString()
    Sector?: ServiceGender;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Salon: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Country: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    City: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    District: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Neighborhood: string;
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

    @ApiProperty({ enum: ServiceTypeEnum })
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

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    DepartmentId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Sector: ServiceGender;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    Services: ServicesUpdate;

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

    @ApiProperty({ enum: WorkerRoles })
    @IsNotEmpty()
    @IsString()
    Roles?: WorkerRoles;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Email?: string | null;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Password?: string | null;
}

export class AddWorkerFormData {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    input: string;
}

export class AddServiceJsonDto {
    @ApiProperty({ enum: ServiceTypeEnum })
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

    @ApiProperty({ enum: ServiceGender })
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
    DepartmentId?: number;
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
    Id?: number;

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

    @ApiProperty({ enum: WorkerRoles })
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

export class UpdateServiceJsonDto {
    @ApiProperty({ enum: ServiceTypeEnum })
    @IsOptional()
    @IsString()
    ServiceType?: ServiceTypeEnum;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ServiceName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ServiceTimes?: string;

    @ApiProperty({ enum: ServiceGender })
    @IsOptional()
    @IsString()
    ServiceGender?: ServiceGender;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Price?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Prim?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    DepartmentId?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    Id: number;
}

export class DeleteServiceJsonDto {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    DepartmentId?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    ServiceId: number;
}

export class PhotosDeleteJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Id?: number;
}
