import React from "react";
import { RouteData } from "./types";
import { Route, Activity, MapPin, Ruler } from "lucide-react";

const SummaryCards = ({ routes }: { routes: RouteData[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
      {/* Total Routes */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Routes
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {routes.length}
              </h2>
            </div>

            <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center">
              <Route className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>

        <div className="h-1 bg-gray-800"></div>
      </div>

      {/* Active Routes */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Active Routes
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                {routes.filter((r) => r.status === "active").length}
              </h2>
            </div>

            <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="h-1 bg-green-500"></div>
      </div>

      {/* Total Stops */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Stops
              </p>

              <h2 className="text-3xl font-bold text-blue-600 mt-2">
                {routes.reduce((sum, r) => sum + r.totalStops, 0)}
              </h2>
            </div>

            <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="h-1 bg-blue-500"></div>
      </div>

      {/* Total Distance */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Distance
              </p>

              <h2 className="text-3xl font-bold text-amber-500 mt-2">
                46.5 km
              </h2>
            </div>

            <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <Ruler className="w-6 h-6 text-amber-500" />
            </div>
          </div>
        </div>

        <div className="h-1 bg-amber-500"></div>
      </div>
    </div>
  );
};

export default SummaryCards;