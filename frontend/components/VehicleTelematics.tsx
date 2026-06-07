"use client"
import React from 'react'
import { useState } from 'react';
import { Activity, Gauge, Droplet, Thermometer, Battery, AlertTriangle, TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TelematicsData {
  busId: string;
  status: 'healthy' | 'warning' | 'critical';
  metrics: {
    speed: number;
    rpm: number;
    fuelLevel: number;
    engineTemp: number;
    batteryVoltage: number;
    odometer: string;
    engineHours: number;
  };
  diagnostics: {
    engineHealth: number;
    brakeHealth: number;
    tireHealth: number;
    transmissionHealth: number;
  };
  fuelConsumption: { id: string; time: string; consumption: number }[];
  speedHistory: { id: string; time: string; speed: number }[];
  alerts: {
    type: 'critical' | 'warning' | 'info';
    message: string;
    timestamp: string;
  }[];
}

const mockTelematics: TelematicsData[] = [
  {
    busId: 'BUS-001',
    status: 'healthy',
    metrics: {
      speed: 35,
      rpm: 1800,
      fuelLevel: 75,
      engineTemp: 92,
      batteryVoltage: 13.8,
      odometer: '45,320 km',
      engineHours: 2340,
    },
    diagnostics: {
      engineHealth: 95,
      brakeHealth: 88,
      tireHealth: 92,
      transmissionHealth: 90,
    },
    fuelConsumption: [
      { id: 'fc1-0600', time: '06:00', consumption: 8.2 },
      { id: 'fc1-0700', time: '07:00', consumption: 9.5 },
      { id: 'fc1-0800', time: '08:00', consumption: 8.8 },
      { id: 'fc1-0900', time: '09:00', consumption: 7.9 },
      { id: 'fc1-1000', time: '10:00', consumption: 8.5 },
    ],
    speedHistory: [
      { id: 'sh1-1000', time: '10:00', speed: 30 },
      { id: 'sh1-1015', time: '10:15', speed: 35 },
      { id: 'sh1-1030', time: '10:30', speed: 40 },
      { id: 'sh1-1045', time: '10:45', speed: 32 },
      { id: 'sh1-1100', time: '11:00', speed: 35 },
    ],
    alerts: [
      { type: 'info', message: 'Routine maintenance due in 500 km', timestamp: '2 hours ago' },
    ],
  },
  {
    busId: 'BUS-002',
    status: 'warning',
    metrics: {
      speed: 42,
      rpm: 2200,
      fuelLevel: 45,
      engineTemp: 98,
      batteryVoltage: 12.9,
      odometer: '52,180 km',
      engineHours: 2890,
    },
    diagnostics: {
      engineHealth: 85,
      brakeHealth: 72,
      tireHealth: 78,
      transmissionHealth: 88,
    },
    fuelConsumption: [
      { id: 'fc2-0600', time: '06:00', consumption: 9.5 },
      { id: 'fc2-0700', time: '07:00', consumption: 10.2 },
      { id: 'fc2-0800', time: '08:00', consumption: 11.0 },
      { id: 'fc2-0900', time: '09:00', consumption: 9.8 },
      { id: 'fc2-1000', time: '10:00', consumption: 10.5 },
    ],
    speedHistory: [
      { id: 'sh2-1000', time: '10:00', speed: 38 },
      { id: 'sh2-1015', time: '10:15', speed: 45 },
      { id: 'sh2-1030', time: '10:30', speed: 42 },
      { id: 'sh2-1045', time: '10:45', speed: 40 },
      { id: 'sh2-1100', time: '11:00', speed: 42 },
    ],
    alerts: [
      { type: 'warning', message: 'Brake pad wear at 70% - Service recommended', timestamp: '30 min ago' },
      { type: 'warning', message: 'Battery voltage low - Check alternator', timestamp: '1 hour ago' },
    ],
  },
  {
    busId: 'BUS-003',
    status: 'healthy',
    metrics: {
      speed: 28,
      rpm: 1500,
      fuelLevel: 85,
      engineTemp: 88,
      batteryVoltage: 14.2,
      odometer: '38,950 km',
      engineHours: 1950,
    },
    diagnostics: {
      engineHealth: 98,
      brakeHealth: 95,
      tireHealth: 96,
      transmissionHealth: 94,
    },
    fuelConsumption: [
      { id: 'fc3-0600', time: '06:00', consumption: 7.8 },
      { id: 'fc3-0700', time: '07:00', consumption: 8.5 },
      { id: 'fc3-0800', time: '08:00', consumption: 8.0 },
      { id: 'fc3-0900', time: '09:00', consumption: 7.5 },
      { id: 'fc3-1000', time: '10:00', consumption: 8.2 },
    ],
    speedHistory: [
      { id: 'sh3-1000', time: '10:00', speed: 25 },
      { id: 'sh3-1015', time: '10:15', speed: 30 },
      { id: 'sh3-1030', time: '10:30', speed: 28 },
      { id: 'sh3-1045', time: '10:45', speed: 32 },
      { id: 'sh3-1100', time: '11:00', speed: 28 },
    ],
    alerts: [],
  },
];

const VehicleTelematics = () => {
  const [selectedBus, setSelectedBus] = useState<TelematicsData>(mockTelematics[0]);

  const getHealthColor = (health: number) => {
    if (health >= 90) return 'bg-[#22C55E]';
    if (health >= 70) return 'bg-[#F59E0B]';
    return 'bg-[#EF4444]';
  };

  const getStatusBadge = (status: TelematicsData['status']) => {
    switch (status) {
      case 'healthy':
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Healthy</span>;
      case 'warning':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Warning</span>;
      case 'critical':
        return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Critical</span>;
    }
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Vehicle Telematics</h1>
        <p className="text-gray-600 mt-1">Real-time vehicle diagnostics, performance metrics, and health monitoring</p>
      </div>

      {/* Bus Selector */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <label className="text-sm font-medium text-gray-700">Select Vehicle:</label>
          {mockTelematics.map((bus) => (
            <button
              key={bus.busId}
              onClick={() => setSelectedBus(bus)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${selectedBus.busId === bus.busId
                  ? 'bg-[#4F6EDB] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {bus.busId}
              {bus.status !== 'healthy' && (
                <AlertTriangle className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#4F6EDB] rounded-lg flex items-center justify-center text-white">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{selectedBus.busId}</h2>
              <p className="text-sm text-gray-600">Odometer: {selectedBus.metrics.odometer} • Engine Hours: {selectedBus.metrics.engineHours}h</p>
            </div>
          </div>
          {getStatusBadge(selectedBus.status)}
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5 text-[#4F6EDB]" />
            <span className="text-sm text-gray-600">Speed</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{selectedBus.metrics.speed}</p>
          <p className="text-xs text-gray-500 mt-1">km/h</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-[#4F6EDB]" />
            <span className="text-sm text-gray-600">RPM</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{selectedBus.metrics.rpm}</p>
          <p className="text-xs text-gray-500 mt-1">revolutions/min</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="w-5 h-5 text-[#4F6EDB]" />
            <span className="text-sm text-gray-600">Fuel Level</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${selectedBus.metrics.fuelLevel > 50 ? 'bg-[#22C55E]' :
                    selectedBus.metrics.fuelLevel > 25 ? 'bg-[#F59E0B]' :
                      'bg-[#EF4444]'
                  }`}
                style={{ width: `${selectedBus.metrics.fuelLevel}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-gray-900">{selectedBus.metrics.fuelLevel}%</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="w-5 h-5 text-[#4F6EDB]" />
            <span className="text-sm text-gray-600">Engine Temp</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{selectedBus.metrics.engineTemp}</p>
          <p className="text-xs text-gray-500 mt-1">°C</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Battery className="w-5 h-5 text-[#4F6EDB]" />
            <span className="text-sm text-gray-600">Battery</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{selectedBus.metrics.batteryVoltage}</p>
          <p className="text-xs text-gray-500 mt-1">Volts</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-[#4F6EDB]" />
            <span className="text-sm text-gray-600">Status</span>
          </div>
          <p className="text-lg font-semibold text-[#22C55E]">Active</p>
          <p className="text-xs text-gray-500 mt-1">Running</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Speed History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Speed History</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={selectedBus.speedHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="time" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line type="monotone" dataKey="speed" stroke="#4F6EDB" strokeWidth={3} dot={{ fill: '#4F6EDB', r: 4 }} name="Speed (km/h)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Fuel Consumption */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Fuel Consumption (L/100km)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={selectedBus.fuelConsumption}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="time" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar dataKey="consumption" fill="#22C55E" name="Fuel (L/100km)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Vehicle Health Diagnostics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Vehicle Health Diagnostics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(selectedBus.diagnostics).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {key.replace('Health', ' Health')}
                </span>
                <span className={`text-sm font-semibold ${value >= 90 ? 'text-[#22C55E]' :
                    value >= 70 ? 'text-[#F59E0B]' :
                      'text-[#EF4444]'
                  }`}>
                  {value}%
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${getHealthColor(value)}`}
                  style={{ width: `${value}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">
                {value >= 90 ? 'Excellent' : value >= 70 ? 'Good' : 'Needs Attention'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts and Warnings */}
      {selectedBus.alerts.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Active Alerts & Diagnostics</h3>
          <div className="space-y-3">
            {selectedBus.alerts.map((alert, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border-l-4 ${alert.type === 'critical' ? 'bg-red-50 border-[#EF4444]' :
                    alert.type === 'warning' ? 'bg-yellow-50 border-[#F59E0B]' :
                      'bg-blue-50 border-[#3B82F6]'
                  }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={`w-5 h-5 mt-0.5 ${alert.type === 'critical' ? 'text-[#EF4444]' :
                        alert.type === 'warning' ? 'text-[#F59E0B]' :
                          'text-[#3B82F6]'
                      }`} />
                    <div>
                      <p className="font-medium text-gray-900">{alert.message}</p>
                      <p className="text-sm text-gray-600 mt-1">{alert.timestamp}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedBus.alerts.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8 text-[#22C55E]" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">All Systems Normal</h3>
          <p className="text-gray-600">No active alerts or warnings for this vehicle</p>
        </div>
      )}
    </div>
  )
}

export default VehicleTelematics