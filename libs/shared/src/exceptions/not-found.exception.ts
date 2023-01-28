import { NotFoundExceptionType } from './../enums/exception.type';
import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class NotFoundException extends TrendsException {
    constructor(
        type?: string | NotFoundExceptionType,
        details?: Error,
        status?: number,
    ) {
        super(type, details, status);
    }
}
