const STORAGE_KEY = "bridgebear_visitor_id";

export function getVisitorId(): string {
  const existing = localStorage.getItem(STORAGE_KEY);

  if (existing) {
    return existing;
  }

  const visitorId = crypto.randomUUID();

  localStorage.setItem(STORAGE_KEY, visitorId);

  return visitorId;
}