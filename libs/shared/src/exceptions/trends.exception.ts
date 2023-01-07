import { HttpException } from '@nestjs/common';

export class TrendsException extends HttpException {
    error?: Error;

    constructor(message: string, statusCode: number, error?: Error) {
        super({ error: message, message: error.message }, statusCode);
        this.error = error;
    }
}
