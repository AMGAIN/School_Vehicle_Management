"use client"
import React from 'react'
import { Timer, Clock, CheckCircle, MapPin, AlertCircle, XCircle } from 'lucide-react'
import { useState } from 'react';

interface StudentActivity {
    id: string;
    studentName: string;
    avatar: string;
    busId: string;
    timestamp: string;
    method: 'qr' | 'ble';
    status: 'boarded' | 'dropped' | 'missed' | 'unauthorized' | 'pending';
}
const mockActivities: StudentActivity[] = [
    { id: '1', studentName: 'Aarav Sharma', avatar: 'AS', busId: 'BUS-001', timestamp: '2 min ago', method: 'qr', status: 'boarded' },
    { id: '2', studentName: 'Diya Patel', avatar: 'DP', busId: 'BUS-002', timestamp: '5 min ago', method: 'ble', status: 'pending' },
    { id: '3', studentName: 'Rohan Gupta', avatar: 'RG', busId: 'BUS-001', timestamp: '8 min ago', method: 'qr', status: 'boarded' },
    { id: '4', studentName: 'Ananya Mehta', avatar: 'AM', busId: 'BUS-003', timestamp: '10 min ago', method: 'qr', status: 'dropped' },
    { id: '5', studentName: 'Kabir Singh', avatar: 'KS', busId: 'BUS-002', timestamp: '12 min ago', method: 'qr', status: 'boarded' },
    { id: '6', studentName: 'Myra Khan', avatar: 'MK', busId: 'BUS-001', timestamp: '15 min ago', method: 'qr', status: 'unauthorized' },
];
const StudentActivityFeed = () => {
    const [activities] = useState<StudentActivity[]>(mockActivities);

    const getActivityIcon = (status: StudentActivity['status']) => {
        switch (status) {
            case 'boarded': return <CheckCircle className="w-5 h-5 text-[#22C55E]" />;
            case 'dropped': return <MapPin className="w-5 h-5 text-[#3B82F6]" />;
            case 'missed': return <AlertCircle className="w-5 h-5 text-[#F59E0B]" />;
            case 'unauthorized': return <XCircle className="w-5 h-5 text-[#EF4444]" />;
            case 'pending': return <Timer className="w-5 h-5 text-[#F59E0B]" />;
        }
    };
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Student Activity Feed</h3>
                <p className="text-sm text-gray-500 mt-1">Real-time boarding & dropping updates</p>
            </div>


            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                            {activity.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 text-sm">{activity.studentName}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{activity.busId}</p>
                                </div>
                                {getActivityIcon(activity.status)}
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                                <Clock className="w-3 h-3" />
                                <span>{activity.timestamp}</span>
                                <span className="text-gray-400">•</span>
                                <span className="capitalize">{activity.method === 'qr' ? 'QR Scan' : 'BLE Sync'}</span>
                            </div>
                            {activity.status === 'pending' && (
                                <div className="mt-2 text-xs text-[#F59E0B] flex items-center gap-1">
                                    <Timer className="w-3 h-3" />
                                    <span>Pending Sync</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentActivityFeed