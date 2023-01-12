import { ApiProperty } from '@nestjs/swagger/dist';
import { IsOptional, IsString, IsNotEmpty, IsNumber } from 'class-validator';
// import { UserRole } from '@prisma/client';

export class UserPayloadDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    username?: string;

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
