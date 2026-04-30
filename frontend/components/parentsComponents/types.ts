export interface NotificationPreferences {
  boarding: boolean;
  drop: boolean;
  delays: boolean;
  alerts: boolean;
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  linkedStudents: string[];
  qrAuthorized: boolean;
  emergencyContact: boolean;
  appAccess: boolean;
  lastActive: string;
  notificationPreferences: NotificationPreferences;
}

export type AuthorizationKey =
  | "qrAuthorized"
  | "emergencyContact"
  | "appAccess";

export interface NewParentForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  linkedStudents: string;
  qrAuthorized: boolean;
  emergencyContact: boolean;
  appAccess: boolean;
  notificationPreferences: NotificationPreferences;
}
