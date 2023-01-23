import { HttpStatus } from '@nestjs/common';
import {TrendsException } from './trends.exception';

export class NotFoundException extends TrendsException {
    constructor(error?: Error) {
        super('NOT_FOUND', HttpStatus.NOT_FOUND, error);
    }
}
