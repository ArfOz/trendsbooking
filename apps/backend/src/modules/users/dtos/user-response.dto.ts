import { ApiProperty, } from '@nestjs/swagger/dist';
import { IsOptional, IsString, IsNotEmpty, IsNumber } from 'class-validator';
// import { UserRole } from '@prisma/client';

export class UserResponseDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Email: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Username?: string;

    // birthDate: true,
    // email: true,
    // phone: true,
    // country: true,
    // firstName: true,
    // lastName: true,
    // username: true,
    // gender: true

    // Role: UserRole;

    // IsVerified: boolean;

    // IpAddress: string;

    // Device: string;

    // Browser: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    country?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    city?: string;
}
