import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PropertiesTitle } from "../properties/PropertiesTitle";

export const AgentAssignmentsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Agent" source="agent" />
        <DateTimeInput label="AssignmentDate" source="assignmentDate" />
        <ReferenceInput
          source="property.id"
          reference="Properties"
          label="Property"
        >
          <SelectInput optionText={PropertiesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
