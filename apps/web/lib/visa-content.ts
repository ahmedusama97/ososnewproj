export type VisaDestination = {
  slug: string;
  country: string;
  countryAr: string;
  visaType: string;
  icon: string;
  tone: string;
  priceSar: number;
  processingTime: string;
  requirements: string[];
  summary: string;
};

export const visaDestinations: VisaDestination[] = [
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    countryAr: "المملكة المتحدة",
    visaType: "Standard Visitor",
    icon: "location_on",
    tone: "bg-[#d3e4ff] text-[#004881]",
    priceSar: 690,
    processingTime: "15 إلى 30 يوم عمل",
    summary: "تقديم ومراجعة ملف زيارة المملكة المتحدة مع متابعة حالة الطلب وتجهيز المستندات الأساسية.",
    requirements: [
      "صورة جواز ساري",
      "صورة شخصية حديثة",
      "تعريف عمل أو سجل تجاري",
      "كشف حساب حديث حسب الحالة",
    ],
  },
  {
    slug: "schengen",
    country: "Schengen Area",
    countryAr: "شنغن",
    visaType: "Tourism & Business",
    icon: "euro",
    tone: "bg-[#9df2b2] text-[#005228]",
    priceSar: 540,
    processingTime: "10 إلى 20 يوم عمل",
    summary: "مراجعة ملف شنغن وتجهيز قائمة المستندات المناسبة للدولة والغرض من السفر.",
    requirements: [
      "حجز سفر مبدئي",
      "حجز فندقي أو دعوة",
      "تأمين سفر",
      "تعريف عمل وكشف حساب",
    ],
  },
  {
    slug: "usa",
    country: "United States",
    countryAr: "أمريكا",
    visaType: "B1/B2 Visa",
    icon: "star",
    tone: "bg-[#ffdcc7] text-[#723600]",
    priceSar: 780,
    processingTime: "حسب مواعيد السفارة",
    summary: "مساعدة في تجهيز بيانات طلب B1/B2 وتنظيم الملف قبل الموعد.",
    requirements: [
      "جواز ساري",
      "بيانات السفر والعمل",
      "معلومات عائلية أساسية",
      "صورة شخصية بالمواصفات",
    ],
  },
  {
    slug: "turkey",
    country: "Turkey",
    countryAr: "تركيا",
    visaType: "e-Visa",
    icon: "explore",
    tone: "bg-[#e5e2e1] text-[#574235]",
    priceSar: 220,
    processingTime: "1 إلى 3 أيام عمل",
    summary: "تجهيز طلب التأشيرة الإلكترونية ومراجعة البيانات قبل الإرسال.",
    requirements: [
      "جواز ساري",
      "بيانات التواصل",
      "تاريخ السفر المتوقع",
      "صورة جواز واضحة",
    ],
  },
  {
    slug: "france",
    country: "France",
    countryAr: "فرنسا",
    visaType: "Tourist Visa",
    icon: "flag",
    tone: "bg-[#e8efff] text-[#213f8f]",
    priceSar: 540,
    processingTime: "10 إلى 20 يوم عمل",
    summary: "تجهيز ملف تأشيرة فرنسا السياحية ضمن متطلبات شنغن ومراجعة المستندات.",
    requirements: [
      "جواز ساري",
      "حجز فندقي",
      "تأمين سفر",
      "كشف حساب وتعريف عمل",
    ],
  },
  {
    slug: "germany",
    country: "Germany",
    countryAr: "ألمانيا",
    visaType: "Tourist Visa",
    icon: "business_center",
    tone: "bg-[#fff2ad] text-[#4a3300]",
    priceSar: 560,
    processingTime: "10 إلى 25 يوم عمل",
    summary: "تنظيم ملف ألمانيا للسياحة أو الأعمال ومتابعة المستندات المطلوبة قبل الموعد.",
    requirements: [
      "جواز ساري",
      "خط سير الرحلة",
      "تأمين سفر",
      "إثبات القدرة المالية",
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Compliance", href: "/compliance" },
];

export function getVisaDestination(slug: string) {
  return visaDestinations.find((destination) => destination.slug === slug);
}
