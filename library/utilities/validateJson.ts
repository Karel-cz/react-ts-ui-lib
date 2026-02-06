/**
 * Checks if a string is valid JSON (parseable).
 * @param str - String to validate.
 * @returns true if the string is valid JSON.
 */
export const validateJson = (str: string): boolean => {
  if (typeof str !== "string") return false;
  const trimmed = str.trim();
  if (trimmed === "") return false;
  try {
    JSON.parse(trimmed);
    return true;
  } catch {
    return false;
  }
};
