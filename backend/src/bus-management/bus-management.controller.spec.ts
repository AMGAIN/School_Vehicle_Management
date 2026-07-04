import { Test, TestingModule } from '@nestjs/testing';
import { BusManagementController } from './bus-management.controller';
import { BusManagementService } from './bus-management.service';

describe('BusManagementController', () => {
  let controller: BusManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusManagementController],
      providers: [BusManagementService],
    }).compile();

    controller = module.get<BusManagementController>(BusManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
