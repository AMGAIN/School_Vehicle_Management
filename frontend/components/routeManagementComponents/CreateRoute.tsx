import React from 'react'
import { X } from 'lucide-react'
import { NewRouteDraft } from './types'

const CreateRoute = ({
  show,
  newRoute,
  onNewRouteChange,
  onCancel,
  onCreate,
}: {
  show: boolean;
  newRoute: NewRouteDraft;
  onNewRouteChange: (route: NewRouteDraft) => void;
  onCancel: () => void;
  onCreate: () => void;
}) => {
  if (!show) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Create New Route</h2>
          <button
            onClick={onCancel}
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
              onChange={(e) => onNewRouteChange({ ...newRoute, name: e.target.value })}
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
              onChange={(e) => onNewRouteChange({ ...newRoute, assignedBus: e.target.value })}
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
                    onClick={() => onNewRouteChange({ ...newRoute, color })}
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
                onChange={(e) => onNewRouteChange({ ...newRoute, startTime: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              After creating the route, you&apos;ll be able to add stops, set timing for each stop, and configure student pickup points.
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-200">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onCreate}
            className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors"
          >
            Create Route
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateRoute
