import { Search, UserPlus } from "lucide-react";

interface ParentsActionBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onAddParent: () => void;
}

const ParentsActionBar = ({
  searchQuery,
  onSearchChange,
  onAddParent,
}: ParentsActionBarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search parents by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
          />
        </div>
        <button
          onClick={onAddParent}
          className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Add Parent
        </button>
      </div>
    </div>
  );
};

export default ParentsActionBar;
