import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PropertiesTitle } from "../properties/PropertiesTitle";

export const AgentAssignmentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
