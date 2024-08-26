import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentAssignmentsListRelationFilter } from "../agentAssignments/AgentAssignmentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PropertiesWhereInput = {
  address?: StringNullableFilter;
  agentAssignmentsItems?: AgentAssignmentsListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  size?: IntNullableFilter;
  status?: "Option1";
  typeField?: "Option1";
};
