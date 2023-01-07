import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';
import { ForbiddenExceptionType } from '../enums/exception.type';

export class ForbiddenException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type: ForbiddenExceptionType = ForbiddenExceptionType.FORBIDDEN,
        error?: Error,
    ) {
        super(type, HttpStatus.FORBIDDEN, error);
    }
}
