import type { Metadata } from "next";
import Link from "next/link";
import { getVisaDestination, visaDestinations } from "../../../lib/visa-content";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return visaDestinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getVisaDestination(slug);

  if (!destination) {
    return {};
  }

  return {
    title: `${destination.country} Visa Requirements | VisaFlow`,
    description: destination.summary,
    alternates: {
      canonical: `/visa/${destination.slug}`,
    },
  };
}

export default async function VisaDestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getVisaDestination(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fcf9f8] px-5 py-10 text-[#1c1b1b]" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4">
          <Link href="/home" className="text-lg font-black text-[#964900]">VisaFlow</Link>
          <div className="flex gap-3 text-sm font-bold text-[#574235]">
            <Link href="/pricing" className="hover:text-[#964900]">الأسعار</Link>
            <Link href="/track" className="hover:text-[#964900]">تتبع</Link>
          </div>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[36px] border border-[#dfc1af] bg-white p-6 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
            <div className="mb-6 flex items-start justify-between gap-5">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#964900]">{destination.country}</p>
                <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
                  متطلبات تأشيرة {destination.countryAr}
                </h1>
                <p className="leading-8 text-[#574235]">{destination.summary}</p>
              </div>
              <div className={`hidden h-16 w-16 items-center justify-center rounded-full ${destination.tone} md:flex`}>
                <span className="material-symbols-outlined text-3xl">{destination.icon}</span>
              </div>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <InfoCard label="نوع التأشيرة" value={destination.visaType} />
              <InfoCard label="مدة المعالجة" value={destination.processingTime} />
              <InfoCard label="تبدأ من" value={`${destination.priceSar} SAR`} />
            </div>

            <h2 className="mb-4 text-2xl font-black">المستندات الأساسية</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {destination.requirements.map((requirement) => (
                <li key={requirement} className="flex items-center gap-3 rounded-2xl bg-[#fbf7f2] p-4">
                  <span className="material-symbols-outlined text-[#126c39]">check_circle</span>
                  <span className="font-bold text-[#574235]">{requirement}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-[36px] border border-[#dfc1af] bg-[#fffaf6] p-6 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
            <h2 className="mb-4 text-2xl font-black">تنبيه مهم</h2>
            <p className="mb-6 leading-8 text-[#574235]">
              المتطلبات تقديرية وقد تختلف حسب الجنسية والغرض من السفر وقرارات الجهات الرسمية. لا نضمن إصدار التأشيرة.
            </p>
            <Link href="/apply" className="mb-4 flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#964900] to-[#ff8000] px-6 py-4 font-black text-white">
              ابدأ طلب {destination.countryAr}
            </Link>
            <Link href="/compliance" className="flex w-full items-center justify-center rounded-2xl border border-[#dfc1af] px-6 py-4 font-black text-[#964900]">
              قراءة إفصاح الامتثال
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#fbf7f2] p-4">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-[#8a6b57]">{label}</p>
      <p className="font-black text-[#1c1b1b]">{value}</p>
    </div>
  );
}
