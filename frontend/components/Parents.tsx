import React from 'react'
import { useState } from 'react';
import { Search, UserPlus, Phone, Mail, MapPin, Users, CheckCircle, XCircle, QrCode, AlertCircle, X } from 'lucide-react';
import { toast } from 'sonner';
import { title } from 'process';

interface Parent {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedStudents: string[];
    qrAuthorized: boolean;
    emergencyContact: boolean;
    appAccess: boolean;
    lastActive: string;
    notificationPreferences: {
        boarding: boolean;
        drop: boolean;
        delays: boolean;
        alerts: boolean;
    };
}
const mockParents: Parent[] = [
    {
        id: 'PAR-001',
        name: 'Rajesh Sharma',
        email: 'rajesh.sharma@email.com',
        phone: '+91 98765 43210',
        address: 'Sector 15, Noida',
        linkedStudents: ['Aarav Sharma', 'Diya Sharma'],
        qrAuthorized: true,
        emergencyContact: true,
        appAccess: true,
        lastActive: '2 hours ago',
        notificationPreferences: { boarding: true, drop: true, delays: true, alerts: true }
    },
    {
        id: 'PAR-002',
        name: 'Amit Patel',
        email: 'amit.patel@email.com',
        phone: '+91 98765 43211',
        address: 'Indirapuram, Ghaziabad',
        linkedStudents: ['Diya Patel'],
        qrAuthorized: true,
        emergencyContact: true,
        appAccess: true,
        lastActive: '5 hours ago',
        notificationPreferences: { boarding: true, drop: true, delays: true, alerts: false }
    },
    {
        id: 'PAR-003',
        name: 'Priya Gupta',
        email: 'priya.gupta@email.com',
        phone: '+91 98765 43212',
        address: 'Sector 18, Noida',
        linkedStudents: ['Rohan Gupta'],
        qrAuthorized: false,
        emergencyContact: true,
        appAccess: false,
        lastActive: 'Never',
        notificationPreferences: { boarding: true, drop: true, delays: false, alerts: false }
    },
    {
        id: 'PAR-004',
        name: 'Vikram Mehta',
        email: 'vikram.mehta@email.com',
        phone: '+91 98765 43213',
        address: 'Vasundhara, Ghaziabad',
        linkedStudents: ['Ananya Mehta'],
        qrAuthorized: true,
        emergencyContact: true,
        appAccess: true,
        lastActive: '1 day ago',
        notificationPreferences: { boarding: true, drop: true, delays: true, alerts: true }
    },
];

