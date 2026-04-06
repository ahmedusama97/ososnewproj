import { Injectable } from "@nestjs/common";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { resolveStoragePath } from "../../shared/storage-path";

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

const defaultAccent = "from-[#964900] via-[#ffb787] to-[#126c39]";

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

@Injectable()
export class CountriesService {
  private readonly storagePath = resolveStoragePath("countries.json");
  private readonly countries: CountryRecord[] = this.loadCountries();

  list() {
    return this.countries;
  }

  create(input: {
    code?: string;
    nameAr: string;
    nameEn: string;
    flag: string;
    visaType: string;
    accent?: string;
  }) {
    const code = (input.code?.trim() || input.nameEn.slice(0, 2)).toLowerCase();
    const uniqueCode = this.ensureUniqueCode(code);

    const record: CountryRecord = {
      id: crypto.randomUUID(),
      code: uniqueCode,
      nameAr: input.nameAr.trim(),
      nameEn: input.nameEn.trim(),
      flag: input.flag.trim(),
      visaType: input.visaType.trim(),
      accent: input.accent?.trim() || defaultAccent,
      createdAt: new Date().toISOString(),
    };

    this.countries.unshift(record);
    this.persistCountries();
    return record;
  }

  private ensureUniqueCode(code: string) {
    let candidate = code;
    let counter = 1;

    while (this.countries.some((country) => country.code === candidate)) {
      candidate = `${code}${counter}`;
      counter += 1;
    }

    return candidate;
  }

  private loadCountries() {
    if (!existsSync(this.storagePath)) {
      this.persistRaw(defaultCountries);
      return [...defaultCountries];
    }

    try {
      const raw = readFileSync(this.storagePath, "utf8");
      const parsed = JSON.parse(raw) as CountryRecord[];
      if (parsed.length) {
        return parsed;
      }
    } catch {}

    this.persistRaw(defaultCountries);
    return [...defaultCountries];
  }

  private persistCountries() {
    this.persistRaw(this.countries);
  }

  private persistRaw(payload: CountryRecord[]) {
    mkdirSync(dirname(this.storagePath), { recursive: true });
    writeFileSync(this.storagePath, JSON.stringify(payload, null, 2), "utf8");
  }
}
