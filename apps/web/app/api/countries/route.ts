import { NextResponse } from "next/server";
import { listCountries } from "../../../lib/server/countries-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(listCountries());
}
