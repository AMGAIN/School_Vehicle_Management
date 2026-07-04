import { Test, TestingModule } from '@nestjs/testing';
import { RouteManagementController } from './route-management.controller';
import { RouteManagementService } from './route-management.service';

describe('RouteManagementController', () => {
  let controller: RouteManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteManagementController],
      providers: [RouteManagementService],
    }).compile();

    controller = module.get<RouteManagementController>(RouteManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
