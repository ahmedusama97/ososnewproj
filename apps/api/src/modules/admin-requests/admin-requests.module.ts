import { Module } from "@nestjs/common";
import { AdminRequestsController } from "./admin-requests.controller";
import { VisaRequestsModule } from "../visa-requests/visa-requests.module";
import { CountriesModule } from "../countries/countries.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [VisaRequestsModule, CountriesModule, AuthModule],
  controllers: [AdminRequestsController],
})
export class AdminRequestsModule {}
