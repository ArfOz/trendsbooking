import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';
import { BadRequestExceptionType } from '../enums/exception.type';

export class BadRequestException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type: BadRequestExceptionType = BadRequestExceptionType.BAD_REQUEST,
        error?: Error,
    ) {
        super(type, HttpStatus.BAD_REQUEST, error);
    }
}
