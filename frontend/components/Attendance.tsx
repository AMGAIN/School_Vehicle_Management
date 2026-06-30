"use client"
import React from 'react'
import { useState } from 'react';
import { Calendar, Download, ClipboardList, CheckCircle2, RefreshCcw, Filter, Search, CheckCircle, XCircle, AlertCircle, Timer, QrCode, Bluetooth } from 'lucide-react';

interface AttendanceLog {
  id: string;
  studentName: string;
  studentId: string;
  busId: string;
  type: 'boarding' | 'drop';
  method: 'qr' | 'ble';
  status: 'verified' | 'pending' | 'unauthorized' | 'missed';
  timestamp: string;
  location: string;
  parentName: string;
  syncStatus: 'synced' | 'pending';
}

// Summary Card Data
const summaryCards = [
  {
    title: "Total Logs",
    value: 3,
    icon: ClipboardList,
    textColor: "text-gray-900",
    iconColor: "text-slate-700",
    iconBg: "bg-slate-100",
    barColor: "bg-slate-500",
  },
  {
    title: "Verified",
    value: 8,
    icon: CheckCircle2,
    textColor: "text-green-600",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    barColor: "bg-green-500",
  },
  {
    title: "Pending Sync",
    value: 9,
    icon: RefreshCcw,
    textColor: "text-amber-500",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
    barColor: "bg-amber-500",
  },
  {
    title: "QR Scans",
    value: 7,
    icon: QrCode,
    textColor: "text-indigo-600",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    barColor: "bg-indigo-600",
  },
  {
    title: "BLE Syncs",
    value: 9,
    icon: Bluetooth,
    textColor: "text-blue-600",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    barColor: "bg-blue-600",
  },
];
const mockLogs: AttendanceLog[] = [
  { id: 'LOG-001', studentName: 'Aarav Sharma', studentId: 'STU-001', busId: 'BUS-001', type: 'boarding', method: 'qr', status: 'verified', timestamp: '2026-04-21 07:15:30', location: 'Sector 15, Noida', parentName: 'Rajesh Sharma', syncStatus: 'synced' },
  { id: 'LOG-002', studentName: 'Diya Patel', studentId: 'STU-002', busId: 'BUS-002', type: 'boarding', method: 'ble', status: 'pending', timestamp: '2026-04-21 07:18:45', location: 'Indirapuram', parentName: 'Amit Patel', syncStatus: 'pending' },
  { id: 'LOG-003', studentName: 'Rohan Gupta', studentId: 'STU-003', busId: 'BUS-001', type: 'boarding', method: 'qr', status: 'verified', timestamp: '2026-04-21 07:20:15', location: 'Sector 18, Noida', parentName: 'Priya Gupta', syncStatus: 'synced' },
  { id: 'LOG-004', studentName: 'Ananya Mehta', studentId: 'STU-004', busId: 'BUS-003', type: 'drop', method: 'qr', status: 'verified', timestamp: '2026-04-21 14:05:20', location: 'School Gate C', parentName: 'Vikram Mehta', syncStatus: 'synced' },
  { id: 'LOG-005', studentName: 'Kabir Singh', studentId: 'STU-005', busId: 'BUS-002', type: 'boarding', method: 'qr', status: 'verified', timestamp: '2026-04-21 07:22:50', location: 'Mayur Vihar', parentName: 'Neha Singh', syncStatus: 'synced' },
  { id: 'LOG-006', studentName: 'Myra Khan', studentId: 'STU-006', busId: 'BUS-001', type: 'boarding', method: 'qr', status: 'unauthorized', timestamp: '2026-04-21 07:25:10', location: 'Sector 22, Noida', parentName: 'Unknown', syncStatus: 'synced' },
];


