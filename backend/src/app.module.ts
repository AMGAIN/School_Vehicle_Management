import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiveTrackingModule } from './live-tracking/live-tracking.module';
import { StudentsModule } from './students/students.module';
import { ParentsModule } from './parents/parents.module';
import { DriversModule } from './drivers/drivers.module';
import { BusManagementModule } from './bus-management/bus-management.module';
import { RouteManagementModule } from './route-management/route-management.module';
import { VehicleTelematicsModule } from './vehicle-telematics/vehicle-telematics.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AlertIncidentsModule } from './alert-incidents/alert-incidents.module';
import { ReportAnalyticsModule } from './report-analytics/report-analytics.module';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [LiveTrackingModule, StudentsModule, ParentsModule, DriversModule, BusManagementModule, RouteManagementModule, VehicleTelematicsModule, AttendanceModule, AlertIncidentsModule, ReportAnalyticsModule, SettingModule ],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}