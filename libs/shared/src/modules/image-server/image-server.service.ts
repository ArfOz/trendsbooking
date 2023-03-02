import { Multer } from 'multer';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import generalConfig from '../../config/general.config';

import Client from 'ssh2-sftp-client';
const sftp = new Client();
@Injectable()
export class ImageServerService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
    ) {}
    async addPhoto(file: Express.Multer.File) {
        const data2 = Buffer.from(file.buffer);
        const config = {
            host: this.generalCfg.sftpHost,
            port: this.generalCfg.sftpPort,
            username: this.generalCfg.sftpUsername,
            password: this.generalCfg.sftpPassword,
        };

        console.log('config', file, typeof file.buffer);

        const myimage = await Buffer.from(file.buffer);

        await sftp.connect(config);

        await sftp
            .list('/root/photos/')
            .then((res) => console.log('asdasda', res));

        await sftp.put(data2, '/root/photos/aw.jpg');

        await sftp.end();

        return true;
    }
}
