import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";

export const AppointmentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="clients.id" reference="Clients">
          <TextField source={CLIENTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
