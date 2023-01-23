import { NotFoundException } from './not-found.exception';


export class OtpCodeNotFoundException extends NotFoundException {
    constructor(error?: Error) {
        super(error);
    }
}
