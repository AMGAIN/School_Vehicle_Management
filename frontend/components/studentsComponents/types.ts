export interface Student {
  id: string;
  name: string;
  avatar: string;
  grade: string;
  assignedBus: string;
  route: string;
  pickupLocation: string;
  dropLocation: string;
  parentName: string;
  parentPhone: string;
  attendance: number;
  status: "active" | "absent" | "inactive";
}
