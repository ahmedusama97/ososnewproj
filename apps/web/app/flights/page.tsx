import type { Metadata } from "next";
import Link from "next/link";
import { TravelpayoutsWidget } from "./travelpayouts-widget";

export const metadata: Metadata = {
  title: "Flights",
  description:
    "Search flight options through the VisaFlow flight search partner widget.",
};

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f8] px-5 py-8 text-[#1c1b1b]" dir="rtl">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4">
          <Link href="/home" className="text-lg font-black text-[#964900]">
            VisaFlow
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/track"
              className="rounded-full border border-[#dfc1af] px-5 py-2 text-sm font-bold text-[#964900]"
            >
              التتبع
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-[#dfc1af] px-5 py-2 text-sm font-bold text-[#964900]"
            >
              الأسعار
            </Link>
            <Link
              href="/apply"
              className="rounded-full bg-[#964900] px-5 py-2 text-sm font-bold text-white"
            >
              ابدأ الطلب
            </Link>
          </div>
        </nav>

        <TravelpayoutsWidget />
      </div>
    </main>
  );
}
