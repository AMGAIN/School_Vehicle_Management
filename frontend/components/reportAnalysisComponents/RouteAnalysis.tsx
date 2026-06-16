import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const routeEfficiency = [
  { route: "RT-01", onTime: 85, delayed: 10, cancelled: 5 },
  { route: "RT-02", onTime: 78, delayed: 18, cancelled: 4 },
  { route: "RT-03", onTime: 92, delayed: 6, cancelled: 2 },
  { route: "RT-04", onTime: 88, delayed: 9, cancelled: 3 },
];

const RouteAnalysis = () => {
  const avgOnTime = (
    routeEfficiency.reduce((sum, r) => sum + r.onTime, 0) /
    routeEfficiency.length
  ).toFixed(1);

  const avgDelayed = (
    routeEfficiency.reduce((sum, r) => sum + r.delayed, 0) /
    routeEfficiency.length
  ).toFixed(1);

  const avgCancelled = (
    routeEfficiency.reduce((sum, r) => sum + r.cancelled, 0) /
    routeEfficiency.length
  ).toFixed(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Route Efficiency
          </h2>
          <p className="text-sm text-gray-500">
            On-time vs delay performance
          </p>
        </div>

        <div className="text-right text-xs text-gray-500">
          <p>Avg On-Time</p>
          <p className="text-green-600 font-bold text-lg">
            {avgOnTime}%
          </p>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        <div className="bg-green-50 border border-green-100 rounded-xl py-2">
          <p className="text-xs text-gray-500">On Time</p>
          <p className="font-bold text-green-600">{avgOnTime}%</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-100 rounded-xl py-2">
          <p className="text-xs text-gray-500">Delayed</p>
          <p className="font-bold text-yellow-600">{avgDelayed}%</p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl py-2">
          <p className="text-xs text-gray-500">Cancelled</p>
          <p className="font-bold text-red-500">{avgCancelled}%</p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={routeEfficiency} barGap={6}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="route"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          />

          <Bar
            dataKey="onTime"
            stackId="a"
            fill="#22C55E"
            radius={[6, 6, 0, 0]}
            name="On Time %"
          />
          <Bar
            dataKey="delayed"
            stackId="a"
            fill="#F59E0B"
            radius={[6, 6, 0, 0]}
            name="Delayed %"
          />
          <Bar
            dataKey="cancelled"
            stackId="a"
            fill="#EF4444"
            radius={[6, 6, 0, 0]}
            name="Cancelled %"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RouteAnalysis;