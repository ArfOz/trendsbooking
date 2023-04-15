import { ApiProperty } from '@nestjs/swagger/dist';
import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsObject,
    IsOptional,
    IsArray,
    IsEmail,
} from 'class-validator';

export enum WorkerRoles {
    WorkerBasic = 'WorkerBasic',
    WorkerAdmin = 'WorkerAdmin',
}

export enum WorkerRole {
    WorkerBasic = 'WorkerBasic',
    WorkerAdmin = 'WorkerAdmin',
}
export class WorkTime {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
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

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Days: number;
}

export class WorkersAddJsonDto {
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

export class WorkersGetJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    WorkerId: number;
}

export class Service {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    ServiceId?: number | null;
}
export class WorkersUpdateJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    WorkerId?: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    FirstName?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    LastName?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Phone?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Email?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Password?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Role?: WorkerRole;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    WorkTime?: WorkTime;

    // ServiceWorker?: ServiceWorkerUpdateManyWithoutWorkerNestedInput;
    // Randevu?: RandevuUpdateManyWithoutWorkerNestedInput;
}

export class WorkerLoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Password: string;
}
