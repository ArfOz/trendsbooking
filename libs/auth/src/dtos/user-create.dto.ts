// import { RegisterType } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Email: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Phone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Password: string;

    // @IsNotEmpty()
    // @IsString()
    // RegistrationMethod: RegisterType;

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
    Country?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Lang?: string;

    // @IsNotEmpty()
    // @IsBoolean()
    // Agreement: boolean;

    // @IsOptional()
    // @IsBoolean()
    // Campaign?: boolean;
}
