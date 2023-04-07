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
    Basic = 'Basic',
    Admin = 'Admin',
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

    // Burası daha sonra düzenlenmeli Önemli
    @ApiProperty()
    @IsOptional()
    @IsObject()
    WorkTime?: WorkTime;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Roles?: WorkerRoles;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    Services?: Service;
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
