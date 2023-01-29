import { ApiProperty } from '@nestjs/swagger/dist';
import { IsOptional, IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
// import { UserRole } from '@prisma/client';

export class UserPayloadDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Email: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Username: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Country: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    BirthDate: Date

    @ApiProperty()
    @IsOptional()
    @IsString()
    FirstName: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    Gender: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    Password: string
    
    @ApiProperty() 
    @IsOptional()
    @IsBoolean()
    IsEmailVerified: boolean

    @ApiProperty() 
    @IsOptional()
    @IsString()
    LastName: string

    @ApiProperty() 
    @IsOptional()
    @IsString()
    Phone: string

}
