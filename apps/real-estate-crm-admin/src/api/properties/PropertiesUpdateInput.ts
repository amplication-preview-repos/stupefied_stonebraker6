import { AgentAssignmentsUpdateManyWithoutPropertiesItemsInput } from "./AgentAssignmentsUpdateManyWithoutPropertiesItemsInput";

export type PropertiesUpdateInput = {
  address?: string | null;
  agentAssignmentsItems?: AgentAssignmentsUpdateManyWithoutPropertiesItemsInput;
  price?: number | null;
  size?: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
