import { HttpException } from '@nestjs/common';

export class TrendsException extends HttpException {
    error?: Error;
    details?:Error  

    constructor(message: string, statusCode: number, details?: Error) {
        super({ error: message , details:details.message}, statusCode);
    }
}
