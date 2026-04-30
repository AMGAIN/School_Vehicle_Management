import {
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  QrCode,
  Users,
  XCircle,
} from "lucide-react";

import type { Parent } from "./types";

interface ParentDetailPanelProps {
  selectedParent: Parent | null;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((namePart) => namePart[0])
    .join("");

const ParentDetailPanel = ({ selectedParent }: ParentDetailPanelProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
      {selectedParent ? (
        <div>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white text-xl font-medium">
                {getInitials(selectedParent.name)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {selectedParent.name}
                </h3>
                <p className="text-sm text-gray-500">{selectedParent.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <p className="font-medium text-gray-900">
                {selectedParent.email}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </label>
              <p className="font-medium text-gray-900">
                {selectedParent.phone}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address
              </label>
              <p className="font-medium text-gray-900">
                {selectedParent.address}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <label className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                <Users className="w-4 h-4" />
                Linked Students ({selectedParent.linkedStudents.length})
              </label>
              <div className="space-y-2">
                {selectedParent.linkedStudents.map((student, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-gray-50 rounded-lg text-sm text-gray-900"
                  >
                    {student}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">
                Authorization Status
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">
                    QR Authorization
                  </span>
                  {selectedParent.qrAuthorized ? (
                    <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#EF4444]" />
                  )}
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">App Access</span>
                  {selectedParent.appAccess ? (
                    <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#EF4444]" />
                  )}
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">
                    Emergency Contact
                  </span>
                  {selectedParent.emergencyContact ? (
                    <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#EF4444]" />
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">
                Notification Preferences
              </h4>
              <div className="space-y-2">
                {Object.entries(selectedParent.notificationPreferences).map(
                  ([key, enabled]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-sm text-gray-700 capitalize">
                        {key}
                      </span>
                      {enabled ? (
                        <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <QrCode className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-900 text-sm">
                      QR Boarding
                    </h5>
                    <p className="text-xs text-blue-700 mt-1">
                      Parents scan the bus QR code (displayed on each bus) using
                      the mobile app to verify student boarding.
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
          <p>Select a parent to view details</p>
        </div>
      )}
    </div>
  );
};

export default ParentDetailPanel;
