import { Test, TestingModule } from '@nestjs/testing';
import { AlertIncidentsService } from './alert-incidents.service';

describe('AlertIncidentsService', () => {
  let service: AlertIncidentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlertIncidentsService],
    }).compile();

    service = module.get<AlertIncidentsService>(AlertIncidentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
