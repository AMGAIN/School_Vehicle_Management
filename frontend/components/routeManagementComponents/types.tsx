export interface Stop {
  id: string;
  name: string;
  location: string;
  time: string;
  studentsCount: number;
}

export interface RouteData {
  id: string;
  name: string;
  assignedBus: string;
  status: 'active' | 'inactive';
  totalStops: number;
  distance: string;
  duration: string;
  studentsCount: number;
  stops: Stop[];
  color: string;
}

export interface NewRouteDraft {
  name: string;
  assignedBus: string;
  color: string;
  startTime: string;
}
