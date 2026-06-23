import React from "react";
import {
  Clock,
  CheckCircle,
  AlertTriangle,
  Bus,
  User,
} from "lucide-react";

type Status = "success" | "warning" | "info";

type Activity = {
  time: string;
  event: string;
  status: Status;
  icon: React.ElementType;
};

const activities: Activity[] = [
  {
    time: "2 min ago",
    event: "BUS-001 completed route RT-01",
    status: "success",
    icon: Bus,
  },
  {
    time: "5 min ago",
    event: "Student Aarav Sharma boarded BUS-002",
    status: "info",
    icon: User,
  },
  {
    time: "8 min ago",
    event: "BUS-003 delayed by 10 minutes",
    status: "warning",
    icon: AlertTriangle,
  },
  {
    time: "12 min ago",
    event: "Route RT-04 started morning pickup",
    status: "info",
    icon: Bus,
  },
  {
    time: "15 min ago",
    event: "Attendance sync completed (BLE)",
    status: "success",
    icon: CheckCircle,
  },
];

const statusStyles: Record<
  Status,
  {
    bg: string;
    text: string;
    badge: string;
  }
> = {
  success: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    badge: "Completed",
  },
  warning: {
    bg: "bg-amber-100",
    text: "text-amber-600",
    badge: "Delayed",
  },
  info: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    badge: "Update",
  },
};

const RecentActivities = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-slate-900 text-lg">
          Recent Activities
        </h3>

        <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">
          Live Feed
        </span>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />

        <div className="space-y-5">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            const style = statusStyles[activity.status];

            return (
              <div
                key={idx}
                className="relative flex gap-4 group hover:bg-slate-50 p-3 rounded-xl transition-all duration-200"
              >
                {/* Icon */}
                <div
                  className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center ${style.bg}`}
                >
                  <Icon className={`w-5 h-5 ${style.text}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-800">
                      {activity.event}
                    </p>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${style.bg} ${style.text}`}
                    >
                      {style.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;