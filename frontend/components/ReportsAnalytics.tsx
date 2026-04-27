import React from 'react'
import { useState } from 'react';
import { Download, Calendar, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const weeklyAttendance = [
  { id: 'week1', week: 'Week 1', attendance: 94, missed: 6 },
  { id: 'week2', week: 'Week 2', attendance: 96, missed: 4 },
  { id: 'week3', week: 'Week 3', attendance: 92, missed: 8 },
  { id: 'week4', week: 'Week 4', attendance: 95, missed: 5 },
];

const routeEfficiency = [
  { id: 'rt01', route: 'RT-01', onTime: 85, delayed: 10, cancelled: 5 },
  { id: 'rt02', route: 'RT-02', onTime: 78, delayed: 18, cancelled: 4 },
  { id: 'rt03', route: 'RT-03', onTime: 92, delayed: 6, cancelled: 2 },
  { id: 'rt04', route: 'RT-04', onTime: 88, delayed: 9, cancelled: 3 },
];

const boardingMethodData = [
  { id: 'qr-verified', name: 'QR Verified', value: 650, color: ' #4F6EDB' },
  { id: 'ble-sync', name: 'BLE Sync', value: 220, color: '#3B82F6' },
  { id: 'pending-sync', name: 'Pending Sync', value: 130, color: '#F59E0B' },
];

const driverPerformance = [
  { id: 'drv1', driver: 'Rajesh Kumar', score: 95, violations: 2, onTime: 98 },
  { id: 'drv2', driver: 'Amit Singh', score: 88, violations: 5, onTime: 92 },
  { id: 'drv3', driver: 'Suresh Verma', score: 92, violations: 3, onTime: 95 },
  { id: 'drv4', driver: 'Vijay Sharma', score: 85, violations: 6, onTime: 88 },
  { id: 'drv5', driver: 'Prakash Rao', score: 90, violations: 4, onTime: 93 },
];

const delayTrends = [
  { id: 'jan', month: 'Jan', avgDelay: 5.2 },
  { id: 'feb', month: 'Feb', avgDelay: 4.8 },
  { id: 'mar', month: 'Mar', avgDelay: 6.1 },
  { id: 'apr', month: 'Apr', avgDelay: 5.5 },
  { id: 'may', month: 'May', avgDelay: 4.9 },
  { id: 'jun', month: 'Jun', avgDelay: 5.8 },
];

const ReportsAnalytics = () => {
    const [dateRange, setDateRange] = useState('last-30-days');

  return (
        <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights and data analysis</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
          >
            <option value="last-7-days">Last 7 Days</option>
            <option value="last-30-days">Last 30 Days</option>
            <option value="last-90-days">Last 90 Days</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="px-4 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Attendance</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">94.3%</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-[#22C55E]">
                <TrendingUp className="w-4 h-4" />
                <span>+2.1% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">On-Time Rate</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">85.8%</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-[#22C55E]">
                <TrendingUp className="w-4 h-4" />
                <span>+5.2% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Delay (min)</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">5.2</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-[#EF4444]">
                <TrendingDown className="w-4 h-4" />
                <span>-1.3 vs last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Trips</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">1,245</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                <span>This month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Weekly Attendance Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Weekly Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyAttendance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="week" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Legend />
              <Bar key="attendance-bar" dataKey="attendance" fill="#22C55E" name="Attendance %" />
              <Bar key="missed-bar" dataKey="missed" fill="#EF4444" name="Missed %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Boarding Method Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Visual Representation of Applicant's Qualificaion</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={boardingMethodData}
                cx="50%"
                cy="50%"
                labelLine={false}
                // label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {boardingMethodData.map((entry) => (
                  <Cell key={entry.id} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {boardingMethodData.map((item) => (
              <div key={item.id} className="text-center">
                <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }}></div>
                <p className="text-xs text-gray-600">{item.name}</p>
                <p className="text-sm font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Route Efficiency */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Route Efficiency Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={routeEfficiency}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="route" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Legend />
              <Bar key="onTime-bar" dataKey="onTime" stackId="a" fill="#22C55E" name="On Time %" />
              <Bar key="delayed-bar" dataKey="delayed" stackId="a" fill="#F59E0B" name="Delayed %" />
              <Bar key="cancelled-bar" dataKey="cancelled" stackId="a" fill="#EF4444" name="Cancelled %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Delay Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Average Delay Trends (Minutes)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={delayTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line type="monotone" dataKey="avgDelay" stroke="#F59E0B" strokeWidth={3} dot={{ fill: '#F59E0B', r: 5 }} name="Avg Delay" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Driver Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Driver Performance Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Violations</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">On-Time Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {driverPerformance.map((driver) => (
                <tr key={driver.driver} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{driver.driver}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[120px]">
                        <div
                          className={`h-2 rounded-full ${driver.score >= 90 ? 'bg-[#22C55E]' :
                              driver.score >= 80 ? 'bg-[#F59E0B]' :
                                'bg-[#EF4444]'
                            }`}
                          style={{ width: `${driver.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{driver.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${driver.violations <= 2 ? 'bg-green-100 text-green-800' :
                        driver.violations <= 4 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                      }`}>
                      {driver.violations} violations
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {driver.onTime}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.round((driver.score / 100) * 5) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="mt-6 bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Export Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Export as PDF
          </button>
          <button className="px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Export as CSV
          </button>
          <button className="px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Export as Excel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportsAnalytics