import { ApiProperty, } from '@nestjs/swagger/dist';
import { IsNotEmpty, IsEmail } from 'class-validator';
// import { UserRole } from '@prisma/client';

export class SendCodeDTO {

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    Email: string;
}
