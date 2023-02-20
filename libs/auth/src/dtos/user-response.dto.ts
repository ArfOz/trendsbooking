import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

export class UserResponseDto {
    @IsNotEmpty()
    @IsNumber()
    Id: number;

    @IsString()
    @IsNotEmpty()
    Email: string;

    @IsOptional()
    @IsString()
    Username: string;

    @IsOptional()
    @IsString()
    Country: string | null;

    @IsOptional()
    @IsString()
    BirthDate: Date;

    @IsOptional()
    @IsString()
    FirstName: string;

    @IsOptional()
    @IsString()
    Gender: string;

    @IsOptional()
    @IsString()
    Password: string;

    @IsOptional()
    @IsString()
    LastName: string;

    @IsOptional()
    @IsString()
    Phone: string;
}
