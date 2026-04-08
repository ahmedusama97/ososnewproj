import Link from "next/link";
import { legalLinks, visaDestinations } from "../../lib/visa-content";

type LandingPageProps = {
  locale: "ar" | "en";
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBwzB6fSublCzqGD-b2pJYv2XelI5K3U6berbzsiNewQeT5rf7suMWKgltg0sMHPsKshcD0_pMYppaGUPsx5Um9-DuGTb-f9Ni8fr8B6OR72CZp1GNiHZvefi3uMs2HimKbxtWQby33H99_0AxI_bK0932TO8J7Bw7xkoN_lYVkXWQLOIzwHrwJBuKNA-P7JQlyTd2PAMQH6B1Xknk4D1GWaASBFamHj2yrwGiOuPTYuRHB2OkBdP791VziS-HOw8C_TpmWy_V5wuI";

const content = {
  ar: {
    dir: "rtl" as const,
    lang: "ar",
    fontFamily: '"Cairo", sans-serif',
    switchHref: "/en",
    switchLabel: "English",
    nav: [
      { label: "الامتثال", href: "/compliance" },
      { label: "التتبع", href: "/track" },
      { label: "الأسعار", href: "/pricing" },
    ],
    loginLabel: "دخول المستخدم",
    registerLabel: "إنشاء حساب",
    badge: "نظام استلام التأشيرات من الجيل القادم",
    title: "أمّن تأشيرتك العالمية في دقائق، وليس أسابيع.",
    description:
      "منصة VisaFlow تنظّم رحلة التقديم كاملة من اختيار الوجهة وحتى مراجعة الملفات وتتبع الحالة، مع لوحة إدارة قوية وحساب مستخدم يربط كل طلباتك في مكان واحد.",
    primaryCta: "ابدأ الطلب",
    secondaryCta: "تتبع الطلب",
    overlayTitle: "تدفق بيانات مشفر",
    overlayText: "بنية تحتية سحابية محمية وربط آمن للمستندات والطلبات.",
    popularTitle: "الوجهات الشائعة",
    popularSubtitle: "قنوات استلام مباشرة لأهم مسارات السفر العالمية",
    viewAll: "عرض كل الوجهات",
    pricePrefix: "يبدأ من",
    flowTitle: "تدفق سلس وواضح",
    flowSubtitle:
      "المنصة مصممة بحيث يعرف العميل والعمليات كل خطوة من أول رفع المستندات وحتى إصدار القرار النهائي.",
    steps: [
      {
        icon: "public",
        title: "اختر وجهتك",
        description:
          "اختر من بين دول متعددة، وستعرض لك المنصة المتطلبات المناسبة حسب الجنسية ونوع التأشيرة.",
      },
      {
        icon: "cloud_upload",
        title: "ارفع المستندات",
        description:
          "ارفع الجواز والصورة الشخصية والملفات المطلوبة لكل متقدم ضمن نفس الطلب الجماعي أو الفردي.",
      },
      {
        icon: "shield_lock",
        title: "تابع حالتك",
        description:
          "من الحساب الشخصي ولوحة التتبع يمكنك معرفة آخر تحديثات الحالة ومراجعة سجل الملاحظات.",
      },
    ],
    trustTitle: "لماذا VisaFlow؟",
    trustCards: [
      {
        title: "حساب عميل متكامل",
        text: "تسجيل، دخول، تتبع الطلبات، تغيير كلمة المرور، وحذف الحساب عند الحاجة.",
      },
      {
        title: "لوحة مراجعة تشغيلية",
        text: "إدارة الطلبات، الملاحظات، حالة المعالجة، والاطلاع على المستندات من نفس الواجهة.",
      },
      {
        title: "تقديم فردي أو جماعي",
        text: "دعم حتى 100 متقدم داخل نفس الطلب مع فصل واضح لبيانات كل شخص.",
      },
    ],
    finalTitle: "جاهز لبدء رحلتك؟",
    finalText:
      "ابدأ من النسخة العربية الآن، أو انتقل إلى النسخة الإنجليزية حسب تفضيلك، وسنحتفظ بطلباتك داخل حسابك.",
    footerTagline: "منصة مستقلة لإدارة طلبات التأشيرات وليست جهة حكومية.",
    copyright: "© 2026 VisaFlow. جميع الحقوق محفوظة.",
  },
  en: {
    dir: "ltr" as const,
    lang: "en",
    fontFamily: '"Inter", sans-serif',
    switchHref: "/home",
    switchLabel: "العربية",
    nav: [
      { label: "Compliance", href: "/compliance" },
      { label: "Track", href: "/track" },
      { label: "Pricing", href: "/pricing" },
    ],
    loginLabel: "User Login",
    registerLabel: "Create Account",
    badge: "Next-Gen Visa Intake",
    title: "Secure your global visa in minutes, not weeks.",
    description:
      "VisaFlow centralizes visa application intake, document upload, request tracking, and operations review in one secure experience for applicants and back-office teams.",
    primaryCta: "Start Application",
    secondaryCta: "Track Request",
    overlayTitle: "Encrypted Data Flow",
    overlayText: "Protected cloud infrastructure for requests, identities, and document storage.",
    popularTitle: "Popular Destinations",
    popularSubtitle: "Direct intake channels for high-demand travel corridors",
    viewAll: "View all destinations",
    pricePrefix: "Starting from",
    flowTitle: "The Seamless Flow",
    flowSubtitle:
      "The experience is designed so applicants and operators always know what comes next, from upload to final decision.",
    steps: [
      {
        icon: "public",
        title: "Select destination",
        description:
          "Choose a destination and immediately get the right visa requirements for the traveler profile.",
      },
      {
        icon: "cloud_upload",
        title: "Upload documents",
        description:
          "Upload passports, photos, and supporting files for one traveler or an entire group request.",
      },
      {
        icon: "monitoring",
        title: "Track progress",
        description:
          "Use the customer dashboard to monitor request history, notes, and the latest visa status updates.",
      },
    ],
    trustTitle: "Built for modern visa operations",
    trustCards: [
      {
        title: "Full customer account",
        text: "Register, log in, track your requests, change your password, and delete your account.",
      },
      {
        title: "Operational review workspace",
        text: "Process requests, update statuses, inspect files, and manage countries from one admin panel.",
      },
      {
        title: "Single or group applications",
        text: "Support up to 100 applicants in one request with structured document handling per traveler.",
      },
    ],
    finalTitle: "Ready to launch your next visa request?",
    finalText:
      "Start in English or switch back to Arabic anytime. Your requests stay connected to your account and dashboard.",
    footerTagline: "Independent visa intake software. Final visa decisions belong to embassies and government authorities.",
    copyright: "© 2026 VisaFlow. All rights reserved.",
  },
} satisfies Record<string, unknown>;

function formatPrice(priceSar: number, locale: "ar" | "en") {
  const formatter = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0,
  });

  return formatter.format(priceSar);
}

