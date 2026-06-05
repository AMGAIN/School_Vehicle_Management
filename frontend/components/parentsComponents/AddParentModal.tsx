import type { Dispatch, SetStateAction } from "react";
import type { LucideIcon } from "lucide-react";
import { Phone, QrCode, X } from "lucide-react";

import type {
  AuthorizationKey,
  NewParentForm,
  NotificationPreferences,
} from "./types";

interface AuthorizationOption {
  img: LucideIcon;
  title: string;
  desc: string;
  check: AuthorizationKey;
}

interface AddParentModalProps {
  newParent: NewParentForm;
  setNewParent: Dispatch<SetStateAction<NewParentForm>>;
  onClose: () => void;
  onCancel: () => void;
  onAddParent: () => void;
}

const addParentAuthorization: AuthorizationOption[] = [
  {
    img: QrCode,
    title: "QR Authorization",
    desc: "Allow parent to scan bus QR codes",
    check: "qrAuthorized",
  },
  {
    img: Phone,
    title: "Emergency Contact",
    desc: "Set as emergency contact",
    check: "emergencyContact",
  },
  {
    img: QrCode,
    title: "App Access",
    desc: "Grant access to mobile app",
    check: "appAccess",
  },
];

const AddParentModal = ({
  newParent,
  setNewParent,
  onClose,
  onCancel,
  onAddParent,
}: AddParentModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Add New Parent
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-4">
              Parent Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={newParent.name}
                  onChange={(e) =>
                    setNewParent({ ...newParent, name: e.target.value })
                  }
                  placeholder="Enter parent's full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={newParent.email}
                    onChange={(e) =>
                      setNewParent({ ...newParent, email: e.target.value })
                    }
                    placeholder="parent@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={newParent.phone}
                    onChange={(e) =>
                      setNewParent({ ...newParent, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  value={newParent.address}
                  onChange={(e) =>
                    setNewParent({ ...newParent, address: e.target.value })
                  }
                  placeholder="Enter home address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Linked Students (comma-separated)
                </label>
                <input
                  type="text"
                  value={newParent.linkedStudents}
                  onChange={(e) =>
                    setNewParent({
                      ...newParent,
                      linkedStudents: e.target.value,
                    })
                  }
                  placeholder="e.g., Aarav Sharma, Diya Sharma"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">
              Authorization Settings
            </h3>
            <div className="space-y-3">
              {addParentAuthorization.map((item, index) => {
                const Icon = item.img;

                return (
                  <label
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={newParent[item.check]}
                      onChange={(e) =>
                        setNewParent({
                          ...newParent,
                          [item.check]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-[#4F6EDB] rounded focus:ring-2 focus:ring-[#4F6EDB]"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">
              Notification Preferences
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(
                Object.entries(newParent.notificationPreferences) as [
                  keyof NotificationPreferences,
                  boolean,
                ][]
              ).map(([key, value]) => (
                <label
                  key={key}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm text-gray-700 capitalize">
                    {key}
                  </span>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) =>
                      setNewParent({
                        ...newParent,
                        notificationPreferences: {
                          ...newParent.notificationPreferences,
                          [key]: e.target.checked,
                        },
                      })
                    }
                    className="w-4 h-4 text-[#4F6EDB] rounded focus:ring-2 focus:ring-[#4F6EDB]"
                  />
                </label>
              ))}
            </div>
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
            onClick={onAddParent}
            className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors"
          >
            Add Parent
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddParentModal;
