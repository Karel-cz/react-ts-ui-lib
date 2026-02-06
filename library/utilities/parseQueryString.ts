/**
 * Parses a query string into an object of key-value pairs.
 * @param search - The query string (with or without leading "?").
 * @returns Record of parameter names to values (first occurrence only).
 */
export const parseQueryString = (search: string): Record<string, string> => {
  const result: Record<string, string> = {};
  const trimmed = typeof search !== "string" ? "" : search.trim();
  const query = trimmed.startsWith("?") ? trimmed.slice(1) : trimmed;
  if (!query) return result;

  for (const part of query.split("&")) {
    const eq = part.indexOf("=");
    if (eq === -1) {
      const key = decodeURIComponent(part.replace(/\+/g, " "));
      if (key && !(key in result)) result[key] = "";
    } else {
      const key = decodeURIComponent(part.slice(0, eq).replace(/\+/g, " ").trim());
      const value = decodeURIComponent(part.slice(eq + 1).replace(/\+/g, " "));
      if (key && !(key in result)) result[key] = value;
    }
  }
  return result;
};
