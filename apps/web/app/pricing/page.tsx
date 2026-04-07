import Link from "next/link";
import { visaDestinations } from "../../lib/visa-content";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f8] px-5 py-10 text-[#1c1b1b]" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4">
          <Link href="/home" className="text-lg font-black text-[#964900]">VisaFlow</Link>
          <Link href="/apply" className="rounded-full bg-[#964900] px-5 py-2 text-sm font-bold text-white">ابدأ الطلب</Link>
        </nav>

        <section className="mb-8 rounded-[36px] border border-[#dfc1af] bg-white p-6 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#964900]">Pricing</p>
          <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">الأسعار التقديرية</h1>
          <p className="max-w-3xl leading-8 text-[#574235]">
            الأسعار أدناه تقديرية لخدمة مراجعة وتجهيز الملف، ولا تشمل بالضرورة رسوم السفارات أو مراكز التأشيرات أو بوابات الدفع. يتم تأكيد السعر النهائي قبل الدفع.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visaDestinations.map((destination) => (
            <article key={destination.slug} className="rounded-[30px] border border-[#dfc1af] bg-white p-6 shadow-[0_18px_60px_rgba(150,73,0,0.06)]">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8a6b57]">{destination.country}</p>
                  <h2 className="mt-2 text-2xl font-black">{destination.countryAr}</h2>
                  <p className="mt-2 text-sm font-bold text-[#964900]">{destination.visaType}</p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${destination.tone}`}>
                  <span className="material-symbols-outlined">{destination.icon}</span>
                </div>
              </div>
              <div className="mb-5 rounded-2xl bg-[#fbf7f2] p-4">
                <p className="text-sm text-[#574235]">تبدأ من</p>
                <strong className="text-3xl font-black text-[#1c1b1b]">{destination.priceSar} SAR</strong>
                <p className="mt-2 text-sm text-[#574235]">{destination.processingTime}</p>
              </div>
              <p className="mb-5 text-sm leading-7 text-[#574235]">{destination.summary}</p>
              <div className="flex gap-3">
                <Link href={`/visa/${destination.slug}`} className="flex-1 rounded-full border border-[#dfc1af] px-4 py-2 text-center text-sm font-bold text-[#964900]">
                  التفاصيل
                </Link>
                <Link href="/apply" className="flex-1 rounded-full bg-[#964900] px-4 py-2 text-center text-sm font-bold text-white">
                  تقديم
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
