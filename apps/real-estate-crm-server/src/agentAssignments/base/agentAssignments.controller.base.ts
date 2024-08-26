/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AgentAssignmentsService } from "../agentAssignments.service";
import { AgentAssignmentsCreateInput } from "./AgentAssignmentsCreateInput";
import { AgentAssignments } from "./AgentAssignments";
import { AgentAssignmentsFindManyArgs } from "./AgentAssignmentsFindManyArgs";
import { AgentAssignmentsWhereUniqueInput } from "./AgentAssignmentsWhereUniqueInput";
import { AgentAssignmentsUpdateInput } from "./AgentAssignmentsUpdateInput";

export class AgentAssignmentsControllerBase {
  constructor(protected readonly service: AgentAssignmentsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AgentAssignments })
  async createAgentAssignments(
    @common.Body() data: AgentAssignmentsCreateInput
  ): Promise<AgentAssignments> {
    return await this.service.createAgentAssignments({
      data: {
        ...data,

        property: data.property
          ? {
              connect: data.property,
            }
          : undefined,
      },
      select: {
        agent: true,
        assignmentDate: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AgentAssignments] })
  @ApiNestedQuery(AgentAssignmentsFindManyArgs)
  async agentAssignmentsItems(
    @common.Req() request: Request
  ): Promise<AgentAssignments[]> {
    const args = plainToClass(AgentAssignmentsFindManyArgs, request.query);
    return this.service.agentAssignmentsItems({
      ...args,
      select: {
        agent: true,
        assignmentDate: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async agentAssignments(
    @common.Param() params: AgentAssignmentsWhereUniqueInput
  ): Promise<AgentAssignments | null> {
    const result = await this.service.agentAssignments({
      where: params,
      select: {
        agent: true,
        assignmentDate: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAgentAssignments(
    @common.Param() params: AgentAssignmentsWhereUniqueInput,
    @common.Body() data: AgentAssignmentsUpdateInput
  ): Promise<AgentAssignments | null> {
    try {
      return await this.service.updateAgentAssignments({
        where: params,
        data: {
          ...data,

          property: data.property
            ? {
                connect: data.property,
              }
            : undefined,
        },
        select: {
          agent: true,
          assignmentDate: true,
          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAgentAssignments(
    @common.Param() params: AgentAssignmentsWhereUniqueInput
  ): Promise<AgentAssignments | null> {
    try {
      return await this.service.deleteAgentAssignments({
        where: params,
        select: {
          agent: true,
          assignmentDate: true,
          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}