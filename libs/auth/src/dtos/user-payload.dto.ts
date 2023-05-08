import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

export class UserPayloadDto {
    @IsNotEmpty()
    @IsNumber()
    Id: number;

    @IsString()
    @IsNotEmpty()
    Email: string;

    @IsNotEmpty()
    @IsString()
    Role: string;
}

// @IsOptional()
// @IsString()
// Username: string;

// @IsOptional()
// @IsString()
// Country: string;

// @IsOptional()
// @IsString()
// BirthDate: Date;

// @IsOptional()
// @IsString()
// FirstName: string;

// @IsOptional()
// @IsString()
// Gender: string;

// @IsOptional()
// @IsString()
// Password: string;

// @IsOptional()
// @IsBoolean()
// IsEmailVerified: boolean;

// @IsOptional()
// @IsString()
// LastName: string;

// @IsOptional()
// @IsString()
// Phone: string;
