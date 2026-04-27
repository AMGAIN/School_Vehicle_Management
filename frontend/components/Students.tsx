import React from 'react'
import { useState } from 'react';
import { Search, Filter, UserPlus, MapPin, Bus, Calendar, QrCode, Users, X } from 'lucide-react';

interface Student {
    id: string;
    name: string;
    avatar: string;
    grade: string;
    assignedBus: string;
    route: string;
    pickupLocation: string;
    dropLocation: string;
    parentName: string;
    parentPhone: string;
    attendance: number;
    status: 'active' | 'absent' | 'inactive';
}

const mockStudents: Student[] = [
  { id: 'STU-001', name: 'Aarav Sharma', avatar: 'AS', grade: '5th', assignedBus: 'BUS-001', route: 'RT-01', pickupLocation: 'Gongabu', dropLocation: 'School Gate A', parentName: 'Rajesh Sharma', parentPhone: ' 98765 43210', attendance: 95, status: 'active' },
  { id: 'STU-002', name: 'Diya Patel', avatar: 'DP', grade: '7th', assignedBus: 'BUS-002', route: 'RT-02', pickupLocation: 'Sanepa', dropLocation: 'School Gate B', parentName: 'Amit Patel', parentPhone: ' 98765 43211', attendance: 92, status: 'active' },
  { id: 'STU-003', name: 'Rohan Gupta', avatar: 'RG', grade: '6th', assignedBus: 'BUS-001', route: 'RT-01', pickupLocation: 'Kalimati', dropLocation: 'School Gate A', parentName: 'Priya Gupta', parentPhone: ' 98765 43212', attendance: 88, status: 'absent' },
  { id: 'STU-004', name: 'Ananya Mehta', avatar: 'AM', grade: '8th', assignedBus: 'BUS-003', route: 'RT-03', pickupLocation: 'Kalanki', dropLocation: 'School Gate C', parentName: 'Vikram Mehta', parentPhone: ' 98765 43213', attendance: 97, status: 'active' },
  { id: 'STU-005', name: 'Kabir Singh', avatar: 'KS', grade: '5th', assignedBus: 'BUS-002', route: 'RT-02', pickupLocation: 'Sinamangal', dropLocation: 'School Gate B', parentName: 'Neha Singh', parentPhone: ' 98765 43214', attendance: 90, status: 'active' },
];


const Students = () => {
    const [students] = useState<Student[]>(mockStudents);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [showAddModal, setShowAddModal] = useState(false);

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Student Management</h1>
                <p className="text-gray-600 mt-1">Manage student profiles, bus assignments, and attendance</p>
            </div>

            {/* Actions Bar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 max-w-md relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
                        >
                            <UserPlus className="w-4 h-4" />
                            Add Student
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Students List */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {
                                        ['student','Grade','Bus','Route','Attendance','Status'].map((title, index)=>{
                                            return(
                                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredStudents.map((student) => (
                                    <tr
                                        key={student.id}
                                        onClick={() => setSelectedStudent(student)}
                                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white font-medium">
                                                    {student.avatar}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900">{student.name}</div>
                                                    <div className="text-sm text-gray-500">{student.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.grade}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.assignedBus}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.route}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[60px]">
                                                    <div
                                                        className="bg-[#22C55E] h-2 rounded-full"
                                                        style={{ width: `${student.attendance}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-sm text-gray-700">{student.attendance}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${student.status === 'active' ? 'bg-green-100 text-green-800' :
                                                student.status === 'absent' ? 'bg-red-100 text-red-800' :
                                                    'bg-gray-100 text-gray-800'
                                                }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Student Detail Panel */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
                    {selectedStudent ? (
                        <div>
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white text-xl font-medium">
                                        {selectedStudent.avatar}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{selectedStudent.name}</h3>
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
                                    <p className="font-medium text-gray-900">{selectedStudent.assignedBus}</p>
                                    <p className="text-sm text-gray-600">Route: {selectedStudent.route}</p>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500 flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Pickup Location
                                    </label>
                                    <p className="font-medium text-gray-900">{selectedStudent.pickupLocation}</p>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500 flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Drop Location
                                    </label>
                                    <p className="font-medium text-gray-900">{selectedStudent.dropLocation}</p>
                                </div>

                                {/* <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-medium text-gray-900 mb-3">Parent Information</h4>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="text-sm text-gray-500">Name</label>
                                            <p className="font-medium text-gray-900">{selectedStudent.parentName}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-500">Phone</label>
                                            <p className="font-medium text-gray-900">{selectedStudent.parentPhone}</p>
                                        </div>
                                    </div>
                                </div> */}

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
                                            <span className="font-medium text-gray-900">{selectedStudent.attendance}%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                        <div className="flex items-start gap-2">
                                            <QrCode className="w-4 h-4 text-blue-600 mt-0.5" />
                                            <div>
                                                <h5 className="font-medium text-blue-900 text-sm">QR Boarding</h5>
                                                <p className="text-xs text-blue-700 mt-1">
                                                    Parents scan the <strong>bus QR code</strong> (displayed on {selectedStudent.assignedBus}) to verify boarding.
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
            </div>

            {/* Add Student Modal */}
            {showAddModal && (
                <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddModal(false)}>
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Add New Student</h3>
                                <p className="text-sm text-gray-600 mt-1">Enter student information and assign bus route</p>
                            </div>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <form className="space-y-6">
                                {/* Student Information */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-4">Student Information</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter full name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Grade *</label>
                                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]">
                                                <option value="">Select Grade</option>
                                                {
                                                    ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map((item, index) => {
                                                        return (
                                                            <option key={index}>{item}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Parent Information */}
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-4">Parent/Guardian Information</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter parent name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bus Assignment */}
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <Bus className="w-5 h-5" />
                                        Bus Assignment
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Route *</label>
                                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]">
                                                <option value="">Select Route</option>
                                                {
                                                    ['RT-01 - Noida Sector Route', 'RT-02 - Indirapuram Express', 'RT-03 - Vasundhara Circuit', 'RT-04 - Greater Noida Route'].map((item, index) => {
                                                        return (
                                                            <option key={index}>{item}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Assigned Bus *</label>
                                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]">
                                                <option value="">Select Bus</option>
                                                {
                                                    ['BUS-001', 'BUS-002', 'BUS-003', 'BUS-004', 'BUS-005'].map((item, index) => {
                                                        return (
                                                            <option key={index}>{item}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Pickup & Drop Locations */}
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        Pickup & Drop Locations
                                    </h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter pickup address"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Drop Location *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter drop address"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Info Box */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="flex items-start gap-2">
                                        <QrCode className="w-5 h-5 text-blue-600 mt-0.5" />
                                        <div>
                                            <h5 className="font-medium text-blue-900 text-sm">QR Boarding Setup</h5>
                                            <p className="text-xs text-blue-700 mt-1">
                                                After adding the student, parents can download the YatriTECH app and scan the assigned bus QR code for boarding verification.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                        className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-6 py-3 bg-[#4F6EDB] text-white rounded-lg font-medium hover:bg-[#4F6EDB]/90 transition-colors"
                                    >
                                        Add Student
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Students