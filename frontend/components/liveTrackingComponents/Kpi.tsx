import React from 'react'
import { useState } from 'react';

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

const Kpi = () => {
    const [buses] = useState<Bus[]>(mockBuses);

    return (
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
    )
}

export default Kpi