import { HttpException } from '@nestjs/common';

export class TrendsException extends HttpException {
    error: Error;
    details:Error;
    statusCode:number;
    code:number 

    constructor(message?: string,  details?: Error, statusCode?: number,code?:number) {
        super({ error: message , details:details.message, code:code}, statusCode);
    }
}
