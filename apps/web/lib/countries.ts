export type CountryOption = {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  visaType: string;
  accent: string;
  createdAt?: string;
};

export async function getCountries() {
  const response = await fetch(apiUrl("/api/countries"), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load countries.");
  }

  return (await response.json()) as CountryOption[];
}

export async function getAdminCountries() {
  const response = await fetch(apiUrl("/api/admin/countries"), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load admin countries.");
  }

  return (await response.json()) as CountryOption[];
}

import { apiUrl } from "./api";
