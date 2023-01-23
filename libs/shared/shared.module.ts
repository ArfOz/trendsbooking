import { Module } from '@nestjs/common';
import { KeypairModule } from './src/keypair/keypair.module';
import { NodemailerModule } from './src/nodemailer/nodemailer.module';
import { MailUtilsModule } from './src/libs/mail-utils/mail-utils.module';

@Module({
    imports: [KeypairModule, NodemailerModule, MailUtilsModule],
    providers: [],
    exports: [],
})
export class SharedModule {}
