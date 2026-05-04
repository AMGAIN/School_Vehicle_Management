import React from 'react'
import { TrendingUp, Bus, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const generalInfo = [
  { id: 1, title: "Total Buses", num: 24, status: "20 Active", img: Bus },
  { id: 2, title: "Total Students", num: 1224, status: "95% Present", img: Users },
  { id: 3, title: "Active Alerts", num: 8, status: "2 Critical", img: AlertTriangle },
  { id: 4, title: "On-Time Rate", num: 87, status: "+5% vs last week", img: CheckCircle },
];

const KpiCards = () => {
  return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI Cards */}
        {
          generalInfo.map((item, index) => {
            const Icon = item.img;
            return (
              <div key={index} className='bg-white flex items-center justify-between rounded-xl shadow-sm border border-gray-200 p-6 hover:scale-110 transition-transform duration-200' >
                <div>
                  <p className="text-sm text-gray-600">{item.title}</p>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">{item.num}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-[#22C55E]">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.status}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#4F6EDB]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#4F6EDB]" />
                </div>
              </div>
            )
          })
        }
      </div>
  )
}

export default KpiCards