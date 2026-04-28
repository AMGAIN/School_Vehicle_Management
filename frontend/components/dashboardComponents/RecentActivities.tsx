import React from 'react'
import { Clock } from 'lucide-react'

const RecentActivities = () => {
    return (
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
    )
}

export default RecentActivities