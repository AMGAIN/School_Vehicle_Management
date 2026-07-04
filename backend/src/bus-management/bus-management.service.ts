import { Injectable } from '@nestjs/common';

@Injectable()
export class BusManagementService {
    getBusSummary() {
        return
    }
    getBusData() {
        return [
            { id: 'BUS-001', capacity: 40, route: 'RT-01', driver: 'Rajesh Adhikari', status: 'active', connectivity: 'online', lastSync: 'Just now', studentsOnboard: 28, location: 'Gangabu', speed: 35, fuelLevel: 75, deviceId: 'DEV-001' },
            { id: 'BUS-002', capacity: 45, route: 'RT-02', driver: 'Amit Raj Sikdel', status: 'active', connectivity: 'ble', lastSync: '2 min ago', studentsOnboard: 32, location: 'Chobhar', speed: 20, fuelLevel: 60, deviceId: 'DEV-002' },
            { id: 'BUS-003', capacity: 35, route: 'RT-03', driver: 'Suresh Pokharel', status: 'active', connectivity: 'online', lastSync: 'Just now', studentsOnboard: 15, location: 'Thankot', speed: 45, fuelLevel: 85, deviceId: 'DEV-003' },
            { id: 'BUS-004', capacity: 40, route: 'RT-04', driver: 'Vijay Gurung', status: 'active', connectivity: 'offline', lastSync: '15 min ago', studentsOnboard: 20, location: 'Lagankhel', speed: 0, fuelLevel: 45, deviceId: 'DEV-004' },
            { id: 'BUS-005', capacity: 38, route: 'RT-05', driver: 'Prakash Nepali', status: 'maintenance', connectivity: 'offline', lastSync: '2 hours ago', studentsOnboard: 0, location: 'Sundhara', speed: 0, fuelLevel: 30, deviceId: 'DEV-005' },
        ];
    }
}
