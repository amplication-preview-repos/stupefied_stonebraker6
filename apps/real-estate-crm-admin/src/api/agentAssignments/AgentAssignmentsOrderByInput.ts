import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentsOrderByInput = {
  agent?: SortOrder;
  assignmentDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
