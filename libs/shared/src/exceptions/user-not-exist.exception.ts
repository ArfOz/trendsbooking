import { UnauthorizedExceptionType } from './../enums/exception.type';
import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class UserNotExistException extends TrendsException {
    constructor(
 
            // eslint-disable-next-line default-param-last
            type: UnauthorizedExceptionType = UnauthorizedExceptionType.UNAUTHORIZED_ACCESS,
            error?: Error,
            status?:number
    ) {
        super('User does not exist!', error, 400);
    }
}
