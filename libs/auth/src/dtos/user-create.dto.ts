// import { RegisterType } from '@prisma/client';
import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString,} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export enum Genders {
    Female = "Female",
    Male = "Male"
}
export class CreateUserJsonDto {
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

    @ApiProperty({example:[Genders.Male, Genders.Female],})
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
    @IsDateString()
    BirthDate: Date;
}

