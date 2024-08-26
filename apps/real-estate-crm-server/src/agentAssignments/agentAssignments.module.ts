import { Module } from "@nestjs/common";
import { AgentAssignmentsModuleBase } from "./base/agentAssignments.module.base";
import { AgentAssignmentsService } from "./agentAssignments.service";
import { AgentAssignmentsController } from "./agentAssignments.controller";
import { AgentAssignmentsResolver } from "./agentAssignments.resolver";

@Module({
  imports: [AgentAssignmentsModuleBase],
  controllers: [AgentAssignmentsController],
  providers: [AgentAssignmentsService, AgentAssignmentsResolver],
  exports: [AgentAssignmentsService],
})
export class AgentAssignmentsModule {}
