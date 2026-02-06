const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

/**
 * Generates a random alphanumeric string (0-9, A-Z, a-z).
 * @param length - Length of the generated string.
 * @returns Random string.
 */
export const generateRandomString = (length: number): string => {
  if (length <= 0) return "";

  const len = Math.floor(Math.max(0, length));
  let result = "";

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const values = new Uint32Array(len);
    crypto.getRandomValues(values);
    for (let i = 0; i < len; i++) {
      result += ALPHANUMERIC[values[i] % ALPHANUMERIC.length];
    }
  } else {
    for (let i = 0; i < len; i++) {
      result += ALPHANUMERIC[Math.floor(Math.random() * ALPHANUMERIC.length)];
    }
  }

  return result;
};
