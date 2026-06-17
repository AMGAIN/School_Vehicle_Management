import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const delayTrends = [
  { month: "Jan", avgDelay: 5.2 },
  { month: "Feb", avgDelay: 4.8 },
  { month: "Mar", avgDelay: 6.1 },
  { month: "Apr", avgDelay: 5.5 },
  { month: "May", avgDelay: 4.9 },
  { month: "Jun", avgDelay: 5.8 },
];

const DelayTrends = () => {
  return (
<div className="bg-yellow-50 p-5 rounded-2xl shadow-md border border-yellow-100 hover:shadow-lg transition">      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Delay Trends
      </h3>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={delayTrends}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="avgDelay"
            stroke="#F59E0B"
            strokeWidth={3}
            dot={{ r: 5, fill: "#F59E0B" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DelayTrends;