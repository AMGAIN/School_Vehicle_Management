import React from "react";
import { User, ShieldCheck, AlertTriangle, Clock } from "lucide-react";

const driverPerformance = [
  {
    id: "drv1",
    driver: "Rajesh Kumar",
    score: 95,
    violations: 2,
    onTime: 98,
  },
  {
    id: "drv2",
    driver: "Amit Singh",
    score: 88,
    violations: 5,
    onTime: 92,
  },
  {
    id: "drv3",
    driver: "Suresh Verma",
    score: 92,
    violations: 3,
    onTime: 95,
  },
  {
    id: "drv4",
    driver: "Vijay Sharma",
    score: 85,
    violations: 6,
    onTime: 88,
  },
  {
    id: "drv5",
    driver: "Prakash Rao",
    score: 90,
    violations: 4,
    onTime: 93,
  },
];

const DriverPerformance = () => {
  const averageScore = (
    driverPerformance.reduce((acc, curr) => acc + curr.score, 0) /
    driverPerformance.length
  ).toFixed(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Driver Performance
          </h2>
          <p className="text-sm text-gray-500">
            Driver efficiency and safety metrics
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 px-4 py-2 rounded-xl">
          <p className="text-xs text-gray-500">Average Score</p>
          <p className="text-lg font-bold text-green-600">
            {averageScore}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-5 py-3 text-left">Driver</th>
              <th className="px-5 py-3 text-left">Performance</th>
              <th className="px-5 py-3 text-center">Violations</th>
              <th className="px-5 py-3 text-center">On-Time</th>
              <th className="px-5 py-3 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {driverPerformance.map((driver) => (
              <tr
                key={driver.id}
                className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* Driver */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <User size={18} className="text-blue-600" />
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        {driver.driver}
                      </p>
                      <p className="text-xs text-gray-500">
                        Driver ID: {driver.id.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Score */}
                <td className="px-5 py-4 min-w-[220px]">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          driver.score >= 90
                            ? "bg-green-500"
                            : driver.score >= 80
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${driver.score}%` }}
                      />
                    </div>

                    <span className="font-semibold text-gray-900 min-w-[40px]">
                      {driver.score}
                    </span>
                  </div>
                </td>

                {/* Violations */}
                <td className="px-5 py-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      driver.violations <= 2
                        ? "bg-green-100 text-green-700"
                        : driver.violations <= 4
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <AlertTriangle size={12} />
                    {driver.violations}
                  </span>
                </td>

                {/* On Time */}
                <td className="px-5 py-4 text-center">
                  <div className="inline-flex items-center gap-2">
                    <Clock size={14} className="text-blue-500" />
                    <span className="font-semibold text-gray-800">
                      {driver.onTime}%
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-5 py-4 text-center">
                  {driver.score >= 90 ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      <ShieldCheck size={13} />
                      Excellent
                    </span>
                  ) : driver.score >= 80 ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                      Good
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                      Needs Review
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverPerformance;