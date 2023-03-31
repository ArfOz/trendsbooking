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

        const fileName: string = uuidv4();

        const fileType: string = file.originalname.substring(
            file.originalname.lastIndexOf('.') + 1,
            file.originalname.length,
        );

        const filePath = `/root/photos/departments/${fileName}.${fileType}`;
        await sftp.connect(config);

        await sftp
            .list('/root/photos/departments/')
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

        const filePath = `/root/photos/departments/ff12ceb2-c7e0-472d-8913-80df1a47f292.jpg`;
        await sftp.connect(config);

        await sftp.get(filePath).then((res) => console.log('asdasda', res));
        return true;
    }
}
