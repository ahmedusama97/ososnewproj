import Link from "next/link";
import { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#fcf9f8] px-5 py-10 text-[#1c1b1b] md:px-10" dir="rtl">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4">
          <Link href="/home" className="text-lg font-black text-[#964900]">
            VisaFlow
          </Link>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-[#574235]">
            <Link href="/apply" className="hover:text-[#964900]">ابدأ الطلب</Link>
            <Link href="/track" className="hover:text-[#964900]">تتبع الطلب</Link>
            <Link href="/pricing" className="hover:text-[#964900]">الأسعار</Link>
          </div>
        </nav>

        <section className="rounded-[36px] border border-[#dfc1af] bg-white p-6 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
          <div className="mb-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#964900]">{eyebrow}</p>
            <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">{title}</h1>
            <p className="max-w-3xl leading-8 text-[#574235]">{description}</p>
          </div>

          <div className="space-y-6 text-[#3f332d]">{children}</div>
        </section>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-[#574235]">
          هذه الصفحات معلومات تشغيلية أولية وليست استشارة قانونية. يجب مراجعتها من مستشار قانوني قبل إطلاق تجاري كامل.
        </p>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] bg-[#fbf7f2] p-5">
      <h2 className="mb-3 text-xl font-black text-[#1c1b1b]">{title}</h2>
      <div className="space-y-3 leading-8">{children}</div>
    </section>
  );
}
