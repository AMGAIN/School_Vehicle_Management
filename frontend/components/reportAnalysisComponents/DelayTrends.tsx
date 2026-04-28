import React from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const delayTrends = [
  { id: 'jan', month: 'Jan', avgDelay: 5.2 },
  { id: 'feb', month: 'Feb', avgDelay: 4.8 },
  { id: 'mar', month: 'Mar', avgDelay: 6.1 },
  { id: 'apr', month: 'Apr', avgDelay: 5.5 },
  { id: 'may', month: 'May', avgDelay: 4.9 },
  { id: 'jun', month: 'Jun', avgDelay: 5.8 },
];

const DelayTrends = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Average Delay Trends (Minutes)</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={delayTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip />
                    <Line type="monotone" dataKey="avgDelay" stroke="#F59E0B" strokeWidth={3} dot={{ fill: '#F59E0B', r: 5 }} name="Avg Delay" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DelayTrends