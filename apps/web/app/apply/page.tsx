"use client";

import Link from "next/link";
import { ChangeEvent, ReactNode, useEffect, useMemo, useState } from "react";
import { apiUrl } from "../../lib/api";
import { visaDestinations } from "../../lib/visa-content";

type StepKey = "country" | "personal" | "passport" | "documents" | "success";

type CountryOption = {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  visaType: string;
  accent: string;
};

type ApplicantForm = {
  firstName: string;
  lastName: string;
  nationality: string;
  passportNumber: string;
  issuingCountry: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  passportDocumentName: string;
  personalPhotoName: string;
};

type FileField = "passportDocumentName" | "personalPhotoName";

type UploadedFileMeta = {
  name: string;
  sizeLabel: string;
  previewUrl: string | null;
  extension: string;
};

type ContactForm = {
  email: string;
  phone: string;
};

const fallbackCountries: CountryOption[] = [
  { id: "fr", code: "fr", nameAr: "فرنسا", nameEn: "France", flag: "🇫🇷", visaType: "تأشيرة سياحية", accent: "from-[#213f8f] via-white to-[#d42028]" },
  { id: "us", code: "us", nameAr: "أمريكا", nameEn: "United States", flag: "🇺🇸", visaType: "تأشيرة سياحية", accent: "from-[#123c7d] via-white to-[#c62839]" },
  { id: "gb", code: "gb", nameAr: "بريطانيا", nameEn: "United Kingdom", flag: "🇬🇧", visaType: "تأشيرة سياحية", accent: "from-[#1a3b8f] via-white to-[#cf2d37]" },
  { id: "de", code: "de", nameAr: "ألمانيا", nameEn: "Germany", flag: "🇩🇪", visaType: "تأشيرة سياحية", accent: "from-black via-[#d52b1e] to-[#ffce00]" },
];

const steps: Array<{ key: Exclude<StepKey, "country" | "success">; label: string }> = [
  { key: "personal", label: "البيانات" },
  { key: "passport", label: "الجواز" },
  { key: "documents", label: "المستندات" },
];

const MAX_APPLICANTS = 100;
const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024;
const ACCEPTED_DOCUMENT_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];
const ACCEPTED_DOCUMENT_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
];

function createApplicant(): ApplicantForm {
  return {
    firstName: "",
    lastName: "",
    nationality: "",
    passportNumber: "",
    issuingCountry: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    passportDocumentName: "",
    personalPhotoName: "",
  };
}

function normalizeFileExtension(fileName: string) {
  const dotIndex = fileName.lastIndexOf(".");
  return dotIndex >= 0 ? fileName.slice(dotIndex).toLowerCase() : "";
}

function formatFileSize(size: number) {
  if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  return `${Math.max(1, Math.round(size / 1024))} KB`;
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("تعذر قراءة الملف."));
    reader.readAsDataURL(file);
  });
}

function validateUploadFile(file: File) {
  const extension = normalizeFileExtension(file.name);
  const typeMatches =
    !file.type || ACCEPTED_DOCUMENT_TYPES.includes(file.type.toLowerCase());
  const extensionMatches = ACCEPTED_DOCUMENT_EXTENSIONS.includes(extension);

  if (!typeMatches && !extensionMatches) {
    return "نوع الملف غير مدعوم. المسموح فقط PDF أو JPG أو PNG.";
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return "حجم الملف كبير جدًا. الحد الأقصى 8 MB لكل ملف.";
  }

  return "";
}

