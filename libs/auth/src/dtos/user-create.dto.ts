// import { RegisterType } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

    // @IsNotEmpty()
    // @IsString()
    // RegistrationMethod: RegisterType;

    @ApiProperty()
    @IsOptional()
    @IsString()
    firstName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    lastName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    country?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    lang?: string;

    // @IsNotEmpty()
    // @IsBoolean()
    // Agreement: boolean;

    // @IsOptional()
    // @IsBoolean()
    // Campaign?: boolean;
}
