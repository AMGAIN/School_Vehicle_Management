export interface BusData {
    id: string;
    capacity: number;
    route: string;
    driver: string;
    status: 'active' | 'inactive' | 'maintenance';
    connectivity: 'online' | 'ble' | 'offline';
    lastSync: string;
    studentsOnboard: number;
    location: string;
    speed: number;
    fuelLevel: number;
    deviceId: string;
}

export default BusData;
