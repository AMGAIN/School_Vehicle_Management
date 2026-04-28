import React from 'react'
import MapDisplay from './liveTrackingComponents/MapDisplay';
import StudentActivityFeed from './liveTrackingComponents/StudentActivityFeed';
import Kpi from './liveTrackingComponents/Kpi';

const LiveTraking = () => {
    // const [buses] = useState<Bus[]>(mockBuses);
    return (
        <div className="p-6 h-full flex gap-6">
            {/* Map Area */}
            <MapDisplay />

            {/* Right Sidebar */}
            <div className="w-96 flex flex-col gap-6">
                {/* KPI Cards */}
                <Kpi />

                {/* Student Activity Feed */}
                <StudentActivityFeed />
            </div>
        </div>
    )
}

export default LiveTraking