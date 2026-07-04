import { Controller, Get } from '@nestjs/common';
import { LiveTrackingService } from './live-tracking.service';

@Controller('live-tracking')
export class LiveTrackingController {
    constructor(private readonly liveTrackingServices: LiveTrackingService) { }

    @Get("summary")
    getLiveTrackingSummary() {
        return this.liveTrackingServices.getSummaryCard();
    }
    @Get("student-activity")
    getStudentActivity(){
        return this.liveTrackingServices.getStudentActivity();
    }
}
