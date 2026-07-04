import { Test, TestingModule } from '@nestjs/testing';
import { VehicleTelematicsController } from './vehicle-telematics.controller';
import { VehicleTelematicsService } from './vehicle-telematics.service';

describe('VehicleTelematicsController', () => {
  let controller: VehicleTelematicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleTelematicsController],
      providers: [VehicleTelematicsService],
    }).compile();

    controller = module.get<VehicleTelematicsController>(VehicleTelematicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
