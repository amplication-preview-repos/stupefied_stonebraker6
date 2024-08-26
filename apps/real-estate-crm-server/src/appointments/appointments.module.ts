import { Module } from "@nestjs/common";
import { AppointmentsModuleBase } from "./base/appointments.module.base";
import { AppointmentsService } from "./appointments.service";
import { AppointmentsController } from "./appointments.controller";
import { AppointmentsResolver } from "./appointments.resolver";

@Module({
  imports: [AppointmentsModuleBase],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentsResolver],
  exports: [AppointmentsService],
})
export class AppointmentsModule {}
