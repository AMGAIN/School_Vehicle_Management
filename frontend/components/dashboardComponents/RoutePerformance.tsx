import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const routePerformance = [
  { id: 'rt01', route: 'RT-01', onTime: 85, delayed: 15 },
  { id: 'rt02', route: 'RT-02', onTime: 78, delayed: 22 },
  { id: 'rt03', route: 'RT-03', onTime: 92, delayed: 8 },
  { id: 'rt04', route: 'RT-04', onTime: 88, delayed: 12 },
];

const RoutePerformance = () => {
  return (
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
  )
}

export default RoutePerformance