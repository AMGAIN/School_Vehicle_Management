import { Test, TestingModule } from '@nestjs/testing';
import { ReportAnalyticsService } from './report-analytics.service';

describe('ReportAnalyticsService', () => {
  let service: ReportAnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportAnalyticsService],
    }).compile();

    service = module.get<ReportAnalyticsService>(ReportAnalyticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
