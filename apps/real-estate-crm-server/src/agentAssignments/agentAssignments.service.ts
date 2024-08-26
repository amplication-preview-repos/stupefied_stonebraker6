import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgentAssignmentsServiceBase } from "./base/agentAssignments.service.base";

@Injectable()
export class AgentAssignmentsService extends AgentAssignmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
