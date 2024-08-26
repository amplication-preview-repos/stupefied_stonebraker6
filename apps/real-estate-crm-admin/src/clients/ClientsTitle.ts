import { Clients as TClients } from "../api/clients/Clients";

export const CLIENTS_TITLE_FIELD = "name";

export const ClientsTitle = (record: TClients): string => {
  return record.name?.toString() || String(record.id);
};
