import { readJsonFile, writeJsonFile } from "./storage";

export type CountryRecord = {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  visaType: string;
  accent: string;
  createdAt: string;
};

const STORAGE_KEY = "countries.json";
const DEFAULT_ACCENT = "from-[#964900] via-[#ffb787] to-[#126c39]";

const defaultCountries: CountryRecord[] = [
  { id: "fr", code: "fr", nameAr: "فرنسا", nameEn: "France", flag: "🇫🇷", visaType: "تأشيرة سياحية", accent: "from-[#213f8f] via-white to-[#d42028]", createdAt: new Date().toISOString() },
  { id: "us", code: "us", nameAr: "أمريكا", nameEn: "United States", flag: "🇺🇸", visaType: "تأشيرة سياحية", accent: "from-[#123c7d] via-white to-[#c62839]", createdAt: new Date().toISOString() },
  { id: "gb", code: "gb", nameAr: "بريطانيا", nameEn: "United Kingdom", flag: "🇬🇧", visaType: "تأشيرة سياحية", accent: "from-[#1a3b8f] via-white to-[#cf2d37]", createdAt: new Date().toISOString() },
  { id: "de", code: "de", nameAr: "ألمانيا", nameEn: "Germany", flag: "🇩🇪", visaType: "تأشيرة سياحية", accent: "from-black via-[#d52b1e] to-[#ffce00]", createdAt: new Date().toISOString() },
  { id: "it", code: "it", nameAr: "إيطاليا", nameEn: "Italy", flag: "🇮🇹", visaType: "تأشيرة سياحية", accent: "from-[#009246] via-white to-[#ce2b37]", createdAt: new Date().toISOString() },
  { id: "es", code: "es", nameAr: "إسبانيا", nameEn: "Spain", flag: "🇪🇸", visaType: "تأشيرة سياحية", accent: "from-[#aa151b] via-[#f1bf00] to-[#aa151b]", createdAt: new Date().toISOString() },
  { id: "jp", code: "jp", nameAr: "اليابان", nameEn: "Japan", flag: "🇯🇵", visaType: "تأشيرة سياحية", accent: "from-white via-[#f5f2f2] to-[#bc002d]", createdAt: new Date().toISOString() },
  { id: "ch", code: "ch", nameAr: "سويسرا", nameEn: "Switzerland", flag: "🇨🇭", visaType: "تأشيرة سياحية", accent: "from-[#d52b1e] via-[#ef3b2d] to-[#d52b1e]", createdAt: new Date().toISOString() }
];

function loadCountries() {
  const countries = readJsonFile<CountryRecord[]>(STORAGE_KEY, []);
  if (countries.length) {
    return countries;
  }

  writeJsonFile(STORAGE_KEY, defaultCountries);
  return [...defaultCountries];
}

export function listCountries() {
  return loadCountries();
}

export function createCountry(input: {
  code?: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  visaType: string;
  accent?: string;
}) {
  const countries = loadCountries();
  const baseCode = (input.code?.trim() || input.nameEn.slice(0, 2)).toLowerCase();
  let candidate = baseCode;
  let counter = 1;

  while (countries.some((country) => country.code === candidate)) {
    candidate = `${baseCode}${counter}`;
    counter += 1;
  }

  const country: CountryRecord = {
    id: crypto.randomUUID(),
    code: candidate,
    nameAr: input.nameAr.trim(),
    nameEn: input.nameEn.trim(),
    flag: input.flag.trim(),
    visaType: input.visaType.trim(),
    accent: input.accent?.trim() || DEFAULT_ACCENT,
    createdAt: new Date().toISOString(),
  };

  countries.unshift(country);
  writeJsonFile(STORAGE_KEY, countries);
  return country;
}
