"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "../../lib/api";

export default function UserLoginPage() {
  const router = useRouter();
  const [nextPath, setNextPath] = useState("/account");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setNextPath(params.get("next") || "/account");
  }, []);

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      setError("اكتب البريد الإلكتروني وكلمة المرور.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(apiUrl("/api/auth/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message ?? "تعذر تسجيل الدخول.");
      }

      router.replace(nextPath);
      router.refresh();
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "تعذر تسجيل الدخول.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="apply-shell min-h-screen px-4 py-10" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex items-center justify-between rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4">
          <Link href="/home" className="text-lg font-black text-[#964900]">VisaFlow</Link>
          <Link href="/register" className="rounded-full border border-[#dfc1af] px-4 py-2 text-sm font-bold text-[#964900]">
            إنشاء حساب
          </Link>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[36px] border border-[#dfc1af] bg-white p-8 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#964900]">User Access</p>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-[#1c1b1b] md:text-5xl">
              تسجيل دخول المستخدم
            </h1>
            <p className="mb-8 max-w-2xl leading-8 text-[#574235]">
              ادخل بحسابك للوصول إلى لوحة المستخدم، متابعة التأشيرات، مراجعة سجل الطلبات، وتحديث كلمة المرور.
            </p>

            <div className="grid gap-4">
              <input
                className="apply-input"
                placeholder="البريد الإلكتروني"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="apply-input"
                placeholder="كلمة المرور"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              {error ? (
                <div className="rounded-2xl bg-[#ffdad6] px-4 py-3 text-sm font-semibold text-[#93000a]">
                  {error}
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => void handleLogin()}
                disabled={loading}
                className="apply-primary justify-center"
              >
                {loading ? "جاري تسجيل الدخول..." : "دخول"}
              </button>
            </div>
          </div>

          <div className="rounded-[36px] border border-[#dfc1af] bg-[#fff8f1] p-8 shadow-[0_24px_80px_rgba(150,73,0,0.08)] md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffefe3] text-[#964900]">
              <span className="material-symbols-outlined text-3xl">account_circle</span>
            </div>
            <h2 className="mb-4 text-2xl font-black text-[#1c1b1b]">ماذا ستحصل داخل الحساب؟</h2>
            <ul className="space-y-4 text-[#574235]">
              {[
                "عرض جميع الطلبات المرتبطة ببريدك الإلكتروني من مكان واحد.",
                "متابعة الحالة وسجل الملاحظات بدون الحاجة لرقم المرجع كل مرة.",
                "تغيير كلمة المرور أو حذف الحساب من لوحة المستخدم.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4">
                  <span className="material-symbols-outlined text-[#126c39]">check_circle</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
