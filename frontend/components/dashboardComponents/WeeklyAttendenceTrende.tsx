import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const attendanceData = [
  { day: "Mon", attendance: 95 },
  { day: "Tue", attendance: 92 },
  { day: "Wed", attendance: 97 },
  { day: "Thu", attendance: 94 },
  { day: "Fri", attendance: 96 },
  { day: "Sat", attendance: 88 },
];

const WeeklyAttendanceTrend = () => {
  const average = (
    attendanceData.reduce((sum, item) => sum + item.attendance, 0) /
    attendanceData.length
  ).toFixed(1);

  const highest = Math.max(
    ...attendanceData.map((item) => item.attendance)
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Weekly Attendance Trend
          </h2>
          <p className="text-xs text-gray-500">
            Daily attendance percentage
          </p>
        </div>

        <div className="flex gap-2">
          <div className="bg-blue-50 px-3 py-2 rounded-xl border border-blue-100 text-center">
            <p className="text-[11px] text-gray-500">Average</p>
            <p className="text-lg font-bold text-blue-600">
              {average}%
            </p>
          </div>

          <div className="bg-green-50 px-3 py-2 rounded-xl border border-green-100 text-center">
            <p className="text-[11px] text-gray-500">Highest</p>
            <p className="text-lg font-bold text-green-600">
              {highest}%
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={attendanceData}>
          <defs>
            <linearGradient
              id="attendanceGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#4F6EDB"
                stopOpacity={0.35}
              />
              <stop
                offset="100%"
                stopColor="#4F6EDB"
                stopOpacity={0.03}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[80, 100]}
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
            formatter={(value) => [`${value}%`, "Attendance"]}
          />

          <Area
            type="monotone"
            dataKey="attendance"
            stroke="#4F6EDB"
            strokeWidth={3}
            fill="url(#attendanceGradient)"
            activeDot={{
              r: 7,
              stroke: "#4F6EDB",
              strokeWidth: 2,
              fill: "#fff",
            }}
            dot={{
              r: 4,
              fill: "#4F6EDB",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyAttendanceTrend;