"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { apiUrl } from "../lib/api";

type PublicHeaderProps = {
  locale?: "ar" | "en";
};

type HeaderUser = {
  fullName?: string | null;
  email?: string | null;
};

const labels = {
  ar: {
    home: "الرئيسية",
    pricing: "الأسعار",
    flights: "طيران",
    login: "دخول المستخدم",
    register: "إنشاء حساب",
    account: "حسابي",
    switchHref: "/en",
    switchLabel: "English",
  },
  en: {
    home: "Home",
    pricing: "Pricing",
    flights: "Flights",
    login: "User Login",
    register: "Create Account",
    account: "My Account",
    switchHref: "/home",
    switchLabel: "العربية",
  },
};

export function PublicHeader({ locale = "ar" }: PublicHeaderProps) {
  const copy = labels[locale];
  const [user, setUser] = useState<HeaderUser | null>(null);
  const [sessionResolved, setSessionResolved] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadSession() {
      try {
        const response = await fetch(apiUrl("/api/auth/session"), {
          cache: "no-store",
        });

        if (!response.ok) {
          if (!cancelled) {
            setUser(null);
          }
          return;
        }

        const payload = (await response.json()) as { user?: HeaderUser | null };
        if (!cancelled) {
          setUser(payload.user ?? null);
        }
      } catch {
        if (!cancelled) {
          setUser(null);
        }
      } finally {
        if (!cancelled) {
          setSessionResolved(true);
        }
      }
    }

    void loadSession();

    return () => {
      cancelled = true;
    };
  }, []);

  const accountLabel =
    user?.fullName?.trim() || user?.email?.trim() || copy.account;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 md:flex-nowrap md:px-8">
        <Link
          href={locale === "ar" ? "/home" : "/en"}
          className="shrink-0 text-2xl font-black tracking-tight text-[#a83900]"
        >
          VisaFlow
        </Link>

        <nav className="order-3 flex w-full justify-center gap-5 overflow-x-auto border-t border-black/5 pt-3 text-sm font-semibold tracking-tight md:order-none md:w-auto md:gap-8 md:border-0 md:pt-0">
          <Link
            className="text-[#5f5e5e] transition hover:text-[#a83900]"
            href={locale === "ar" ? "/home" : "/en"}
          >
            {copy.home}
          </Link>
          <Link
            className="text-[#5f5e5e] transition hover:text-[#a83900]"
            href="/pricing"
          >
            {copy.pricing}
          </Link>
          <Link
            className="text-[#5f5e5e] transition hover:text-[#a83900]"
            href="/flights"
          >
            {copy.flights}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={copy.switchHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5f5e5e] transition hover:text-[#a83900] sm:inline-flex"
          >
            <span className="material-symbols-outlined text-xl">language</span>
            {copy.switchLabel}
          </Link>
          <Link
            href="/login"
            className={`text-sm font-semibold text-[#5f5e5e] transition hover:text-[#a83900] ${
              user || !sessionResolved ? "hidden" : "inline-flex"
            }`}
          >
            {copy.login}
          </Link>
          {!sessionResolved ? (
            <span className="h-10 w-24 animate-pulse rounded-xl bg-[#f2ebe6]" />
          ) : user ? (
            <Link
              href="/account"
              className="inline-flex max-w-[160px] items-center gap-2 truncate rounded-xl bg-[#fff3eb] px-4 py-2.5 text-sm font-bold text-[#a83900] shadow-[0_12px_32px_rgba(168,57,0,0.08)] transition hover:-translate-y-0.5 hover:bg-[#ffe8d8] md:max-w-[220px] md:px-5"
              title={accountLabel}
            >
              <span className="material-symbols-outlined text-lg">account_circle</span>
              <span className="truncate">{accountLabel}</span>
            </Link>
          ) : (
            <Link
              href="/register"
              className="rounded-xl bg-[#ff6b2b] px-4 py-2.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(168,57,0,0.18)] transition hover:-translate-y-0.5 md:px-5"
            >
              {copy.register}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
