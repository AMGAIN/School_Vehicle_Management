import React from 'react'
import { useState } from 'react';

import { Wifi, Bluetooth, WifiOff, MapPin, X } from 'lucide-react';

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
const mockBuses: Bus[] = [
    { id: 'BUS-001', routeId: 'RT-01', status: 'moving', position: { lat: 28.6139, lng: 77.2090 }, driver: 'Rajesh Kumar', speed: 35, eta: '10:45 AM', delay: 0, studentsOnboard: 28, connectivity: 'online', lastSync: 'Just now' },
    { id: 'BUS-002', routeId: 'RT-02', status: 'delayed', position: { lat: 28.6289, lng: 77.2195 }, driver: 'Amit Singh', speed: 20, eta: '10:52 AM', delay: 7, studentsOnboard: 32, connectivity: 'ble', lastSync: '2 min ago' },
    { id: 'BUS-003', routeId: 'RT-03', status: 'idle', position: { lat: 28.6000, lng: 77.2300 }, driver: 'Suresh Verma', speed: 0, eta: '11:00 AM', delay: 0, studentsOnboard: 15, connectivity: 'online', lastSync: 'Just now' },
    { id: 'BUS-004', routeId: 'RT-04', status: 'offline', position: { lat: 28.5950, lng: 77.2150 }, driver: 'Vijay Sharma', speed: 0, eta: 'Unknown', delay: 15, studentsOnboard: 20, connectivity: 'offline', lastSync: '15 min ago' },
];

const MapDisplay = () => {
    const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
    const [buses] = useState<Bus[]>(mockBuses);

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

    return (
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
                <div className="border absolute top-4 left-4 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
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

    )
}

export default MapDisplay