"use client"
import React from 'react'
import { Menu, Search, Bell, ChevronLeft, User, Bus, MapPin, Users, Route, UserCircle, ClipboardCheck, AlertTriangle, BarChart3, Settings, Activity } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface SideNavProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'live-tracking', label: 'Live Tracking', icon: MapPin },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'parents', label: 'Parents', icon: UserCircle },
    { id: 'buses', label: 'Bus Management', icon: Bus },
    { id: 'routes', label: 'Route Management', icon: Route },
    { id: 'drivers', label: 'Drivers', icon: User },
    { id: 'telematics', label: 'Vehicle Telematics', icon: Activity },
    { id: 'attendance', label: 'Attendance (QR Logs)', icon: ClipboardCheck },
    { id: 'alerts', label: 'Alerts & Incidents', icon: AlertTriangle },
    { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
];

const SideNav: React.FC<SideNavProps> = ({ currentPage, onNavigate }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'} flex flex-col`}>
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
                    {!sidebarCollapsed && (
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                <Image src='/yetri-logo.png' width={100} height={100} alt='yetri-logo' className="w-15 h-15" />
                            </div>
                            <span className="text-xl font-semibold text-gray-900">YatriTECH</span>
                        </div>
                    )}
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentPage === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${isActive
                                    ? 'bg-[#4F6EDB]/10 text-[#4F6EDB] border-r-4 border-[#4F6EDB]'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                title={sidebarCollapsed ? item.label : ''}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                {!sidebarCollapsed && <span>{item.label}</span>}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    )
}

export default SideNav