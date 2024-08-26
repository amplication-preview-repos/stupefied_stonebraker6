import { AgentAssignmentsWhereInput } from "./AgentAssignmentsWhereInput";
import { AgentAssignmentsOrderByInput } from "./AgentAssignmentsOrderByInput";

export type AgentAssignmentsFindManyArgs = {
  where?: AgentAssignmentsWhereInput;
  orderBy?: Array<AgentAssignmentsOrderByInput>;
  skip?: number;
  take?: number;
};
