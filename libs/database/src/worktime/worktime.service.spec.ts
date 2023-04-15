import { Test, TestingModule } from '@nestjs/testing';
import { WorkTimeService } from './worktime.service';

describe('WorktimeService', () => {
    let service: WorkTimeService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [WorkTimeService],
        }).compile();

        service = module.get<WorkTimeService>(WorkTimeService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
