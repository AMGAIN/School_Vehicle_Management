"use client"
import React from 'react'
import { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Database, Users, Mail, MapPin, Clock, Palette, Save, X } from 'lucide-react';
import { toast } from 'sonner';
import GeneralSettings from './settingComponents/GeneralSettings';
import NotificationSettings from './settingComponents/NotificationSettings';
import SecuritySettings from './settingComponents/SecuritySetting';
import SystemSettings from './settingComponents/SystemSettings';
import UserManagement from './settingComponents/UserManagement';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security & Privacy', icon: Shield },
    { id: 'system', label: 'System Settings', icon: Database },
    { id: 'users', label: 'User Management', icon: Users },
  ];

  return (
    <div className="p-6">
      <div className='mb-6'>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Configure system preferences and manage your account</p>
      </div>

      {/* Horizontal Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          {tabs.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${activeTab === item.id
                    ? 'border-[#4F6EDB] text-[#4F6EDB] bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Content */}
      <div>
        {activeTab === 'general' && <GeneralSettings />}
        {activeTab === 'notifications' && <NotificationSettings />}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'system' && <SystemSettings />}
        {activeTab === 'users' && <UserManagement />}
      </div>
    </div>
  )
}

export default Settings