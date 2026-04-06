import { Module } from "@nestjs/common";
import { VisaRequestsController } from "./visa-requests.controller";
import { VisaRequestsService } from "./visa-requests.service";

@Module({
  controllers: [VisaRequestsController],
  providers: [VisaRequestsService],
  exports: [VisaRequestsService],
})
export class VisaRequestsModule {}
