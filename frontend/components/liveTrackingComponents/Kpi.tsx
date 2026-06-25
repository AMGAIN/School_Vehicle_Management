"use client";

import React, { useState } from "react";
import {
  Bus,
  Users,
  AlertTriangle,
  WifiOff,
  TrendingUp,
} from "lucide-react";

interface BusType {
  id: string;
  routeId: string;
  status: "moving" | "idle" | "delayed" | "offline";
  position: { lat: number; lng: number };
  driver: string;
  speed: number;
  eta: string;
  delay: number;
  studentsOnboard: number;
  connectivity: "online" | "ble" | "offline";
  lastSync: string;
}

const mockBuses: BusType[] = [
  {
    id: "BUS-001",
    routeId: "RT-01",
    status: "moving",
    position: { lat: 28.6139, lng: 77.209 },
    driver: "Rajesh Kumar",
    speed: 35,
    eta: "10:45 AM",
    delay: 0,
    studentsOnboard: 28,
    connectivity: "online",
    lastSync: "Just now",
  },
  {
    id: "BUS-002",
    routeId: "RT-02",
    status: "delayed",
    position: { lat: 28.6289, lng: 77.2195 },
    driver: "Amit Singh",
    speed: 20,
    eta: "10:52 AM",
    delay: 7,
    studentsOnboard: 32,
    connectivity: "ble",
    lastSync: "2 min ago",
  },
  {
    id: "BUS-003",
    routeId: "RT-03",
    status: "idle",
    position: { lat: 28.6, lng: 77.23 },
    driver: "Suresh Verma",
    speed: 0,
    eta: "11:00 AM",
    delay: 0,
    studentsOnboard: 15,
    connectivity: "online",
    lastSync: "Just now",
  },
  {
    id: "BUS-004",
    routeId: "RT-04",
    status: "offline",
    position: { lat: 28.595, lng: 77.215 },
    driver: "Vijay Sharma",
    speed: 0,
    eta: "Unknown",
    delay: 15,
    studentsOnboard: 20,
    connectivity: "offline",
    lastSync: "15 min ago",
  },
];

const Kpi = () => {
  const [buses] = useState(mockBuses);

  const cards = [
    {
      title: "Active Buses",
      value: buses.filter((b) => b.status !== "offline").length,
      icon: Bus,
      bg: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      trend: "+12%",
    },
    {
      title: "Students",
      value: buses.reduce((sum, b) => sum + b.studentsOnboard, 0),
      icon: Users,
      bg: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      trend: "+8%",
    },
    {
      title: "Delayed",
      value: buses.filter((b) => b.status === "delayed").length,
      icon: AlertTriangle,
      bg: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      trend: "-2%",
    },
    {
      title: "Offline",
      value: buses.filter((b) => b.status === "offline").length,
      icon: WifiOff,
      bg: "from-red-500 to-rose-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      trend: "-1%",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Glow */}
            <div
              className={`absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br ${card.bg} opacity-10 blur-xl`}
            />

            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {card.value}
                </h2>

                <div className="mt-1 flex items-center gap-1 text-[10px] font-medium text-gray-500">
                  <TrendingUp size={10} />
                  {card.trend}
                </div>
              </div>

              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.iconBg}`}
              >
                <Icon size={18} className={card.iconColor} />
              </div>
            </div>

            {/* Accent Bar */}
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r ${card.bg}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Kpi;