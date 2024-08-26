import { AppointmentsCreateNestedManyWithoutClientsItemsInput } from "./AppointmentsCreateNestedManyWithoutClientsItemsInput";

export type ClientsCreateInput = {
  appointmentsItems?: AppointmentsCreateNestedManyWithoutClientsItemsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
