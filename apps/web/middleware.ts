import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_TOKEN_COOKIE = "visaflow_admin_token";
const USER_TOKEN_COOKIE = "visaflow_user_token";

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get(ADMIN_TOKEN_COOKIE)?.value;
  const userToken = request.cookies.get(USER_TOKEN_COOKIE)?.value;
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/admin/login")) {
    if (adminToken) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!adminToken) {
      const loginUrl = new URL("/admin/login", request.url);
      const nextPath = `${pathname}${search}`;
      loginUrl.searchParams.set("next", nextPath);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  if (pathname === "/login" || pathname === "/register") {
    if (userToken) {
      return NextResponse.redirect(new URL("/account", request.url));
    }

    return NextResponse.next();
  }

  if (pathname.startsWith("/account") || pathname.startsWith("/dashboard")) {
    if (userToken) {
      return NextResponse.next();
    }

    const loginUrl = new URL("/admin/login", request.url);
    const nextPath = `${pathname}${search}`;
    loginUrl.pathname = "/login";
    loginUrl.search = "";
    loginUrl.searchParams.set("next", nextPath);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register", "/account/:path*", "/dashboard/:path*"],
};
