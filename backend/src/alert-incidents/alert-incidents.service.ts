import { Injectable } from '@nestjs/common';

@Injectable()
export class AlertIncidentsService {
    getAlertSummary() {
        return [
            {
                title: "Total Alerts",
                value: 4,
            },
            {
                title: "Critical",
                value: 7,
            },
            {
                title: "Warning",
                value: 9,
            },
            {
                title: "Active",
                value: 3,
            },
        ];
    }
    getIncidenceData() {
        return [
            { id: 'ALT-001', type: 'critical', category: 'emergency', title: 'Emergency SOS Triggered', description: 'Driver pressed emergency button on BUS-004', busId: 'BUS-004', timestamp: '2 min ago', status: 'active', location: 'Sector 18, Noida' },
            { id: 'ALT-002', type: 'critical', category: 'speed', title: 'Over-speeding Detected', description: 'Bus speed exceeded 60 km/h in school zone', busId: 'BUS-002', timestamp: '5 min ago', status: 'active', location: 'School Road' },
            { id: 'ALT-003', type: 'warning', category: 'route', title: 'Route Deviation', description: 'Bus deviated from assigned route by 500m', busId: 'BUS-003', timestamp: '8 min ago', status: 'acknowledged', location: 'Indirapuram' },
            { id: 'ALT-004', type: 'warning', category: 'pickup', title: 'Missed Pickup', description: 'Student Rohan Gupta not boarded at stop 3', busId: 'BUS-001', timestamp: '12 min ago', status: 'acknowledged' },
            { id: 'ALT-005', type: 'warning', category: 'delay', title: 'Route Delayed', description: 'Route RT-02 running 10 minutes behind schedule', busId: 'BUS-002', timestamp: '15 min ago', status: 'resolved' },
            { id: 'ALT-006', type: 'info', category: 'delay', title: 'Minor Delay', description: 'Traffic congestion on route RT-01', busId: 'BUS-001', timestamp: '18 min ago', status: 'resolved' },
        ];
    }
}
