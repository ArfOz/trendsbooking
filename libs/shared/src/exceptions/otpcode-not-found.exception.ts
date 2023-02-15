import { HttpStatus } from '@nestjs/common';
import {
    ForbiddenExceptionType,
    VerifyCodeExceptionType,
} from './../enums/exception.type';
import { NotFoundException } from './not-found.exception';

export class OtpCodeNotFoundException extends NotFoundException {
    constructor(type: VerifyCodeExceptionType, error: Error, code: number) {
        const status = HttpStatus.NOT_FOUND;
        super(type, error, code, status);
    }
}
