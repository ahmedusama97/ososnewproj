"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { apiUrl } from "../../lib/api";
import { REQUEST_STATUS_LABELS } from "../../lib/request-status";

type TrackResult = {
  referenceCode: string;
  status: string;
  country: string;
  visaType: string;
  createdAt: string;
  applicantsCount: number;
  latestNote: string;
  history: Array<{
    toStatus: string;
    note: string;
    createdAt: string;
  }>;
};

const statusLabels: Record<string, string> = REQUEST_STATUS_LABELS;

export default function TrackPage() {
  const [referenceCode, setReferenceCode] = useState("");
  const [verifier, setVerifier] = useState("");
  const [result, setResult] = useState<TrackResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("reference");
    if (reference) {
      setReferenceCode(reference);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(apiUrl("/api/track"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ referenceCode, verifier }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to track this request.");
      }

      setResult(payload);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to track this request.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fcf9f8] px-5 py-10 text-[#1c1b1b]" dir="rtl">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4">
          <Link href="/home" className="text-lg font-black text-[#964900]">VisaFlow</Link>
          <Link href="/apply" className="rounded-full bg-[#964900] px-5 py-2 text-sm font-bold text-white">بدء طلب جديد</Link>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] border border-[#dfc1af] bg-white p-6 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#964900]">Request tracking</p>
            <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">تتبع طلب التأشيرة</h1>
            <p className="mb-8 leading-8 text-[#574235]">
              أدخل رقم المرجع والبريد الإلكتروني أو رقم الجوال المستخدم في الطلب. لن نعرض بيانات حساسة في صفحة التتبع العامة.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full rounded-2xl border border-[#dfc1af] bg-[#fbf7f2] px-5 py-4 font-bold outline-none focus:border-[#964900]"
                placeholder="مثال: VF-20260407-1234"
                value={referenceCode}
                onChange={(event) => setReferenceCode(event.target.value)}
              />
              <input
                className="w-full rounded-2xl border border-[#dfc1af] bg-[#fbf7f2] px-5 py-4 font-bold outline-none focus:border-[#964900]"
                placeholder="البريد الإلكتروني أو رقم الجوال"
                value={verifier}
                onChange={(event) => setVerifier(event.target.value)}
              />
              {error ? (
                <div className="rounded-2xl bg-[#ffdad6] px-4 py-3 text-sm font-bold text-[#93000a]">{error}</div>
              ) : null}
              <button
                className="w-full rounded-2xl bg-gradient-to-br from-[#964900] to-[#ff8000] px-6 py-4 font-black text-white shadow-xl disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "جاري البحث..." : "تتبع الطلب"}
              </button>
            </form>
          </div>

          <div className="rounded-[36px] border border-[#dfc1af] bg-white p-6 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
            {!result ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center text-[#574235]">
                <span className="material-symbols-outlined mb-4 text-6xl text-[#dfc1af]">manage_search</span>
                <p className="max-w-md leading-8">نتيجة التتبع ستظهر هنا بعد التحقق من رقم المرجع وبيانات التواصل.</p>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-[#964900]">Reference</p>
                    <h2 className="text-2xl font-black">{result.referenceCode}</h2>
                  </div>
                  <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-black text-[#964900]">
                    {statusLabels[result.status] ?? result.status}
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <TrackField label="الدولة" value={result.country} />
                  <TrackField label="نوع التأشيرة" value={result.visaType} />
                  <TrackField label="عدد المتقدمين" value={`${result.applicantsCount}`} />
                  <TrackField label="آخر تحديث" value={result.latestNote} />
                </div>
                <div className="mt-8 space-y-3">
                  <h3 className="font-black">سجل الحالة</h3>
                  {result.history.map((event, index) => (
                    <div key={`${event.createdAt}-${index}`} className="rounded-2xl bg-[#fbf7f2] p-4">
                      <div className="flex flex-wrap justify-between gap-3">
                        <strong>{statusLabels[event.toStatus] ?? event.toStatus}</strong>
                        <span className="text-xs text-[#574235]">{new Date(event.createdAt).toLocaleString("ar-SA")}</span>
                      </div>
                      <p className="mt-2 text-sm text-[#574235]">{event.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function TrackField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#fbf7f2] p-4">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-[#8a6b57]">{label}</p>
      <p className="font-black text-[#1c1b1b]">{value}</p>
    </div>
  );
}