const Attendance = () => {
  const [logs] = useState<AttendanceLog[]>(mockLogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'boarding' | 'drop'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'verified' | 'pending' | 'unauthorized'>('all');

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.busId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' || log.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || log.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusIcon = (status: AttendanceLog['status']) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-5 h-5 text-[#22C55E]" />;
      case 'pending': return <Timer className="w-5 h-5 text-[#F59E0B]" />;
      case 'unauthorized': return <XCircle className="w-5 h-5 text-[#EF4444]" />;
      case 'missed': return <AlertCircle className="w-5 h-5 text-[#F59E0B]" />;
    }
  };

  const getStatusBadge = (status: AttendanceLog['status']) => {
    switch (status) {
      case 'verified': return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Verified</span>;
      case 'pending': return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pending</span>;
      case 'unauthorized': return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Unauthorized</span>;
      case 'missed': return <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Missed</span>;
    }
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Attendance & QR Logs</h1>
        <p className="text-gray-600 mt-1">Complete boarding and drop history with QR verification logs</p>
      </div>

      {/* Info Banner */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-white shadow-sm">
        <div className="p-5">
          <div className="flex items-start gap-4">

            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-md">
              <QrCode className="h-6 w-6 text-white" />
            </div>

            <div className="flex-1">

              {/* Header */}
              <h3 className="text-lg font-bold text-gray-900">
                QR Boarding Process
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Every student boarding event is securely verified using a unique QR code.
              </p>

              {/* Steps */}
              <div className="mt-5 space-y-3">

                {[
                  "Each bus displays a unique QR code on the windshield or entrance door.",
                  "Parents scan the QR code using the YatriTECH mobile application.",
                  "The system verifies that the student belongs to the selected bus.",
                  "Boarding is recorded with timestamp, parent verification, and GPS location.",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}

              </div>

              {/* Footer */}
              <div className="mt-5 flex flex-wrap gap-3">

                <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-2">
                  <p className="text-xs text-green-600 font-semibold uppercase">
                    Online Mode
                  </p>
                  <p className="text-sm text-gray-700">
                    Instant cloud synchronization
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-2">
                  <p className="text-xs text-amber-600 font-semibold uppercase">
                    Offline Mode
                  </p>
                  <p className="text-sm text-gray-700">
                    BLE verification with delayed sync
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

{/* Summary Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-6">
  {summaryCards.map((card) => {
    const Icon = card.icon;

    return (
      <div
        key={card.title}
        className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>

            <h2 className={`text-3xl font-bold mt-2 ${card.textColor}`}>
              {card.value}
            </h2>
          </div>

          <div
            className={`h-12 w-12 rounded-xl ${card.iconBg} flex items-center justify-center`}
          >
            <Icon className={`h-6 w-6 ${card.iconColor}`} />
          </div>
        </div>

        <div className={`mt-4 h-1 rounded-full ${card.barColor}`} />
      </div>
    );
  })}
</div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by student name, ID, or bus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB] focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
            >
              <option value="all">All Types</option>
              <option value="boarding">Boarding</option>
              <option value="drop">Drop</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="unauthorized">Unauthorized</option>
            </select>

            <button className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {
                  ['Time', 'Student', 'Bus', 'Type', 'Method', 'Status', 'Parent', 'Sync', 'Location'].map((item, index) => {
                    return (
                      <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{item}</th>
                    )
                  })
                }
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(log.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">{log.studentName}</div>
                      <div className="text-sm text-gray-500">{log.studentId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.busId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${log.type === 'boarding' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                      {log.type === 'boarding' ? '⬆ Boarding' : '⬇ Drop'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {log.method === 'qr' ? (
                        <QrCode className="w-4 h-4 text-[#4F6EDB]" />
                      ) : (
                        <Bluetooth className="w-4 h-4 text-[#3B82F6]" />
                      )}
                      <span className="text-sm text-gray-700">{log.method.toUpperCase()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(log.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{log.parentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {log.syncStatus === 'synced' ? (
                      <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                    ) : (
                      <Timer className="w-5 h-5 text-[#F59E0B]" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredLogs.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center mt-6">
          <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">No attendance logs found matching your filters</p>
        </div>
      )}
    </div>)
}

export default Attendance