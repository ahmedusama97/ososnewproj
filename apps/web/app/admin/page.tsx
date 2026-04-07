"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "../../lib/api";
import {
  clearAdminSession,
  getAdminToken,
  setAdminSession,
} from "../../lib/admin-auth";

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

type VisaRequest = {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone: string;
  passportNumber: string;
  country: string;
  visaType: string;
  issuingCountry?: string;
  passportExpiryDate?: string;
  passportDocumentName?: string;
  personalPhotoName?: string;
  status: string;
  createdAt: string;
  statusHistory?: StatusEvent[];
  applicants?: Applicant[];
  requestContext?: {
    channel?: string;
    userAgent?: string;
    deviceType?: string;
    browser?: string;
    operatingSystem?: string;
  };
};

type CountryOption = {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  visaType: string;
  accent: string;
};

type NotificationItem = {
  referenceCode: string;
  fullName: string;
  createdAt: string;
};

type AdminTab = "requests" | "countries" | "security" | "analytics";

const statusOptions = [
  { value: "submitted", label: "تم التقديم" },
  { value: "in_review", label: "قيد المراجعة" },
  { value: "issued", label: "تم الإصدار" },
  { value: "rejected", label: "مرفوض" },
];

const statusStyles: Record<string, string> = {
  submitted: "bg-[#eef6d5] text-[#556500]",
  in_review: "bg-[#fef3e2] text-[#7e5700]",
  issued: "bg-[#d9f4d8] text-[#126c39]",
  rejected: "bg-[#ffdad6] text-[#ba1a1a]",
};

const accentOptions = [
  "from-[#964900] via-[#ffb787] to-[#126c39]",
  "from-[#123c7d] via-white to-[#c62839]",
  "from-[#009246] via-white to-[#ce2b37]",
  "from-[#aa151b] via-[#f1bf00] to-[#aa151b]",
];

const requestTabs: Array<{ id: AdminTab; label: string; icon: string }> = [
  { id: "requests", label: "Orders", icon: "assignment" },
  { id: "countries", label: "Countries", icon: "public" },
  { id: "security", label: "Security", icon: "security" },
  { id: "analytics", label: "Analytics", icon: "leaderboard" },
];

const REQUESTS_PER_PAGE = 5;
const NOTIFICATIONS_STORAGE_KEY = "visaflow_admin_notifications";
const UNREAD_NOTIFICATIONS_STORAGE_KEY = "visaflow_admin_unread_notifications";
const KNOWN_REQUESTS_STORAGE_KEY = "visaflow_admin_known_requests";

function readStoredNotifications(): NotificationItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as NotificationItem[]) : [];
  } catch {
    return [];
  }
}

function readStoredUnreadNotifications(): number {
  if (typeof window === "undefined") {
    return 0;
  }

  const raw = window.localStorage.getItem(UNREAD_NOTIFICATIONS_STORAGE_KEY);
  const parsed = raw ? Number.parseInt(raw, 10) : 0;
  return Number.isFinite(parsed) ? parsed : 0;
}

