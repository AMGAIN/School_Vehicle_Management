import React from 'react'
import { Bus, Clock, Edit, MapPin, Navigation, Trash2 } from 'lucide-react'
import { RouteData } from './types'

const RoutesList = ({
  routes,
  selectedRoute,
  onSelectRoute,
}: {
  routes: RouteData[];
  selectedRoute: RouteData | null;
  onSelectRoute: (route: RouteData) => void;
}) => {
  return (
    <div className="lg:col-span-2 space-y-4">
      {routes.map((route) => (
        <div
          key={route.id}
          onClick={() => onSelectRoute(route)}
          className={`bg-white rounded-xl shadow-sm border-2 transition-all cursor-pointer ${selectedRoute?.id === route.id ? 'border-[#4F6EDB]' : 'border-gray-200 hover:border-gray-300'
            }`}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: route.color }}
                >
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{route.name}</h3>
                  <p className="text-sm text-gray-500">{route.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${route.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                  {route.status}
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Assigned Bus</p>
                <div className="flex items-center gap-1 mt-1">
                  <Bus className="w-4 h-4 text-gray-600" />
                  <p className="text-sm font-medium text-gray-900">{route.assignedBus}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Stops</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <p className="text-sm font-medium text-gray-900">{route.totalStops}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Distance</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{route.distance}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <p className="text-sm font-medium text-gray-900">{route.duration}</p>
                </div>
              </div>
            </div>

            {/* Route Timeline */}
            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
              <div className="space-y-2">
                {route.stops.slice(0, 3).map((stop, idx) => (
                  <div key={stop.id} className="flex items-center gap-3 relative">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium z-10"
                      style={{ backgroundColor: route.color }}
                    >
                      {idx + 1}
                    </div>
                    <div className="flex-1 flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{stop.name}</p>
                        <p className="text-xs text-gray-500">{stop.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{stop.time}</p>
                        {stop.studentsCount > 0 && (
                          <p className="text-xs text-gray-500">{stop.studentsCount} students</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {route.stops.length > 3 && (
                  <div className="pl-9 text-sm text-gray-500">
                    +{route.stops.length - 3} more stops
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoutesList
