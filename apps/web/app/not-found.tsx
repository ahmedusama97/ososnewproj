import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="apply-shell flex min-h-screen items-center justify-center px-4">
      <div className="apply-card max-w-xl p-10 text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#964900]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-[#1c1b1b]">
          الصفحة غير موجودة
        </h1>
        <p className="mt-4 text-lg leading-8 text-[#574235]">
          الرابط الذي فتحته غير متاح حاليًا. يمكنك الرجوع إلى الصفحة الرئيسية أو بدء طلب جديد.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/home" className="apply-primary justify-center">
            العودة إلى الرئيسية
          </Link>
          <Link
            href="/apply"
            className="rounded-lg border border-[#dfc1af] bg-white px-8 py-4 font-bold text-[#964900] transition hover:-translate-y-0.5"
          >
            ابدأ الطلب
          </Link>
        </div>
      </div>
    </div>
  );
}
