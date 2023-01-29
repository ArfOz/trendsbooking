import { HttpException } from '@nestjs/common';

export class TrendsException extends HttpException {
    error: Error;
    details:Error;
    statusCode:number;  

    constructor(message?: string,  details?: Error, statusCode?: number,) {
        super({ error: message , details:details.message}, statusCode);
    }
}
