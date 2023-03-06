import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentPhotosService } from './department-photos.service';

describe('DepartmentPhotosService', () => {
    let service: DepartmentPhotosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DepartmentPhotosService],
        }).compile();

        service = module.get<DepartmentPhotosService>(DepartmentPhotosService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
