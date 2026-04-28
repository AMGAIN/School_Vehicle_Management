import React from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const boardingMethodData = [
  { id: 'qr-verified', name: 'QR Verified', value: 650, color: ' #4F6EDB' },
  { id: 'ble-sync', name: 'BLE Sync', value: 220, color: '#3B82F6' },
  { id: 'pending-sync', name: 'Pending Sync', value: 130, color: '#F59E0B' },
];

const BordingDistribution = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Visual Representation of Applicant's Qualificaion</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={boardingMethodData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        // label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {boardingMethodData.map((entry) => (
                            <Cell key={entry.id} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-4">
                {boardingMethodData.map((item) => (
                    <div key={item.id} className="text-center">
                        <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }}></div>
                        <p className="text-xs text-gray-600">{item.name}</p>
                        <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BordingDistribution