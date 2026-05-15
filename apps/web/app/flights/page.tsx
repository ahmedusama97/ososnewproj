import type { Metadata } from "next";
import { PublicHeader } from "../../components/public-header";
import { TravelpayoutsWidget } from "./travelpayouts-widget";

export const metadata: Metadata = {
  title: "Flights",
  description:
    "Search flight options through the VisaFlow flight search partner widget.",
};

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b]" dir="rtl">
      <PublicHeader locale="ar" />
      <div className="mx-auto max-w-7xl px-5 py-8">
        <TravelpayoutsWidget />
      </div>
    </main>
  );
}
