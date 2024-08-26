import { AgentAssignments as TAgentAssignments } from "../api/agentAssignments/AgentAssignments";

export const AGENTASSIGNMENTS_TITLE_FIELD = "agent";

export const AgentAssignmentsTitle = (record: TAgentAssignments): string => {
  return record.agent?.toString() || String(record.id);
};
