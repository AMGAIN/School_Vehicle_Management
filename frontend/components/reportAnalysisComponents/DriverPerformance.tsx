import React from 'react'

const driverPerformance = [
  { id: 'drv1', driver: 'Rajesh Kumar', score: 95, violations: 2, onTime: 98 },
  { id: 'drv2', driver: 'Amit Singh', score: 88, violations: 5, onTime: 92 },
  { id: 'drv3', driver: 'Suresh Verma', score: 92, violations: 3, onTime: 95 },
  { id: 'drv4', driver: 'Vijay Sharma', score: 85, violations: 6, onTime: 88 },
  { id: 'drv5', driver: 'Prakash Rao', score: 90, violations: 4, onTime: 93 },
];

const DriverPerformance = () => {
  return (
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
  )
}

export default DriverPerformance