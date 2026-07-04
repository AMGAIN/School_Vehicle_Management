import { Injectable } from '@nestjs/common';

@Injectable()
export class DriversService {
    getDriverData() {
        return [
            {
                id: 'DRV-001',
                name: 'Rajesh Kumar',
                email: 'rajesh.kumar@yatritech.com',
                phone: '+91 98765 43210',
                licenseNumber: 'DL-07-2015-001234',
                assignedBus: 'BUS-001',
                status: 'active',
                experience: '8 years',
                rating: 4.8,
                performanceScore: 95,
                violations: { speeding: 2, harshBraking: 3, idleTime: 1 },
                analytics: { tripsCompleted: 245, onTimeRate: 98, avgSpeed: 32, totalDistance: '3,680 km' },
                emergencyContact: { name: 'Sunita Kumar', phone: '+91 98765 43211' }
            },
            {
                id: 'DRV-002',
                name: 'Amit Singh',
                email: 'amit.singh@yatritech.com',
                phone: '+91 98765 43212',
                licenseNumber: 'DL-07-2016-005678',
                assignedBus: 'BUS-002',
                status: 'active',
                experience: '6 years',
                rating: 4.5,
                performanceScore: 88,
                violations: { speeding: 5, harshBraking: 4, idleTime: 3 },
                analytics: { tripsCompleted: 198, onTimeRate: 92, avgSpeed: 35, totalDistance: '2,970 km' },
                emergencyContact: { name: 'Priya Singh', phone: '+91 98765 43213' }
            },
            {
                id: 'DRV-003',
                name: 'Suresh Verma',
                email: 'suresh.verma@yatritech.com',
                phone: '+91 98765 43214',
                licenseNumber: 'DL-07-2014-009012',
                assignedBus: 'BUS-003',
                status: 'active',
                experience: '10 years',
                rating: 4.9,
                performanceScore: 92,
                violations: { speeding: 3, harshBraking: 2, idleTime: 2 },
                analytics: { tripsCompleted: 310, onTimeRate: 95, avgSpeed: 30, totalDistance: '4,650 km' },
                emergencyContact: { name: 'Meena Verma', phone: '+91 98765 43215' }
            },
            {
                id: 'DRV-004',
                name: 'Vijay Sharma',
                email: 'vijay.sharma@yatritech.com',
                phone: '+91 98765 43216',
                licenseNumber: 'DL-07-2017-003456',
                assignedBus: 'BUS-004',
                status: 'on-break',
                experience: '5 years',
                rating: 4.3,
                performanceScore: 85,
                violations: { speeding: 6, harshBraking: 5, idleTime: 4 },
                analytics: { tripsCompleted: 165, onTimeRate: 88, avgSpeed: 33, totalDistance: '2,475 km' },
                emergencyContact: { name: 'Kavita Sharma', phone: '+91 98765 43217' }
            },
            {
                id: 'DRV-005',
                name: 'Prakash Rao',
                email: 'prakash.rao@yatritech.com',
                phone: '+91 98765 43218',
                licenseNumber: 'DL-07-2015-007890',
                assignedBus: 'BUS-005',
                status: 'off-duty',
                experience: '7 years',
                rating: 4.6,
                performanceScore: 90,
                violations: { speeding: 4, harshBraking: 3, idleTime: 2 },
                analytics: { tripsCompleted: 220, onTimeRate: 93, avgSpeed: 31, totalDistance: '3,300 km' },
                emergencyContact: { name: 'Lakshmi Rao', phone: '+91 98765 43219' }
            },
        ];
    }
}
