import React from 'react'
import { Plus } from 'lucide-react'

const ActionBar = ({ onCreateRoute }: { onCreateRoute: () => void }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={onCreateRoute}
          className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create New Route
        </button>
      </div>
    </div>
  )
}

export default ActionBar
