import { Test, TestingModule } from '@nestjs/testing';
import { ServiceWorkerService } from './service-worker.service';

describe('ServiceWorkerService', () => {
    let service: ServiceWorkerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ServiceWorkerService],
        }).compile();

        service = module.get<ServiceWorkerService>(ServiceWorkerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
