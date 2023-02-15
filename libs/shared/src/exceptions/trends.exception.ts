import { HttpException } from '@nestjs/common';

export class TrendsException extends HttpException {
    error: Error;
    details:Error;
    code:number 
    statusCode:number;

    constructor(message?: string,  details?: Error, statusCode?: number,code?:number) {
        super({ error: message , details:details.message, code:code}, statusCode);
    }
}
