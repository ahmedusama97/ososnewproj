import { LegalPage, LegalSection } from "../../components/legal-page";

export default function CompliancePage() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="إفصاح الامتثال"
      description="توضيح مهم حول حدود الخدمة، حماية البيانات، وعدم الانتماء للجهات الحكومية."
    >
      <LegalSection title="عدم الانتماء الحكومي">
        <p>VisaFlow ليست جهة حكومية ولا سفارة ولا قنصلية ولا مركز تأشيرات رسمي. أي شعارات أو أسماء دول تُستخدم فقط لتوضيح وجهات الطلب.</p>
      </LegalSection>
      <LegalSection title="لا يوجد ضمان للنتيجة">
        <p>قرار إصدار التأشيرة أو رفضها أو طلب مستندات إضافية يعود بالكامل للجهات الرسمية المختصة، ولا يمكن للمنصة ضمان أي نتيجة.</p>
      </LegalSection>
      <LegalSection title="معالجة البيانات">
        <p>يجب الحصول على موافقة مقدم الطلب قبل معالجة بياناته ومستنداته، خصوصًا عند وجود أكثر من متقدم داخل طلب واحد.</p>
      </LegalSection>
      <LegalSection title="مراجعة قانونية">
        <p>قبل الإطلاق التجاري الكامل في السوق السعودي، ننصح بمراجعة الصياغات والسياسات والترخيص التجاري مع مستشار قانوني مختص.</p>
      </LegalSection>
    </LegalPage>
  );
}
