import { AgentAssignments } from "../agentAssignments/AgentAssignments";

export type Properties = {
  address: string | null;
  agentAssignmentsItems?: Array<AgentAssignments>;
  createdAt: Date;
  id: string;
  price: number | null;
  size: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
