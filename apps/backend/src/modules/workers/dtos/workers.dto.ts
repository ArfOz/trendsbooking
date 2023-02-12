import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

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
}

export class WorkersGetJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    WorkerId: number;
}
