"use client"
import React from 'react'
import { useState } from 'react';
import { Bus, Wifi, WifiOff, Bluetooth, MapPin, User, Clock, AlertTriangle, CheckCircle, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface BusData {
  id: string;
  capacity: number;
  route: string;
  driver: string;
  status: 'active' | 'inactive' | 'maintenance';
  connectivity: 'online' | 'ble' | 'offline';
  lastSync: string;
  studentsOnboard: number;
  location: string;
  speed: number;
  fuelLevel: number;
  deviceId: string;
}
const mockBuses: BusData[] = [
  { id: 'BUS-001', capacity: 40, route: 'RT-01', driver: 'Rajesh Kumar', status: 'active', connectivity: 'online', lastSync: 'Just now', studentsOnboard: 28, location: 'Sector 15, Noida', speed: 35, fuelLevel: 75, deviceId: 'DEV-001' },
  { id: 'BUS-002', capacity: 45, route: 'RT-02', driver: 'Amit Singh', status: 'active', connectivity: 'ble', lastSync: '2 min ago', studentsOnboard: 32, location: 'Indirapuram', speed: 20, fuelLevel: 60, deviceId: 'DEV-002' },
  { id: 'BUS-003', capacity: 35, route: 'RT-03', driver: 'Suresh Verma', status: 'active', connectivity: 'online', lastSync: 'Just now', studentsOnboard: 15, location: 'Vasundhara', speed: 45, fuelLevel: 85, deviceId: 'DEV-003' },
  { id: 'BUS-004', capacity: 40, route: 'RT-04', driver: 'Vijay Sharma', status: 'active', connectivity: 'offline', lastSync: '15 min ago', studentsOnboard: 20, location: 'Unknown', speed: 0, fuelLevel: 45, deviceId: 'DEV-004' },
  { id: 'BUS-005', capacity: 38, route: 'RT-05', driver: 'Prakash Rao', status: 'maintenance', connectivity: 'offline', lastSync: '2 hours ago', studentsOnboard: 0, location: 'Depot', speed: 0, fuelLevel: 30, deviceId: 'DEV-005' },
];
const BusManagement = () => {
  const [buses] = useState<BusData[]>(mockBuses);
  const [selectedBus, setSelectedBus] = useState<BusData | null>(null);
  const [showQRModal, setShowQRModal] = useState(false);

  const getConnectivityIcon = (connectivity: BusData['connectivity']) => {
    switch (connectivity) {
      case 'online': return <Wifi className="w-5 h-5 text-[#22C55E]" />;
      case 'ble': return <Bluetooth className="w-5 h-5 text-[#3B82F6]" />;
      case 'offline': return <WifiOff className="w-5 h-5 text-[#EF4444]" />;
    }
  };

  const getConnectivityBadge = (connectivity: BusData['connectivity']) => {
    switch (connectivity) {
      case 'online':
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center gap-1">
          <Wifi className="w-3 h-3" />
          Online
        </span>;
      case 'ble':
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center gap-1">
          <Bluetooth className="w-3 h-3" />
          BLE Mode
        </span>;
      case 'offline':
        return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium flex items-center gap-1">
          <WifiOff className="w-3 h-3" />
          Offline
        </span>;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Bus Fleet Management</h1>
        <p className="text-gray-600 mt-1">Monitor fleet status, connectivity, and device health</p>
      </div>

      {/* Summary Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {/* {
          ['Total Fleet', buses.length]
        } */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Fleet</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{buses.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-2xl font-semibold text-[#22C55E] mt-1">
            {buses.filter(b => b.status === 'active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">🟢 Online</p>
          <p className="text-2xl font-semibold text-[#22C55E] mt-1">
            {buses.filter(b => b.connectivity === 'online').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">🔵 BLE Mode</p>
          <p className="text-2xl font-semibold text-[#3B82F6] mt-1">
            {buses.filter(b => b.connectivity === 'ble').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">🔴 Offline</p>
          <p className="text-2xl font-semibold text-[#EF4444] mt-1">
            {buses.filter(b => b.connectivity === 'offline').length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bus List */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {
                    ['Bus Id', 'Route', 'Driver', 'Status', 'Connectivity', 'Opacity'].map((item, index) => {
                      return (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{item}</th>
                      )
                    })
                  }
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {buses.map((bus) => (
                  <tr
                    key={bus.id}
                    onClick={() => setSelectedBus(bus)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Bus className="w-5 h-5 text-[#4F6EDB]" />
                        <span className="font-medium text-gray-900">{bus.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{bus.route}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{bus.driver}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${bus.status === 'active' ? 'bg-green-100 text-green-800' :
                        bus.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                        {bus.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getConnectivityBadge(bus.connectivity)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 w-16">
                          <div
                            className="bg-[#4F6EDB] h-2 rounded-full"
                            style={{ width: `${(bus.studentsOnboard / bus.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-700">{bus.studentsOnboard}/{bus.capacity}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bus Detail Panel */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
          {selectedBus ? (
            <div>
              <div className="p-6 bg-[#4F6EDB] text-white">
                <div className="flex items-center gap-3">
                  <Bus className="w-8 h-8" />
                  <div>
                    <h3 className="font-semibold text-lg">{selectedBus.id}</h3>
                    <p className="text-sm opacity-90">{selectedBus.route}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Device ID</label>
                  <p className="font-medium text-gray-900">{selectedBus.deviceId}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    Connectivity Status
                  </label>
                  <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {getConnectivityIcon(selectedBus.connectivity)}
                      <span className="font-medium text-gray-900 capitalize">{selectedBus.connectivity}</span>
                    </div>
                    <p className="text-sm text-gray-600">Last sync: {selectedBus.lastSync}</p>
                  </div>

                  {selectedBus.connectivity === 'ble' && (
                    <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-900">
                        <Bluetooth className="w-4 h-4" />
                        <p className="text-sm font-medium">BLE Mode Active</p>
                      </div>
                      <p className="text-xs text-blue-700 mt-1">
                        Data is being collected locally and will sync when internet connection is restored
                      </p>
                    </div>
                  )}

                  {selectedBus.connectivity === 'offline' && (
                    <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-900">
                        <WifiOff className="w-4 h-4" />
                        <p className="text-sm font-medium">Device Offline</p>
                      </div>
                      <p className="text-xs text-red-700 mt-1">
                        No connection to bus device. Last update was {selectedBus.lastSync}
                      </p>
                    </div>
                  )}

                  {selectedBus.connectivity === 'online' && (
                    <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-900">
                        <CheckCircle className="w-4 h-4" />
                        <p className="text-sm font-medium">Real-time Sync Active</p>
                      </div>
                      <p className="text-xs text-green-700 mt-1">
                        All data is syncing in real-time with cloud servers
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Driver
                  </label>
                  <p className="font-medium text-gray-900">{selectedBus.driver}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Current Location
                  </label>
                  <p className="font-medium text-gray-900">{selectedBus.location}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500">Speed</label>
                    <p className="font-medium text-gray-900">{selectedBus.speed} km/h</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Fuel Level</label>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${selectedBus.fuelLevel > 50 ? 'bg-[#22C55E]' :
                            selectedBus.fuelLevel > 25 ? 'bg-[#F59E0B]' :
                              'bg-[#EF4444]'
                            }`}
                          style={{ width: `${selectedBus.fuelLevel}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{selectedBus.fuelLevel}%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500">Capacity</label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-[#4F6EDB] h-3 rounded-full"
                        style={{ width: `${(selectedBus.studentsOnboard / selectedBus.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-medium text-gray-900">
                      {selectedBus.studentsOnboard}/{selectedBus.capacity}
                    </span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => setShowQRModal(true)}
                    className="w-full px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <QrCode className="w-4 h-4" />
                    View Bus QR Code
                  </button>
                  <button className="w-full px-4 py-2 border-2 border-[#4F6EDB] text-[#4F6EDB] rounded-lg hover:bg-[#4F6EDB]/10 transition-colors">
                    View Live Tracking
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <Bus className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>Select a bus to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* QR Modal */}
      {showQRModal && selectedBus && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowQRModal(false)}>
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bus QR Code</h3>
              <p className="text-sm text-gray-600 mb-6">{selectedBus.id} - Route {selectedBus.route}</p>
              <div className="bg-white p-6 rounded-lg border-4 border-[#4F6EDB] inline-block">
                <QRCodeSVG value={selectedBus.id} size={200} />
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-blue-900 text-sm mb-2">How it works:</h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Display this QR code on the bus windshield/door</li>
                  <li>• Parents scan it using the YatriTECH mobile app</li>
                  <li>• System verifies student assignment to this bus</li>
                  <li>• Boarding is logged with timestamp and parent info</li>
                </ul>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowQRModal(false)}
                  className="flex-1 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 px-6 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors">
                  Print QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Connectivity Information */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-3">📡 Connectivity Modes</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Wifi className="w-5 h-5 text-[#22C55E]" />
              <h5 className="font-medium text-gray-900">Online Mode</h5>
            </div>
            <p className="text-sm text-gray-600">
              Real-time data sync with cloud servers. All boarding events and GPS data instantly available.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bluetooth className="w-5 h-5 text-[#3B82F6]" />
              <h5 className="font-medium text-gray-900">BLE Mode</h5>
            </div>
            <p className="text-sm text-gray-600">
              Offline operation via Bluetooth. Data stored locally on bus device and syncs when connection restored.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <WifiOff className="w-5 h-5 text-[#EF4444]" />
              <h5 className="font-medium text-gray-900">Offline</h5>
            </div>
            <p className="text-sm text-gray-600">
              No connection to bus device. System shows last known state and alerts administrators.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusManagement