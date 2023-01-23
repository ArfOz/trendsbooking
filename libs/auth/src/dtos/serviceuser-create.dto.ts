import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

