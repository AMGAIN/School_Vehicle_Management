import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const boardingMethodData = [
  {
    id: "qr-verified",
    name: "QR Verified",
    value: 650,
    color: "#4F6EDB",
  },
  {
    id: "ble-sync",
    name: "BLE Sync",
    value: 220,
    color: "#3B82F6",
  },
  {
    id: "pending-sync",
    name: "Pending Sync",
    value: 130,
    color: "#F59E0B",
  },
];

const BoardingDistribution = () => {
  const total = boardingMethodData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Boarding Distribution
          </h2>
          <p className="text-xs text-gray-500">
            Boarding method overview
          </p>
        </div>

        <div className="bg-blue-50 px-3 py-1 rounded-lg">
          <p className="text-xs text-gray-500">Total</p>
          <p className="font-bold text-blue-600">{total}</p>
        </div>
      </div>

      {/* Chart + Legend */}
      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Donut Chart */}
        <div className="relative h-[210px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={boardingMethodData}
                dataKey="value"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={3}
                stroke="none"
              >
                {boardingMethodData.map((item) => (
                  <Cell key={item.id} fill={item.color} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Total */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-[10px] text-gray-500">Total</p>
            <p className="text-xl font-bold text-gray-900">{total}</p>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {boardingMethodData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border border-gray-100 rounded-lg p-2 hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-sm text-gray-700">
                  {item.name}
                </span>
              </div>

              <div className="text-right">
                <p className="font-semibold text-sm text-gray-900">
                  {item.value}
                </p>
                <p className="text-xs text-gray-500">
                  {((item.value / total) * 100).toFixed(0)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardingDistribution;