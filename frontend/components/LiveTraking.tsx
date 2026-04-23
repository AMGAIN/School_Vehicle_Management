import React from 'react'
import { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Users, Wifi, WifiOff, Bluetooth, X, CheckCircle, AlertCircle, XCircle, Timer } from 'lucide-react';

interface Bus {
    id: string;
    routeId: string;
    status: 'moving' | 'idle' | 'delayed' | 'offline';
    position: { lat: number; lng: number };
    driver: string;
    speed: number;
    eta: string;
    delay: number;
    studentsOnboard: number;
    connectivity: 'online' | 'ble' | 'offline';
    lastSync: string;
}

interface StudentActivity {
    id: string;
    studentName: string;
    avatar: string;
    busId: string;
    timestamp: string;
    method: 'qr' | 'ble';
    status: 'boarded' | 'dropped' | 'missed' | 'unauthorized' | 'pending';
}

const mockBuses: Bus[] = [
    { id: 'BUS-001', routeId: 'RT-01', status: 'moving', position: { lat: 28.6139, lng: 77.2090 }, driver: 'Rajesh Kumar', speed: 35, eta: '10:45 AM', delay: 0, studentsOnboard: 28, connectivity: 'online', lastSync: 'Just now' },
    { id: 'BUS-002', routeId: 'RT-02', status: 'delayed', position: { lat: 28.6289, lng: 77.2195 }, driver: 'Amit Singh', speed: 20, eta: '10:52 AM', delay: 7, studentsOnboard: 32, connectivity: 'ble', lastSync: '2 min ago' },
    { id: 'BUS-003', routeId: 'RT-03', status: 'idle', position: { lat: 28.6000, lng: 77.2300 }, driver: 'Suresh Verma', speed: 0, eta: '11:00 AM', delay: 0, studentsOnboard: 15, connectivity: 'online', lastSync: 'Just now' },
    { id: 'BUS-004', routeId: 'RT-04', status: 'offline', position: { lat: 28.5950, lng: 77.2150 }, driver: 'Vijay Sharma', speed: 0, eta: 'Unknown', delay: 15, studentsOnboard: 20, connectivity: 'offline', lastSync: '15 min ago' },
    { id: 'BUS-008', routeId: 'RT-04', status: 'offline', position: { lat: 28.5950, lng: 77.2150 }, driver: 'Vijay Sharma', speed: 0, eta: 'Unknown', delay: 15, studentsOnboard: 20, connectivity: 'offline', lastSync: '15 min ago' },
];

const mockActivities: StudentActivity[] = [
    { id: '1', studentName: 'Aarav Sharma', avatar: 'AS', busId: 'BUS-001', timestamp: '2 min ago', method: 'qr', status: 'boarded' },
    { id: '2', studentName: 'Diya Patel', avatar: 'DP', busId: 'BUS-002', timestamp: '5 min ago', method: 'ble', status: 'pending' },
    { id: '3', studentName: 'Rohan Gupta', avatar: 'RG', busId: 'BUS-001', timestamp: '8 min ago', method: 'qr', status: 'boarded' },
    { id: '4', studentName: 'Ananya Mehta', avatar: 'AM', busId: 'BUS-003', timestamp: '10 min ago', method: 'qr', status: 'dropped' },
    { id: '5', studentName: 'Kabir Singh', avatar: 'KS', busId: 'BUS-002', timestamp: '12 min ago', method: 'qr', status: 'boarded' },
    { id: '6', studentName: 'Myra Khan', avatar: 'MK', busId: 'BUS-001', timestamp: '15 min ago', method: 'qr', status: 'unauthorized' },
];

