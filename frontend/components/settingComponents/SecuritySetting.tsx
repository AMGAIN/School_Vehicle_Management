import React from 'react'
import { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Database, Users, Mail, MapPin, Clock, Palette, Save, X } from 'lucide-react';
import { toast } from 'sonner';

const changePassData = [
    { title: 'Current Password', type: 'password' },
    { title: 'New Password', type: 'password' },
    { title: 'Confirm New Password', type: 'password' },
]

const SecuritySetting = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdatePassword = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            toast.error('Please fill all password fields');
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error('New passwords do not match');
            return;
        }
        toast.success('Password updated successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    const handleEnable2FA = () => {
        toast.success('2FA setup initiated. Check your email for instructions.');
    };

    const handleRegenerateAPI = () => {
        toast.success('API key regenerated successfully!');
    };
    return (
        <div>
            <div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Password & Authentication</h3>
                        <div className="space-y-4">
                            {
                                changePassData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">{item.title}</label>
                                            <input
                                                type={item.type}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                                <div className="flex-1">
                                    <p className="font-medium text-blue-900">Enable 2FA for Enhanced Security</p>
                                    <p className="text-sm text-blue-700 mt-1">Add an extra layer of security to your account</p>
                                    <button
                                        onClick={handleEnable2FA}
                                        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                    >
                                        Enable 2FA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">API Access</h3>
                        <div className="space-y-3">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">API Key</p>
                                        <p className="text-sm text-gray-600 mt-1 font-mono">ytr_xxxxxxxxxxxxxxxxxxxxx</p>
                                    </div>
                                    <button
                                        onClick={handleRegenerateAPI}
                                        className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors text-sm"
                                    >
                                        Regenerate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                        <button
                            onClick={() => {
                                setCurrentPassword('');
                                setNewPassword('');
                                setConfirmPassword('');
                                toast.info('Changes discarded');
                            }}
                            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdatePassword}
                            className="px-6 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2"
                        >
                            <Save className="w-4 h-4" />
                            Update Security Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecuritySetting