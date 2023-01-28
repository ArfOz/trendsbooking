import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';
import { BadRequestExceptionType } from '../enums/exception.type';

export class BadRequestException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type: keyof typeof BadRequestExceptionType,
        // error?: Error,
        details? :Error,
        status?:number
    ) {
        super(type, details, status);
    }
}
