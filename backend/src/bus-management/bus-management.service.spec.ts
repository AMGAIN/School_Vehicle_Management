import { Test, TestingModule } from '@nestjs/testing';
import { BusManagementService } from './bus-management.service';

describe('BusManagementService', () => {
  let service: BusManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusManagementService],
    }).compile();

    service = module.get<BusManagementService>(BusManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
