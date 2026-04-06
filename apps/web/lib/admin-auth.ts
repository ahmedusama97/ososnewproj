export const ADMIN_TOKEN_COOKIE = "visaflow_admin_token";

export function setAdminSession(token: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ADMIN_TOKEN_COOKIE, token);
  document.cookie = `${ADMIN_TOKEN_COOKIE}=${token}; Path=/; Max-Age=28800; SameSite=Lax`;
}

export function getAdminToken() {
  if (typeof window === "undefined") {
    return "";
  }

  const stored = window.localStorage.getItem(ADMIN_TOKEN_COOKIE);
  if (stored) {
    return stored;
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${ADMIN_TOKEN_COOKIE}=`));

  return cookie ? cookie.split("=")[1] : "";
}

export function clearAdminSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(ADMIN_TOKEN_COOKIE);
  document.cookie = `${ADMIN_TOKEN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}
