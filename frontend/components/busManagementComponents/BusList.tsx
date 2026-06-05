import React from 'react'
import { Bus } from 'lucide-react'
import { BusData } from './types'
import { getConnectivityBadge } from './utils'

const BusList = ({ buses, onSelect }: { buses: BusData[], onSelect: (b: BusData) => void }) => {
    return (
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            {['Bus Id', 'Route', 'Driver', 'Status', 'Connectivity', 'Opacity'].map((item, index) => (
                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {buses.map((bus) => (
                            <tr
                                key={bus.id}
                                onClick={() => onSelect(bus)}
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
    )
}

export default BusList