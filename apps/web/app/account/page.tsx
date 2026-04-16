"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "../../lib/api";
import {
  REQUEST_STATUS_LABELS,
  REQUEST_STATUS_STYLES,
} from "../../lib/request-status";

type StatusEvent = {
  fromStatus: string | null;
  toStatus: string;
  note: string;
  createdAt: string;
};

type Applicant = {
  fullName: string;
  nationality: string;
  passportNumber: string;
  issuingCountry: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  passportDocumentName: string;
  personalPhotoName: string;
};

type UserRequest = {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone: string;
  passportNumber: string;
  country: string;
  visaType: string;
  status: string;
  createdAt: string;
  applicants: Applicant[];
  statusHistory: StatusEvent[];
  missingDocuments: Array<{
    id: string;
    title: string;
    details: string;
    status: "open" | "resolved";
    requestedBy: string;
    resolvedBy?: string;
    createdAt: string;
    resolvedAt?: string;
  }>;
};

type SessionUser = {
  id: string;
  fullName: string;
  email: string;
  locale: string;
  createdAt: string;
};

const statusLabels: Record<string, string> = REQUEST_STATUS_LABELS;
const statusStyles: Record<string, string> = REQUEST_STATUS_STYLES;

type AccountTab = "requests" | "security" | "danger";

