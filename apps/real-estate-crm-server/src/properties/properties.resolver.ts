import * as graphql from "@nestjs/graphql";
import { PropertiesResolverBase } from "./base/properties.resolver.base";
import { Properties } from "./base/Properties";
import { PropertiesService } from "./properties.service";

@graphql.Resolver(() => Properties)
export class PropertiesResolver extends PropertiesResolverBase {
  constructor(protected readonly service: PropertiesService) {
    super(service);
  }
}
