import { ApiProperty } from '@nestjs/swagger/dist';
import {
    IsOptional,
    IsString,
    IsNotEmpty,
    IsBoolean,
    IsNumber,
} from 'class-validator';
// import { UserRole } from '@prisma/client';

export class UserProfileData {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Email: string;

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
    Username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    BirthDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Phone: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Country: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Gender: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsBoolean()
    // Success: boolean;

    // Role: UserRole;

    // IsVerified: boolean;

    // IpAddress: string;

    // Device: string;

    // Browser: string;
}
