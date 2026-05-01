"use client"
import React from 'react'
import { useState } from 'react';
import SummaryCards from './busManagementComponents/SummaryCards';
import BusList from './busManagementComponents/BusList';
import BusDetailPanel from './busManagementComponents/BusDetailPanel';
import QRModal from './busManagementComponents/QRModal';
import ConnectivityInfo from './busManagementComponents/ConnectivityInfo';
import { BusData } from './busManagementComponents/types'

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

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Bus Fleet Management</h1>
        <p className="text-gray-600 mt-1">Monitor fleet status, connectivity, and device health</p>
      </div>

      <SummaryCards buses={buses} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BusList buses={buses} onSelect={(b) => setSelectedBus(b)} />
        <div>
          <BusDetailPanel selectedBus={selectedBus} onOpenQR={() => setShowQRModal(true)} />
        </div>
      </div>

      <QRModal show={showQRModal} bus={selectedBus} onClose={() => setShowQRModal(false)} />

      <ConnectivityInfo />
    </div>
  )
}

export default BusManagement