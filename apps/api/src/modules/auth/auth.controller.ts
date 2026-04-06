import { Body, Controller, Headers, Inject, Patch, Post } from "@nestjs/common";
import { IsString } from "class-validator";
import { AuthService } from "./auth.service";

class LoginDto {
  @IsString()
  username!: string;

  @IsString()
  password!: string;
}

class ChangePasswordDto {
  @IsString()
  currentPassword!: string;

  @IsString()
  newPassword!: string;
}

@Controller("admin/auth")
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @Post("login")
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.username, dto.password);
  }

  @Patch("password")
  changePassword(
    @Body() dto: ChangePasswordDto,
    @Headers("authorization") authorization?: string,
  ) {
    return this.authService.changePassword(
      authorization,
      dto.currentPassword,
      dto.newPassword,
    );
  }
}
