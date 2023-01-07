import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    // @IsString()
    // @IsNotEmpty()
    // Id : string

    @IsString()
    @IsNotEmpty()
    Email: string;

    @IsString()
    @IsNotEmpty()
    Password;

    @IsString()
    @IsNotEmpty()
    Username;

    @IsString()
    @IsOptional()
    FirstName;

    @IsString()
    @IsOptional()
    LastName;

    @IsString()
    @IsNotEmpty()
    Country;

    @IsString()
    @IsOptional()
    Phone;

    @IsString()
    @IsOptional()
    Gender;

    @IsString()
    @IsNotEmpty()
    birthDate;
}
