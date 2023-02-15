import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class NotVerifiedException extends TrendsException {
    constructor(
        // eslint-disable-next-line default-param-last
        type: string,
        error: Error,
        code: number,
    ) {
        const status = HttpStatus.FORBIDDEN;
        super(type, error, status, code);
    }
}
