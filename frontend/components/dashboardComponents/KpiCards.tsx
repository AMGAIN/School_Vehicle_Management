import React from "react";
import {
  TrendingUp,
  Bus,
  Users,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const generalInfo = [
  {
    id: 1,
    title: "Total Buses",
    num: 24,
    status: "20 Active",
    icon: Bus,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    statusColor: "text-green-600",
  },
  {
    id: 2,
    title: "Total Students",
    num: 1224,
    status: "95% Present",
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    statusColor: "text-green-600",
  },
  {
    id: 3,
    title: "Active Alerts",
    num: 8,
    status: "2 Critical",
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    statusColor: "text-red-600",
  },
  {
    id: 4,
    title: "On-Time Rate",
    num: "87%",
    status: "+5% vs last week",
    icon: CheckCircle,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    statusColor: "text-green-600",
  },
];

const KpiCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {generalInfo.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />

            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {item.num}
                </h2>

                <div
                  className={`flex items-center gap-1 mt-3 text-sm font-medium ${item.statusColor}`}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>{item.status}</span>
                </div>
              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconBg}`}
              >
                <Icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KpiCards;