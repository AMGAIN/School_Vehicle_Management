import React from 'react'
import { useState } from 'react';
interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  assignedBus: string;
  status: 'active' | 'on-break' | 'off-duty';
  experience: string;
  rating: number;
  performanceScore: number;
  violations: {
    speeding: number;
    harshBraking: number;
    idleTime: number;
  };
  analytics: {
    tripsCompleted: number;
    onTimeRate: number;
    avgSpeed: number;
    totalDistance: string;
  };
  emergencyContact: {
    name: string;
    phone: string;
  };
}

const mockDrivers: Driver[] = [
  {
    id: 'DRV-001',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@yatritech.com',
    phone: '+91 98765 43210',
    licenseNumber: 'DL-07-2015-001234',
    assignedBus: 'BUS-001',
    status: 'active',
    experience: '8 years',
    rating: 4.8,
    performanceScore: 95,
    violations: { speeding: 2, harshBraking: 3, idleTime: 1 },
    analytics: { tripsCompleted: 245, onTimeRate: 98, avgSpeed: 32, totalDistance: '3,680 km' },
    emergencyContact: { name: 'Sunita Kumar', phone: '+91 98765 43211' }
  },
  {
    id: 'DRV-002',
    name: 'Amit Singh',
    email: 'amit.singh@yatritech.com',
    phone: '+91 98765 43212',
    licenseNumber: 'DL-07-2016-005678',
    assignedBus: 'BUS-002',
    status: 'active',
    experience: '6 years',
    rating: 4.5,
    performanceScore: 88,
    violations: { speeding: 5, harshBraking: 4, idleTime: 3 },
    analytics: { tripsCompleted: 198, onTimeRate: 92, avgSpeed: 35, totalDistance: '2,970 km' },
    emergencyContact: { name: 'Priya Singh', phone: '+91 98765 43213' }
  },
  {
    id: 'DRV-003',
    name: 'Suresh Verma',
    email: 'suresh.verma@yatritech.com',
    phone: '+91 98765 43214',
    licenseNumber: 'DL-07-2014-009012',
    assignedBus: 'BUS-003',
    status: 'active',
    experience: '10 years',
    rating: 4.9,
    performanceScore: 92,
    violations: { speeding: 3, harshBraking: 2, idleTime: 2 },
    analytics: { tripsCompleted: 310, onTimeRate: 95, avgSpeed: 30, totalDistance: '4,650 km' },
    emergencyContact: { name: 'Meena Verma', phone: '+91 98765 43215' }
  },
  {
    id: 'DRV-004',
    name: 'Vijay Sharma',
    email: 'vijay.sharma@yatritech.com',
    phone: '+91 98765 43216',
    licenseNumber: 'DL-07-2017-003456',
    assignedBus: 'BUS-004',
    status: 'on-break',
    experience: '5 years',
    rating: 4.3,
    performanceScore: 85,
    violations: { speeding: 6, harshBraking: 5, idleTime: 4 },
    analytics: { tripsCompleted: 165, onTimeRate: 88, avgSpeed: 33, totalDistance: '2,475 km' },
    emergencyContact: { name: 'Kavita Sharma', phone: '+91 98765 43217' }
  },
  {
    id: 'DRV-005',
    name: 'Prakash Rao',
    email: 'prakash.rao@yatritech.com',
    phone: '+91 98765 43218',
    licenseNumber: 'DL-07-2015-007890',
    assignedBus: 'BUS-005',
    status: 'off-duty',
    experience: '7 years',
    rating: 4.6,
    performanceScore: 90,
    violations: { speeding: 4, harshBraking: 3, idleTime: 2 },
    analytics: { tripsCompleted: 220, onTimeRate: 93, avgSpeed: 31, totalDistance: '3,300 km' },
    emergencyContact: { name: 'Lakshmi Rao', phone: '+91 98765 43219' }
  },
];
const DriversSummaryCards = () => {
        const [drivers, setDrivers] = useState<Driver[]>(mockDrivers);
    
  return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Drivers</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{drivers.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-2xl font-semibold text-[#22C55E] mt-1">
            {drivers.filter(d => d.status === 'active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Avg Rating</p>
          <div className="flex items-center gap-1 mt-1">
            <p className="text-2xl font-semibold text-gray-900">4.6</p>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">On-Time Rate</p>
          <p className="text-2xl font-semibold text-[#3B82F6] mt-1">93%</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Violations</p>
          <p className="text-2xl font-semibold text-[#EF4444] mt-1">
            {drivers.reduce((sum, d) => sum + d.violations.speeding + d.violations.harshBraking + d.violations.idleTime, 0)}
          </p>
        </div>
      </div>
  )
}

export default DriversSummaryCards