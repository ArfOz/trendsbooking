import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty, IsString, IsNumber, IsObject } from 'class-validator';


export class WorkTime{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    MorningStartAt: Date | string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    MorningEndAt: Date | string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ShiftStart: Date | string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ShiftEnd: Date | string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    NightStartAt: Date | string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    NightEndAt: Date | string
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
}

export class WorkersGetJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    WorkerId: number;
}
