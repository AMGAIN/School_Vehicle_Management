"use client";
import { Bus, Users, AlertTriangle, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const generalInfo = [
  { id: 1, title: "Total Buses", num: 24, status: "20 Active", img: Bus },
  { id: 2, title: "Total Students", num: 1224, status: "95% Present", img: Users },
  { id: 3, title: "Active Alerts", num: 8, status: "2 Critical", img: AlertTriangle },
  { id: 4, title: "On-Time Rate", num: 87, status: "+5% vs last week", img: CheckCircle },
];

const attendanceData = [
  { id: 'mon', day: 'Mon', attendance: 95 },
  { id: 'tue', day: 'Tue', attendance: 92 },
  { id: 'wed', day: 'Wed', attendance: 97 },
  { id: 'thu', day: 'Thu', attendance: 94 },
  { id: 'fri', day: 'Fri', attendance: 96 },
  { id: 'sat', day: 'Sat', attendance: 88 },
];

const routePerformance = [
  { id: 'rt01', route: 'RT-01', onTime: 85, delayed: 15 },
  { id: 'rt02', route: 'RT-02', onTime: 78, delayed: 22 },
  { id: 'rt03', route: 'RT-03', onTime: 92, delayed: 8 },
  { id: 'rt04', route: 'RT-04', onTime: 88, delayed: 12 },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Real-time insights and system analytics</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI Cards */}
        {
          generalInfo.map((item, index) => {
            const Icon = item.img;
            return (
              <div key={index} className='bg-white flex items-center justify-between rounded-xl shadow-sm border border-gray-200 p-6'>
                <div>
                  <p className="text-sm text-gray-600">Total Buses</p>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">{item.num}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-[#22C55E]">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.status}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#4F6EDB]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#4F6EDB]" />
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trend */}
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Weekly Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" stroke="#6B7280" />
              <YAxis stroke="#6B7280" domain={[80, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#4F6EDB" strokeWidth={3} dot={{ fill: '#4F6EDB', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Route Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Route Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={routePerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="route" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar key="onTime-bar" dataKey="onTime" fill="#22C55E" name="On Time %" />
              <Bar key="delayed-bar" dataKey="delayed" fill="#F59E0B" name="Delayed %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {[
              { time: '2 min ago', event: 'BUS-001 completed route RT-01', status: 'success' },
              { time: '5 min ago', event: 'Student Aarav Sharma boarded BUS-002', status: 'info' },
              { time: '8 min ago', event: 'BUS-003 delayed by 10 minutes', status: 'warning' },
              { time: '12 min ago', event: 'Route RT-04 started morning pickup', status: 'info' },
              { time: '15 min ago', event: 'Attendance sync completed (BLE)', status: 'success' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${activity.status === 'success' ? 'bg-[#22C55E]' :
                  activity.status === 'warning' ? 'bg-[#F59E0B]' :
                    'bg-[#3B82F6]'
                  }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.event}</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Active Alerts</h3>
          <div className="space-y-3">
            {[
              { type: 'critical', title: 'BUS-004 Offline', message: 'No data received for 15 minutes', time: '3 min ago' },
              { type: 'warning', title: 'Route RT-02 Delayed', message: '7 minutes behind schedule', time: '5 min ago' },
              { type: 'critical', title: 'Unauthorized Boarding', message: 'Student Myra Khan - BUS-001', time: '15 min ago' },
              { type: 'info', title: 'BLE Sync Pending', message: '3 boarding events waiting for sync', time: '20 min ago' },
            ].map((alert, idx) => (
              <div key={idx} className={`p-4 rounded-lg border-l-4 ${alert.type === 'critical' ? 'bg-red-50 border-[#EF4444]' :
                alert.type === 'warning' ? 'bg-yellow-50 border-[#F59E0B]' :
                  'bg-blue-50 border-[#3B82F6]'
                }`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{alert.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                  </div>
                  <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${alert.type === 'critical' ? 'text-[#EF4444]' :
                    alert.type === 'warning' ? 'text-[#F59E0B]' :
                      'text-[#3B82F6]'
                    }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}