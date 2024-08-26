import { AppointmentsUpdateManyWithoutClientsItemsInput } from "./AppointmentsUpdateManyWithoutClientsItemsInput";

export type ClientsUpdateInput = {
  appointmentsItems?: AppointmentsUpdateManyWithoutClientsItemsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
