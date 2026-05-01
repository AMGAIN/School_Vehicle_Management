import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { BusData } from './types'

const QRModal = ({ show, bus, onClose }: { show: boolean, bus: BusData | null, onClose: () => void }) => {
    if (!show || !bus) return null
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bus QR Code</h3>
                    <p className="text-sm text-gray-600 mb-6">{bus.id} - Route {bus.route}</p>
                    <div className="bg-white p-6 rounded-lg border-4 border-[#4F6EDB] inline-block">
                        <QRCodeSVG value={bus.id} size={200} />
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
                            onClick={onClose}
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
    )
}

export default QRModal
