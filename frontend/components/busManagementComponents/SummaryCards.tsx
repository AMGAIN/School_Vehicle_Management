import React from 'react'
import { BusData } from './types'

const SummaryCards = ({ buses }: { buses: BusData[] }) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
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
    )
}

export default SummaryCards
