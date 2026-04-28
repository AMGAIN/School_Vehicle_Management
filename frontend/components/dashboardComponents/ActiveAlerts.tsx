import React from 'react'
import { AlertTriangle } from 'lucide-react';

const ActiveAlerts = () => {
    return (
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
    )
}

export default ActiveAlerts