const DIGITS = "0123456789";

/**
 * Generates a random password consisting only of digits (0–9).
 * @param length - Length of the generated password (number of digits).
 * @returns A string of random digits.
 */
export const generatePassword = (length: number): string => {
  if (length <= 0) return "";

  const lengthClamped = Math.floor(Math.max(0, length));
  let result = "";

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const values = new Uint32Array(lengthClamped);
    crypto.getRandomValues(values);
    for (let i = 0; i < lengthClamped; i++) {
      result += DIGITS[values[i] % DIGITS.length];
    }
  } else {
    for (let i = 0; i < lengthClamped; i++) {
      result += DIGITS[Math.floor(Math.random() * DIGITS.length)];
    }
  }

  return result;
};
