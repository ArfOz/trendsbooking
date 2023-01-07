import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    Email: string;

    @IsNotEmpty()
    @IsString()
    Password: string;
}
