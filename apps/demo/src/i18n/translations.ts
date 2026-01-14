import enTranslations from "../locales/en.json";
import czTranslations from "../locales/cz.json";

type Translations = typeof enTranslations;

const translations: Record<string, Translations> = {
  en: enTranslations,
  cz: czTranslations,
};

/**
 * Gets a nested value from an object using dot notation
 * Example: getNestedValue(obj, "badge.props.children.description")
 */
const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split(".");
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined) {
      return path; // Return key as fallback
    }
    current = current[key];
  }
  
  return typeof current === "string" ? current : path;
};

export const getTranslation = (language: string, key: string): string => {
  const langTranslations = translations[language] || translations.en;
  return getNestedValue(langTranslations, key);
};

export default translations;
