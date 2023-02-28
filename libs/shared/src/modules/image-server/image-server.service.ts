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
    async addPhoto() {

        const config = {
            host: this.generalCfg.sftpHost,
            port: this.generalCfg.sftpPort,
            username: this.generalCfg.sftpUsername,
            password: this.generalCfg.sftpPassword
        }

        console.log("config", config)
        sftp.connect(config).then(() => {
            return sftp.list('/root/photos');
          })
          .then(data => {
            console.log(data);
          })
          .then(() => {
            sftp.end();
          })
          .catch(err => {
            console.error("naberrrrr",err.message);
          });

        return true;
    }
}
