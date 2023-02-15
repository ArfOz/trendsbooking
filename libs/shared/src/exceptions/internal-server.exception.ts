import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class InternalServerException extends TrendsException {
    constructor(error?: Error, code?:number) {
        super(
            error.message ?? 'Something went wrong with the server.',
            error,
            code,
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}
