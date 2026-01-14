import { useTranslation } from "./useTranslation";

export type PropTypeInfo = {
  name: string;
  description: string;
  required: boolean;
};

export const getPropsWithTranslations = (
  componentName: string,
  propNames: readonly string[],
  t: (key: string) => string
): PropTypeInfo[] => {
  return propNames.map((propName) => {
    const descriptionKey = `${componentName}.props.${propName}.description`;
    const requiredKey = `${componentName}.props.${propName}.required`;
    
    return {
      name: propName,
      description: t(descriptionKey),
      required: t(requiredKey) === "true",
    };
  });
};
