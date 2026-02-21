/**
 * Converts a camelCase string to space-separated words.
 * Inserts a space before each uppercase letter that follows a lowercase letter.
 * By default, words are separated by spaces, but you can optionally provide a custom separator.
 * @param str - camelCase string (e.g. "helloWorld")
 * @param separator - Optional string used to separate words (default is a space).
 * @returns string with words separated by the space or specified separator (e.g. "hello World" or "hello-World")
 */
export const fromCamelCase = (str: string, separator: string = " "): string => {
  if (typeof str !== "string") return "";
  return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => `${p1}${separator}${p2}`).trim();
};
