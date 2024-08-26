import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type AgentAssignmentsUpdateInput = {
  agent?: string | null;
  assignmentDate?: Date | null;
  property?: PropertiesWhereUniqueInput | null;
};
