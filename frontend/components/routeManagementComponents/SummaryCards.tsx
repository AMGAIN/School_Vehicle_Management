import React from 'react'
import { RouteData } from './types'

const SummaryCards = ({ routes }: { routes: RouteData[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Total Routes</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{routes.length}</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Active Routes</p>
        <p className="text-2xl font-semibold text-[#22C55E] mt-1">
          {routes.filter(r => r.status === 'active').length}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Total Stops</p>
        <p className="text-2xl font-semibold text-[#3B82F6] mt-1">
          {routes.reduce((sum, r) => sum + r.totalStops, 0)}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Total Distance</p>
        <p className="text-2xl font-semibold text-[#F59E0B] mt-1">46.5 km</p>
      </div>
    </div>
  )
}

export default SummaryCards
