import React from 'react'
import { useState } from 'react';
import { Calendar, Download, Filter, Search, CheckCircle, XCircle, AlertCircle, Timer, QrCode, Bluetooth } from 'lucide-react';

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
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <QrCode className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900">🚌 How QR Boarding Works</h4>
            <div className="text-sm text-blue-700 mt-2 space-y-1">
              <p><strong>1.</strong> Each bus displays a unique QR code on windshield/door</p>
              <p><strong>2.</strong> Parents scan the bus QR code using YatriTECH mobile app</p>
              <p><strong>3.</strong> System verifies student is assigned to that bus</p>
              <p><strong>4.</strong> Boarding is logged with timestamp, parent verification, and location</p>
              <p className="mt-2 pt-2 border-t border-blue-300"><strong>Modes:</strong> Online (instant cloud sync) or Offline (BLE with delayed sync)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Logs Today</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{logs.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Verified</p>
          <p className="text-2xl font-semibold text-[#22C55E] mt-1">
            {logs.filter(l => l.status === 'verified').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Pending Sync</p>
          <p className="text-2xl font-semibold text-[#F59E0B] mt-1">
            {logs.filter(l => l.syncStatus === 'pending').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">QR Scans</p>
          <p className="text-2xl font-semibold text-[#4F6EDB] mt-1">
            {logs.filter(l => l.method === 'qr').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">BLE Syncs</p>
          <p className="text-2xl font-semibold text-[#3B82F6] mt-1">
            {logs.filter(l => l.method === 'ble').length}
          </p>
        </div>
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
    </div>  )
}

export default Attendance