import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty, IsString, IsNumber, IsObject } from 'class-validator';


export class WorkTime{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    MorningStartAt:  string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    MorningEndAt:  string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ShiftStart:  string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ShiftEnd:  string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    NightStartAt:  string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    NightEndAt:  string
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
