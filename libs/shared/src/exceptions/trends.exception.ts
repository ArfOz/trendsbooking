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
        console.log('arif', message, details, message, code, statusCode);
        statusCode = statusCode || HttpStatus.FORBIDDEN;
        super(
            { error: message, details: details.message, code: code },
            statusCode,
        );
    }
}
