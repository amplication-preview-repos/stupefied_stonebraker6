import { Module } from "@nestjs/common";
import { ClientsModuleBase } from "./base/clients.module.base";
import { ClientsService } from "./clients.service";
import { ClientsController } from "./clients.controller";
import { ClientsResolver } from "./clients.resolver";

@Module({
  imports: [ClientsModuleBase],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsResolver],
  exports: [ClientsService],
})
export class ClientsModule {}
