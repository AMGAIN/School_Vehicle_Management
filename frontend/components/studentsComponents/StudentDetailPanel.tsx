import { Bus, Calendar, MapPin, QrCode, Users } from "lucide-react";

import type { Student } from "./types";

interface StudentDetailPanelProps {
  selectedStudent: Student | null;
}

const StudentDetailPanel = ({
  selectedStudent,
}: StudentDetailPanelProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
      {selectedStudent ? (
        <div>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white text-xl font-medium">
                {selectedStudent.avatar}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {selectedStudent.name}
                </h3>
                <p className="text-sm text-gray-500">{selectedStudent.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm text-gray-500">Grade</label>
              <p className="font-medium text-gray-900">{selectedStudent.grade}</p>
            </div>

            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <Bus className="w-4 h-4" />
                Assigned Bus
              </label>
              <p className="font-medium text-gray-900">
                {selectedStudent.assignedBus}
              </p>
              <p className="text-sm text-gray-600">
                Route: {selectedStudent.route}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pickup Location
              </label>
              <p className="font-medium text-gray-900">
                {selectedStudent.pickupLocation}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Drop Location
              </label>
              <p className="font-medium text-gray-900">
                {selectedStudent.dropLocation}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Attendance Rate
              </label>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#22C55E] h-3 rounded-full"
                      style={{ width: `${selectedStudent.attendance}%` }}
                    ></div>
                  </div>
                  <span className="font-medium text-gray-900">
                    {selectedStudent.attendance}%
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <QrCode className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-900 text-sm">
                      QR Boarding
                    </h5>
                    <p className="text-xs text-blue-700 mt-1">
                      Parents scan the <strong>bus QR code</strong> (displayed on{" "}
                      {selectedStudent.assignedBus}) to verify boarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center text-gray-500">
          <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p>Select a student to view details</p>
        </div>
      )}
    </div>
  );
};

export default StudentDetailPanel;
