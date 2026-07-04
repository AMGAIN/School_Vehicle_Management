import { Controller, Get } from '@nestjs/common';
import { ReportAnalyticsService } from './report-analytics.service';

@Controller('report-analytics')
export class ReportAnalyticsController {
  constructor(private readonly reportAnalyticsService: ReportAnalyticsService) {}

  @Get('summary')
  getReportSummary(){
    return this.reportAnalyticsService.getReportSummary();
  }
}
