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

const routePerformance = [
  { route: "RT-01", onTime: 85, delayed: 15 },
  { route: "RT-02", onTime: 78, delayed: 22 },
  { route: "RT-03", onTime: 92, delayed: 8 },
  { route: "RT-04", onTime: 88, delayed: 12 },
];

const RoutePerformance = () => {
  const avgOnTime = (
    routePerformance.reduce((sum, item) => sum + item.onTime, 0) /
    routePerformance.length
  ).toFixed(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Route Performance
          </h2>
          <p className="text-xs text-gray-500">
            On-time delivery analysis
          </p>
        </div>

        <div className="bg-green-50 px-3 py-2 rounded-xl border border-green-100">
          <p className="text-xs text-gray-500">Average</p>
          <p className="text-lg font-bold text-green-600">
            {avgOnTime}%
          </p>
        </div>
      </div>

      {/* Chart */}

      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={routePerformance}
          barCategoryGap="30%"
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="route"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
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
            fill="#22C55E"
            radius={[8, 8, 0, 0]}
            name="On Time %"
          />

          <Bar
            dataKey="delayed"
            fill="#F59E0B"
            radius={[8, 8, 0, 0]}
            name="Delayed %"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoutePerformance;