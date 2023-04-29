import { HttpException, HttpStatus } from '@nestjs/common';

export class TrendsException extends HttpException {
    error: Error;
    details: Error;
    code: number;
    statusCode?: number;

    constructor(
        message?: string,
        details?: Error,
        code?: number,
        statusCode?: number,
    ) {
        statusCode = statusCode || HttpStatus.FORBIDDEN;
        console.log('arif', message, details.message, code, statusCode);
        super(
            { error: message, details: details.message, code: code },
            statusCode,
        );
    }
}
