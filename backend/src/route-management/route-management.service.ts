import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteManagementService {
    getRouteData() {
        return [
            {
                id: 'RT-01',
                name: 'Chandragiri',
                assignedBus: 'BUS-001',
                status: 'active',
                totalStops: 8,
                distance: '15.2 km',
                duration: '45 min',
                studentsCount: 32,
                color: '#22C55E',
                stops: [
                    { id: 'ST-01', name: 'School Gate A', location: 'Main Campus', time: '07:00 AM', studentsCount: 0 },
                    { id: 'ST-02', name: 'Sliding Stop', location: 'Nagdhunga', time: '07:10 AM', studentsCount: 5 },
                    { id: 'ST-03', name: 'Sector 2 Market', location: 'Cable Car base', time: '07:18 AM', studentsCount: 8 },
                    { id: 'ST-04', name: 'Green Park', location: 'Oil Nigam gate', time: '07:25 AM', studentsCount: 6 },
                    { id: 'ST-05', name: 'Tara Plaza', location: 'Thankot', time: '07:32 AM', studentsCount: 7 },
                    // { id: 'ST-06', name: 'Sector 30 Junction', location: 'Sector 30, Noida', time: '07:38 AM', studentsCount: 4 },
                    // { id: 'ST-07', name: 'Sector 37 Circle', location: 'Sector 37, Noida', time: '07:42 AM', studentsCount: 2 },
                    // { id: 'ST-08', name: 'School Gate A', location: 'Main Campus', time: '07:50 AM', studentsCount: 0 },
                ]
            },
            {
                id: 'RT-02',
                name: 'Tarakeshwor',
                assignedBus: 'BUS-002',
                status: 'active',
                totalStops: 6,
                distance: '18.5 km',
                duration: '55 min',
                studentsCount: 28,
                color: '#3B82F6',
                stops: [
                    { id: 'ST-09', name: 'School Gate B', location: 'Main Campus', time: '07:00 AM', studentsCount: 0 },
                    { id: 'ST-10', name: 'Naptol stop', location: 'Macchapokhari', time: '07:12 AM', studentsCount: 8 },
                    { id: 'ST-11', name: 'Gumba', location: 'Goldhungs', time: '07:22 AM', studentsCount: 10 },
                    { id: 'ST-12', name: 'Kabre Buspark', location: 'Kabresthali', time: '07:35 AM', studentsCount: 6 },
                    { id: 'ST-13', name: 'NepalTar', location: 'Main Bazar', time: '07:45 AM', studentsCount: 4 },
                    { id: 'ST-14', name: 'Lolang Chok', location: 'Lolang', time: '08:00 AM', studentsCount: 0 },
                ]
            },
            {
                id: 'RT-03',
                name: 'Tudikhel',
                assignedBus: 'BUS-003',
                status: 'active',
                totalStops: 5,
                distance: '12.8 km',
                duration: '40 min',
                studentsCount: 20,
                color: '#F59E0B',
                stops: [
                    { id: 'ST-15', name: 'School Gate C', location: 'Main Campus', time: '07:00 AM', studentsCount: 0 },
                    { id: 'ST-16', name: 'Jamal Bus stop', location: 'Jamal', time: '07:10 AM', studentsCount: 6 },
                    { id: 'ST-17', name: 'Bridge Sector', location: 'Lainchour', time: '07:20 AM', studentsCount: 8 },
                    { id: 'ST-18', name: 'Dharhara Stop', location: 'Sundhara', time: '07:30 AM', studentsCount: 6 },
                    { id: 'ST-19', name: 'Main Gate', location: 'Thamel', time: '07:45 AM', studentsCount: 0 },
                ]
            },
        ];
    }
}