export default function ApplyPage() {
  const [step, setStep] = useState<StepKey>("country");
  const [countries, setCountries] = useState<CountryOption[]>(fallbackCountries);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [referenceCode, setReferenceCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [uploadingFileKey, setUploadingFileKey] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFileMeta>>({});
  const [contactForm, setContactForm] = useState<ContactForm>({
    email: "",
    phone: "",
  });
  const [applicants, setApplicants] = useState<ApplicantForm[]>([createApplicant()]);

  useEffect(() => {
    async function loadCountries() {
      setCountriesLoading(true);
      try {
        const response = await fetch(apiUrl("/api/countries"), { cache: "no-store" });
        if (response.ok) {
          const payload = (await response.json()) as CountryOption[];
          if (payload.length) {
            setCountries(payload);
          }
        }
      } finally {
        setCountriesLoading(false);
      }
    }

    if (step === "country") {
      void loadCountries();
    }
  }, [step]);

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();
    if (!query) {
      return countries;
    }

    return countries.filter((country) =>
      [country.nameAr, country.nameEn, country.visaType].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [countries, countrySearch]);

  const stepIndex = useMemo(() => steps.findIndex((item) => item.key === step), [step]);
  const progressWidth = step === "success" ? "100%" : `${Math.max(0, stepIndex) * 50}%`;
  const pricingEstimate = useMemo(() => {
    if (!selectedCountry) {
      return null;
    }

    return visaDestinations.find(
      (destination) =>
        destination.country.toLowerCase() === selectedCountry.nameEn.toLowerCase() ||
        destination.countryAr === selectedCountry.nameAr,
    );
  }, [selectedCountry]);

  function updateContactField<K extends keyof ContactForm>(key: K, value: ContactForm[K]) {
    setContactForm((current) => ({ ...current, [key]: value }));
  }

  function updateApplicantField<K extends keyof ApplicantForm>(
    applicantIndex: number,
    key: K,
    value: ApplicantForm[K],
  ) {
    setApplicants((current) =>
      current.map((applicant, index) =>
        index === applicantIndex ? { ...applicant, [key]: value } : applicant,
      ),
    );
  }

  function setApplicantCount(count: number) {
    const safeCount = Math.min(MAX_APPLICANTS, Math.max(1, count));
    setApplicants((current) => {
      if (safeCount === current.length) {
        return current;
      }

      if (safeCount < current.length) {
        return current.slice(0, safeCount);
      }

      return [
        ...current,
        ...Array.from({ length: safeCount - current.length }, () => createApplicant()),
      ];
    });
  }

  async function uploadDocument(file: File, base64: string) {
    const response = await fetch(apiUrl("/api/uploads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileName: file.name,
        contentType: file.type || "application/octet-stream",
        base64,
      }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.message ?? "تعذر رفع الملف.");
    }

    return String(payload.path ?? payload.name ?? file.name);
  }

  async function handleDocumentSelect(
    applicantIndex: number,
    key: FileField,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];
    const metaKey = `${applicantIndex}-${key}`;
    if (!file) {
      updateApplicantField(applicantIndex, key, "");
      setUploadedFiles((current) => {
        const next = { ...current };
        delete next[metaKey];
        return next;
      });
      return;
    }

    const validationError = validateUploadFile(file);
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setUploadingFileKey(metaKey);
    setSubmitError("");

    try {
      const dataUrl = await readFileAsDataUrl(file);
      const base64 = dataUrl.split(",")[1] ?? "";
      const storedName = await uploadDocument(file, base64);
      updateApplicantField(applicantIndex, key, storedName);
      setUploadedFiles((current) => ({
        ...current,
        [metaKey]: {
          name: file.name,
          sizeLabel: formatFileSize(file.size),
          previewUrl: file.type.startsWith("image/") ? dataUrl : null,
          extension: normalizeFileExtension(file.name) || "file",
        },
      }));
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "تعذر رفع الملف.");
    } finally {
      setUploadingFileKey("");
    }
  }

  function handleCountrySelect(country: CountryOption) {
    setSelectedCountry(country);
    setSubmitError("");
    setStep("personal");
  }

  function validatePersonalStep() {
    if (!contactForm.email || !contactForm.phone) {
      return "يرجى استكمال بيانات التواصل أولًا.";
    }

    if (
      applicants.some(
        (applicant) =>
          !applicant.firstName || !applicant.lastName || !applicant.nationality,
      )
    ) {
      return "يرجى استكمال الاسم الأول واسم العائلة والجنسية لكل شخص في الطلب.";
    }

    return "";
  }

  function validatePassportStep() {
    if (
      applicants.some(
        (applicant) =>
          !applicant.passportNumber ||
          !applicant.issuingCountry ||
          !applicant.passportIssueDate ||
          !applicant.passportExpiryDate,
      )
    ) {
      return "يرجى استكمال بيانات الجواز لكل الأشخاص قبل المتابعة.";
    }

    return "";
  }

  function validateDocumentsStep() {
    if (
      applicants.some(
        (applicant) => !applicant.passportDocumentName || !applicant.personalPhotoName,
      )
    ) {
      return "يرجى رفع صورة الجواز والصورة الشخصية لكل شخص قبل الإرسال.";
    }

    return "";
  }

  async function handleAdvance(nextStep: StepKey) {
    setSubmitError("");

    if (step === "personal") {
      const error = validatePersonalStep();
      if (error) {
        setSubmitError(error);
        return;
      }

      setStep(nextStep);
      return;
    }

    if (step === "passport") {
      const error = validatePassportStep();
      if (error) {
        setSubmitError(error);
        return;
      }

      setStep(nextStep);
      return;
    }

    const documentsError = validateDocumentsStep();
    if (documentsError) {
      setSubmitError(documentsError);
      return;
    }

    const primaryApplicant = applicants[0];
    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl("/api/visa-requests"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Client-Channel": "web",
        },
        body: JSON.stringify({
          fullName: `${primaryApplicant.firstName} ${primaryApplicant.lastName}`.trim(),
          email: contactForm.email,
          phone: `+966 ${contactForm.phone}`,
          passportNumber: primaryApplicant.passportNumber,
          country: selectedCountry?.nameEn ?? "",
          visaType: selectedCountry?.visaType ?? "تأشيرة سياحية",
          travelDate: primaryApplicant.passportIssueDate,
          status: "submitted",
          issuingCountry: primaryApplicant.issuingCountry,
          passportExpiryDate: primaryApplicant.passportExpiryDate,
          passportDocumentName: primaryApplicant.passportDocumentName,
          personalPhotoName: primaryApplicant.personalPhotoName,
          applicants: applicants.map((applicant) => ({
            ...applicant,
            fullName: `${applicant.firstName} ${applicant.lastName}`.trim(),
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("تعذر إرسال الطلب حاليًا.");
      }

      const payload = await response.json();
      setReferenceCode(payload.referenceCode);
      setStep("success");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "تعذر إرسال الطلب.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="apply-shell min-h-screen">
      <nav className="apply-nav">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="text-2xl font-black tracking-tight text-[#964900]">VisaFlow</div>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/home" className="font-medium tracking-tight text-slate-600 transition-colors hover:text-[#964900]">Home</Link>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="material-symbols-outlined cursor-pointer">language</span>
            <button className="apply-primary px-6 py-2.5">ابدأ الطلب</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 pb-16 pt-32">
        <section className="mb-10 text-center">
          <div className="apply-chip mx-auto mb-6 bg-[#9df2b2]/30 text-[#19713d]">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
            <span>بوابة تقديم آمنة</span>
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            {step === "country" ? "اختر الدولة ونوع التأشيرة" : "نموذج طلب التأشيرة"}
          </h1>
          <p className="mx-auto max-w-2xl text-[#574235]">
            {step === "country"
              ? "ابدأ باختيار الوجهة أولًا، ثم حدد عدد الأشخاص وأكمِل بيانات كل شخص داخل نفس الطلب."
              : "يمكنك الآن تقديم طلب جماعي لنفس الوجهة مع تعبئة بيانات كل متقدم خطوة بخطوة."}
          </p>
        </section>

        {step === "country" ? (
          <section className="apply-card p-5 md:p-8">
            <div className="mb-6 rounded-[28px] bg-[#fbf7f2] p-5 md:p-6">
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#964900]">search</span>
                <input className="w-full rounded-full border border-[#ff8a26] bg-white py-3 pl-12 pr-5 text-right text-sm font-medium text-[#1c1b1b] outline-none transition focus:border-[#964900]" placeholder="ابحث عن الدولة" value={countrySearch} onChange={(event) => setCountrySearch(event.target.value)} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCountries.map((country) => (
                <button key={country.id} type="button" onClick={() => handleCountrySelect(country)} className="group rounded-[26px] border border-[#ead7ca] bg-white p-3 text-right shadow-[0_16px_50px_rgba(150,73,0,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#ff8a26] hover:shadow-[0_20px_60px_rgba(150,73,0,0.12)]">
                  <div className={`flex h-28 items-center justify-center rounded-[22px] bg-gradient-to-br ${country.accent} text-6xl shadow-inner`}>
                    <span className="drop-shadow-sm">{country.flag}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6b57]">{country.nameEn}</p>
                      <h3 className="mt-1 text-lg font-black text-[#1c1b1b]">{country.nameAr}</h3>
                    </div>
                    <span className="rounded-full bg-[#fff1e4] px-3 py-1 text-xs font-bold text-[#964900]">{country.visaType}</span>
                  </div>
                  <div className="mt-4 inline-flex rounded-full bg-[#ff8a26] px-4 py-1.5 text-xs font-black text-white">ابدأ الطلب</div>
                </button>
              ))}
            </div>

            {countriesLoading ? <div className="mt-6 text-center text-sm font-semibold text-[#574235]">جاري تحميل الدول...</div> : null}
          </section>
        ) : step !== "success" ? (
          <>
            <section className="relative mb-12 grid grid-cols-3 gap-4">
              {steps.map((item, index) => {
                const currentStepNumber = stepIndex + 1;
                const completed = index < currentStepNumber - 1;
                const active = !completed && index === currentStepNumber - 1;

                return (
                  <div key={item.key} className="flex flex-col items-center gap-3">
                    <div className={["z-10 flex h-12 w-12 items-center justify-center rounded-full font-bold", completed ? "bg-[#126c39] text-white shadow-lg shadow-[#126c39]/20" : active ? "bg-[#964900] text-white shadow-lg shadow-[#964900]/20" : "bg-[#e5e2e1] text-[#574235]"].join(" ")}>
                      {completed ? <span className="material-symbols-outlined text-xl">check</span> : index + 1}
                    </div>
                    <span className={["text-xs font-bold uppercase tracking-[0.24em]", completed ? "text-[#126c39]" : active ? "text-[#964900]" : "text-[#574235]"].join(" ")}>{item.label}</span>
                  </div>
                );
              })}
              <div className="absolute left-[16.6%] right-[16.6%] top-6 -z-0 h-0.5 bg-[#e5e2e1]">
                <div className="h-full bg-[#964900] transition-all duration-300" style={{ width: progressWidth }} />
              </div>
            </section>

            {selectedCountry ? (
              <div className="mb-6 flex items-center justify-between rounded-[28px] border border-[#dfc1af] bg-white/90 px-5 py-4 shadow-[0_20px_60px_rgba(150,73,0,0.08)]">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedCountry.accent} text-3xl shadow-inner`}>{selectedCountry.flag}</div>
                <div>
                  <p className="text-sm font-semibold text-[#574235]">الوجهة المختارة</p>
                  <strong className="block text-xl font-black text-[#1c1b1b]">{selectedCountry.nameAr}</strong>
                  {pricingEstimate ? (
                    <p className="mt-1 text-xs font-bold text-[#964900]">
                      تقدير الخدمة يبدأ من {pricingEstimate.priceSar} SAR • {pricingEstimate.processingTime}
                    </p>
                  ) : null}
                </div>
                </div>
                <button type="button" onClick={() => setStep("country")} className="rounded-full border border-[#dfc1af] px-4 py-2 text-sm font-bold text-[#964900] transition hover:bg-[#fff7f0]">تغيير الدولة</button>
              </div>
            ) : null}

            <WizardCard
              step={step}
              selectedCountry={selectedCountry}
              applicants={applicants}
              contactForm={contactForm}
              isSubmitting={isSubmitting}
              submitError={submitError}
              onContactChange={updateContactField}
              onApplicantChange={updateApplicantField}
              onApplicantCountChange={setApplicantCount}
              onDocumentSelect={handleDocumentSelect}
              uploadingFileKey={uploadingFileKey}
              uploadedFiles={uploadedFiles}
              onNext={handleAdvance}
            />
          </>
        ) : (
          <SuccessCard referenceCode={referenceCode} />
        )}
      </main>
    </div>
  );
}

function WizardCard({
  step,
  selectedCountry,
  applicants,
  contactForm,
  isSubmitting,
  submitError,
  onContactChange,
  onApplicantChange,
  onApplicantCountChange,
  onDocumentSelect,
  uploadingFileKey,
  uploadedFiles,
  onNext,
}: {
  step: Exclude<StepKey, "country" | "success">;
  selectedCountry: CountryOption | null;
  applicants: ApplicantForm[];
  contactForm: ContactForm;
  isSubmitting: boolean;
  submitError: string;
  onContactChange: <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => void;
  onApplicantChange: <K extends keyof ApplicantForm>(
    applicantIndex: number,
    key: K,
    value: ApplicantForm[K],
  ) => void;
  onApplicantCountChange: (count: number) => void;
  onDocumentSelect: (
    applicantIndex: number,
    key: FileField,
    event: ChangeEvent<HTMLInputElement>,
  ) => Promise<void>;
  uploadingFileKey: string;
  uploadedFiles: Record<string, UploadedFileMeta>;
  onNext: (step: StepKey) => Promise<void>;
}) {
  const config = {
    personal: {
      title: "البيانات الشخصية",
      description: "حددي عدد الأشخاص أولًا، ثم أدخلي الاسم والجنسية لكل شخص مع بيانات التواصل المشتركة للطلب.",
      icon: "group",
      nextLabel: "الانتقال إلى بيانات الجواز",
      nextStep: "passport" as StepKey,
      fields: (
        <div className="space-y-8">
          <div className="rounded-[28px] border border-[#dfc1af] bg-[#fffaf6] p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#964900]">Applicants</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">عدد الأشخاص في الطلب</h3>
              </div>
              <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-black text-[#964900]">
                {applicants.length} أشخاص
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#dfc1af] bg-white p-3">
              <button
                type="button"
                onClick={() => onApplicantCountChange(Math.max(1, applicants.length - 1))}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfc1af] text-xl font-black text-[#964900] transition hover:bg-[#fff7f0] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={applicants.length === 1}
              >
                -
              </button>
              <div className="min-w-28 rounded-xl bg-[#f6f3f2] px-5 py-3 text-center font-black text-[#964900]">
                {applicants.length} {applicants.length === 1 ? "شخص" : "أشخاص"}
              </div>
              <button
                type="button"
                onClick={() => onApplicantCountChange(Math.min(MAX_APPLICANTS, applicants.length + 1))}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfc1af] text-xl font-black text-[#964900] transition hover:bg-[#fff7f0] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={applicants.length === MAX_APPLICANTS}
              >
                +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field label="الدولة المختارة">
              <div className="apply-input flex items-center justify-between gap-3 bg-[#fbf7f2]">
                <span className="text-2xl">{selectedCountry?.flag}</span>
                <span className="font-bold text-[#1c1b1b]">{selectedCountry?.nameAr}</span>
              </div>
            </Field>
            <Field label="نوع التأشيرة">
              <div className="apply-input bg-[#fbf7f2] font-bold text-[#1c1b1b]">
                {selectedCountry?.visaType ?? "تأشيرة سياحية"}
              </div>
            </Field>
            <Field label="البريد الإلكتروني">
              <input className="apply-input" placeholder="example@domain.com" type="email" value={contactForm.email} onChange={(event) => onContactChange("email", event.target.value)} />
            </Field>
            <Field label="رقم الجوال">
              <div className="flex gap-2">
                <div className="w-24 rounded-lg bg-[#f6f3f2] p-4 text-center font-bold">+966</div>
                <input className="apply-input flex-1" placeholder="50 000 0000" value={contactForm.phone} onChange={(event) => onContactChange("phone", event.target.value)} />
              </div>
            </Field>
          </div>

          <div className="grid gap-5">
            {applicants.map((applicant, index) => (
              <ApplicantSection key={`personal-${index}`} title={`بيانات الشخص ${index + 1}`}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field label="الاسم الأول بالإنجليزية">
                    <input className="apply-input" placeholder="First name" value={applicant.firstName} onChange={(event) => onApplicantChange(index, "firstName", event.target.value)} />
                  </Field>
                  <Field label="اسم العائلة بالإنجليزية">
                    <input className="apply-input" placeholder="Last name" value={applicant.lastName} onChange={(event) => onApplicantChange(index, "lastName", event.target.value)} />
                  </Field>
                  <Field label="الجنسية">
                    <Select value={applicant.nationality} onChange={(event) => onApplicantChange(index, "nationality", event.target.value)} />
                  </Field>
                </div>
              </ApplicantSection>
            ))}
          </div>
        </div>
      ),
    },
    passport: {
      title: "بيانات الجواز",
      description: "في هذه الخطوة ستضيفي بيانات الجواز لكل شخص داخل نفس الطلب.",
      icon: "badge",
      nextLabel: "الانتقال إلى المستندات",
      nextStep: "documents" as StepKey,
      fields: (
        <div className="grid gap-5">
          {applicants.map((applicant, index) => (
            <ApplicantSection
              key={`passport-${index}`}
              title={`جواز الشخص ${index + 1}`}
              subtitle={`${applicant.firstName || "بدون اسم"} ${applicant.lastName || ""}`.trim()}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="رقم الجواز">
                  <input className="apply-input" placeholder="أدخل رقم الجواز" value={applicant.passportNumber} onChange={(event) => onApplicantChange(index, "passportNumber", event.target.value)} />
                </Field>
                <Field label="دولة إصدار الجواز">
                  <Select value={applicant.issuingCountry} onChange={(event) => onApplicantChange(index, "issuingCountry", event.target.value)} />
                </Field>
                <Field label="تاريخ الإصدار">
                  <input className="apply-input" type="date" value={applicant.passportIssueDate} onChange={(event) => onApplicantChange(index, "passportIssueDate", event.target.value)} />
                </Field>
                <Field label="تاريخ الانتهاء">
                  <input className="apply-input" type="date" value={applicant.passportExpiryDate} onChange={(event) => onApplicantChange(index, "passportExpiryDate", event.target.value)} />
                </Field>
              </div>
            </ApplicantSection>
          ))}
        </div>
      ),
    },
    documents: {
      title: "رفع المستندات",
      description: "ارفعي نسخة الجواز والصورة الشخصية لكل شخص قبل إرسال الطلب الجماعي.",
      icon: "cloud_upload",
      nextLabel: "إرسال الطلب",
      nextStep: "success" as StepKey,
      fields: (
        <div className="grid gap-5">
          {applicants.map((applicant, index) => (
            <ApplicantSection
              key={`documents-${index}`}
              title={`مستندات الشخص ${index + 1}`}
              subtitle={`${applicant.firstName || "بدون اسم"} ${applicant.lastName || ""}`.trim()}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <UploadCard
                  label="صورة الجواز"
                  icon="description"
                  hint="PDF أو JPG أو PNG حتى 8 MB"
                  selectedFile={applicant.passportDocumentName}
                  isUploading={uploadingFileKey === `${index}-passportDocumentName`}
                  fileMeta={uploadedFiles[`${index}-passportDocumentName`] ?? null}
                  onFileSelect={(event) => onDocumentSelect(index, "passportDocumentName", event)}
                />
                <UploadCard
                  label="الصورة الشخصية"
                  icon="account_circle"
                  hint="JPG أو PNG حتى 8 MB"
                  selectedFile={applicant.personalPhotoName}
                  isUploading={uploadingFileKey === `${index}-personalPhotoName`}
                  fileMeta={uploadedFiles[`${index}-personalPhotoName`] ?? null}
                  onFileSelect={(event) => onDocumentSelect(index, "personalPhotoName", event)}
                />
              </div>
            </ApplicantSection>
          ))}
        </div>
      ),
    },
  }[step];

  return (
    <section className="apply-card relative p-8 md:p-12">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#964900]" />
      <header className="mb-10 flex items-start justify-between gap-4">
        <div>
          <h2 className="mb-2 text-2xl font-bold">{config.title}</h2>
          <p className="max-w-2xl text-[#574235]">{config.description}</p>
        </div>
        <span className="material-symbols-outlined text-5xl text-[#e5e2e1]">{config.icon}</span>
      </header>
      <form className="space-y-8">
        {config.fields}
        {submitError ? <div className="rounded-lg bg-[#ffdad6] px-4 py-3 text-sm font-medium text-[#93000a]">{submitError}</div> : null}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#f0eded] pt-8 md:flex-row">
          <div className="flex items-center gap-3 text-[#19713d]">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>shield</span>
            <p className="text-xs font-medium">يتم التعامل مع بيانات جميع المتقدمين بشكل آمن ومشفّر.</p>
          </div>
          <button className="apply-primary w-full md:w-auto" type="button" onClick={() => void onNext(config.nextStep)} disabled={isSubmitting}>
            {isSubmitting && step === "documents" ? "جاري الإرسال..." : config.nextLabel}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </form>
    </section>
  );
}

function SuccessCard({ referenceCode }: { referenceCode: string }) {
  return (
    <section className="apply-card overflow-hidden border-t-4 border-t-[#ff8000]">
      <div className="flex flex-col items-center p-8 text-center md:p-12">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#9df2b2]/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#126c39] text-white shadow-inner">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"wght" 700' }}>check</span>
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">تم إرسال الطلب بنجاح</h1>
        <p className="mb-8 max-w-lg leading-relaxed text-slate-600">تم استلام الطلب الجماعي، ويمكن لفريق العمليات الآن مراجعته ومتابعة كل الأشخاص من لوحة الإدارة.</p>
        <div className="mb-12 rounded-full bg-[#f6f3f2] px-6 py-3">
          <span className="text-sm font-semibold tracking-tight text-[#574235]">رقم المرجع:</span>
          <span className="ml-2 text-sm font-bold text-[#964900]">{referenceCode}</span>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
          <Link href={`/track?reference=${referenceCode}`} className="apply-primary w-full md:w-auto">تتبع الطلب<span className="material-symbols-outlined">search</span></Link>
          <Link href="/home" className="apply-primary w-full bg-[#574235] md:w-auto">العودة إلى الرئيسية<span className="material-symbols-outlined">arrow_forward</span></Link>
        </div>
      </div>
    </section>
  );
}

function ApplicantSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-[#dfc1af] bg-[#fffaf6] p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black tracking-tight text-[#1c1b1b]">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm font-semibold text-[#964900]">{subtitle}</p>
          ) : null}
        </div>
        <span className="rounded-full bg-[#fff1e4] px-3 py-1 text-xs font-bold text-[#964900]">طلب جماعي</span>
      </div>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <div className="space-y-2"><label className="block text-sm font-bold tracking-tight text-[#574235]">{label}</label>{children}</div>;
}

function Select({ value, onChange }: { value: string; onChange: (event: ChangeEvent<HTMLSelectElement>) => void }) {
  return (
    <div className="relative">
      <select className="apply-select" value={value} onChange={onChange}>
        <option value="">اختر من القائمة</option>
        <option>Saudi Arabia</option>
        <option>United Kingdom</option>
        <option>United States</option>
        <option>Egypt</option>
        <option>India</option>
      </select>
      <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#574235]">expand_more</span>
    </div>
  );
}

function UploadCard({
  label,
  icon,
  hint,
  selectedFile,
  isUploading,
  fileMeta,
  onFileSelect,
}: {
  label: string;
  icon: string;
  hint: string;
  selectedFile: string;
  isUploading: boolean;
  fileMeta: UploadedFileMeta | null;
  onFileSelect: (event: ChangeEvent<HTMLInputElement>) => void | Promise<void>;
}) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-bold tracking-tight text-[#574235]">{label}</label>
      <div className="group relative flex h-48 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[#dfc1af] bg-[#f6f3f2]/60 transition-colors hover:bg-[#f6f3f2]">
        <input
          className="absolute inset-0 cursor-pointer opacity-0"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
          onChange={onFileSelect}
          disabled={isUploading}
        />
        {fileMeta?.previewUrl ? (
          <img
            src={fileMeta.previewUrl}
            alt={fileMeta.name}
            className="h-24 w-24 rounded-2xl object-cover shadow-inner"
          />
        ) : (
          <span className="material-symbols-outlined text-4xl text-[#574235]/40 transition-colors group-hover:text-[#964900]">{icon}</span>
        )}
        <div className="text-center">
          <p className="text-sm font-bold text-[#1c1b1b]">
            {isUploading ? "جاري رفع الملف..." : fileMeta?.name || selectedFile || "اضغطي للرفع أو اسحبي الملف هنا"}
          </p>
          <p className="mt-1 break-all px-4 text-xs text-[#574235]">{hint}</p>
          {fileMeta ? (
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#964900]">
                {fileMeta.extension.replace(".", "").toUpperCase()}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#574235]">
                {fileMeta.sizeLabel}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
