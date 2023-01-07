import { UnauthorizedExceptionType } from '../enums/exception.type';
import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class UnauthorizedException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type: UnauthorizedExceptionType = UnauthorizedExceptionType.UNAUTHORIZED_ACCESS,
        error?: Error,
    ) {
        super(type, HttpStatus.UNAUTHORIZED, error);
    }
}
