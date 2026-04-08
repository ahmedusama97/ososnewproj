import type { Metadata } from "next";
import { LandingPage } from "../../components/marketing/landing-page";

export const metadata: Metadata = {
  title: "VisaFlow English",
  description:
    "English marketing home for VisaFlow with account access, visa tracking, and streamlined application intake.",
};

export default function EnglishHomePage() {
  return <LandingPage locale="en" />;
}
