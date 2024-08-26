import { AgentAssignmentsCreateNestedManyWithoutPropertiesItemsInput } from "./AgentAssignmentsCreateNestedManyWithoutPropertiesItemsInput";

export type PropertiesCreateInput = {
  address?: string | null;
  agentAssignmentsItems?: AgentAssignmentsCreateNestedManyWithoutPropertiesItemsInput;
  price?: number | null;
  size?: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
