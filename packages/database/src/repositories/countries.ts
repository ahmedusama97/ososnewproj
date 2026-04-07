import { getPrismaClient } from "../client";

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

type CountryRow = {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  visaType: string;
  accent: string;
  createdAt: Date;
};

export async function listCountriesFromDb() {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const countries = await prisma.country.findMany({
    where: { isActive: true },
    orderBy: [{ createdAt: "desc" }],
  });

  return countries.map((country: CountryRow): CountryRecord => ({
    id: country.id,
    code: country.code,
    nameAr: country.nameAr,
    nameEn: country.nameEn,
    flag: country.flag,
    visaType: country.visaType,
    accent: country.accent,
    createdAt: country.createdAt.toISOString(),
  }));
}

export async function createCountryInDb(input: {
  code?: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  visaType: string;
  accent: string;
}) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const baseCode = (input.code?.trim() || input.nameEn.slice(0, 2)).toLowerCase();
  let candidate = baseCode;
  let counter = 1;

  // Keep country code human-readable while preserving uniqueness.
  while (await prisma.country.findUnique({ where: { code: candidate } })) {
    candidate = `${baseCode}${counter}`;
    counter += 1;
  }

  const country = await prisma.country.create({
    data: {
      code: candidate,
      nameAr: input.nameAr.trim(),
      nameEn: input.nameEn.trim(),
      flag: input.flag.trim(),
      visaType: input.visaType.trim(),
      accent: input.accent.trim(),
    },
  });

  return {
    id: country.id,
    code: country.code,
    nameAr: country.nameAr,
    nameEn: country.nameEn,
    flag: country.flag,
    visaType: country.visaType,
    accent: country.accent,
    createdAt: country.createdAt.toISOString(),
  } satisfies CountryRecord;
}
