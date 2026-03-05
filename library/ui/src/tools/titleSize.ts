/**
 * Typography size tokens for titles and headings.
 * Reusable across Title and other text components.
 */
const titleSizeTokens = {
  xxs: { fontSize: "0.625rem", lineHeight: 1.4 },
  xs: { fontSize: "0.75rem", lineHeight: 1.4 },
  s: { fontSize: "0.875rem", lineHeight: 1.45 },
  m: { fontSize: "1rem", lineHeight: 1.5 },
  l: { fontSize: "1.25rem", lineHeight: 1.4 },
  xl: { fontSize: "1.5rem", lineHeight: 1.35 },
  xxl: { fontSize: "2rem", lineHeight: 1.3 },
} as const;

export type TitleSizeToken = keyof typeof titleSizeTokens;

export const getTitleSize = (size: TitleSizeToken = "m") => titleSizeTokens[size];

export const titleSizeKeyList = Object.keys(
  titleSizeTokens,
) as TitleSizeToken[];

export default titleSizeTokens;
