import { ApiProperty, } from '@nestjs/swagger/dist';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
// import { UserRole } from '@prisma/client';

export class VerifyCodeDTO {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    Code: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Token?: string;

}
