import { Test, TestingModule } from '@nestjs/testing';
import { AlertIncidentsController } from './alert-incidents.controller';
import { AlertIncidentsService } from './alert-incidents.service';

describe('AlertIncidentsController', () => {
  let controller: AlertIncidentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertIncidentsController],
      providers: [AlertIncidentsService],
    }).compile();

    controller = module.get<AlertIncidentsController>(AlertIncidentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
