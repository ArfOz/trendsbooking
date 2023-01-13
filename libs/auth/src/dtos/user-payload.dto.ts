import { ApiProperty } from '@nestjs/swagger/dist';
import { IsOptional, IsString, IsNotEmpty, IsNumber } from 'class-validator';
// import { UserRole } from '@prisma/client';

export class UserPayloadDto {
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
    Username?: string;

    // Role: UserRole;

    // IsVerified: boolean;

    // IpAddress: string;

    // Device: string;

    // Browser: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Country?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    City?: string;
}
