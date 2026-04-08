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
  claimRequestsByEmailInDb,
  listRequestsFromDb,
  listUserRequestsFromDb,
  updateRequestStatusInDb,
  type ApplicantRecord,
  type RequestContextRecord,
  type VisaRequestRecord,
} from "./repositories/requests";
export {
  createUserInDb,
  createUserSessionInDb,
  deleteUserByIdInDb,
  deleteUserSessionByTokenHashFromDb,
  deleteUserSessionsByUserIdFromDb,
  getUserByEmailFromDb,
  getUserByIdFromDb,
  getUserSessionByTokenHashFromDb,
  updateUserPasswordInDb,
  type UserAuthRecord,
  type UserRecord,
  type UserSessionRecord,
} from "./repositories/users";
