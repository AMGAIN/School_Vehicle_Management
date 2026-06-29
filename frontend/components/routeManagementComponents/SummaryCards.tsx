import React from "react";
import { RouteData } from "./types";
import { Route, Activity, MapPin, Ruler } from "lucide-react";

const SummaryCards = ({ routes }: { routes: RouteData[] }) => {
  const cardData = [
    {
      title: "Total Routes",
      value: routes.length,
      icon: Route,
      textColor: "text-gray-900",
      iconBg: "bg-gray-100",
      iconColor: "text-gray-700",
      bottomColor: "bg-gray-800",
    },
    {
      title: "Active Routes",
      value: routes.filter((r) => r.status === "active").length,
      icon: Activity,
      textColor: "text-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      bottomColor: "bg-green-500",
    },
    {
      title: "Total Stops",
      value: routes.reduce((sum, r) => sum + r.totalStops, 0),
      icon: MapPin,
      textColor: "text-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      bottomColor: "bg-blue-500",
    },
    {
      title: "Total Distance",
      value: "46.5 km",
      icon: Ruler,
      textColor: "text-amber-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
      bottomColor: "bg-amber-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
      {cardData.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {card.title}
                  </p>

                  <h2 className={`text-2xl font-bold mt-1 ${card.textColor}`}>
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`h-10 w-10 rounded-lg flex items-center justify-center ${card.iconBg}`}
                >
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
              </div>
            </div>

            <div className={`h-1 ${card.bottomColor}`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;