const addParentAuthorization = [
    { img: QrCode, title: 'QR Authorization', desc: 'Allow parent to scan bus QR codes', check:"qrAuthorized"},
    { img: Phone, title: 'Emergency Contact', desc: 'Set as emergency contact', check:"emergencyContact" },
    { img: QrCode, title: 'App Access', desc: 'Grant access to mobile app', check:"appAccess" },
]
const Parents = () => {
    const [parents, setParents] = useState<Parent[]>(mockParents);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedParent, setSelectedParent] = useState<Parent | null>(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newParent, setNewParent] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        linkedStudents: '',
        qrAuthorized: true,
        emergencyContact: true,
        appAccess: true,
        notificationPreferences: {
            boarding: true,
            drop: true,
            delays: true,
            alerts: true
        }
    });
    const filteredParents = parents.filter(parent =>
        parent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        parent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        parent.phone.includes(searchQuery)
    );
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Parent Management</h1>
                <p className="text-gray-600 mt-1">Manage parent profiles, QR authorization, and communication preferences</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-600">Total Parents</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">{parents.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-600">QR Authorized</p>
                    <p className="text-2xl font-semibold text-[#22C55E] mt-1">
                        {parents.filter(p => p.qrAuthorized).length}
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-600">App Active</p>
                    <p className="text-2xl font-semibold text-[#3B82F6] mt-1">
                        {parents.filter(p => p.appAccess).length}
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-600">Emergency Contacts</p>
                    <p className="text-2xl font-semibold text-[#F59E0B] mt-1">
                        {parents.filter(p => p.emergencyContact).length}
                    </p>
                </div>
            </div>

            {/* Actions Bar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 max-w-md relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search parents by name, email, or phone..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                        />
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
                    >
                        <UserPlus className="w-4 h-4" />
                        Add Parent
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Parents List */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {
                                        ['Parent', 'Contact', 'Students', 'QR Auth', 'App Access', 'Last Action'].map((title, index) => {
                                            return (
                                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{title}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredParents.map((parent) => (
                                    <tr
                                        key={parent.id}
                                        onClick={() => setSelectedParent(parent)}
                                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white font-medium">
                                                    {parent.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900">{parent.name}</div>
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
                                                <span className="text-sm text-gray-700">{parent.linkedStudents.length}</span>
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

                {/* Parent Detail Panel */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
                    {selectedParent ? (
                        <div>
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-[#4F6EDB] flex items-center justify-center text-white text-xl font-medium">
                                        {selectedParent.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{selectedParent.name}</h3>
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
                                    <p className="font-medium text-gray-900">{selectedParent.email}</p>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500 flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone
                                    </label>
                                    <p className="font-medium text-gray-900">{selectedParent.phone}</p>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500 flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Address
                                    </label>
                                    <p className="font-medium text-gray-900">{selectedParent.address}</p>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <label className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                                        <Users className="w-4 h-4" />
                                        Linked Students ({selectedParent.linkedStudents.length})
                                    </label>
                                    <div className="space-y-2">
                                        {selectedParent.linkedStudents.map((student, idx) => (
                                            <div key={idx} className="p-2 bg-gray-50 rounded-lg text-sm text-gray-900">
                                                {student}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-medium text-gray-900 mb-3">Authorization Status</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <span className="text-sm text-gray-700">QR Authorization</span>
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
                                            <span className="text-sm text-gray-700">Emergency Contact</span>
                                            {selectedParent.emergencyContact ? (
                                                <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-[#EF4444]" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-medium text-gray-900 mb-3">Notification Preferences</h4>
                                    <div className="space-y-2">
                                        {Object.entries(selectedParent.notificationPreferences).map(([key, enabled]) => (
                                            <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <span className="text-sm text-gray-700 capitalize">{key}</span>
                                                {enabled ? (
                                                    <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                                                ) : (
                                                    <XCircle className="w-5 h-5 text-gray-400" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            <QrCode className="w-5 h-5 text-blue-600 mt-0.5" />
                                            <div>
                                                <h5 className="font-medium text-blue-900 text-sm">QR Boarding</h5>
                                                <p className="text-xs text-blue-700 mt-1">
                                                    Parents scan the bus QR code (displayed on each bus) using the mobile app to verify student boarding.
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
            </div>

            {/* Add Parent Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">Add New Parent</h2>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Parent Information */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-4">Parent Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={newParent.name}
                                            onChange={(e) => setNewParent({ ...newParent, name: e.target.value })}
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
                                                onChange={(e) => setNewParent({ ...newParent, email: e.target.value })}
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
                                                onChange={(e) => setNewParent({ ...newParent, phone: e.target.value })}
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
                                            onChange={(e) => setNewParent({ ...newParent, address: e.target.value })}
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
                                            onChange={(e) => setNewParent({ ...newParent, linkedStudents: e.target.value })}
                                            placeholder="e.g., Aarav Sharma, Diya Sharma"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Authorization Settings */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-4">Authorization Settings</h3>
                                <div className="space-y-3">
                                    {
                                        addParentAuthorization.map((item, index) => {
                                            const Icon = item.img;
                                            return (
                                                <label key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <Icon className="w-5 h-5 text-gray-600" />
                                                        <div>
                                                            <p className="font-medium text-gray-900">{item.title}</p>
                                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        checked={newParent [item.check]}
                                                        onChange={(e) => setNewParent({ ...newParent, [item.check]: e.target.checked })}
                                                        className="w-5 h-5 text-[#4F6EDB] rounded focus:ring-2 focus:ring-[#4F6EDB]"
                                                    />
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* Notification Preferences */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-4">Notification Preferences</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {Object.entries(newParent.notificationPreferences).map(([key, value]) => (
                                        <label key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                                            <span className="text-sm text-gray-700 capitalize">{key}</span>
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={(e) => setNewParent({
                                                    ...newParent,
                                                    notificationPreferences: {
                                                        ...newParent.notificationPreferences,
                                                        [key]: e.target.checked
                                                    }
                                                })}
                                                className="w-4 h-4 text-[#4F6EDB] rounded focus:ring-2 focus:ring-[#4F6EDB]"
                                            />
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-200">
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    setNewParent({
                                        name: '',
                                        email: '',
                                        phone: '',
                                        address: '',
                                        linkedStudents: '',
                                        qrAuthorized: true,
                                        emergencyContact: true,
                                        appAccess: true,
                                        notificationPreferences: { boarding: true, drop: true, delays: true, alerts: true }
                                    });
                                }}
                                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    if (!newParent.name || !newParent.email || !newParent.phone || !newParent.address) {
                                        toast.error('Please fill in all required fields');
                                        return;
                                    }
                                    const parentId = `PAR-${String(parents.length + 1).padStart(3, '0')}`;
                                    const linkedStudentsArray = newParent.linkedStudents
                                        .split(',')
                                        .map(s => s.trim())
                                        .filter(s => s.length > 0);

                                    const newParentData: Parent = {
                                        id: parentId,
                                        name: newParent.name,
                                        email: newParent.email,
                                        phone: newParent.phone,
                                        address: newParent.address,
                                        linkedStudents: linkedStudentsArray,
                                        qrAuthorized: newParent.qrAuthorized,
                                        emergencyContact: newParent.emergencyContact,
                                        appAccess: newParent.appAccess,
                                        lastActive: 'Never',
                                        notificationPreferences: newParent.notificationPreferences
                                    };

                                    setParents([...parents, newParentData]);
                                    toast.success(`Parent ${newParent.name} added successfully!`);
                                    setShowAddModal(false);
                                    setNewParent({
                                        name: '',
                                        email: '',
                                        phone: '',
                                        address: '',
                                        linkedStudents: '',
                                        qrAuthorized: true,
                                        emergencyContact: true,
                                        appAccess: true,
                                        notificationPreferences: { boarding: true, drop: true, delays: true, alerts: true }
                                    });
                                    setSelectedParent(newParentData);
                                }}
                                className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors"
                            >
                                Add Parent
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Parents