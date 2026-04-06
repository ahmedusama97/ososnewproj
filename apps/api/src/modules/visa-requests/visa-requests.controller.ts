import { Body, Controller, Get, Headers, Inject, Post } from "@nestjs/common";
import { CreateVisaRequestDto, RequestContextDto } from "./visa-requests.dto";
import { VisaRequestsService } from "./visa-requests.service";

@Controller("visa-requests")
export class VisaRequestsController {
  constructor(
    @Inject(VisaRequestsService)
    private readonly visaRequestsService: VisaRequestsService,
  ) {}

  @Get()
  list() {
    return this.visaRequestsService.list();
  }

  @Post()
  create(
    @Body() dto: CreateVisaRequestDto,
    @Headers("user-agent") userAgent?: string,
    @Headers("x-client-channel") clientChannel?: string,
  ) {
    const requestContext: RequestContextDto = {
      userAgent,
      channel: clientChannel,
    };

    return this.visaRequestsService.create(dto, requestContext);
  }
}
