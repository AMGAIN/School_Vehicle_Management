"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronLeft,
  User,
  Bus,
  MapPin,
  Users,
  Route,
  UserCircle,
  ClipboardCheck,
  AlertTriangle,
  BarChart3,
  Settings,
  Activity,
} from "lucide-react";

const menuItems = [
  { path: "/", label: "Dashboard", icon: BarChart3 },
  { path: "/live-tracking", label: "Live Tracking", icon: MapPin },
  { path: "/students", label: "Students", icon: Users },
  { path: "/parents", label: "Parents", icon: UserCircle },
  { path: "/buses", label: "Bus Management", icon: Bus },
  { path: "/routes", label: "Route Management", icon: Route },
  { path: "/drivers", label: "Drivers", icon: User },
  { path: "/telematics", label: "Vehicle Telematics", icon: Activity },
  { path: "/attendance", label: "Attendance (QR Logs)", icon: ClipboardCheck },
  { path: "/alerts", label: "Alerts & Incidents", icon: AlertTriangle },
  { path: "/reports", label: "Reports & Analytics", icon: BarChart3 },
  { path: "/settings", label: "Settings", icon: Settings },
];

const SideNav = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        sidebarCollapsed ? "w-16" : "w-64"
      } flex flex-col h-screen`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 flex-shrink-0">
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-600">
              VEHICLE Management
            </span>
          </div>
        )}

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {sidebarCollapsed ? (
            <Menu className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                isActive
                  ? "bg-[#4F6EDB]/10 text-[#4F6EDB] border-r-4 border-[#4F6EDB]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              title={sidebarCollapsed ? item.label : ""}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />

              {!sidebarCollapsed && (
                <span className="truncate">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SideNav;