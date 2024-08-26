import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENTS_TITLE_FIELD } from "./ClientsTitle";

export const ClientsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointments"
          target="clientId"
          label="AppointmentsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Client"
              source="clients.id"
              reference="Clients"
            >
              <TextField source={CLIENTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
