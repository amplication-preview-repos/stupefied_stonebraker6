import * as graphql from "@nestjs/graphql";
import { AppointmentsResolverBase } from "./base/appointments.resolver.base";
import { Appointments } from "./base/Appointments";
import { AppointmentsService } from "./appointments.service";

@graphql.Resolver(() => Appointments)
export class AppointmentsResolver extends AppointmentsResolverBase {
  constructor(protected readonly service: AppointmentsService) {
    super(service);
  }
}
