import { Controller, Get } from '@nestjs/common';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) { }

  @Get('summary')
  getSummaryData() {
    return this.attendanceService.getSummaryData();
  }

  @Get('data')
  getAttendanceData() {
    return this.attendanceService.getAttendanceData();
  }
}
