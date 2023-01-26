import { VerifyCodeExceptionType } from './../enums/exception.type';
import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class NotVerifiedException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type?: string,
        error?: Error,
    ) {
        super(type, HttpStatus.UNAUTHORIZED, error);
    }
}
