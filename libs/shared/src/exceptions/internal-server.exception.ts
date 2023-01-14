import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class InternalServerException extends TrendsException {
    constructor(error?: Error) {
        super(
            error.message ?? 'Something went wrong with the server.',
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}
