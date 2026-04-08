/*
import Link from "next/link";
import { legalLinks, visaDestinations } from "../../lib/visa-content";

const popularDestinations = visaDestinations.slice(0, 4);

const footerGroups = [
  {
    title: "Quick Links",
    links: [
      { label: "Visa Requirements", href: "/pricing" },
      { label: "Track Application", href: "/track" },
      { label: "Start Application", href: "/apply" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: legalLinks,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b]">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,128,0,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(18,108,57,0.07),transparent_26%),radial-gradient(circle_at_top_right,rgba(27,96,162,0.06),transparent_22%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(120deg,transparent_0%,rgba(28,27,27,0.22)_50%,transparent_100%)]" />

      <header className="fixed top-0 z-50 w-full border-b border-[#dfc1af]/40 bg-[#fcf9f8]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between px-6 md:px-8">
          <Link href="/home" className="text-xl font-bold tracking-tight">VisaFlow</Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link className="text-sm font-medium tracking-tight text-[#574235] transition hover:text-[#1c1b1b]" href="/pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium tracking-tight text-[#574235] transition hover:text-[#1c1b1b]" href="/track">
              Track
            </Link>
            <Link className="text-sm font-medium tracking-tight text-[#574235] transition hover:text-[#1c1b1b]" href="/compliance">
              Compliance
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#964900]/5 blur-3xl" />
          <div className="absolute -bottom-48 -right-48 h-[32rem] w-[32rem] rounded-full bg-[#126c39]/5 blur-3xl" />
        </div>

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
          <div className="mb-8 rounded-full border border-[#dfc1af]/60 bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#964900]">
            Independent visa intake platform
          </div>
          <h1 className="mb-6 max-w-3xl text-center text-4xl font-black tracking-tight md:text-6xl">
            Visa requests, documents, and admin review in one secure flow.
          </h1>
          <p className="mb-12 max-w-2xl text-center leading-relaxed text-[#574235]">
            VisaFlow helps applicants submit organized visa files and lets operations teams review requests from a protected dashboard. We are not a government authority and cannot guarantee visa decisions.
          </p>

          <div className="mb-16 flex flex-col gap-4 transition-transform duration-500 active:scale-95 sm:flex-row">
            <Link
              href="/apply"
              className="group relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#964900] to-[#ff8000] px-12 py-6 text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <span className="z-10 text-lg font-bold tracking-tight">Start Application</span>
              <span className="material-symbols-outlined z-10 ml-3 transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="/track"
              className="flex items-center justify-center rounded-2xl border border-[#dfc1af] bg-white/85 px-12 py-6 text-lg font-bold text-[#964900] transition hover:bg-[#fff7f0]"
            >
              Track request
            </Link>
          </div>

          <div className="w-full text-center">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#574235]">
              Popular Visa Destinations
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {popularDestinations.map((item) => (
                <Link
                  key={item.slug}
                  href={`/visa/${item.slug}`}
                  className="group flex flex-col items-center rounded-[24px] border border-[#dfc1af]/30 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#eae7e7]"
                >
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${item.tone} transition-transform group-hover:scale-110`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="font-bold text-[#1c1b1b]">{item.country}</span>
                  <span className="mt-1 text-xs text-[#574235]">{item.visaType}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/pricing" className="inline-flex items-center gap-1 text-sm font-semibold text-[#964900] hover:underline">
                View pricing and destinations
                <span className="material-symbols-outlined text-sm">keyboard_arrow_right</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto w-full border-t border-[#dfc1af]/30 bg-white">
        <div className="mx-auto max-w-screen-2xl px-8 py-12">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <div className="mb-4 text-lg font-bold tracking-tight">VisaFlow</div>
              <p className="text-sm leading-relaxed text-[#574235]">
                Independent intake and review software for visa service workflows. Final visa decisions are made only by embassies, consulates, or authorized government bodies.
              </p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-6 font-bold text-[#1c1b1b]">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link className="text-sm text-[#574235] transition-colors hover:text-[#964900]" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="mb-6 font-bold text-[#1c1b1b]">Connect</h4>
              <div className="mb-6 flex gap-4">
                {[
                  { icon: "chat", href: "/contact" },
                  { icon: "mail", href: "/contact" },
                  { icon: "policy", href: "/compliance" },
                ].map((item) => (
                  <Link
                    key={item.icon}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0eded] text-[#574235] transition-all hover:bg-[#964900] hover:text-white"
                    href={item.href}
                  >
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </Link>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-[#574235]">
                Service availability, pricing, and document requirements may change by destination and applicant profile.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#dfc1af]/20 pt-8 text-center md:flex-row">
            <p className="text-xs text-[#574235]">© 2026 VisaFlow. All rights reserved.</p>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#574235]">
              Secure Intake And Review
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
*/

import type { Metadata } from "next";
import { LandingPage } from "../../components/marketing/landing-page";

export const metadata: Metadata = {
  title: "VisaFlow العربية",
  description:
    "منصة عربية لتقديم طلبات التأشيرات ورفع المستندات وتتبع الحالة من حساب المستخدم.",
};

export default function HomePage() {
  return <LandingPage locale="ar" />;
}
