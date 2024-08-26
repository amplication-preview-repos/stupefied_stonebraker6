import * as graphql from "@nestjs/graphql";
import { AgentAssignmentsResolverBase } from "./base/agentAssignments.resolver.base";
import { AgentAssignments } from "./base/AgentAssignments";
import { AgentAssignmentsService } from "./agentAssignments.service";

@graphql.Resolver(() => AgentAssignments)
export class AgentAssignmentsResolver extends AgentAssignmentsResolverBase {
  constructor(protected readonly service: AgentAssignmentsService) {
    super(service);
  }
}
