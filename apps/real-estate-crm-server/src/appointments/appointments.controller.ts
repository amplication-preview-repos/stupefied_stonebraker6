import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentsService } from "./appointments.service";
import { AppointmentsControllerBase } from "./base/appointments.controller.base";

@swagger.ApiTags("appointments")
@common.Controller("appointments")
export class AppointmentsController extends AppointmentsControllerBase {
  constructor(protected readonly service: AppointmentsService) {
    super(service);
  }
}
