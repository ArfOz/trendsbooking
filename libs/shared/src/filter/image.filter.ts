import ResponseMessage from '@shared/enums/response-message.json';
import { BadRequestException, BadRequestExceptionType } from '@shared';

export const imageFileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
        // Allow storage of file
        cb(null, true);
    } else {
        // Reject file
        cb(
            new BadRequestException(
                BadRequestExceptionType.BAD_REQUEST,
                new Error(ResponseMessage.TR451),
                451,
            ),
            false,
        );
    }
};
