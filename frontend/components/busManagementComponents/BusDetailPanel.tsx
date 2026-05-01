import React from 'react'
import { Bus, Wifi, WifiOff, Bluetooth, MapPin, User, CheckCircle } from 'lucide-react'
import { BusData } from './types'
import { getConnectivityIcon } from './utils'

const BusDetailPanel = ({ selectedBus, onOpenQR }: { selectedBus: BusData | null, onOpenQR: () => void }) => {
    return (
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
                                onClick={onOpenQR}
                                className="w-full px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <Bus className="w-4 h-4" />
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
    )
}

export default BusDetailPanel
