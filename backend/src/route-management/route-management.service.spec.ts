import { Test, TestingModule } from '@nestjs/testing';
import { RouteManagementService } from './route-management.service';

describe('RouteManagementService', () => {
  let service: RouteManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteManagementService],
    }).compile();

    service = module.get<RouteManagementService>(RouteManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
