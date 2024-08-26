import { Module } from "@nestjs/common";
import { PropertiesModuleBase } from "./base/properties.module.base";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";
import { PropertiesResolver } from "./properties.resolver";

@Module({
  imports: [PropertiesModuleBase],
  controllers: [PropertiesController],
  providers: [PropertiesService, PropertiesResolver],
  exports: [PropertiesService],
})
export class PropertiesModule {}
