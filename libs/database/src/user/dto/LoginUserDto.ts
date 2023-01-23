import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class LoginUserDto {
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    @IsString()
    Password: string;
}
