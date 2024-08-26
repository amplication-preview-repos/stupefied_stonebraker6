import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgentAssignmentsService } from "./agentAssignments.service";
import { AgentAssignmentsControllerBase } from "./base/agentAssignments.controller.base";

@swagger.ApiTags("agentAssignments")
@common.Controller("agentAssignments")
export class AgentAssignmentsController extends AgentAssignmentsControllerBase {
  constructor(protected readonly service: AgentAssignmentsService) {
    super(service);
  }
}
