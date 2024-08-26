import { Clients } from "../clients/Clients";

export type Appointments = {
  client?: Clients | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  notes: string | null;
  updatedAt: Date;
};
