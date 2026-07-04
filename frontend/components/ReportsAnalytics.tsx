"use client";
import React from 'react'
import { useState } from 'react';
import { Download, Calendar, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import WeeklyAttendenceTrend from './reportAnalysisComponents/WeeklyAttendenceTrend';
import BordingDistribution from './reportAnalysisComponents/BordingDistribution';
import RouteAnalysis from './reportAnalysisComponents/RouteAnalysis';
import DelayTrends from './reportAnalysisComponents/DelayTrends';
import DriverPerformance from './reportAnalysisComponents/DriverPerformance';

const summaryCards = [
  {
    title: "Avg Attendance",
    value: "94.3%",
    trend: "+2.1% vs last month",
    trendColor: "text-[#22C55E]",
    icon: TrendingUp,
  },
  {
    title: "On-Time Rate",
    value: "85.8%",
    trend: "+5.2% vs last month",
    trendColor: "text-[#22C55E]",
    icon: TrendingUp,
  },
  {
    title: "Avg Delay (min)",
    value: "5.2",
    trend: "-1.3 vs last month",
    trendColor: "text-[#EF4444]",
    icon: TrendingDown,
  },
  {
    title: "Total Trips",
    value: "1,245",
    trend: "This month",
    trendColor: "text-gray-600",
    icon: null,
  },
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
        {summaryCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{card.title}</p>

                  <p className="text-3xl font-semibold text-gray-900 mt-2">
                    {card.value}
                  </p>

                  <div className={`flex items-center gap-1 mt-2 text-sm ${card.trendColor}`}>
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{card.trend}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Weekly Attendance Trend */}
        <WeeklyAttendenceTrend />

        {/* Boarding Method Distribution */}
        <BordingDistribution />

        {/* Route Efficiency */}
        <RouteAnalysis />

        {/* Delay Trends */}
        <DelayTrends />
      </div>

      {/* Driver Performance Table */}
      <DriverPerformance />

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