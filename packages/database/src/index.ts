export { getPrismaClient, hasDatabaseUrl } from "./client";
export {
  createCountryInDb,
  listCountriesFromDb,
  type CountryRecord,
} from "./repositories/countries";
export {
  getAdminCredentialFromDb,
  upsertAdminCredentialInDb,
  type AdminCredentialRecord,
} from "./repositories/admin";
export {
  createRequestInDb,
  listRequestsFromDb,
  updateRequestStatusInDb,
  type ApplicantRecord,
  type RequestContextRecord,
  type VisaRequestRecord,
} from "./repositories/requests";