function readStoredKnownRequests(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(KNOWN_REQUESTS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("requests");
  const [requests, setRequests] = useState<VisaRequest[]>([]);
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedReference, setSelectedReference] = useState("");
  const [selectedApplicantIndex, setSelectedApplicantIndex] = useState(0);
  const [status, setStatus] = useState("submitted");
  const [note, setNote] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [saving, setSaving] = useState(false);
  const [addingCountry, setAddingCountry] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(
    readStoredNotifications,
  );
  const [unreadNotifications, setUnreadNotifications] = useState<number>(
    readStoredUnreadNotifications,
  );
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [filePreview, setFilePreview] = useState<{
    url: string;
    label: string;
  } | null>(null);
  const knownReferencesRef = useRef<Set<string>>(new Set(readStoredKnownRequests()));
  const [countryForm, setCountryForm] = useState({
    code: "",
    nameAr: "",
    nameEn: "",
    flag: "🌍",
    visaType: "تأشيرة سياحية",
    accent: accentOptions[0],
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function handleUnauthorized() {
    clearAdminSession();
    router.replace("/admin/login");
    router.refresh();
  }

  async function authFetch(path: string, init?: RequestInit) {
    const token = getAdminToken();
    if (!token) {
      handleUnauthorized();
      throw new Error("Admin session missing.");
    }

    const response = await fetch(apiUrl(path), {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(init?.body ? { "Content-Type": "application/json" } : {}),
        ...(init?.headers ?? {}),
      },
      cache: init?.cache,
    });

    if (response.status === 401) {
      handleUnauthorized();
      throw new Error("انتهت صلاحية الجلسة. سجلي الدخول مرة أخرى.");
    }

    return response;
  }

  async function loadRequests() {
    setLoadingRequests(true);
    try {
      const response = await authFetch("/api/admin/requests", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("تعذر تحميل الطلبات من الخادم.");
      }

      const payload: VisaRequest[] = await response.json();
      const hasKnownBaseline = knownReferencesRef.current.size > 0;
      const newItems = payload.filter(
        (item) => !knownReferencesRef.current.has(item.referenceCode),
      );

      if (hasKnownBaseline && newItems.length) {
        setNotifications((current) => {
          const existingRefs = new Set(current.map((item) => item.referenceCode));
          const freshItems = newItems
            .filter((item) => !existingRefs.has(item.referenceCode))
            .map((item) => ({
              referenceCode: item.referenceCode,
              fullName: item.fullName,
              createdAt: item.createdAt,
            }));

          if (!freshItems.length) {
            return current;
          }

          setUnreadNotifications((unread) => unread + freshItems.length);
          return [...freshItems, ...current].slice(0, 20);
        });
      }

      knownReferencesRef.current = new Set(payload.map((item) => item.referenceCode));
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          KNOWN_REQUESTS_STORAGE_KEY,
          JSON.stringify(Array.from(knownReferencesRef.current)),
        );
      }
      setRequests(payload);
      setSelectedReference((current) => {
        if (current && payload.some((item) => item.referenceCode === current)) {
          return current;
        }
        return payload[0]?.referenceCode ?? "";
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر تحميل الطلبات.");
    } finally {
      setLoadingRequests(false);
    }
  }

  async function loadCountries() {
    setLoadingCountries(true);
    try {
      const response = await authFetch("/api/admin/countries", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("تعذر تحميل الدول.");
      }

      const payload: CountryOption[] = await response.json();
      setCountries(payload);
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر تحميل الدول.");
    } finally {
      setLoadingCountries(false);
    }
  }

  useEffect(() => {
    void loadRequests();
    void loadCountries();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      NOTIFICATIONS_STORAGE_KEY,
      JSON.stringify(notifications),
    );
  }, [notifications]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      UNREAD_NOTIFICATIONS_STORAGE_KEY,
      String(unreadNotifications),
    );
  }, [unreadNotifications]);

  const selectedRequest = useMemo(
    () => requests.find((item) => item.referenceCode === selectedReference) ?? null,
    [requests, selectedReference],
  );

  useEffect(() => {
    if (selectedRequest) {
      setStatus(selectedRequest.status);
      setSelectedApplicantIndex(0);
      setNote("");
      setSuccess("");
    }
  }, [selectedRequest]);

  const selectedApplicant =
    selectedRequest?.applicants?.[selectedApplicantIndex] ??
    (selectedRequest
      ? {
          fullName: selectedRequest.fullName,
          nationality: "-",
          passportNumber: selectedRequest.passportNumber,
          issuingCountry: selectedRequest.issuingCountry ?? "-",
          passportIssueDate: "-",
          passportExpiryDate: selectedRequest.passportExpiryDate ?? "-",
          passportDocumentName: selectedRequest.passportDocumentName ?? "-",
          personalPhotoName: selectedRequest.personalPhotoName ?? "-",
        }
      : null);

  const isSelectionPinned =
    !!selectedRequest &&
    searchQuery.trim().toLowerCase() === selectedRequest.referenceCode.toLowerCase();

  const filteredRequests = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return requests;
    }

    return requests.filter((request) =>
      [
        request.referenceCode,
        request.fullName,
        request.email,
        request.phone,
        request.passportNumber,
        request.country,
        request.visaType,
      ]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query)),
    );
  }, [requests, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (
      selectedReference &&
      !filteredRequests.some((request) => request.referenceCode === selectedReference)
    ) {
      setSelectedReference(filteredRequests[0]?.referenceCode ?? "");
    }
  }, [filteredRequests, selectedReference]);

  const totalPages = Math.max(1, Math.ceil(filteredRequests.length / REQUESTS_PER_PAGE));
  const currentRequestsPage = Math.min(currentPage, totalPages);
  const paginatedRequests = filteredRequests.slice(
    (currentRequestsPage - 1) * REQUESTS_PER_PAGE,
    currentRequestsPage * REQUESTS_PER_PAGE,
  );

  const analytics = useMemo(() => {
    const totalRequests = requests.length;
    const submittedCount = requests.filter((request) => request.status === "submitted").length;
    const inReviewCount = requests.filter((request) => request.status === "in_review").length;
    const issuedCount = requests.filter((request) => request.status === "issued").length;
    const rejectedCount = requests.filter((request) => request.status === "rejected").length;
    const totalApplicants = requests.reduce(
      (sum, request) => sum + (request.applicants?.length ?? 1),
      0,
    );
    const mobileRequests = requests.filter(
      (request) => request.requestContext?.deviceType === "mobile",
    ).length;
    const desktopRequests = requests.filter(
      (request) => request.requestContext?.deviceType === "desktop",
    ).length;

    return {
      totalRequests,
      submittedCount,
      inReviewCount,
      issuedCount,
      rejectedCount,
      totalApplicants,
      mobileRequests,
      desktopRequests,
    };
  }, [requests]);

  async function handleSaveStatus() {
    if (!selectedRequest) {
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const response = await authFetch(
        `/api/admin/requests/${selectedRequest.referenceCode}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({
            status,
            note: note.trim() || "تم التحديث من لوحة الإدارة",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("تعذر تحديث حالة الطلب.");
      }

      const updated: VisaRequest = await response.json();
      setRequests((current) =>
        current.map((item) =>
          item.referenceCode === updated.referenceCode ? updated : item,
        ),
      );
      setSelectedReference(updated.referenceCode);
      setStatus(updated.status);
      setNote("");
      setSuccess("تم حفظ التحديث وإضافته إلى سجل الطلب.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر تحديث الطلب.");
    } finally {
      setSaving(false);
    }
  }

  async function handleAddCountry() {
    if (!countryForm.nameAr || !countryForm.nameEn || !countryForm.flag || !countryForm.visaType) {
      setError("املئي بيانات الدولة كاملة قبل الإضافة.");
      return;
    }

    setAddingCountry(true);
    setError("");
    setSuccess("");

    try {
      const response = await authFetch("/api/admin/countries", {
        method: "POST",
        body: JSON.stringify(countryForm),
      });

      if (!response.ok) {
        throw new Error("تعذر إضافة الدولة.");
      }

      setCountryForm({
        code: "",
        nameAr: "",
        nameEn: "",
        flag: "🌍",
        visaType: "تأشيرة سياحية",
        accent: accentOptions[0],
      });
      setSuccess("تمت إضافة الدولة وستظهر للعميل في شاشة الاختيار.");
      await loadCountries();
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر إضافة الدولة.");
    } finally {
      setAddingCountry(false);
    }
  }

  async function handleChangePassword() {
    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      setError("املئي كل حقول تغيير كلمة المرور.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError("كلمة المرور الجديدة وتأكيدها غير متطابقين.");
      return;
    }

    setChangingPassword(true);
    setError("");
    setSuccess("");

    try {
      const response = await authFetch("/api/admin/auth/password", {
        method: "PATCH",
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });

      if (!response.ok) {
        const payload = await response.text();
        throw new Error(payload || "تعذر تغيير كلمة المرور.");
      }

      const payload = await response.json();
      setAdminSession(payload.token);
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setSuccess("تم تغيير كلمة المرور بنجاح وتم تحديث جلسة الإدارة.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر تغيير كلمة المرور.");
    } finally {
      setChangingPassword(false);
    }
  }

  function openNotificationCenter() {
    setShowNotifications((current) => {
      const next = !current;
      if (next) {
        setUnreadNotifications(0);
      }
      return next;
    });
  }

  function handleNotificationClick(referenceCode: string) {
    setSelectedReference(referenceCode);
    setActiveTab("requests");
    setShowNotifications(false);
    setIsMobileNavOpen(false);
  }

  function handleLogout() {
    clearAdminSession();
    router.replace("/admin/login");
    router.refresh();
  }

  async function handleOpenFile(path: string, label: string) {
    if (!path || path === "-") {
      setError("لا يوجد ملف متاح للفتح.");
      return;
    }

    setError("");
    try {
      const response = await authFetch("/api/admin/files/sign", {
        method: "POST",
        body: JSON.stringify({ path }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message ?? "تعذر إنشاء رابط آمن للملف.");
      }

      setFilePreview({
        url: payload.signedUrl,
        label,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر فتح الملف.");
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1f1b16]" dir="rtl">
      {filePreview ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-3 md:p-8">
          <section className="flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d5c3b5] px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c26d00]">Document Preview</p>
                <h2 className="text-xl font-black text-[#1f1b16]">{filePreview.label}</h2>
              </div>
              <div className="flex gap-2">
                <a
                  href={filePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#d5c3b5] px-4 py-2 text-xs font-bold text-[#7e5700]"
                >
                  فتح خارجي
                </a>
                <button
                  type="button"
                  onClick={() => setFilePreview(null)}
                  className="rounded-full bg-[#7e5700] px-4 py-2 text-xs font-bold text-white"
                >
                  إغلاق
                </button>
              </div>
            </header>
            <iframe
              title={filePreview.label}
              src={filePreview.url}
              className="h-full w-full flex-1 bg-[#f7f3f0]"
            />
          </section>
        </div>
      ) : null}

      {isMobileNavOpen ? (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setIsMobileNavOpen(false)}
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 right-0 z-40 flex w-[18.5rem] flex-col border-l border-[#d5c3b5] bg-white p-4 transition-transform duration-300 md:w-64 ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mb-8 px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7e5700] text-white shadow-lg shadow-[#7e5700]/20">
              <span className="material-symbols-outlined">flight_takeoff</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-[#7e5700]">
                VisaFlow Admin
              </h1>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#837567]">
                Global Processing
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {requestTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setIsMobileNavOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-right transition ${
                activeTab === tab.id
                  ? "bg-[#ffdeab] text-[#412100]"
                  : "text-[#837567] hover:bg-[#f7f3f0]"
              }`}
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span className="text-sm font-semibold">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="space-y-2 border-t border-[#d5c3b5] pt-4">
          <Link href="/home" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#837567] transition hover:bg-[#f7f3f0]">
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
          </Link>
          <Link href="/apply" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#837567] transition hover:bg-[#f7f3f0]">
            <span className="material-symbols-outlined">send</span>
            <span>Apply</span>
          </Link>
          <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-right text-sm font-medium text-[#ba1a1a] transition hover:bg-[#fff0ef]">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="min-h-screen md:mr-64">
        <header className="sticky top-0 z-20 flex flex-col gap-4 border-b border-[#d5c3b5] bg-white px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d5c3b5] text-[#7e5700]"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <h2 className="text-lg font-black text-[#7e5700]">لوحة الإدارة</h2>
              <p className="text-[11px] font-medium text-[#837567]">VisaFlow Admin</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <div>
              <h2 className="text-xl font-black text-[#7e5700]">لوحة الإدارة</h2>
              <p className="text-xs font-medium text-[#837567]">إدارة الطلبات والتحليلات والعمليات اليومية</p>
            </div>
            <div className="relative w-full md:w-[22rem]">
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#837567]">search</span>
              <input
                className="w-full rounded-xl border-none bg-[#f1edea] py-2.5 pr-10 pl-4 text-sm outline-none ring-0 placeholder:text-[#837567] focus:ring-2 focus:ring-[#c26d00]/20"
                placeholder="ابحث عن طلب أو عميل أو جواز سفر..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <button type="button" onClick={() => { void loadRequests(); void loadCountries(); }} className="rounded-lg border border-[#d5c3b5] px-4 py-2 text-sm font-bold text-[#7e5700] transition hover:bg-[#f7f3f0]">
              تحديث
            </button>

            <div className="relative">
              <button type="button" onClick={openNotificationCenter} className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#837567] transition hover:bg-[#f1edea]">
                <span className="material-symbols-outlined">notifications</span>
                {unreadNotifications ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c26d00] px-1 text-[11px] font-bold text-white">
                    {unreadNotifications}
                  </span>
                ) : null}
              </button>

              {showNotifications ? (
                <div className="absolute left-0 top-12 z-50 w-[18rem] max-w-[85vw] rounded-2xl border border-[#d5c3b5] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:w-80">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-black text-[#412100]">الإشعارات</h3>
                    <span className="text-xs font-medium text-[#837567]">{notifications.length} عنصر</span>
                  </div>
                  <div className="max-h-80 space-y-2 overflow-y-auto">
                    {notifications.length ? (
                      notifications.map((item) => (
                        <button
                          key={`${item.referenceCode}-${item.createdAt}`}
                          type="button"
                          onClick={() => handleNotificationClick(item.referenceCode)}
                          className="w-full rounded-xl border border-[#d5c3b5] bg-[#faf7f4] p-3 text-right transition hover:border-[#c26d00]"
                        >
                          <p className="text-sm font-bold text-[#412100]">طلب جديد {item.referenceCode}</p>
                          <p className="mt-1 text-xs text-[#837567]">{item.fullName}</p>
                          <p className="mt-2 text-[11px] text-[#837567]">{new Date(item.createdAt).toLocaleString()}</p>
                        </button>
                      ))
                    ) : (
                      <div className="rounded-xl bg-[#f7f3f0] p-4 text-center text-sm font-medium text-[#837567]">
                        لا توجد إشعارات جديدة حاليًا.
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="hidden h-8 w-px bg-[#d5c3b5] md:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fef3e2] text-[#7e5700] ring-2 ring-[#fef3e2]">
                <span className="material-symbols-outlined text-[18px]">shield_person</span>
              </div>
              <span className="text-sm font-semibold text-[#1f1b16]">مشرف النظام</span>
            </div>
          </div>
        </header>

        <section className="bg-[#f7f3f0] p-4 md:min-h-[calc(100vh-89px)] md:p-6">
          {error ? <div className="mb-4 rounded-2xl border border-[#ffdad6] bg-[#fff0ef] px-5 py-4 font-semibold text-[#ba1a1a]">{error}</div> : null}
          {success ? <div className="mb-4 rounded-2xl border border-[#d6efcf] bg-[#eef9ea] px-5 py-4 font-semibold text-[#126c39]">{success}</div> : null}

          {activeTab === "requests" ? (
            <div className="flex flex-col gap-6 xl:flex-row">
              <section className="flex max-h-[32rem] w-full flex-col overflow-hidden rounded-[24px] border border-[#d5c3b5] bg-white xl:max-h-none xl:w-[24rem]">
                <div className="flex items-center justify-between border-b border-[#d5c3b5] p-5">
                  <div>
                    <h3 className="text-lg font-black text-[#1f1b16]">قائمة المراجعة</h3>
                    <p className="text-xs font-medium text-[#837567]">{filteredRequests.length} طلب مطابق للبحث</p>
                  </div>
                  <div className="rounded-xl bg-[#f7f3f0] px-3 py-2 text-sm font-bold text-[#7e5700]">{requests.length}</div>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                  {loadingRequests ? (
                    <div className="rounded-xl bg-[#f7f3f0] p-5 text-center text-sm font-semibold text-[#837567]">جاري تحميل الطلبات...</div>
                  ) : paginatedRequests.length ? (
                    paginatedRequests.map((request) => (
                      <button
                        key={request.referenceCode}
                        type="button"
                        onClick={() => setSelectedReference(request.referenceCode)}
                        className={`w-full rounded-xl border p-4 text-right transition ${selectedReference === request.referenceCode ? "border-[#c26d00] bg-[#fef3e2]" : "border-[#d5c3b5] hover:border-[#c26d00]/50"}`}
                      >
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <span className="text-xs font-black text-[#7e5700]">#{request.referenceCode}</span>
                          <span className={`rounded-md px-2 py-1 text-[10px] font-bold ${statusStyles[request.status] ?? "bg-[#f1edea] text-[#1f1b16]"}`}>
                            {statusOptions.find((item) => item.value === request.status)?.label ?? request.status}
                          </span>
                        </div>
                        <h4 className="text-sm font-black text-[#1f1b16]">{request.fullName}</h4>
                        <p className="mt-1 text-xs text-[#837567]">{request.visaType} • {request.country}</p>
                        <p className="mt-2 text-[11px] font-semibold text-[#837567]">{request.applicants?.length ?? 1} متقدم</p>
                      </button>
                    ))
                  ) : (
                    <div className="rounded-xl bg-[#f7f3f0] p-5 text-center text-sm font-semibold text-[#837567]">لا توجد نتائج مطابقة.</div>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-[#d5c3b5] p-4">
                  <button type="button" onClick={() => setCurrentPage((current) => Math.max(1, current - 1))} disabled={currentRequestsPage === 1} className="rounded-lg border border-[#d5c3b5] px-4 py-2 text-sm font-bold text-[#7e5700] disabled:cursor-not-allowed disabled:opacity-40">السابق</button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <button key={page} type="button" onClick={() => setCurrentPage(page)} className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold transition ${currentRequestsPage === page ? "bg-[#7e5700] text-white" : "border border-[#d5c3b5] text-[#7e5700]"}`}>
                        {page}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={() => setCurrentPage((current) => Math.min(totalPages, current + 1))} disabled={currentRequestsPage === totalPages} className="rounded-lg border border-[#d5c3b5] px-4 py-2 text-sm font-bold text-[#7e5700] disabled:cursor-not-allowed disabled:opacity-40">التالي</button>
                </div>
              </section>

              <section className="min-h-0 flex-1 overflow-y-auto rounded-[24px] border border-[#d5c3b5] bg-white">
                {selectedRequest ? (
                  <>
                    <div className="border-b border-[#d5c3b5] p-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] text-3xl">
                            <span>{selectedRequest.requestContext?.deviceType === "mobile" ? "📱" : "🖥️"}</span>
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c26d00]">Request Details</p>
                            <h2 className="mt-2 text-3xl font-black text-[#7e5700]">{selectedRequest.referenceCode}</h2>
                            <span className={`mt-2 inline-flex rounded-md px-3 py-1 text-xs font-bold ${statusStyles[selectedRequest.status] ?? "bg-[#f1edea] text-[#1f1b16]"}`}>
                              {statusOptions.find((item) => item.value === selectedRequest.status)?.label ?? selectedRequest.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              if (isSelectionPinned) {
                                setSearchQuery("");
                              } else {
                                setSearchQuery(selectedRequest.referenceCode);
                                setCurrentPage(1);
                              }
                            }}
                            className="rounded-lg border border-[#d5c3b5] px-5 py-2 text-sm font-bold text-[#1f1b16] transition hover:bg-[#f7f3f0]"
                          >
                            {isSelectionPinned ? "إلغاء التحديد" : "تحديد"}
                          </button>
                          <button type="button" onClick={() => window.print()} className="rounded-lg bg-[#7e5700] px-5 py-2 text-sm font-bold text-white shadow-md shadow-[#7e5700]/20 transition hover:brightness-110">طباعة</button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8 p-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <SummaryCard label="Applicants Count" value={String(selectedRequest.applicants?.length ?? 1)} />
                        <SummaryCard label="Phone" value={selectedRequest.phone} />
                        <SummaryCard label="Email" value={selectedRequest.email} />
                        <SummaryCard label="Country" value={selectedRequest.country} />
                        <SummaryCard label="Visa Type" value={selectedRequest.visaType} />
                        <SummaryCard label="Request Date" value={new Date(selectedRequest.createdAt).toLocaleDateString()} />
                      </div>

                      <div className="space-y-4">
                        <SectionTitle title="Applicants" />
                        <div className="rounded-xl border border-[#d5c3b5] bg-white p-5">
                          <div className="mb-4 flex flex-wrap gap-2">
                            {(selectedRequest.applicants?.length ? selectedRequest.applicants : selectedApplicant ? [selectedApplicant] : []).map((applicant, index) => (
                              <button key={`${applicant.passportNumber}-${index}`} type="button" onClick={() => setSelectedApplicantIndex(index)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${selectedApplicantIndex === index ? "bg-[#7e5700] text-white" : "border border-[#d5c3b5] bg-white text-[#7e5700]"}`}>
                                APP {index + 1}
                              </button>
                            ))}
                          </div>

                          {selectedApplicant ? (
                            <div className="rounded-xl border border-[#d5c3b5] bg-[#fffaf5] p-5">
                              <div className="mb-4 flex items-center justify-between gap-4">
                                <span className="text-sm font-black text-[#7e5700]">الشخص {selectedApplicantIndex + 1}</span>
                                <span className="rounded-full bg-[#fef3e2] px-3 py-1 text-xs font-bold text-[#c26d00]">
                                  APP {selectedApplicantIndex + 1}
                                </span>
                              </div>
                              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <SummaryCard label="Applicant Name" value={selectedApplicant.fullName || "-"} />
                                <SummaryCard label="Passport Number" value={selectedApplicant.passportNumber || "-"} />
                                <SummaryCard label="Nationality" value={selectedApplicant.nationality || "-"} />
                                <SummaryCard label="Passport Expiry" value={selectedApplicant.passportExpiryDate || "-"} />
                                <SummaryCard label="Issuing Country" value={selectedApplicant.issuingCountry || "-"} />
                                <FileSummaryCard label="Photo File" value={selectedApplicant.personalPhotoName || "-"} onOpen={() => void handleOpenFile(selectedApplicant.personalPhotoName, "Photo File")} />
                                <FileSummaryCard label="Passport File" value={selectedApplicant.passportDocumentName || "-"} onOpen={() => void handleOpenFile(selectedApplicant.passportDocumentName, "Passport File")} />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#f1edea] p-6">
                        <h4 className="text-sm font-black text-[#7e5700]">تحديث الحالة</h4>
                        <div className="mt-4 space-y-4">
                          <div>
                            <label className="mb-1 block text-[11px] font-bold text-[#837567]">الحالة الجديدة</label>
                            <select className="w-full rounded-xl border border-[#d5c3b5] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" value={status} onChange={(event) => setStatus(event.target.value)}>
                              {statusOptions.map((item) => (
                                <option key={item.value} value={item.value}>{item.label}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="mb-1 block text-[11px] font-bold text-[#837567]">ملاحظة داخلية</label>
                            <textarea className="h-24 w-full rounded-xl border border-[#d5c3b5] bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" placeholder="أضف ملاحظة على تحديث الحالة..." value={note} onChange={(event) => setNote(event.target.value)} />
                          </div>

                          <button type="button" onClick={() => void handleSaveStatus()} className="w-full rounded-xl bg-[#c26d00] py-3 text-sm font-bold text-white shadow-lg shadow-[#c26d00]/20 transition hover:brightness-110" disabled={saving}>
                            {saving ? "جاري الحفظ..." : "حفظ التحديث"}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <SectionTitle title="Request Source" />
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <SourceCard label="Device Type" value={selectedRequest.requestContext?.deviceType ?? "unknown"} />
                          <SourceCard label="Channel" value={selectedRequest.requestContext?.channel ?? "web"} />
                          <SourceCard label="Browser" value={selectedRequest.requestContext?.browser ?? "Unknown"} />
                          <SourceCard label="Operating System" value={selectedRequest.requestContext?.operatingSystem ?? "Unknown"} />
                        </div>
                        <div className="rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] p-4 font-mono text-[11px] text-[#837567]">
                          {selectedRequest.requestContext?.userAgent ?? "Unknown"}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <SectionTitle title="Status History" />
                        <div className="space-y-3">
                          {(selectedRequest.statusHistory ?? []).map((event, index) => (
                            <div key={`${event.createdAt}-${index}`} className="rounded-xl border border-[#d5c3b5] bg-[#fffaf5] p-4">
                              <div className="flex items-center justify-between gap-4">
                                <strong className="text-sm font-bold text-[#1f1b16]">
                                  {event.fromStatus ? `${event.fromStatus} -> ${event.toStatus}` : event.toStatus}
                                </strong>
                                <span className="text-xs text-[#837567]">{new Date(event.createdAt).toLocaleString()}</span>
                              </div>
                              <p className="mt-2 text-sm text-[#837567]">{event.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center p-8 text-center text-sm font-semibold text-[#837567]">اختاري طلبًا من القائمة لمراجعته.</div>
                )}
              </section>
            </div>
          ) : activeTab === "countries" ? (
            <div className="grid gap-6 xl:grid-cols-[22rem_1fr]">
              <section className="rounded-[24px] border border-[#d5c3b5] bg-white p-6">
                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c26d00]">Countries</p>
                  <h3 className="mt-2 text-2xl font-black text-[#1f1b16]">إضافة دولة جديدة</h3>
                </div>

                <div className="space-y-4">
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" placeholder="الاسم بالعربي" value={countryForm.nameAr} onChange={(event) => setCountryForm((current) => ({ ...current, nameAr: event.target.value }))} />
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" placeholder="Name in English" value={countryForm.nameEn} onChange={(event) => setCountryForm((current) => ({ ...current, nameEn: event.target.value }))} />
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" placeholder="Country code" value={countryForm.code} onChange={(event) => setCountryForm((current) => ({ ...current, code: event.target.value }))} />
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" placeholder="Flag emoji" value={countryForm.flag} onChange={(event) => setCountryForm((current) => ({ ...current, flag: event.target.value }))} />
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" placeholder="نوع التأشيرة" value={countryForm.visaType} onChange={(event) => setCountryForm((current) => ({ ...current, visaType: event.target.value }))} />
                  <select className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" value={countryForm.accent} onChange={(event) => setCountryForm((current) => ({ ...current, accent: event.target.value }))}>
                    {accentOptions.map((accent) => (
                      <option key={accent} value={accent}>{accent}</option>
                    ))}
                  </select>
                  <button type="button" onClick={() => void handleAddCountry()} className="w-full rounded-xl bg-[#c26d00] py-3 text-sm font-bold text-white shadow-lg shadow-[#c26d00]/20 transition hover:brightness-110" disabled={addingCountry}>
                    {addingCountry ? "جاري الإضافة..." : "إضافة الدولة"}
                  </button>
                </div>
              </section>

              <section className="overflow-y-auto rounded-[24px] border border-[#d5c3b5] bg-white p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c26d00]">Available Countries</p>
                    <h3 className="mt-2 text-2xl font-black text-[#1f1b16]">الدول المتاحة للعميل</h3>
                  </div>
                  <div className="rounded-xl bg-[#f7f3f0] px-4 py-2 text-sm font-bold text-[#7e5700]">{countries.length} دولة</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {loadingCountries ? (
                    <div className="rounded-xl bg-[#f7f3f0] p-5 text-center text-sm font-semibold text-[#837567]">جاري تحميل الدول...</div>
                  ) : (
                    countries.map((country) => (
                      <div key={country.id} className="rounded-[24px] border border-[#d5c3b5] bg-white p-4">
                        <div className={`flex h-24 items-center justify-center rounded-[18px] bg-gradient-to-br ${country.accent} text-5xl shadow-inner`}>
                          {country.flag}
                        </div>
                        <div className="mt-4 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-black text-[#1f1b16]">{country.nameAr}</h3>
                            <p className="text-sm text-[#837567]">{country.nameEn}</p>
                          </div>
                          <span className="rounded-full bg-[#fef3e2] px-3 py-1 text-xs font-bold text-[#c26d00]">{country.visaType}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </div>
          ) : activeTab === "security" ? (
            <div className="grid gap-6 xl:grid-cols-[22rem_1fr]">
              <section className="rounded-[24px] border border-[#d5c3b5] bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c26d00]">Security</p>
                <h3 className="mt-2 text-2xl font-black text-[#1f1b16]">تغيير كلمة المرور</h3>
                <p className="mt-3 text-sm leading-7 text-[#837567]">استخدمي كلمة مرور قوية، وسيتم تحديث الجلسة الحالية مباشرة بعد نجاح العملية.</p>
              </section>

              <section className="rounded-[24px] border border-[#d5c3b5] bg-white p-6">
                <div className="max-w-xl space-y-4">
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" type="password" placeholder="كلمة المرور الحالية" value={passwordForm.currentPassword} onChange={(event) => setPasswordForm((current) => ({ ...current, currentPassword: event.target.value }))} />
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" type="password" placeholder="كلمة المرور الجديدة" value={passwordForm.newPassword} onChange={(event) => setPasswordForm((current) => ({ ...current, newPassword: event.target.value }))} />
                  <input className="w-full rounded-xl border border-[#d5c3b5] bg-[#f7f3f0] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c26d00]/20" type="password" placeholder="تأكيد كلمة المرور الجديدة" value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm((current) => ({ ...current, confirmPassword: event.target.value }))} />
                  <button type="button" onClick={() => void handleChangePassword()} className="rounded-xl bg-[#c26d00] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#c26d00]/20 transition hover:brightness-110" disabled={changingPassword}>
                    {changingPassword ? "جاري التحديث..." : "تغيير كلمة المرور"}
                  </button>
                </div>
              </section>
            </div>
          ) : (
            <div className="h-full overflow-y-auto pr-1">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <AnalyticsCard title="إجمالي الطلبات" value={analytics.totalRequests} icon="assignment" accent="bg-[#fef3e2] text-[#c26d00]" />
              <AnalyticsCard title="قيد المراجعة" value={analytics.inReviewCount} icon="hourglass_top" accent="bg-[#fff1d6] text-[#7e5700]" />
              <AnalyticsCard title="مرفوض" value={analytics.rejectedCount} icon="cancel" accent="bg-[#ffefed] text-[#ba1a1a]" />
              <AnalyticsCard title="تم الإصدار" value={analytics.issuedCount} icon="verified" accent="bg-[#e8f7e5] text-[#126c39]" />
              <AnalyticsCard title="تم التقديم" value={analytics.submittedCount} icon="task_alt" accent="bg-[#eef6d5] text-[#556500]" />
              <AnalyticsCard title="إجمالي المتقدمين" value={analytics.totalApplicants} icon="groups" accent="bg-[#f1edea] text-[#7e5700]" />
              <AnalyticsCard title="طلبات الموبايل" value={analytics.mobileRequests} icon="smartphone" accent="bg-[#edf4ff] text-[#123c7d]" />
              <AnalyticsCard title="طلبات الديسكتوب" value={analytics.desktopRequests} icon="desktop_windows" accent="bg-[#f7f3f0] text-[#412100]" />

              <section className="rounded-[24px] border border-[#d5c3b5] bg-white p-6 md:col-span-2 xl:col-span-4">
                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c26d00]">Status Chart</p>
                  <h3 className="mt-2 text-2xl font-black text-[#1f1b16]">توزيع الطلبات</h3>
                </div>
                <StatusDonutChart
                  items={[
                    { label: "تم التقديم", value: analytics.submittedCount, color: "#556500" },
                    { label: "قيد المراجعة", value: analytics.inReviewCount, color: "#c26d00" },
                    { label: "تم الإصدار", value: analytics.issuedCount, color: "#126c39" },
                    { label: "مرفوض", value: analytics.rejectedCount, color: "#ba1a1a" },
                  ]}
                />
              </section>

              <section className="rounded-[24px] border border-[#d5c3b5] bg-white p-6 md:col-span-2 xl:col-span-4">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c26d00]">Latest Activity</p>
                    <h3 className="mt-2 text-2xl font-black text-[#1f1b16]">آخر الطلبات</h3>
                  </div>
                </div>

                <div className="grid gap-3">
                  {requests.slice(0, 5).map((request) => (
                    <div key={request.referenceCode} className="flex items-center justify-between rounded-xl border border-[#d5c3b5] bg-[#fffaf5] p-4">
                      <div>
                        <p className="font-black text-[#1f1b16]">{request.referenceCode}</p>
                        <p className="mt-1 text-sm text-[#837567]">{request.fullName} • {request.country}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[request.status] ?? "bg-[#f1edea] text-[#1f1b16]"}`}>
                        {statusOptions.find((item) => item.value === request.status)?.label ?? request.status}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}


function SectionTitle({ title }: { title: string }) {
  return <h4 className="border-b border-[#d5c3b5] pb-2 text-center text-xs font-black uppercase tracking-[0.28em] text-[#837567]">{title}</h4>;
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#d5c3b5]/40 bg-[#f7f3f0] p-4">
      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#837567]">{label}</p>
      <p className="text-sm font-black text-[#412100]">{value}</p>
    </div>
  );
}

function FileSummaryCard({
  label,
  value,
  onOpen,
}: {
  label: string;
  value: string;
  onOpen: () => void;
}) {
  const hasValue = value && value !== "-";
  const hasStoredPath = hasValue && value.includes("/");

  return (
    <div className="rounded-xl border border-[#d5c3b5]/40 bg-[#f7f3f0] p-4">
      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#837567]">{label}</p>
      <p className="break-all text-sm font-black text-[#412100]">{value}</p>
      {hasStoredPath ? (
        <button
          type="button"
          onClick={onOpen}
          className="mt-3 rounded-full bg-[#7e5700] px-4 py-2 text-xs font-bold text-white"
        >
          فتح الملف
        </button>
      ) : hasValue ? (
        <p className="mt-3 rounded-xl bg-[#fff1e4] px-3 py-2 text-xs font-bold text-[#7e5700]">
          ملف قديم محفوظ كاسم فقط. ارفع طلبًا جديدًا بعد تفعيل Storage لفتحه كرابط آمن.
        </p>
      ) : null}
    </div>
  );
}

function SourceCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#d5c3b5]/40 bg-white p-4 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#837567]">{label}</p>
      <p className="mt-2 text-sm font-black text-[#1f1b16]">{value}</p>
    </div>
  );
}

function AnalyticsCard({ title, value, icon, accent }: { title: string; value: number; icon: string; accent: string }) {
  return (
    <section className="rounded-[24px] border border-[#d5c3b5] bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#837567]">{title}</p>
          <h3 className="mt-3 text-3xl font-black text-[#1f1b16]">{value}</h3>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </section>
  );
}

function StatusDonutChart({
  items,
}: {
  items: Array<{ label: string; value: number; color: string }>;
}) {
  const total = Math.max(
    items.reduce((sum, item) => sum + item.value, 0),
    1,
  );
  let currentAngle = 0;
  const stops = items
    .map((item) => {
      const start = currentAngle;
      const angle = (item.value / total) * 360;
      currentAngle += angle;
      return `${item.color} ${start}deg ${currentAngle}deg`;
    })
    .join(", ");

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div
        className="flex h-64 w-64 items-center justify-center rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
        style={{ background: `conic-gradient(${stops})` }}
      >
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white shadow-inner">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-[#837567]">
            Total Orders
          </span>
          <span className="mt-2 text-4xl font-black text-[#1f1b16]">{total}</span>
        </div>
      </div>

      <div className="grid w-full gap-4 lg:max-w-md">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-[#d5c3b5] bg-[#faf7f4] p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-3.5 w-3.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-bold text-[#412100]">{item.label}</span>
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-[#1f1b16]">{item.value}</div>
                <div className="text-[11px] font-medium text-[#837567]">
                  {Math.round((item.value / total) * 100)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
