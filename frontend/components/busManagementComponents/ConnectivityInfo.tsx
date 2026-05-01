import React from 'react'
import { Wifi, WifiOff, Bluetooth } from 'lucide-react'

const ConnectivityInfo = () => {
  return (
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
  )
}

export default ConnectivityInfo
