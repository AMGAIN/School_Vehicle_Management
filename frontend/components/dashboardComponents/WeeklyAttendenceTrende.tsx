import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const attendanceData = [
    { id: 'mon', day: 'Mon', attendance: 95 },
    { id: 'tue', day: 'Tue', attendance: 92 },
    { id: 'wed', day: 'Wed', attendance: 97 },
    { id: 'thu', day: 'Thu', attendance: 94 },
    { id: 'fri', day: 'Fri', attendance: 96 },
    { id: 'sat', day: 'Sat', attendance: 88 },
];

const WeeklyAttendenceTrende = () => {
    return (
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
    )
}

export default WeeklyAttendenceTrende