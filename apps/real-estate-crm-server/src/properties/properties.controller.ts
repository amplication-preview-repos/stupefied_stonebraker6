import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PropertiesService } from "./properties.service";
import { PropertiesControllerBase } from "./base/properties.controller.base";

@swagger.ApiTags("properties")
@common.Controller("properties")
export class PropertiesController extends PropertiesControllerBase {
  constructor(protected readonly service: PropertiesService) {
    super(service);
  }
}
