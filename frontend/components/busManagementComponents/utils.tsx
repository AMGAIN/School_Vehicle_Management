import React from 'react'
import { Wifi, WifiOff, Bluetooth } from 'lucide-react'
import { BusData } from './types'

export const getConnectivityIcon = (connectivity: BusData['connectivity']) => {
    switch (connectivity) {
        case 'online': return <Wifi className="w-5 h-5 text-[#22C55E]" />;
        case 'ble': return <Bluetooth className="w-5 h-5 text-[#3B82F6]" />;
        case 'offline': return <WifiOff className="w-5 h-5 text-[#EF4444]" />;
    }
}

export const getConnectivityBadge = (connectivity: BusData['connectivity']) => {
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
}

export default null;
