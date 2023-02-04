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
    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // Id :string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Email: string;

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
    @IsNotEmpty()
    @IsString()
    Username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Phone: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    TCKN: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    CbFirst: boolean;

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

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Sector: Genders;

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

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    IsActive: boolean;
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

export class ResponseLoginCompanyUserDTO {}

export class GetCompaniesWhereFilter {
    @ApiProperty()
    @IsString()
    @IsOptional()
    Email?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Password?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    FirstName?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    LastName?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Username?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Phone?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    TCKN?: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    CbFirst?: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    TaxNo?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    TaxAdmin?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    IBAN?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Sector?: Genders;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Salon?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Country?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    City?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    District?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Neighborhood?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    IsActive?: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    CreatedAt?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    UpdatedAt?: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    IsEmailVerified?: boolean;
}

export class ActivateCompanyUserDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Email: string;
}
