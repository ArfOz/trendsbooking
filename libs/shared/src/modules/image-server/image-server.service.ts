import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import generalConfig from '../../config/general.config';
import { v4 as uuidv4 } from 'uuid';
import { Express } from 'express';
import { Multer } from 'multer';

import Client from 'ssh2-sftp-client';
import { TrendsException } from '@shared';
const sftp = new Client();
@Injectable()
export class ImageServerService {
    constructor(
        @Inject(generalConfig.KEY)
        private readonly generalCfg: ConfigType<typeof generalConfig>,
    ) {}
    async addPhoto(file: Express.Multer.File, departmentId: string) {
        const data = Buffer.from(file.buffer);
        const config = {
            host: this.generalCfg.sftpHost,
            port: this.generalCfg.sftpPort,
            username: this.generalCfg.sftpUsername,
            password: this.generalCfg.sftpPassword,
            filePath: this.generalCfg.filePath,
        };

        const fileType: string = file.originalname.substring(
            file.originalname.lastIndexOf('.') + 1,
            file.originalname.length,
        );
        const fileName: string = uuidv4() + '.' + fileType;

        const departmentPath = `${config.filePath}/${departmentId}`;
        await sftp.connect(config);

        await sftp
            .list(config.filePath)
            .then(async (res) => {
                const folderRes = res.filter(
                    (folder) =>
                        folder.type === 'd' && folder.name === departmentId,
                );

                if (folderRes.length == 0) {
                    await sftp.mkdir(departmentPath);
                }
            })
            .catch((err) => {
                console.log(err);
                throw new TrendsException(err, new Error(err), 500);
            });

        const photoPath = `${config.filePath}/${departmentId}/${fileName}`;

        await sftp.put(data, photoPath);

        await sftp.end();

        return {
            fileName,
            fileType,
        };
    }

    async getPhoto(departmentId: string) {
        const config = {
            host: this.generalCfg.sftpHost,
            port: this.generalCfg.sftpPort,
            username: this.generalCfg.sftpUsername,
            password: this.generalCfg.sftpPassword,
            filePath: this.generalCfg.filePath,
        };

        await sftp.connect(config);

        await sftp
            .get(config.filePath)
            .then((res) => console.log('asdasda', res));
        return true;
    }
}
