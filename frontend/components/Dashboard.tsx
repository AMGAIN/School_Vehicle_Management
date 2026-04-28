"use client";
import { Bus, Users, AlertTriangle, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WeeklyAttendenceTrende from './dashboardComponents/WeeklyAttendenceTrende';
import RoutePerformance from './dashboardComponents/RoutePerformance';
import ActiveAlerts from './dashboardComponents/ActiveAlerts';
import RecentActivities from './dashboardComponents/RecentActivities';
import KpiCards from './dashboardComponents/KpiCards';

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Real-time insights and system analytics</p>
      </div>
      <KpiCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trend */}
        <WeeklyAttendenceTrende />

        {/* Route Performance */}
        <RoutePerformance />
      </div>

      {/* Recent Activities & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities />

        <ActiveAlerts />
      </div>
    </div>
  );
}