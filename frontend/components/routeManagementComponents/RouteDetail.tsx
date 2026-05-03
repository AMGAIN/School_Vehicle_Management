import React from 'react'
import { Bus, Navigation, Plus } from 'lucide-react'
import { RouteData } from './types'

const RouteDetail = ({ selectedRoute }: { selectedRoute: RouteData | null }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
      {selectedRoute ? (
        <div>
          <div
            className="p-6 text-white"
            style={{ backgroundColor: selectedRoute.color }}
          >
            <div className="flex items-center gap-3">
              <Navigation className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg">{selectedRoute.name}</h3>
                <p className="text-sm opacity-90">{selectedRoute.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <Bus className="w-4 h-4" />
                Assigned Bus
              </label>
              <p className="font-medium text-gray-900">{selectedRoute.assignedBus}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Distance</label>
                <p className="font-medium text-gray-900">{selectedRoute.distance}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Duration</label>
                <p className="font-medium text-gray-900">{selectedRoute.duration}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">All Stops ({selectedRoute.totalStops})</h4>
                <button className="text-sm text-[#4F6EDB] hover:underline flex items-center gap-1">
                  <Plus className="w-4 h-4" />
                  Add Stop
                </button>
              </div>

              <div className="relative max-h-96 overflow-y-auto">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
                <div className="space-y-3">
                  {selectedRoute.stops.map((stop, idx) => (
                    <div key={stop.id} className="flex items-start gap-3 relative">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium z-10 flex-shrink-0"
                        style={{ backgroundColor: selectedRoute.color }}
                      >
                        {idx + 1}
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{stop.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{stop.location}</p>
                            {stop.studentsCount > 0 && (
                              <p className="text-xs text-[#4F6EDB] mt-1">{stop.studentsCount} students</p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{stop.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors">
                View on Map
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center text-gray-500">
          <Navigation className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p>Select a route to view details</p>
        </div>
      )}
    </div>
  )
}

export default RouteDetail
