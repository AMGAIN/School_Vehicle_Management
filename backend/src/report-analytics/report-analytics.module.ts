import { Module } from '@nestjs/common';
import { ReportAnalyticsService } from './report-analytics.service';
import { ReportAnalyticsController } from './report-analytics.controller';

@Module({
  controllers: [ReportAnalyticsController],
  providers: [ReportAnalyticsService],
})
export class ReportAnalyticsModule {}
