import { ApiProperty } from '@nestjs/swagger/dist';
import {
    IsOptional,
    IsString,
    IsNotEmpty,
    IsObject,
    IsEmail,
    IsNumber,
    IsBoolean,
} from 'class-validator';

export enum Genders {
    Female = 'Female',
    Male = 'Male',
    NottoSay = 'NottoSay',
}

export class CompanyUserParamsDto {
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
    BirthDate: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    FirstName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Gender: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Password: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    IsEmailVerified: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    LastName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Phone: string;
}

export class ResponseRegisterCompanyUserDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Data: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Token?: string;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    Success: true;
}

export class CreateCompanyUserJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
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

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    FirstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    LastName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Country?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    City?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Tckn: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    CbFirst: boolean;
}

export class RegisterCompanyUserJsonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
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
    @IsNotEmpty()
    @IsString()
    FirstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    LastName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Country?: string;

    @ApiProperty({ example: [Genders.Male, Genders.Female, Genders.NottoSay] })
    @IsNotEmpty()
    @IsString()
    Gender: Genders;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Lang?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    CbFirst: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    BirthDate: Date;
}

export class LoginCompanyUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Password: string;
}
