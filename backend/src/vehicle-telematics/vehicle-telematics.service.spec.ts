import { Test, TestingModule } from '@nestjs/testing';
import { VehicleTelematicsService } from './vehicle-telematics.service';

describe('VehicleTelematicsService', () => {
  let service: VehicleTelematicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleTelematicsService],
    }).compile();

    service = module.get<VehicleTelematicsService>(VehicleTelematicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
