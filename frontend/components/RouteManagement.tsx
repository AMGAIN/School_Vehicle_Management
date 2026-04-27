import React from 'react'
import { useState } from 'react';
import { MapPin, Plus, Clock, Bus, Edit, Trash2, Navigation, X } from 'lucide-react';
import { toast } from 'sonner';

interface Stop {
  id: string;
  name: string;
  location: string;
  time: string;
  studentsCount: number;
}

interface RouteData {
  id: string;
  name: string;
  assignedBus: string;
  status: 'active' | 'inactive';
  totalStops: number;
  distance: string;
  duration: string;
  studentsCount: number;
  stops: Stop[];
  color: string;
}

const mockRoutes: RouteData[] = [
  {
    id: 'RT-01',
    name: 'Noida Sector Route',
    assignedBus: 'BUS-001',
    status: 'active',
    totalStops: 8,
    distance: '15.2 km',
    duration: '45 min',
    studentsCount: 32,
    color: '#22C55E',
    stops: [
      { id: 'ST-01', name: 'School Gate A', location: 'Main Campus', time: '07:00 AM', studentsCount: 0 },
      { id: 'ST-02', name: 'Sector 15 Stop', location: 'Sector 15, Noida', time: '07:10 AM', studentsCount: 5 },
      { id: 'ST-03', name: 'Sector 18 Market', location: 'Sector 18, Noida', time: '07:18 AM', studentsCount: 8 },
      { id: 'ST-04', name: 'Sector 22 Park', location: 'Sector 22, Noida', time: '07:25 AM', studentsCount: 6 },
      { id: 'ST-05', name: 'Sector 27 Plaza', location: 'Sector 27, Noida', time: '07:32 AM', studentsCount: 7 },
      { id: 'ST-06', name: 'Sector 30 Junction', location: 'Sector 30, Noida', time: '07:38 AM', studentsCount: 4 },
      { id: 'ST-07', name: 'Sector 37 Circle', location: 'Sector 37, Noida', time: '07:42 AM', studentsCount: 2 },
      { id: 'ST-08', name: 'School Gate A', location: 'Main Campus', time: '07:50 AM', studentsCount: 0 },
    ]
  },
  {
    id: 'RT-02',
    name: 'Indirapuram Express',
    assignedBus: 'BUS-002',
    status: 'active',
    totalStops: 6,
    distance: '18.5 km',
    duration: '55 min',
    studentsCount: 28,
    color: '#3B82F6',
    stops: [
      { id: 'ST-09', name: 'School Gate B', location: 'Main Campus', time: '07:00 AM', studentsCount: 0 },
      { id: 'ST-10', name: 'Indirapuram Main', location: 'Indirapuram', time: '07:12 AM', studentsCount: 8 },
      { id: 'ST-11', name: 'Shipra Mall', location: 'Indirapuram', time: '07:22 AM', studentsCount: 10 },
      { id: 'ST-12', name: 'Ahinsa Khand', location: 'Indirapuram', time: '07:35 AM', studentsCount: 6 },
      { id: 'ST-13', name: 'Vaibhav Khand', location: 'Indirapuram', time: '07:45 AM', studentsCount: 4 },
      { id: 'ST-14', name: 'School Gate B', location: 'Main Campus', time: '08:00 AM', studentsCount: 0 },
    ]
  },
  {
    id: 'RT-03',
    name: 'Vasundhara Circuit',
    assignedBus: 'BUS-003',
    status: 'active',
    totalStops: 5,
    distance: '12.8 km',
    duration: '40 min',
    studentsCount: 20,
    color: '#F59E0B',
    stops: [
      { id: 'ST-15', name: 'School Gate C', location: 'Main Campus', time: '07:00 AM', studentsCount: 0 },
      { id: 'ST-16', name: 'Vasundhara Sec 1', location: 'Vasundhara', time: '07:10 AM', studentsCount: 6 },
      { id: 'ST-17', name: 'Vasundhara Sec 5', location: 'Vasundhara', time: '07:20 AM', studentsCount: 8 },
      { id: 'ST-18', name: 'Vasundhara Sec 10', location: 'Vasundhara', time: '07:30 AM', studentsCount: 6 },
      { id: 'ST-19', name: 'School Gate C', location: 'Main Campus', time: '07:45 AM', studentsCount: 0 },
    ]
  },
];
const RouteManagement = () => {
  const [routes, setRoutes] = useState<RouteData[]>(mockRoutes);
  const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newRoute, setNewRoute] = useState({
    name: '',
    assignedBus: '',
    color: '#22C55E',
    startTime: '07:00',
  });
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Route Management</h1>
        <p className="text-gray-600 mt-1">Plan and manage bus routes, stops, and timing schedules</p>
      </div>

      {/* Summary Cards */}
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

      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create New Route
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Routes List */}
        <div className="lg:col-span-2 space-y-4">
          {routes.map((route) => (
            <div
              key={route.id}
              onClick={() => setSelectedRoute(route)}
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

        {/* Route Detail Panel */}
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
      </div>

      {/* Create Route Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Create New Route</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Route Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Route Name *
                </label>
                <input
                  type="text"
                  value={newRoute.name}
                  onChange={(e) => setNewRoute({ ...newRoute, name: e.target.value })}
                  placeholder="e.g., Sector 50 Express"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                />
              </div>

              {/* Assigned Bus */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assigned Bus *
                </label>
                <select
                  value={newRoute.assignedBus}
                  onChange={(e) => setNewRoute({ ...newRoute, assignedBus: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                >
                  <option value="">Select a bus</option>
                  <option value="BUS-001">BUS-001</option>
                  <option value="BUS-002">BUS-002</option>
                  <option value="BUS-003">BUS-003</option>
                  <option value="BUS-004">BUS-004</option>
                  <option value="BUS-005">BUS-005</option>
                  <option value="BUS-006">BUS-006</option>
                </select>
              </div>

              {/* Route Color & Start Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Route Color
                  </label>
                  <div className="flex gap-2">
                    {['#22C55E', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setNewRoute({ ...newRoute, color })}
                        className={`w-10 h-10 rounded-lg border-2 transition-all ${newRoute.color === color ? 'border-gray-900 scale-110' : 'border-gray-300'
                          }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    value={newRoute.startTime}
                    onChange={(e) => setNewRoute({ ...newRoute, startTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  After creating the route, you'll be able to add stops, set timing for each stop, and configure student pickup points.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setNewRoute({ name: '', assignedBus: '', color: '#22C55E', startTime: '07:00' });
                }}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!newRoute.name || !newRoute.assignedBus) {
                    toast.error('Please fill in all required fields');
                    return;
                  }
                  const routeId = `RT-${String(routes.length + 1).padStart(2, '0')}`;
                  const newRouteData: RouteData = {
                    id: routeId,
                    name: newRoute.name,
                    assignedBus: newRoute.assignedBus,
                    status: 'active',
                    totalStops: 0,
                    distance: '0 km',
                    duration: '0 min',
                    studentsCount: 0,
                    color: newRoute.color,
                    stops: []
                  };
                  setRoutes([...routes, newRouteData]);
                  toast.success(`Route ${newRoute.name} created successfully!`);
                  setShowCreateModal(false);
                  setNewRoute({ name: '', assignedBus: '', color: '#22C55E', startTime: '07:00' });
                  setSelectedRoute(newRouteData);
                }}
                className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors"
              >
                Create Route
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RouteManagement