import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClientsTitle } from "../clients/ClientsTitle";

export const AppointmentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Clients" label="Client">
          <SelectInput optionText={ClientsTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Notes" multiline source="notes" />
      </SimpleForm>
    </Edit>
  );
};
