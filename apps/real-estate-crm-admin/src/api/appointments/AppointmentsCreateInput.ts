import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";

export type AppointmentsCreateInput = {
  client?: ClientsWhereUniqueInput | null;
  date?: Date | null;
  notes?: string | null;
};
