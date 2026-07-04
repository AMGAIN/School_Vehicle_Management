import { Injectable } from '@nestjs/common';

@Injectable()
export class AttendanceService {
    getSummaryData() {
        return [
            {
                title: "Total Logs",
                value: 3,
            },
            {
                title: "Verified",
                value: 8,
            },
            {
                title: "Pending Sync",
                value: 9,

            },
            {
                title: "QR Scans",
                value: 7,
            },
            {
                title: "BLE Syncs",
                value: 9,
            },
        ];
    }
    getAttendanceData() {
        return [
            { id: 'LOG-001', studentName: 'Aarav Sharma', studentId: 'STU-001', busId: 'BUS-001', type: 'boarding', method: 'qr', status: 'verified', timestamp: '2026-04-21 07:15:30', location: 'Sector 15, Noida', parentName: 'Rajesh Sharma', syncStatus: 'synced' },
            { id: 'LOG-002', studentName: 'Diya Patel', studentId: 'STU-002', busId: 'BUS-002', type: 'boarding', method: 'ble', status: 'pending', timestamp: '2026-04-21 07:18:45', location: 'Indirapuram', parentName: 'Amit Patel', syncStatus: 'pending' },
            { id: 'LOG-003', studentName: 'Rohan Gupta', studentId: 'STU-003', busId: 'BUS-001', type: 'boarding', method: 'qr', status: 'verified', timestamp: '2026-04-21 07:20:15', location: 'Sector 18, Noida', parentName: 'Priya Gupta', syncStatus: 'synced' },
            { id: 'LOG-004', studentName: 'Ananya Mehta', studentId: 'STU-004', busId: 'BUS-003', type: 'drop', method: 'qr', status: 'verified', timestamp: '2026-04-21 14:05:20', location: 'School Gate C', parentName: 'Vikram Mehta', syncStatus: 'synced' },
            { id: 'LOG-005', studentName: 'Kabir Singh', studentId: 'STU-005', busId: 'BUS-002', type: 'boarding', method: 'qr', status: 'verified', timestamp: '2026-04-21 07:22:50', location: 'Mayur Vihar', parentName: 'Neha Singh', syncStatus: 'synced' },
            { id: 'LOG-006', studentName: 'Myra Khan', studentId: 'STU-006', busId: 'BUS-001', type: 'boarding', method: 'qr', status: 'unauthorized', timestamp: '2026-04-21 07:25:10', location: 'Sector 22, Noida', parentName: 'Unknown', syncStatus: 'synced' },
        ];
    }
}
