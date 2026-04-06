"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "../../../lib/api";
import { setAdminSession } from "../../../lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [nextPath, setNextPath] = useState("/admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setNextPath(params.get("next") || "/admin");
  }, []);

  async function handleLogin() {
    if (!username || !password) {
      setError("اكتبي اسم المستخدم وكلمة المرور.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(apiUrl("/api/admin/auth/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("بيانات الدخول غير صحيحة.");
      }

      const payload = await response.json();
      setAdminSession(payload.token);
      router.replace(nextPath);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر تسجيل الدخول.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="apply-shell flex min-h-screen items-center justify-center px-4 py-12">
      <div className="apply-card w-full max-w-md p-8 md:p-10">
        <div className="mb-8 text-center">
          <div className="apply-chip mx-auto bg-[#ffdcc7] text-[#723600]">Admin Access</div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#1c1b1b]">
            تسجيل دخول الإدارة
          </h1>
          <p className="mt-3 text-[#574235]">
            ادخلي بيانات الأدمن للوصول إلى لوحة التحكم.
          </p>
        </div>

        <div className="grid gap-4">
          <input
            className="apply-input"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="apply-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {error ? (
            <div className="rounded-xl bg-[#ffdad6] px-4 py-3 text-sm font-semibold text-[#93000a]">
              {error}
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => void handleLogin()}
            className="apply-primary justify-center"
            disabled={loading}
          >
            {loading ? "جاري التحقق..." : "دخول"}
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-[#f6f3f2] p-4 text-sm leading-7 text-[#574235]">
          بيانات الدخول الافتراضية حاليًا:
          <br />
          <strong>username:</strong> admin
          <br />
          <strong>password:</strong> admin123
        </div>
      </div>
    </div>
  );
}
