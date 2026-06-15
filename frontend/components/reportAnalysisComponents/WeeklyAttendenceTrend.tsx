// import React from 'react'
// import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const weeklyAttendance = [
//   { id: 'week1', week: 'Week 1', attendance: 94, missed: 6 },
//   { id: 'week2', week: 'Week 2', attendance: 96, missed: 4 },
//   { id: 'week3', week: 'Week 3', attendance: 92, missed: 8 },
//   { id: 'week4', week: 'Week 4', attendance: 95, missed: 5 },
// ];

// const WeeklyAttendenceTrend = () => {
//   return (
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-4">Weekly Attendance Trend</h3>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={weeklyAttendance}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//                   <XAxis dataKey="week" stroke="#6B7280" />
//                   <YAxis stroke="#6B7280" />
//                   <Tooltip />
//                   <Legend />
//                   <Bar key="attendance-bar" dataKey="attendance" fill="#22C55E" name="Attendance %" />
//                   <Bar key="missed-bar" dataKey="missed" fill="#EF4444" name="Missed %" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//   )
// }

// export default WeeklyAttendenceTrend

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyAttendance = [
  { week: "Week 1", attendance: 94, missed: 6 },
  { week: "Week 2", attendance: 96, missed: 4 },
  { week: "Week 3", attendance: 92, missed: 8 },
  { week: "Week 4", attendance: 95, missed: 5 },
];

const WeeklyAttendanceTrend = () => {
  const avgAttendance = (
    weeklyAttendance.reduce((sum, item) => sum + item.attendance, 0) /
    weeklyAttendance.length
  ).toFixed(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Weekly Attendance
          </h2>
          <p className="text-sm text-gray-500">
            Last 4 weeks performance
          </p>
        </div>

        <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-100">
          <p className="text-xs text-gray-500">Average</p>
          <h3 className="text-xl font-bold text-green-600">
            {avgAttendance}%
          </h3>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={weeklyAttendance} barGap={6}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="week"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          />

          <Bar
            dataKey="attendance"
            fill="#22C55E"
            radius={[8, 8, 0, 0]}
            name="Attendance %"
          />

          <Bar
            dataKey="missed"
            fill="#EF4444"
            radius={[8, 8, 0, 0]}
            name="Missed %"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyAttendanceTrend;