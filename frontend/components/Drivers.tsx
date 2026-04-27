import React from 'react'
import { useState } from 'react';
import { Search, UserPlus, Phone, Mail, Bus, AlertTriangle, CheckCircle, Zap, Clock, X } from 'lucide-react';
import { toast } from 'sonner';

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

const Drivers = () => {
    const [drivers, setDrivers] = useState<Driver[]>(mockDrivers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDriver, setNewDriver] = useState({
    name: '',
    email: '',
    phone: '',
    licenseNumber: '',
    assignedBus: '',
    experience: '',
    emergencyContactName: '',
    emergencyContactPhone: ''
  });

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.phone.includes(searchQuery)
  );

  const getStatusColor = (status: Driver['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'on-break': return 'bg-yellow-100 text-yellow-800';
      case 'off-duty': return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Driver Management</h1>
        <p className="text-gray-600 mt-1">Manage driver profiles, performance analytics, and safety metrics</p>
      </div>

      {/* Summary Cards */}
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

      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search drivers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Add Driver
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Drivers List */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {
                    ['Driver', 'Bus', 'Status', 'Performance', 'Rating', 'Violations'].map((item, index) => {
                      return (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{item}</th>
                      )
                    })
                  }
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDrivers.map((driver) => (
                  <tr
                    key={driver.id}
                    onClick={() => setSelectedDriver(driver)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white font-medium">
                          {driver.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{driver.name}</div>
                          <div className="text-sm text-gray-500">{driver.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Bus className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{driver.assignedBus}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(driver.status)}`}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                          <div
                            className={`h-2 rounded-full ${driver.performanceScore >= 90 ? 'bg-[#22C55E]' :
                                driver.performanceScore >= 80 ? 'bg-[#F59E0B]' :
                                  'bg-[#EF4444]'
                              }`}
                            style={{ width: `${driver.performanceScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{driver.performanceScore}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-gray-900">{driver.rating}</span>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${(driver.violations.speeding + driver.violations.harshBraking + driver.violations.idleTime) <= 5
                          ? 'bg-green-100 text-green-800'
                          : (driver.violations.speeding + driver.violations.harshBraking + driver.violations.idleTime) <= 10
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                        {driver.violations.speeding + driver.violations.harshBraking + driver.violations.idleTime}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Driver Detail Panel */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
          {selectedDriver ? (
            <div>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white text-xl font-medium">
                    {selectedDriver.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedDriver.name}</h3>
                    <p className="text-sm text-gray-500">{selectedDriver.id}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.round(selectedDriver.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({selectedDriver.rating})</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  <p className="font-medium text-gray-900 text-sm">{selectedDriver.email}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </label>
                  <p className="font-medium text-gray-900">{selectedDriver.phone}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-500">License Number</label>
                  <p className="font-medium text-gray-900 text-sm">{selectedDriver.licenseNumber}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500 flex items-center gap-2">
                      <Bus className="w-4 h-4" />
                      Assigned Bus
                    </label>
                    <p className="font-medium text-gray-900">{selectedDriver.assignedBus}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Experience</label>
                    <p className="font-medium text-gray-900">{selectedDriver.experience}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Performance Analytics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Performance Score</span>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                          <div
                            className={`h-2 rounded-full ${selectedDriver.performanceScore >= 90 ? 'bg-[#22C55E]' :
                                selectedDriver.performanceScore >= 80 ? 'bg-[#F59E0B]' :
                                  'bg-[#EF4444]'
                              }`}
                            style={{ width: `${selectedDriver.performanceScore}%` }}
                          ></div>
                        </div>
                        <span className="font-medium text-gray-900">{selectedDriver.performanceScore}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Trips Completed</span>
                      <span className="font-medium text-gray-900">{selectedDriver.analytics.tripsCompleted}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">On-Time Rate</span>
                      <span className="font-medium text-gray-900">{selectedDriver.analytics.onTimeRate}%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Avg Speed</span>
                      <span className="font-medium text-gray-900">{selectedDriver.analytics.avgSpeed} km/h</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Total Distance</span>
                      <span className="font-medium text-gray-900">{selectedDriver.analytics.totalDistance}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Safety Violations</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-red-600" />
                        <span className="text-sm text-red-900">Over-speeding</span>
                      </div>
                      <span className="font-medium text-red-900">{selectedDriver.violations.speeding}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-900">Harsh Braking</span>
                      </div>
                      <span className="font-medium text-orange-900">{selectedDriver.violations.harshBraking}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm text-yellow-900">Excessive Idle</span>
                      </div>
                      <span className="font-medium text-yellow-900">{selectedDriver.violations.idleTime}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Emergency Contact</h4>
                  <div className="p-3 bg-gray-50 rounded-lg space-y-1">
                    <p className="text-sm font-medium text-gray-900">{selectedDriver.emergencyContact.name}</p>
                    <p className="text-sm text-gray-600">{selectedDriver.emergencyContact.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <Bus className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>Select a driver to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Driver Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Add New Driver</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={newDriver.name}
                      onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                      placeholder="Enter driver's full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={newDriver.email}
                        onChange={(e) => setNewDriver({ ...newDriver, email: e.target.value })}
                        placeholder="driver@yatritech.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={newDriver.phone}
                        onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      License Number *
                    </label>
                    <input
                      type="text"
                      value={newDriver.licenseNumber}
                      onChange={(e) => setNewDriver({ ...newDriver, licenseNumber: e.target.value })}
                      placeholder="DL-07-2023-XXXXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Assignment Details */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Assignment Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assigned Bus *
                    </label>
                    <select
                      value={newDriver.assignedBus}
                      onChange={(e) => setNewDriver({ ...newDriver, assignedBus: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                    >
                      <option value="">Select a bus</option>
                      <option value="BUS-001">BUS-001</option>
                      <option value="BUS-002">BUS-002</option>
                      <option value="BUS-003">BUS-003</option>
                      <option value="BUS-004">BUS-004</option>
                      <option value="BUS-005">BUS-005</option>
                      <option value="BUS-006">BUS-006</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience *
                    </label>
                    <input
                      type="text"
                      value={newDriver.experience}
                      onChange={(e) => setNewDriver({ ...newDriver, experience: e.target.value })}
                      placeholder="e.g., 5 years"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Emergency Contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      value={newDriver.emergencyContactName}
                      onChange={(e) => setNewDriver({ ...newDriver, emergencyContactName: e.target.value })}
                      placeholder="Emergency contact name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      value={newDriver.emergencyContactPhone}
                      onChange={(e) => setNewDriver({ ...newDriver, emergencyContactPhone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  Driver will be created with default performance metrics. Performance tracking and analytics will begin once the driver starts trips.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewDriver({
                    name: '',
                    email: '',
                    phone: '',
                    licenseNumber: '',
                    assignedBus: '',
                    experience: '',
                    emergencyContactName: '',
                    emergencyContactPhone: ''
                  });
                }}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!newDriver.name || !newDriver.email || !newDriver.phone ||
                    !newDriver.licenseNumber || !newDriver.assignedBus ||
                    !newDriver.experience || !newDriver.emergencyContactName ||
                    !newDriver.emergencyContactPhone) {
                    toast.error('Please fill in all required fields');
                    return;
                  }

                  const driverId = `DRV-${String(drivers.length + 1).padStart(3, '0')}`;
                  const newDriverData: Driver = {
                    id: driverId,
                    name: newDriver.name,
                    email: newDriver.email,
                    phone: newDriver.phone,
                    licenseNumber: newDriver.licenseNumber,
                    assignedBus: newDriver.assignedBus,
                    status: 'active',
                    experience: newDriver.experience,
                    rating: 0,
                    performanceScore: 0,
                    violations: { speeding: 0, harshBraking: 0, idleTime: 0 },
                    analytics: { tripsCompleted: 0, onTimeRate: 0, avgSpeed: 0, totalDistance: '0 km' },
                    emergencyContact: {
                      name: newDriver.emergencyContactName,
                      phone: newDriver.emergencyContactPhone
                    }
                  };

                  setDrivers([...drivers, newDriverData]);
                  toast.success(`Driver ${newDriver.name} added successfully!`);
                  setShowAddModal(false);
                  setNewDriver({
                    name: '',
                    email: '',
                    phone: '',
                    licenseNumber: '',
                    assignedBus: '',
                    experience: '',
                    emergencyContactName: '',
                    emergencyContactPhone: ''
                  });
                  setSelectedDriver(newDriverData);
                }}
                className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors"
              >
                Add Driver
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Drivers