export function LandingPage({ locale }: LandingPageProps) {
  const dictionary = content[locale];
  const destinations = visaDestinations.slice(0, 4);

  return (
    <div
      dir={dictionary.dir}
      lang={dictionary.lang}
      className="min-h-screen bg-[#f9f9fb] text-[#1a1c1d]"
      style={{ fontFamily: dictionary.fontFamily }}
    >
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
          <Link href={locale === "ar" ? "/home" : "/en"} className="text-2xl font-black tracking-tight text-[#a83900]">
            VisaFlow
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold tracking-tight md:flex">
            {dictionary.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[#5f5e5e] transition hover:text-[#a83900]">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={dictionary.switchHref}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5f5e5e] transition hover:text-[#a83900]"
            >
              <span className="material-symbols-outlined text-xl">language</span>
              {dictionary.switchLabel}
            </Link>
            <Link href="/login" className="hidden text-sm font-semibold text-[#5f5e5e] transition hover:text-[#a83900] sm:inline-flex">
              {dictionary.loginLabel}
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-[#ff6b2b] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(168,57,0,0.18)] transition hover:-translate-y-0.5"
            >
              {dictionary.registerLabel}
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="mx-auto max-w-7xl overflow-hidden px-6 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#a83900]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#a83900]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#a83900]" />
                {dictionary.badge}
              </div>
              <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                {dictionary.title}
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-8 text-[#5f5e5e]">
                {dictionary.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#a83900] to-[#ff6b2b] px-8 py-4 text-lg font-bold text-white shadow-[0_18px_40px_rgba(168,57,0,0.18)] transition hover:scale-[1.02]"
                >
                  {dictionary.primaryCta}
                </Link>
                <Link
                  href="/track"
                  className="inline-flex items-center justify-center rounded-xl bg-[#e8e8ea] px-8 py-4 text-lg font-bold text-[#a83900] transition hover:bg-[#dfe1e4]"
                >
                  {dictionary.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-20 -right-12 h-72 w-72 rounded-full bg-[#a83900]/8 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(26,28,29,0.18)]">
                <img
                  src={heroImage}
                  alt="Modern visa application desk"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-6 inset-x-6 rounded-[1.5rem] border border-white/25 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b2b] text-white">
                      <span className="material-symbols-outlined">verified_user</span>
                    </div>
                    <div>
                      <p className="font-bold text-white">{dictionary.overlayTitle}</p>
                      <p className="text-sm text-white/80">{dictionary.overlayText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f3f5] py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-extrabold tracking-tight">{dictionary.popularTitle}</h2>
                <p className="text-[#5f5e5e]">{dictionary.popularSubtitle}</p>
              </div>
              <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-bold text-[#a83900]">
                {dictionary.viewAll}
                <span className={`material-symbols-outlined ${locale === "ar" ? "rotate-180" : ""}`}>arrow_forward</span>
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((item) => (
                <Link
                  key={item.slug}
                  href={`/visa/${item.slug}`}
                  className="group rounded-[1.5rem] bg-white p-6 shadow-[0_18px_40px_rgba(26,28,29,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(26,28,29,0.08)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.tone}`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <span className="rounded-full bg-[#ffefe8] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#a83900]">
                      {locale === "ar" ? "مميز" : "Featured"}
                    </span>
                  </div>
                  <h3 className="mb-1 text-xl font-bold">{locale === "ar" ? item.countryAr : item.country}</h3>
                  <p className="mb-4 text-sm text-[#5f5e5e]">{item.visaType}</p>
                  <div className="flex items-center justify-between border-t border-dashed border-[#dcc1b1] pt-4">
                    <span className="text-sm text-[#564337]">{dictionary.pricePrefix}</span>
                    <span className="text-lg font-extrabold text-[#a83900]">{formatPrice(item.priceSar, locale)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight">{dictionary.flowTitle}</h2>
            <p className="text-lg leading-8 text-[#5f5e5e]">{dictionary.flowSubtitle}</p>
          </div>
          <div className="relative grid gap-12 md:grid-cols-3">
            <div className="pointer-events-none absolute top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-[#dcc1b1] to-transparent md:block" />
            {dictionary.steps.map((step) => (
              <div key={step.title} className="relative z-10 text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_16px_32px_rgba(26,28,29,0.08)] ring-4 ring-[#f9f9fb]">
                  <span className="material-symbols-outlined text-3xl text-[#a83900]">{step.icon}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
                <p className="leading-8 text-[#5f5e5e]">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold tracking-tight">{dictionary.trustTitle}</h2>
              <p className="max-w-2xl text-[#5f5e5e]">
                {locale === "ar"
                  ? "التجربة مصممة لتخدم العميل وفريق التشغيل معًا، من الواجهة العامة وحتى الحساب الشخصي ولوحة الإدارة."
                  : "The platform is designed for both applicants and operations teams, from the public storefront to the private review workspace."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {dictionary.trustCards.map((card) => (
                <div key={card.title} className="rounded-[1.75rem] border border-[#e2e2e4] bg-[#f9f9fb] p-6">
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-[#a83900]">
                    {locale === "ar" ? "ميزة" : "Benefit"}
                  </p>
                  <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                  <p className="leading-8 text-[#5f5e5e]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#a83900] to-[#ff6b2b] p-8 text-white md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-white/80">
                  VisaFlow
                </p>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight">{dictionary.finalTitle}</h2>
                <p className="leading-8 text-white/85">{dictionary.finalText}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="rounded-xl bg-white px-6 py-4 text-center font-bold text-[#a83900]">
                  {dictionary.registerLabel}
                </Link>
                <Link href="/apply" className="rounded-xl border border-white/35 px-6 py-4 text-center font-bold text-white">
                  {dictionary.primaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f8f8fa]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <div className="mb-3 text-xl font-black text-[#a83900]">VisaFlow</div>
            <p className="max-w-xl text-sm leading-7 text-[#5f5e5e]">{dictionary.footerTagline}</p>
            <p className="mt-3 text-sm text-[#5f5e5e]">{dictionary.copyright}</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-[#5f5e5e]">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[#a83900]">
                {locale === "ar"
                  ? {
                      "/privacy": "سياسة الخصوصية",
                      "/terms": "شروط الخدمة",
                      "/refund": "سياسة الاسترجاع",
                      "/compliance": "الامتثال",
                    }[link.href]
                  : link.label}
              </Link>
            ))}
            <Link href="/contact" className="transition hover:text-[#a83900]">
              {locale === "ar" ? "الدعم" : "Support"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
