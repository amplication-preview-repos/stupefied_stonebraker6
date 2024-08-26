import { Properties } from "../properties/Properties";

export type AgentAssignments = {
  agent: string | null;
  assignmentDate: Date | null;
  createdAt: Date;
  id: string;
  property?: Properties | null;
  updatedAt: Date;
};
