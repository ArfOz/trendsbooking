import { ForbiddenExceptionType, VerifyCodeExceptionType } from './../enums/exception.type';
import { NotFoundException } from './not-found.exception';

export class OtpCodeNotFoundException extends NotFoundException {
    constructor(
        type: VerifyCodeExceptionType,
        error: Error,
        status:number
    ) {
        super(type, error, status);
    }
}
