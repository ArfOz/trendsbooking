import { Test, TestingModule } from '@nestjs/testing';
import { MailUtilsService } from './mail-utils.service';

describe('MailUtilsService', () => {
    let service: MailUtilsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MailUtilsService],
        }).compile();

        service = module.get<MailUtilsService>(MailUtilsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
