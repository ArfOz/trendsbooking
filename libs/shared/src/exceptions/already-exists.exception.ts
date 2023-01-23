import { VerifyCodeExceptionType } from './../enums/exception.type';
import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';
import { AlreadyExistsExceptionType } from '../enums/exception.type';

export class AlreadyExistsException extends TrendsException {

    constructor(
        // eslint-disable-next-line default-param-last
        type: AlreadyExistsExceptionType | VerifyCodeExceptionType = AlreadyExistsExceptionType.ALREADY_EXISTS,
        details? :Error
    ) {
        super(type, HttpStatus.BAD_REQUEST, details);
    }
}
