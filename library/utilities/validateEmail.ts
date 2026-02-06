/** Simple email regex: local@domain.tld style. Not RFC-strict. */
const SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates that a string looks like an email address (simple check).
 * @param str - String to validate.
 * @returns true if the string looks like a valid email.
 */
export const validateEmail = (str: string): boolean => {
  if (typeof str !== "string") return false;
  const trimmed = str.trim();
  return trimmed.length > 0 && SIMPLE_EMAIL_REGEX.test(trimmed);
};
