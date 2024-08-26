import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";

export type AppointmentsUpdateInput = {
  client?: ClientsWhereUniqueInput | null;
  date?: Date | null;
  notes?: string | null;
};
