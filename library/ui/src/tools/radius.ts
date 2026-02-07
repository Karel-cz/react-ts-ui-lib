const radiusTokens = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  full: 9999,
} as const;

export type RadiusToken = keyof typeof radiusTokens;

export const getRadiusValue = (radius: RadiusToken = "md") =>
  radiusTokens[radius];
export const radiusKeyList = Object.keys(radiusTokens) as RadiusToken[];

export default radiusTokens;
