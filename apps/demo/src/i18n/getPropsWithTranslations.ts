export type PropTypeInfo = {
  name: string;
  description: string;
  type: string;
  required: boolean;
};

export const getPropsWithTranslations = (
  componentName: string,
  propNames: readonly string[],
  t: (key: string) => string
): PropTypeInfo[] => {
  return propNames.map((propName) => {
    const descriptionKey = `${componentName}.props.${propName}.description`;
    const typeKey = `${componentName}.props.${propName}.type`;
    const requiredKey = `${componentName}.props.${propName}.required`;
    
    return {
      name: propName,
      description: t(descriptionKey),
      type: t(typeKey),
      required: t(requiredKey) === "true",
    };
  });
};
