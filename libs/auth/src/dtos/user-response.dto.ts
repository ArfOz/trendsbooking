import { UserPayloadDto } from './user-payload.dto';
import { ApiProperty } from '@nestjs/swagger/dist';
import {
    IsOptional,
    IsString,
    IsNotEmpty,
    IsObject,
} from 'class-validator';
// import { UserRole } from '@prisma/client';

export class ResponseLoginUserDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    AccessToken: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    RefreshToken: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ExpireTime?: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ExpireTimeRefresh: Date;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    User: UserPayloadDto;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    Success: true;
}


export class ResponseRegisterUserDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Data: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Token?: string;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    Success: true;
}
