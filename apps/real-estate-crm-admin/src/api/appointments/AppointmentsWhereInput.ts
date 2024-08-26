import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentsWhereInput = {
  client?: ClientsWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
};
