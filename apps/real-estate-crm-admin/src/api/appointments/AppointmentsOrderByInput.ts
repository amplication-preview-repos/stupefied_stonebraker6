import { SortOrder } from "../../util/SortOrder";

export type AppointmentsOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
};
