import React from "react";
import { AlertTriangle } from "lucide-react";

type AlertType = "critical" | "warning" | "info";

interface Alert {
    type: AlertType;
    title: string;
    message: string;
    time: string;
}

const ActiveAlerts = () => {
    const alerts: Alert[] = [
        {
            type: "critical",
            title: "BUS-004 Offline",
            message: "No data received for 15 minutes",
            time: "3 min ago",
        },
        {
            type: "warning",
            title: "Route RT-02 Delayed",
            message: "7 minutes behind schedule",
            time: "5 min ago",
        },
        {
            type: "critical",
            title: "Unauthorized Boarding",
            message: "Student Myra Khan - BUS-001",
            time: "15 min ago",
        },
        {
            type: "info",
            title: "BLE Sync Pending",
            message: "3 boarding events waiting for sync",
            time: "20 min ago",
        },
    ];

    const getStyle = (type: AlertType) => {
        switch (type) {
            case "critical":
                return {
                    bg: "bg-red-50",
                    border: "border-red-500",
                    icon: "text-red-600",
                    dot: "bg-red-500",
                };
            case "warning":
                return {
                    bg: "bg-amber-50",
                    border: "border-amber-500",
                    icon: "text-amber-600",
                    dot: "bg-amber-500",
                };
            case "info":
                return {
                    bg: "bg-blue-50",
                    border: "border-blue-500",
                    icon: "text-blue-600",
                    dot: "bg-blue-500",
                };
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Active Alerts</h3>
                <span className="text-xs text-gray-500">
                    {alerts.length} active
                </span>
            </div>

            <div className="space-y-3">
                {alerts.map((alert, idx) => {
                    const style = getStyle(alert.type);

                    return (
                        <div
                            key={idx}
                            className={`p-4 rounded-lg border-l-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.99] ${style.bg} ${style.border}`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 text-sm flex items-center gap-2">
                                        {alert.title}
                                        <span
                                            className={`w-2 h-2 rounded-full ${style.dot}`}
                                        />
                                    </h4>

                                    <p className="text-sm text-gray-600 mt-1">
                                        {alert.message}
                                    </p>

                                    <p className="text-xs text-gray-500 mt-2">
                                        {alert.time}
                                    </p>
                                </div>

                                <AlertTriangle
                                    className={`w-5 h-5 ${style.icon}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ActiveAlerts;