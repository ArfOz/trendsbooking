import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';
import { BadRequestExceptionType } from '../enums/exception.type';

export class BadRequestException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type: keyof typeof BadRequestExceptionType,
        // error?: Error,
        error: Error,
        code: number,
    ) {
        const status = HttpStatus.BAD_REQUEST;
        super(type, error, code, status);
    }
}