export default function AccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AccountTab>("requests");
  const [user, setUser] = useState<SessionUser | null>(null);
  const [requests, setRequests] = useState<UserRequest[]>([]);
  const [selectedReference, setSelectedReference] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [savingPassword, setSavingPassword] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [deletePassword, setDeletePassword] = useState("");

  useEffect(() => {
    async function loadSession() {
      setLoading(true);
      try {
        const response = await fetch(apiUrl("/api/auth/session"), { cache: "no-store" });
        if (!response.ok) {
          router.replace("/login");
          router.refresh();
          return;
        }

        const payload = (await response.json()) as { user: SessionUser };
        setUser(payload.user);
      } finally {
        setLoading(false);
      }
    }

    void loadSession();
  }, [router]);

  useEffect(() => {
    async function loadRequests() {
      setLoadingRequests(true);
      try {
        const response = await fetch(apiUrl("/api/account/requests"), { cache: "no-store" });
        if (response.status === 401) {
          router.replace("/login");
          router.refresh();
          return;
        }

        const payload = (await response.json()) as UserRequest[];
        setRequests(payload);
        if (payload.length && !selectedReference) {
          setSelectedReference(payload[0].referenceCode);
        }
      } finally {
        setLoadingRequests(false);
      }
    }

    void loadRequests();
  }, [router]);

  const selectedRequest = useMemo(
    () => requests.find((item) => item.referenceCode === selectedReference) ?? requests[0] ?? null,
    [requests, selectedReference],
  );

  async function handleLogout() {
    await fetch(apiUrl("/api/auth/logout"), { method: "POST" });
    router.replace("/home");
    router.refresh();
  }

  async function handlePasswordChange() {
    if (!passwordForm.currentPassword || !passwordForm.newPassword) {
      setError("كمّل حقول كلمة المرور أولًا.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError("تأكيد كلمة المرور غير مطابق.");
      return;
    }

    setSavingPassword(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(apiUrl("/api/auth/password"), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message ?? "تعذر تحديث كلمة المرور.");
      }

      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setSuccess("تم تحديث كلمة المرور بنجاح.");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "تعذر تحديث كلمة المرور.",
      );
    } finally {
      setSavingPassword(false);
    }
  }

  async function handleDeleteAccount() {
    if (!deletePassword.trim()) {
      setError("اكتب كلمة المرور لتأكيد حذف الحساب.");
      return;
    }

    setDeletingAccount(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(apiUrl("/api/auth/account"), {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: deletePassword }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message ?? "تعذر حذف الحساب.");
      }

      router.replace("/home");
      router.refresh();
    } catch (requestError) {
      setError(
        requestError instanceof Error ? requestError.message : "تعذر حذف الحساب.",
      );
    } finally {
      setDeletingAccount(false);
    }
  }

  if (loading) {
    return (
      <main className="apply-shell flex min-h-screen items-center justify-center">
        <div className="apply-card p-8 text-center text-[#574235]">جاري تحميل لوحة المستخدم...</div>
      </main>
    );
  }

  return (
    <main className="apply-shell min-h-screen px-4 py-8" dir="rtl">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#964900]">User Panel</p>
            <h1 className="text-2xl font-black text-[#1c1b1b]">{user?.fullName ?? "حساب المستخدم"}</h1>
            <p className="text-sm text-[#574235]">{user?.email}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/apply" className="rounded-full bg-[#964900] px-5 py-2 text-sm font-bold text-white">
              طلب جديد
            </Link>
            <button
              type="button"
              onClick={() => void handleLogout()}
              className="rounded-full border border-[#dfc1af] px-5 py-2 text-sm font-bold text-[#964900]"
            >
              تسجيل الخروج
            </button>
          </div>
        </nav>

        <div className="mb-6 flex flex-wrap gap-3">
          {[
            { id: "requests", label: "طلباتي" },
            { id: "security", label: "الأمان" },
            { id: "danger", label: "إدارة الحساب" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as AccountTab)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                activeTab === tab.id
                  ? "bg-[#964900] text-white"
                  : "border border-[#dfc1af] bg-white text-[#964900]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {error ? (
          <div className="mb-6 rounded-2xl bg-[#ffdad6] px-4 py-3 text-sm font-semibold text-[#93000a]">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="mb-6 rounded-2xl bg-[#d9f4d8] px-4 py-3 text-sm font-semibold text-[#126c39]">
            {success}
          </div>
        ) : null}

        {activeTab === "requests" ? (
          <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[32px] border border-[#dfc1af] bg-white p-5 shadow-[0_20px_64px_rgba(150,73,0,0.08)] md:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#964900]">Requests</p>
                  <h2 className="text-2xl font-black text-[#1c1b1b]">طلبات التأشيرة</h2>
                </div>
                <span className="rounded-full bg-[#fff1e4] px-3 py-1 text-xs font-black text-[#964900]">
                  {requests.length} طلب
                </span>
              </div>

              <div className="space-y-4">
                {loadingRequests ? (
                  <div className="rounded-2xl bg-[#fbf7f2] px-5 py-6 text-center text-[#574235]">
                    جاري تحميل الطلبات...
                  </div>
                ) : requests.length ? (
                  requests.map((request) => (
                    <button
                      key={request.referenceCode}
                      type="button"
                      onClick={() => setSelectedReference(request.referenceCode)}
                      className={`w-full rounded-[24px] border p-5 text-right transition ${
                        selectedRequest?.referenceCode === request.referenceCode
                          ? "border-[#964900] bg-[#fff8f1]"
                          : "border-[#eadbcc] bg-[#fbf7f2]"
                      }`}
                    >
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <strong className="text-lg text-[#1c1b1b]">{request.referenceCode}</strong>
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${statusStyles[request.status] ?? "bg-[#f1efef] text-[#574235]"}`}>
                          {statusLabels[request.status] ?? request.status}
                        </span>
                      </div>
                      <p className="font-bold text-[#1c1b1b]">{request.country}</p>
                      <p className="mt-1 text-sm text-[#574235]">{request.visaType}</p>
                      <p className="mt-3 text-xs text-[#8a6b57]">
                        {new Date(request.createdAt).toLocaleString("ar-SA")}
                      </p>
                    </button>
                  ))
                ) : (
                  <div className="rounded-2xl bg-[#fbf7f2] px-5 py-6 text-center text-[#574235]">
                    لا توجد طلبات مرتبطة بحسابك حتى الآن.
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#dfc1af] bg-white p-5 shadow-[0_20px_64px_rgba(150,73,0,0.08)] md:p-6">
              {!selectedRequest ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center text-[#574235]">
                  <span className="material-symbols-outlined mb-4 text-6xl text-[#dfc1af]">inventory_2</span>
                  اختر طلبًا من القائمة لعرض تفاصيله.
                </div>
              ) : (
                <div>
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#964900]">Reference</p>
                      <h2 className="text-3xl font-black text-[#1c1b1b]">{selectedRequest.referenceCode}</h2>
                    </div>
                    <Link
                      href={`/track?reference=${selectedRequest.referenceCode}`}
                      className="rounded-full border border-[#dfc1af] px-4 py-2 text-sm font-bold text-[#964900]"
                    >
                      صفحة التتبع العامة
                    </Link>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <AccountField label="الدولة" value={selectedRequest.country} />
                    <AccountField label="نوع التأشيرة" value={selectedRequest.visaType} />
                    <AccountField label="عدد المتقدمين" value={`${selectedRequest.applicants.length}`} />
                    <AccountField label="آخر حالة" value={statusLabels[selectedRequest.status] ?? selectedRequest.status} />
                  </div>

                  <div className="mt-8">
                    <h3 className="mb-4 text-lg font-black text-[#1c1b1b]">المستندات المطلوبة حاليًا</h3>
                    {(selectedRequest.missingDocuments ?? []).filter((item) => item.status === "open").length ? (
                      <div className="space-y-3">
                        {(selectedRequest.missingDocuments ?? [])
                          .filter((item) => item.status === "open")
                          .map((item) => (
                            <div key={item.id} className="rounded-[24px] border border-[#f4c3a4] bg-[#fff8f1] p-5">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <strong className="text-[#1c1b1b]">{item.title}</strong>
                                <span className="rounded-full bg-[#ffe4d1] px-3 py-1 text-xs font-black text-[#a04a00]">
                                  مطلوب من العميل
                                </span>
                              </div>
                              <p className="mt-3 leading-7 text-[#574235]">{item.details}</p>
                              <p className="mt-3 text-xs text-[#8a6b57]">
                                طُلب في {new Date(item.createdAt).toLocaleString("ar-SA")}
                              </p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="rounded-[24px] bg-[#fbf7f2] p-5 text-sm font-semibold text-[#574235]">
                        لا توجد مستندات ناقصة مطلوبة منك حاليًا.
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <h3 className="mb-4 text-lg font-black text-[#1c1b1b]">المتقدمون</h3>
                    <div className="space-y-4">
                      {selectedRequest.applicants.map((applicant, index) => (
                        <div key={`${applicant.passportNumber}-${index}`} className="rounded-[24px] bg-[#fbf7f2] p-5">
                          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <strong className="text-[#1c1b1b]">{applicant.fullName}</strong>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#964900]">
                              الشخص {index + 1}
                            </span>
                          </div>
                          <div className="grid gap-3 md:grid-cols-2">
                            <AccountField label="الجنسية" value={applicant.nationality} compact />
                            <AccountField label="رقم الجواز" value={applicant.passportNumber} compact />
                            <AccountField label="بلد الإصدار" value={applicant.issuingCountry} compact />
                            <AccountField label="انتهاء الجواز" value={applicant.passportExpiryDate} compact />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="mb-4 text-lg font-black text-[#1c1b1b]">سجل الحالة</h3>
                    <div className="space-y-3">
                      {selectedRequest.statusHistory.map((event, index) => (
                        <div key={`${event.createdAt}-${index}`} className="rounded-2xl bg-[#fbf7f2] p-4">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <strong>{statusLabels[event.toStatus] ?? event.toStatus}</strong>
                            <span className="text-xs text-[#8a6b57]">
                              {new Date(event.createdAt).toLocaleString("ar-SA")}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-[#574235]">{event.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : null}

        {activeTab === "security" ? (
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-[#dfc1af] bg-white p-6 shadow-[0_20px_64px_rgba(150,73,0,0.08)]">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#964900]">Security</p>
              <h2 className="mb-6 text-3xl font-black text-[#1c1b1b]">تغيير كلمة المرور</h2>
              <div className="grid gap-4">
                <input
                  className="apply-input"
                  type="password"
                  placeholder="كلمة المرور الحالية"
                  value={passwordForm.currentPassword}
                  onChange={(event) =>
                    setPasswordForm((current) => ({ ...current, currentPassword: event.target.value }))
                  }
                />
                <input
                  className="apply-input"
                  type="password"
                  placeholder="كلمة المرور الجديدة"
                  value={passwordForm.newPassword}
                  onChange={(event) =>
                    setPasswordForm((current) => ({ ...current, newPassword: event.target.value }))
                  }
                />
                <input
                  className="apply-input"
                  type="password"
                  placeholder="تأكيد كلمة المرور الجديدة"
                  value={passwordForm.confirmPassword}
                  onChange={(event) =>
                    setPasswordForm((current) => ({ ...current, confirmPassword: event.target.value }))
                  }
                />
                <button
                  type="button"
                  onClick={() => void handlePasswordChange()}
                  disabled={savingPassword}
                  className="apply-primary justify-center"
                >
                  {savingPassword ? "جاري التحديث..." : "تغيير كلمة المرور"}
                </button>
              </div>
            </div>
            <div className="rounded-[32px] border border-[#dfc1af] bg-[#fff8f1] p-6 shadow-[0_20px_64px_rgba(150,73,0,0.08)]">
              <h3 className="mb-4 text-2xl font-black text-[#1c1b1b]">معلومات الأمان</h3>
              <p className="leading-8 text-[#574235]">
                بعد تحديث كلمة المرور سيتم تثبيت الجلسة الحالية بالحساب الجديد، ويمكنك متابعة طلباتك مباشرة من نفس اللوحة.
              </p>
            </div>
          </section>
        ) : null}

        {activeTab === "danger" ? (
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-[#f3b4b0] bg-white p-6 shadow-[0_20px_64px_rgba(150,73,0,0.08)]">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#ba1a1a]">Danger Zone</p>
              <h2 className="mb-4 text-3xl font-black text-[#1c1b1b]">حذف الحساب</h2>
              <p className="mb-6 leading-8 text-[#574235]">
                سيتم حذف حسابك وجلسات الدخول المرتبطة به. الطلبات السابقة ستظل موجودة في النظام لأغراض التشغيل لكنها لن تبقى مرتبطة بحسابك.
              </p>
              <input
                className="apply-input"
                type="password"
                placeholder="اكتب كلمة المرور للتأكيد"
                value={deletePassword}
                onChange={(event) => setDeletePassword(event.target.value)}
              />
              <button
                type="button"
                onClick={() => void handleDeleteAccount()}
                disabled={deletingAccount}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#ba1a1a] px-8 py-4 font-bold text-white"
              >
                {deletingAccount ? "جاري حذف الحساب..." : "حذف الحساب"}
              </button>
            </div>
            <div className="rounded-[32px] border border-[#dfc1af] bg-[#fff8f1] p-6 shadow-[0_20px_64px_rgba(150,73,0,0.08)]">
              <h3 className="mb-4 text-2xl font-black text-[#1c1b1b]">مهم قبل الحذف</h3>
              <ul className="space-y-3 text-[#574235]">
                <li>لن تتمكن من استعادة الجلسة الحالية بعد حذف الحساب.</li>
                <li>إذا كان لديك طلبات نشطة فاحتفظ برقم المرجع قبل المتابعة.</li>
                <li>يمكنك دائمًا إنشاء حساب جديد بنفس البريد لاحقًا إذا احتجت.</li>
              </ul>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

function AccountField({
  label,
  value,
  compact = false,
}: {
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div className={`rounded-2xl bg-[#fbf7f2] ${compact ? "p-4" : "p-5"}`}>
      <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-[#8a6b57]">{label}</p>
      <p className="font-black text-[#1c1b1b]">{value}</p>
    </div>
  );
}
