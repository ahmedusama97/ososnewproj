import { Module } from "@nestjs/common";
import { VisaRequestsModule } from "./visa-requests/visa-requests.module";
import { AdminRequestsModule } from "./admin-requests/admin-requests.module";
import { CountriesModule } from "./countries/countries.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [VisaRequestsModule, AdminRequestsModule, CountriesModule, AuthModule],
})
export class AppModule {}
