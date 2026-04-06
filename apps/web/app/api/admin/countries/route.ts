import { NextRequest, NextResponse } from "next/server";
import { assertAdminToken } from "../../../../lib/server/auth-store";
import { createCountry, listCountries } from "../../../../lib/server/countries-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!assertAdminToken(request.headers.get("authorization"))) {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  return NextResponse.json(listCountries());
}

export async function POST(request: NextRequest) {
  if (!assertAdminToken(request.headers.get("authorization"))) {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  const payload = await request.json();
  if (!payload.nameAr || !payload.nameEn || !payload.flag || !payload.visaType) {
    return NextResponse.json(
      { message: "Invalid country payload." },
      { status: 400 },
    );
  }

  const country = createCountry({
    code: payload.code ? String(payload.code) : undefined,
    nameAr: String(payload.nameAr),
    nameEn: String(payload.nameEn),
    flag: String(payload.flag),
    visaType: String(payload.visaType),
    accent: payload.accent ? String(payload.accent) : undefined,
  });

  return NextResponse.json(country, { status: 201 });
}
