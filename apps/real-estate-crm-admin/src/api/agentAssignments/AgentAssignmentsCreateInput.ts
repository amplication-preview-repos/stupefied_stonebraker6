import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type AgentAssignmentsCreateInput = {
  agent?: string | null;
  assignmentDate?: Date | null;
  property?: PropertiesWhereUniqueInput | null;
};
