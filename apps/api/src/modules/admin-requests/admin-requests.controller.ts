import {
  Body,
  Controller,
  Get,
  Headers,
  Inject,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { VisaRequestsService } from "../visa-requests/visa-requests.service";
import { CountriesService } from "../countries/countries.service";
import { AuthService } from "../auth/auth.service";
import { IsIn, IsOptional, IsString } from "class-validator";

class UpdateStatusDto {
  @IsIn(["draft", "submitted", "in_review", "issued", "rejected"])
  status!: string;

  @IsString()
  note!: string;
}

class CreateCountryDto {
  @IsOptional()
  @IsString()
  code?: string;

  @IsString()
  nameAr!: string;

  @IsString()
  nameEn!: string;

  @IsString()
  flag!: string;

  @IsString()
  visaType!: string;

  @IsOptional()
  @IsString()
  accent?: string;
}

@Controller("admin")
export class AdminRequestsController {
  constructor(
    @Inject(VisaRequestsService)
    private readonly visaRequestsService: VisaRequestsService,
    @Inject(CountriesService)
    private readonly countriesService: CountriesService,
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @Get("requests")
  listRequests(@Headers("authorization") authorization?: string) {
    this.authService.assertAuthorized(authorization);
    return this.visaRequestsService.list();
  }

  @Patch("requests/:referenceCode/status")
  updateStatus(
    @Param("referenceCode") referenceCode: string,
    @Body() dto: UpdateStatusDto,
    @Headers("authorization") authorization?: string,
  ) {
    this.authService.assertAuthorized(authorization);
    const updated = this.visaRequestsService.updateStatus(
      referenceCode,
      dto.status,
      dto.note,
    );

    if (!updated) {
      throw new NotFoundException("Request not found.");
    }

    return updated;
  }

  @Get("countries")
  listCountries(@Headers("authorization") authorization?: string) {
    this.authService.assertAuthorized(authorization);
    return this.countriesService.list();
  }

  @Post("countries")
  createCountry(
    @Body() dto: CreateCountryDto,
    @Headers("authorization") authorization?: string,
  ) {
    this.authService.assertAuthorized(authorization);
    return this.countriesService.create(dto);
  }
}
