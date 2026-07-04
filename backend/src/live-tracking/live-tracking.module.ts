import { Module } from '@nestjs/common';
import { LiveTrackingController } from './live-tracking.controller';
import { LiveTrackingService } from './live-tracking.service';

@Module({
  controllers: [ LiveTrackingController],
  providers: [ LiveTrackingService],
})
export class LiveTrackingModule {}
