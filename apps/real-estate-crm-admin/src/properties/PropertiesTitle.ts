import { Properties as TProperties } from "../api/properties/Properties";

export const PROPERTIES_TITLE_FIELD = "address";

export const PropertiesTitle = (record: TProperties): string => {
  return record.address?.toString() || String(record.id);
};
