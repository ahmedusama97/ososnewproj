export function apiUrl(path: string) {
  const configuredBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (configuredBase) {
    return `${configuredBase}${path}`;
  }

  if (typeof window !== "undefined") {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    return `${protocol}//${hostname}:4000${path}`;
  }

  return `http://localhost:4000${path}`;
}
