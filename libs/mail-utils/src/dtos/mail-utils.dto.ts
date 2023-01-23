import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class SendEmailDto {
    @IsNotEmpty()
    @IsEmail()
    to: string;

    @IsNotEmpty()
    @IsString()
    subject: string;

    @IsEmpty()
    @IsString()
    html?: string;
}
