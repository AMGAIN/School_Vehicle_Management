import React from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const routeEfficiency = [
  { id: 'rt01', route: 'RT-01', onTime: 85, delayed: 10, cancelled: 5 },
  { id: 'rt02', route: 'RT-02', onTime: 78, delayed: 18, cancelled: 4 },
  { id: 'rt03', route: 'RT-03', onTime: 92, delayed: 6, cancelled: 2 },
  { id: 'rt04', route: 'RT-04', onTime: 88, delayed: 9, cancelled: 3 },
];

const RouteAnalysis = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Route Efficiency Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={routeEfficiency}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="route" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip />
                    <Legend />
                    <Bar key="onTime-bar" dataKey="onTime" stackId="a" fill="#22C55E" name="On Time %" />
                    <Bar key="delayed-bar" dataKey="delayed" stackId="a" fill="#F59E0B" name="Delayed %" />
                    <Bar key="cancelled-bar" dataKey="cancelled" stackId="a" fill="#EF4444" name="Cancelled %" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RouteAnalysis