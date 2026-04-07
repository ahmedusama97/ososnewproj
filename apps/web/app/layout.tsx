import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VisaFlow | Visa Request Platform",
    template: "%s | VisaFlow",
  },
  description: "Secure visa request intake, document collection, and admin review platform.",
  manifest: "/manifest.webmanifest",
  applicationName: "VisaFlow",
  appleWebApp: {
    capable: true,
    title: "VisaFlow",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "VisaFlow",
    description: "Secure visa request intake and admin review platform.",
    siteName: "VisaFlow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