const LiveTraking = () => {
    const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
    const [buses] = useState<Bus[]>(mockBuses);
    const [activities] = useState<StudentActivity[]>(mockActivities);

    const getStatusColor = (status: Bus['status']) => {
        switch (status) {
            case 'moving': return 'bg-[#22C55E]';
            case 'idle': return 'bg-gray-400';
            case 'delayed': return 'bg-[#F59E0B]';
            case 'offline': return 'bg-[#EF4444]';
        }
    };

    const getConnectivityIcon = (connectivity: Bus['connectivity']) => {
        switch (connectivity) {
            case 'online': return <Wifi className="w-4 h-4 text-[#22C55E]" />;
            case 'ble': return <Bluetooth className="w-4 h-4 text-[#3B82F6]" />;
            case 'offline': return <WifiOff className="w-4 h-4 text-[#EF4444]" />;
        }
    };

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
        <div className="p-6 h-full flex gap-6">
            {/* Map Area */}
            <div className="border flex-1 bg-white rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                {/* Map Simulation */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 relative">
                    {/* Mock Map Grid */}
                    <div className="absolute inset-0 opacity-10">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="h-[5%] border-b border-gray-400"></div>
                        ))}
                    </div>

                    {/* Bus Markers */}
                    {buses.map((bus, idx) => (
                        <div
                            key={bus.id}
                            onClick={() => setSelectedBus(bus)}
                            className="absolute cursor-pointer group"
                            style={{
                                left: `${20 + idx * 15}%`,
                                top: `${30 + idx * 10}%`,
                            }}
                        >
                            <div className={`w-10 h-10 ${getStatusColor(bus.status)} rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110`}>
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                {bus.id}
                            </div>
                        </div>
                    ))}

                    {/* Map Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
                            <span className="text-xl">+</span>
                        </button>
                        <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
                            <span className="text-xl">−</span>
                        </button>
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#22C55E] rounded-full"></div>
                                <span className="text-xs text-gray-700">Moving</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                <span className="text-xs text-gray-700">Idle</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
                                <span className="text-xs text-gray-700">Delayed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#EF4444] rounded-full"></div>
                                <span className="text-xs text-gray-700">Offline</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bus Detail Popup */}
                {selectedBus && (
                    <div className="absolute top-4 left-4 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className="bg-[#4F6EDB] text-white p-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">{selectedBus.id}</h3>
                                <p className="text-sm opacity-90">Route {selectedBus.routeId}</p>
                            </div>
                            <button onClick={() => setSelectedBus(null)} className="p-1 hover:bg-white/20 rounded">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Driver</span>
                                <span className="text-sm font-medium">{selectedBus.driver}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Speed</span>
                                <span className="text-sm font-medium">{selectedBus.speed} km/h</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">ETA</span>
                                <span className="text-sm font-medium">{selectedBus.eta}</span>
                            </div>
                            {selectedBus.delay > 0 && (
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Delay</span>
                                    <span className="text-sm font-medium text-[#F59E0B]">{selectedBus.delay} min</span>
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Students Onboard</span>
                                <span className="text-sm font-medium">{selectedBus.studentsOnboard}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Connectivity</span>
                                <div className="flex items-center gap-2">
                                    {getConnectivityIcon(selectedBus.connectivity)}
                                    <span className="text-sm font-medium capitalize">{selectedBus.connectivity}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Last Sync</span>
                                <span className="text-sm font-medium">{selectedBus.lastSync}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Sidebar */}
            <div className="w-96 flex flex-col gap-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-semibold text-gray-900">{buses.filter(b => b.status !== 'offline').length}</div>
                        <div className="text-sm text-gray-600 mt-1">Active Buses</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-semibold text-gray-900">{buses.reduce((sum, b) => sum + b.studentsOnboard, 0)}</div>
                        <div className="text-sm text-gray-600 mt-1">Students Onboard</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-semibold text-[#F59E0B]">{buses.filter(b => b.status === 'delayed').length}</div>
                        <div className="text-sm text-gray-600 mt-1">Delayed Buses</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-semibold text-[#EF4444]">{buses.filter(b => b.status === 'offline').length}</div>
                        <div className="text-sm text-gray-600 mt-1">Offline Buses</div>
                    </div>
                </div>

                {/* Student Activity Feed */}
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
            </div>
        </div>
    )
}

export default LiveTraking