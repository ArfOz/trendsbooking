import { Test, TestingModule } from '@nestjs/testing';
import { UserOtpCodeService } from './user-otp-code.service';

describe('UserOtpCodeService', () => {
    let service: UserOtpCodeService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserOtpCodeService],
        }).compile();

        service = module.get<UserOtpCodeService>(UserOtpCodeService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
