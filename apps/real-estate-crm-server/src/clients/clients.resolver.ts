import * as graphql from "@nestjs/graphql";
import { ClientsResolverBase } from "./base/clients.resolver.base";
import { Clients } from "./base/Clients";
import { ClientsService } from "./clients.service";

@graphql.Resolver(() => Clients)
export class ClientsResolver extends ClientsResolverBase {
  constructor(protected readonly service: ClientsService) {
    super(service);
  }
}
