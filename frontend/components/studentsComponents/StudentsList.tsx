import type { Student } from "./types";

interface StudentsListProps {
  students: Student[];
  onSelectStudent: (student: Student) => void;
}

const tableHeaders = [
  "student",
  "Grade",
  "Bus",
  "Route",
  "Attendance",
  "Status",
];

const StudentsList = ({ students, onSelectStudent }: StudentsListProps) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {tableHeaders.map((title, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr
                key={student.id}
                onClick={() => onSelectStudent(student)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white font-medium">
                      {student.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {student.name}
                      </div>
                      <div className="text-sm text-gray-500">{student.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {student.grade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {student.assignedBus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {student.route}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[60px]">
                      <div
                        className="bg-[#22C55E] h-2 rounded-full"
                        style={{ width: `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-700">
                      {student.attendance}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === "active"
                        ? "bg-green-100 text-green-800"
                        : student.status === "absent"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;
