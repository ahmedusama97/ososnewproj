import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const provider = process.env.PAYMENT_PROVIDER;

  if (!provider) {
    return NextResponse.json({
      mode: "manual_review",
      referenceCode: payload.referenceCode ?? null,
      message:
        "Online payment is not configured yet. The operations team should confirm the final price before collecting payment.",
    });
  }

  return NextResponse.json(
    {
      message:
        "Payment provider credentials are configured, but checkout integration must be implemented for the selected provider.",
      provider,
    },
    { status: 501 },
  );
}
