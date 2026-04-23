"use client";

import { useState } from "react";
import SideNav from "@/components/SideNav";
import Nav from "@/components/Nav";
import  {Dashboard}  from "@/components/Dashboard";
import LiveTraking from "@/components/LiveTraking";
import Students from "@/components/Students";
import Parents from "@/components/Parents";
import BusManagement from "@/components/BusManagement";
import RouteManagement from "@/components/RouteManagement";
import Drivers from "@/components/Drivers";
import VehicleTelematics from "@/components/VehicleTelematics";
import Attendance from "@/components/Attendance";
import AlertIncidents from "@/components/AlertIncidents";
import ReportsAnalytics from "@/components/ReportsAnalytics";
import Settings from "@/components/Settings";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "live-tracking":
        return <LiveTraking />;
      case "students":
        return <Students />;
      case "parents":
        return <Parents />;
      case "buses":
        return <BusManagement />;
      case "routes":
        return <RouteManagement />;
      case "drivers":
        return <Drivers />;
      case "telematics":
        return <VehicleTelematics />;
      case "attendance":
        return <Attendance />;
      case "alerts":
        return <AlertIncidents />;
      case "reports":
        return <ReportsAnalytics />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="flex">
      <SideNav currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-1">
        <Nav />
        {renderPage()}
      </div>
    </div>
  );
}