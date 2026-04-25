import React from 'react'
import { useState } from 'react';
import { Users } from 'lucide-react';
import { toast } from 'sonner';

const users = [
    { id: 1, name: 'Admin User', email: 'admin@yatritech.edu', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'Transport Manager', email: 'transport@yatritech.edu', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Staff Member', email: 'staff@yatritech.edu', role: 'Staff', status: 'Active' },
];

const UserManagement = () => {
    const handleAddUser = () => {
        toast.success('Add user form opened (demo)');
    };

    const handleEditUser = (name: string) => {
        toast.info(`Edit user: ${name} (demo)`);
    };

    const handleRemoveUser = (name: string) => {
        if (window.confirm(`Are you sure you want to remove ${name}?`)) {
            toast.success(`User ${name} removed (demo)`);
        }
    };


    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">System Users</h3>
                <button
                    onClick={handleAddUser}
                    className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
                >
                    <Users className="w-4 h-4" />
                    Add User
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">{user.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <button
                                        onClick={() => handleEditUser(user.name)}
                                        className="text-[#4F6EDB] hover:underline mr-3"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleRemoveUser(user.name)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Role Permissions</h3>
                <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Administrator</h4>
                        <p className="text-sm text-gray-600">Full system access, user management, and configuration</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Manager</h4>
                        <p className="text-sm text-gray-600">Manage routes, drivers, and view reports</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Staff</h4>
                        <p className="text-sm text-gray-600">View-only access to tracking and student information</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserManagement