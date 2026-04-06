import { Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

export class RequestContextDto {
  @IsOptional()
  @IsString()
  channel?: string;

  @IsOptional()
  @IsString()
  userAgent?: string;

  @IsOptional()
  @IsString()
  deviceType?: string;

  @IsOptional()
  @IsString()
  browser?: string;

  @IsOptional()
  @IsString()
  operatingSystem?: string;
}

export class VisaApplicantDto {
  @IsString()
  fullName!: string;

  @IsString()
  nationality!: string;

  @IsString()
  passportNumber!: string;

  @IsString()
  issuingCountry!: string;

  @IsString()
  passportIssueDate!: string;

  @IsString()
  passportExpiryDate!: string;

  @IsString()
  passportDocumentName!: string;

  @IsString()
  personalPhotoName!: string;
}

export class CreateVisaRequestDto {
  @IsString()
  fullName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  phone!: string;

  @IsString()
  passportNumber!: string;

  @IsString()
  country!: string;

  @IsString()
  visaType!: string;

  @IsOptional()
  @IsString()
  issuingCountry?: string;

  @IsOptional()
  @IsString()
  passportExpiryDate?: string;

  @IsOptional()
  @IsString()
  passportDocumentName?: string;

  @IsOptional()
  @IsString()
  personalPhotoName?: string;

  @IsOptional()
  @IsString()
  travelDate?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @ValidateNested({ each: true })
  @Type(() => VisaApplicantDto)
  applicants!: VisaApplicantDto[];

  @IsOptional()
  requestContext?: RequestContextDto;

  @IsIn(["draft", "submitted", "in_review", "issued", "rejected"])
  status!: string;
}
