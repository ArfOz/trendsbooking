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
// import { UserRole } from '@prisma/client';

export enum Genders {
    Female = 'Female',
    Male = 'Male',
    NottoSay = 'NottoSay',
}

export enum MailModeType {
    // VerifyPhone = 'VerifyPhone',
    VerifyEmail = 'VerifyEmail',
    ResetPassword = 'ResetPassword',
    EmailChange = 'EmailChange',
}

export class UserParamsDto {
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

    @ApiProperty()
    @IsOptional()
    @IsString()
    Role: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    DepartmentId?: number;
}
export class ResponseLoginUserDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    AccessToken: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    RefreshToken: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ExpireTime?: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ExpireTimeRefresh: Date;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    User: UserParamsDto;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    Success: true;
}

export class ResponseRegisterUserDTO {
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

export class ResponseUserProfileUserDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    FirstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    LastName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    BirthDate: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Country: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Gender: string;

    // @ApiProperty()
    // @IsOptional()
    // @IsObject()
    // Success: true;
}

export class SendCodeDTO {
    @ApiProperty({ enum: MailModeType })
    @IsString()
    @IsNotEmpty()
    MailReason: MailModeType;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    Email: string;
}

export class VerifyCodeDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Code: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Token: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    NewPassword: string;
}

export class UserProfileUpdateDto {
    // @ApiProperty()
    // @IsNotEmpty()
    // @IsEmail()
    // Email?: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Password?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Username?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    FirstName?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    LastName?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Country?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Phone?: string;

    @ApiProperty({ example: [Genders.Male, Genders.Female, Genders.NottoSay] })
    @IsNotEmpty()
    @IsEmail()
    Gender?: Genders;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    BirthDate?: string;
}

export class CreateServiceUserJsonDto {
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

export class RegisterUserJsonDto {
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

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Password: string;
}

export class CompanyUserPassChangeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    OldPassword: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    NewPassword: string;
}
export class RandevuCreateDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Worker: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Service: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    StartTime: Date | string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    EndTime: Date | string;
}

export class CompanyUserForgottenPasswordDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Code: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Token: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Password: string;
}
