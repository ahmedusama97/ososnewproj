import Link from "next/link";
import { LegalPage, LegalSection } from "../../components/legal-page";

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="التواصل والدعم"
      description="قنوات التواصل التشغيلية للمتابعة قبل وبعد تقديم الطلب."
    >
      <LegalSection title="متابعة الطلبات">
        <p>للاستفسار عن طلب قائم، استخدم رقم المرجع من صفحة تتبع الطلب لتقليل مشاركة البيانات الحساسة عبر المحادثات العامة.</p>
        <Link href="/track" className="inline-flex rounded-full bg-[#964900] px-5 py-2 text-sm font-bold text-white">
          فتح صفحة التتبع
        </Link>
      </LegalSection>
      <LegalSection title="الدعم التجاري">
        <p>يمكن ربط هذه الصفحة لاحقًا برقم واتساب رسمي أو بريد دعم خاص بالشركة بعد اعتماد بيانات النشاط التجاري.</p>
      </LegalSection>
    </LegalPage>
  );
}
