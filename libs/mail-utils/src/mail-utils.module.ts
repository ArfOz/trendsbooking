import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailUtilsService } from './mail-utils.service';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: process.env.EMAIL_HOST,
                port: Number(process.env.EMAIL_PORT),
                // ignoreTLS: true,
                secure: false,
                auth: {
                    user: process.env.EMAIL_HOST_USER,
                    pass: process.env.EMAIL_HOST_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            },
            defaults: {
                from: `"TrendsBooking"${process.env.EMAIL_HOST_USER}`,
            },
        }),
    ],
    providers: [MailUtilsService],
    exports: [MailUtilsService],
})
export class MailUtilsModule {}
