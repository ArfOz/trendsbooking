import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';
import { AlreadyExistsExceptionType } from '../enums/exception.type';

export class AlreadyExistsException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type: AlreadyExistsExceptionType = AlreadyExistsExceptionType.ALREADY_EXISTS,
        details? :Error
    ) {
        super(type, HttpStatus.BAD_REQUEST, details);
    }
}
