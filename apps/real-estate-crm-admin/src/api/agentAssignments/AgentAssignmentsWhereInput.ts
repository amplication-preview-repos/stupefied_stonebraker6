import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type AgentAssignmentsWhereInput = {
  agent?: StringNullableFilter;
  assignmentDate?: DateTimeNullableFilter;
  id?: StringFilter;
  property?: PropertiesWhereUniqueInput;
};
