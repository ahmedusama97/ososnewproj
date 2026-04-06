import { Controller, Get, Inject } from "@nestjs/common";
import { CountriesService } from "./countries.service";

@Controller("countries")
export class CountriesController {
  constructor(
    @Inject(CountriesService)
    private readonly countriesService: CountriesService,
  ) {}

  @Get()
  list() {
    return this.countriesService.list();
  }
}
