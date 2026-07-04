import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  dashboard(){
    return "This is the dashboard";
  }
  getDashboardKpi() {
    return [
      { "id": "totalBuses", "count": 24, "active": 20 },
      { "id": "totalStudents", "count": 1224, "presentPercentage": 95 },
      { "id": "activeAlerts", "count": 8, "critical": 2 },
      { "id": "onTimeRate", "percentage": 87, "changeFromLastWeek": 5 }
    ];
  }
  getWeeklyAttendance() {
    return [
      { "day": "Mon", "attendance": 95 },
      { "day": "Tue", "attendance": 92 },
      { "day": "Wed", "attendance": 97 },
      { "day": "Thu", "attendance": 94 },
      { "day": "Fri", "attendance": 96 },
      { "day": "Sat", "attendance": 88 }
    ]
  }
  getRoutePerformance() {
    return [
      { route: "RT-01", onTime: 85, delayed: 15 },
      { route: "RT-02", onTime: 78, delayed: 22 },
      { route: "RT-03", onTime: 92, delayed: 8 },
      { route: "RT-04", onTime: 88, delayed: 12 },
    ]
  }
  getRecentActivities() {
    return [
      {
        time: "2 min ago",
        event: "BUS-001 completed route RT-01",
        status: "success",
      },
      {
        time: "5 min ago",
        event: "Student Aarav Sharma boarded BUS-002",
        status: "info",
      },
      {
        time: "8 min ago",
        event: "BUS-003 delayed by 10 minutes",
        status: "warning",
      },
      {
        time: "12 min ago",
        event: "Route RT-04 started morning pickup",
        status: "info",
      },
      {
        time: "15 min ago",
        event: "Attendance sync completed (BLE)",
        status: "success",
      },
    ];
  }
  getActiveAlerts(){
    return [
        {
            type: "critical",
            title: "BUS-004 Offline",
            message: "No data received for 15 minutes",
            time: "3 min ago",
        },
        {
            type: "warning",
            title: "Route RT-02 Delayed",
            message: "7 minutes behind schedule",
            time: "5 min ago",
        },
        {
            type: "critical",
            title: "Unauthorized Boarding",
            message: "Student Myra Khan - BUS-001",
            time: "15 min ago",
        },
        {
            type: "info",
            title: "BLE Sync Pending",
            message: "3 boarding events waiting for sync",
            time: "20 min ago",
        },
    ];
  }
}
