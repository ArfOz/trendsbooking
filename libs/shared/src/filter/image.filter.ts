import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

export const imageFileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
        // Allow storage of file
        cb(null, true);
    } else {
        // Reject file
        cb(
            new HttpException(
                `Unsupported file type ${extname(file.originalname)}`,
                HttpStatus.BAD_REQUEST,
            ),
            false,
        );
    }
};
