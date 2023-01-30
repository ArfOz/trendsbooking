import { Test, TestingModule } from '@nestjs/testing';
import { CompanyUsersController } from './companyUsers.controller';

describe('CompanyUserController', () => {
    let controller: CompanyUsersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CompanyUsersController],
        }).compile();

        controller = module.get<CompanyUsersController>(CompanyUsersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
