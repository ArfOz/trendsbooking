import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from './dtos';

@Injectable()
export class MailUtilsService {
    constructor(private readonly mailerService: MailerService) {}

    async sendEmail(options: SendEmailDto): Promise<any> {
        const result = await this.mailerService.sendMail(options);
        console.log("result" ,result)

        return result;
    }
}
