import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import generalConfig from '../../config/general.config';
import { v4 as uuidv4 } from 'uuid';
import { Express } from 'express';
import { Multer } from 'multer';

import Client from 'ssh2-sftp-client';
const sftp = new Client();
@Injectable()
export class ImageServerService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
    ) {}
    async addPhoto(file: Express.Multer.File) {
        const data = Buffer.from(file.buffer);
        const config = {
            host: this.generalCfg.sftpHost,
            port: this.generalCfg.sftpPort,
            username: this.generalCfg.sftpUsername,
            password: this.generalCfg.sftpPassword,
        };

        console.log('addphoto iç 1');

        const fileType: string = file.originalname.substring(
            file.originalname.lastIndexOf('.') + 1,
            file.originalname.length,
        );
        const fileName: string = uuidv4() + '.' + fileType;

        const filePath = `/var/www/vhosts/trendsbooking.com/photo.trendsbooking.com/photos/${fileName}`;
        await sftp.connect(config);
        console.log('addphoto iç 2');

        await sftp
            .list(
                '/var/www/vhosts/trendsbooking.com/photo.trendsbooking.com/photos',
            )
            .then((res) => console.log('asdasda', res));

        await sftp.put(data, filePath);

        await sftp.end();

        return {
            fileName,
            fileType,
        };
    }

    async getPhoto() {
        const config = {
            host: this.generalCfg.sftpHost,
            port: this.generalCfg.sftpPort,
            username: this.generalCfg.sftpUsername,
            password: this.generalCfg.sftpPassword,
        };

        const filePath = `/var/www/vhosts/trendsbooking.com/photo.trendsbooking.com/photos/`;
        await sftp.connect(config);

        await sftp.get(filePath).then((res) => console.log('asdasda', res));
        return true;
    }
}
