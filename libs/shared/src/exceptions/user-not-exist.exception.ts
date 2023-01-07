import { HttpStatus } from '@nestjs/common';
import { TrendsException } from './trends.exception';

export class UserNotExistException extends TrendsException {
    constructor() {
        super('User does not exist!', HttpStatus.FORBIDDEN);
    }
}
