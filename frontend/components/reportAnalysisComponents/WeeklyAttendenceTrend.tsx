import React from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const weeklyAttendance = [
  { id: 'week1', week: 'Week 1', attendance: 94, missed: 6 },
  { id: 'week2', week: 'Week 2', attendance: 96, missed: 4 },
  { id: 'week3', week: 'Week 3', attendance: 92, missed: 8 },
  { id: 'week4', week: 'Week 4', attendance: 95, missed: 5 },
];

const WeeklyAttendenceTrend = () => {
  return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Weekly Attendance Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyAttendance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="week" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Legend />
                  <Bar key="attendance-bar" dataKey="attendance" fill="#22C55E" name="Attendance %" />
                  <Bar key="missed-bar" dataKey="missed" fill="#EF4444" name="Missed %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
  )
}

export default WeeklyAttendenceTrend