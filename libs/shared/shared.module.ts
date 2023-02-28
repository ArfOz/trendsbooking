import { Module } from '@nestjs/common';
import { KeypairModule } from './src/keypair/keypair.module';
import { NodemailerModule } from './src/nodemailer/nodemailer.module';
import { MailUtilsModule } from './src/libs/mail-utils/mail-utils.module';
import { ImageServerModule } from './src/modules/image-server/image-server.module';

@Module({
    imports: [
        KeypairModule,
        NodemailerModule,
        MailUtilsModule,
        ImageServerModule,
    ],
    providers: [],
    exports: [],
})
export class SharedModule {}
