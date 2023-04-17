import { Test, TestingModule } from '@nestjs/testing';
import { RandevuService } from './randevu.service';

describe('RandevuService', () => {
    let service: RandevuService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RandevuService],
        }).compile();

        service = module.get<RandevuService>(RandevuService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
