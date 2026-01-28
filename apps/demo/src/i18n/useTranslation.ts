import { useLanguage } from "../app/context/languageContext";
import { getTranslation } from "./translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return { t, language };
};
