import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('dashboard')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  dashboard(){
    return this.appService.dashboard();
  }

  @Get("summary")
  getDashboardSummary(){
    return this.appService.getDashboardKpi();
  }
  @Get("weekly-attandance")
  getWeeklyAttandance(){
    return this.appService.getWeeklyAttendance();
  }
  @Get("route-performance")
  getRoutePerformance(){
    return this.appService.getRoutePerformance();
  }
  @Get("recent-activities")
  getRecentActivities(){
    return this.appService.getRecentActivities();
  }
  @Get("recent-activities")
  getActiveAlerts(){
    return this.appService.getActiveAlerts();
  }
}

