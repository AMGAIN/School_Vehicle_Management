import { Test, TestingModule } from '@nestjs/testing';
import { ReportAnalyticsController } from './report-analytics.controller';
import { ReportAnalyticsService } from './report-analytics.service';

describe('ReportAnalyticsController', () => {
  let controller: ReportAnalyticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportAnalyticsController],
      providers: [ReportAnalyticsService],
    }).compile();

    controller = module.get<ReportAnalyticsController>(ReportAnalyticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
