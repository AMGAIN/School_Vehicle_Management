import type { Parent } from "./types";

interface ParentSummaryCardsProps {
  parents: Parent[];
}

const ParentSummaryCards = ({ parents }: ParentSummaryCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Total Parents</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">
          {parents.length}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">QR Authorized</p>
        <p className="text-2xl font-semibold text-[#22C55E] mt-1">
          {parents.filter((parent) => parent.qrAuthorized).length}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">App Active</p>
        <p className="text-2xl font-semibold text-[#3B82F6] mt-1">
          {parents.filter((parent) => parent.appAccess).length}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Emergency Contacts</p>
        <p className="text-2xl font-semibold text-[#F59E0B] mt-1">
          {parents.filter((parent) => parent.emergencyContact).length}
        </p>
      </div>
    </div>
  );
};

export default ParentSummaryCards;
