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
    <main className="min-h-screen bg-[#fcf9f8] px-5 py-10 text-[#1c1b1b]" dir="rtl">
      <div className="mx-auto max-w-6xl">
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

        <section className="mb-8 rounded-[36px] border border-[#dfc1af] bg-white p-6 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#964900]">
            Flights
          </p>
          <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
            حجز الطيران
          </h1>
          <p className="max-w-3xl leading-8 text-[#574235]">
            ابحث عن رحلات الطيران المناسبة لرحلتك من خلال محرك البحث المرتبط
            بترافيل باي أوتس. نتائج الطيران والحجز يتم تشغيلها من مزود خارجي.
          </p>
        </section>

        <TravelpayoutsWidget />
      </div>
    </main>
  );
}
