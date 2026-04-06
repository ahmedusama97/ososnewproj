export function apiUrl(path: string) {
  const configuredBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (configuredBase) {
    return `${configuredBase}${path}`;
  }

  return path;
}
