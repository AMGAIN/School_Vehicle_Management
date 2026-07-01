"use client"
import React from 'react'
import { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle, Clock, MapPin, Zap } from 'lucide-react';

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  category: 'speed' | 'route' | 'pickup' | 'delay' | 'emergency';
  title: string;
  description: string;
  busId: string;
  timestamp: string;
  status: 'active' | 'acknowledged' | 'resolved';
  location?: string;
}

const mockAlerts: Alert[] = [
  { id: 'ALT-001', type: 'critical', category: 'emergency', title: 'Emergency SOS Triggered', description: 'Driver pressed emergency button on BUS-004', busId: 'BUS-004', timestamp: '2 min ago', status: 'active', location: 'Sector 18, Noida' },
  { id: 'ALT-002', type: 'critical', category: 'speed', title: 'Over-speeding Detected', description: 'Bus speed exceeded 60 km/h in school zone', busId: 'BUS-002', timestamp: '5 min ago', status: 'active', location: 'School Road' },
  { id: 'ALT-003', type: 'warning', category: 'route', title: 'Route Deviation', description: 'Bus deviated from assigned route by 500m', busId: 'BUS-003', timestamp: '8 min ago', status: 'acknowledged', location: 'Indirapuram' },
  { id: 'ALT-004', type: 'warning', category: 'pickup', title: 'Missed Pickup', description: 'Student Rohan Gupta not boarded at stop 3', busId: 'BUS-001', timestamp: '12 min ago', status: 'acknowledged' },
  { id: 'ALT-005', type: 'warning', category: 'delay', title: 'Route Delayed', description: 'Route RT-02 running 10 minutes behind schedule', busId: 'BUS-002', timestamp: '15 min ago', status: 'resolved' },
  { id: 'ALT-006', type: 'info', category: 'delay', title: 'Minor Delay', description: 'Traffic congestion on route RT-01', busId: 'BUS-001', timestamp: '18 min ago', status: 'resolved' },
];

const summaryCards = [
  {
    title: "Total Alerts",
    value: 4,
    icon: Info,
    valueColor: "text-gray-900",
    iconColor: "text-gray-400",
  },
  {
    title: "Critical",
    value: 7,
    icon: AlertCircle,
    valueColor: "text-[#EF4444]",
    iconColor: "text-[#EF4444]",
  },
  {
    title: "Warning",
    value: 9,
    icon: AlertTriangle,
    valueColor: "text-[#F59E0B]",
    iconColor: "text-[#F59E0B]",
  },
  {
    title: "Active",
    value: 3,
    icon: AlertCircle,
    valueColor: "text-[#3B82F6]",
    iconColor: "text-[#3B82F6]",
  },
];
const AlertIncidents = () => {

  const [alerts] = useState<Alert[]>(mockAlerts);
  const [filter, setFilter] = useState<'all' | 'critical' | 'warning' | 'info'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'acknowledged' | 'resolved'>('all');

  const filteredAlerts = alerts.filter(alert => {
    const typeMatch = filter === 'all' || alert.type === filter;
    const statusMatch = statusFilter === 'all' || alert.status === statusFilter;
    return typeMatch && statusMatch;
  });

  const getAlertIcon = (category: Alert['category']) => {
    switch (category) {
      case 'emergency': return <AlertCircle className="w-6 h-6" />;
      case 'speed': return <Zap className="w-6 h-6" />;
      case 'route': return <MapPin className="w-6 h-6" />;
      case 'pickup': return <AlertTriangle className="w-6 h-6" />;
      case 'delay': return <Clock className="w-6 h-6" />;
    }
  };

  const getAlertColor = (type: Alert['type']) => {
    switch (type) {
      case 'critical': return {
        bg: 'bg-red-50',
        border: 'border-[#EF4444]',
        text: 'text-[#EF4444]',
        badge: 'bg-[#EF4444] text-white',
      };
      case 'warning': return {
        bg: 'bg-yellow-50',
        border: 'border-[#F59E0B]',
        text: 'text-[#F59E0B]',
        badge: 'bg-[#F59E0B] text-white',
      };
      case 'info': return {
        bg: 'bg-blue-50',
        border: 'border-[#3B82F6]',
        text: 'text-[#3B82F6]',
        badge: 'bg-[#3B82F6] text-white',
      };
    }
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Alerts & Incidents</h1>
        <p className="text-gray-600 mt-1">Monitor and manage system alerts in real-time</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{card.title}</p>
                  <p className={`text-2xl font-semibold mt-1 ${card.valueColor}`}>
                    {card.value}
                  </p>
                </div>

                <Icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="text-sm text-gray-600 mb-2 block">Priority</label>
            <div className="flex gap-2">
              {(['all', 'critical', 'warning', 'info'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === type
                    ? 'bg-[#4F6EDB] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-2 block">Status</label>
            <div className="flex gap-2">
              {(['all', 'active', 'acknowledged', 'resolved'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg transition-colors ${statusFilter === status
                    ? 'bg-[#4F6EDB] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Alerts List */}
      <div className="space-y-3">
        {filteredAlerts.map((alert) => {
          const colors = getAlertColor(alert.type);
          return (
            <div
              key={alert.id}
              className={`${colors.bg} rounded-xl border-l-4 ${colors.border} p-6 shadow-sm`}
            >
              <div className="flex items-start gap-4">
                <div className={`${colors.text} flex-shrink-0 mt-1`}>
                  {getAlertIcon(alert.category)}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${colors.badge}`}>
                          {alert.type.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${alert.status === 'active' ? 'bg-red-100 text-red-800' :
                          alert.status === 'acknowledged' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                          {alert.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{alert.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Bus:</span>
                          <span>{alert.busId}</span>
                        </div>
                        {alert.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{alert.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{alert.timestamp}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {alert.status === 'active' && (
                        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                          Acknowledge
                        </button>
                      )}
                      {alert.status !== 'resolved' && (
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                          Resolve
                        </button>
                      )}
                      {alert.status === 'resolved' && (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Resolved</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AlertIncidents