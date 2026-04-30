import { CheckCircle, Mail, Phone, Users, XCircle } from "lucide-react";

import type { Parent } from "./types";

interface ParentsListProps {
  parents: Parent[];
  onSelectParent: (parent: Parent) => void;
}

const tableHeaders = [
  "Parent",
  "Contact",
  "Students",
  "QR Auth",
  "App Access",
  "Last Action",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((namePart) => namePart[0])
    .join("");

const ParentsList = ({ parents, onSelectParent }: ParentsListProps) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {tableHeaders.map((title, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {parents.map((parent) => (
              <tr
                key={parent.id}
                onClick={() => onSelectParent(parent)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white font-medium">
                      {getInitials(parent.name)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {parent.name}
                      </div>
                      <div className="text-sm text-gray-500">{parent.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="text-gray-900 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {parent.phone}
                    </div>
                    <div className="text-gray-500 flex items-center gap-1 mt-1">
                      <Mail className="w-3 h-3" />
                      {parent.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">
                      {parent.linkedStudents.length}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {parent.qrAuthorized ? (
                    <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#EF4444]" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {parent.appAccess ? (
                    <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#EF4444]" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {parent.lastActive}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParentsList;
