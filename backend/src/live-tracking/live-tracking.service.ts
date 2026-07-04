import { Injectable } from '@nestjs/common';

@Injectable()
export class LiveTrackingService {
    getSummaryCard() {
        return [
            {
                title: "Active Buses",
                value: 3,
                trend: "+12%",
            },
            {
                title: "Students",
                value: 8,
                trend: "+8%",
            },
            {
                title: "Delayed",
                value: 87,
                trend: "-2%",
            },
            {
                title: "Offline",
                value: 1,
                trend: "-1%",
            },
        ];
    }
    getStudentActivity() {
        return [
            { id: '1', studentName: 'Aarav Sharma', avatar: 'AS', busId: 'BUS-001', timestamp: '2 min ago', method: 'qr', status: 'boarded' },
            { id: '2', studentName: 'Diya Patel', avatar: 'DP', busId: 'BUS-002', timestamp: '5 min ago', method: 'ble', status: 'pending' },
            { id: '3', studentName: 'Rohan Gupta', avatar: 'RG', busId: 'BUS-001', timestamp: '8 min ago', method: 'qr', status: 'boarded' },
            { id: '4', studentName: 'Ananya Mehta', avatar: 'AM', busId: 'BUS-003', timestamp: '10 min ago', method: 'qr', status: 'dropped' },
            { id: '5', studentName: 'Kabir Singh', avatar: 'KS', busId: 'BUS-002', timestamp: '12 min ago', method: 'qr', status: 'boarded' },
            { id: '6', studentName: 'Myra Khan', avatar: 'MK', busId: 'BUS-001', timestamp: '15 min ago', method: 'qr', status: 'unauthorized' },
        ]
    }
}
