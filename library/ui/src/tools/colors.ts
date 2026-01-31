type ColorEntry = {
  color: string;
  textColor: string;
  key: string;
};

// Common colors used across themes - Netflix-inspired palette
const COLORS = {
  // Whites & Transparent
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",

  // Dark theme colors (Netflix dark mode)
  darkBg: "#141414",
  darkSurface: "#1a1a1a",
  darkText: "#e5e5e5",
  darkBorder: "#333333",
  darkMuted: "#b3b3b3",

  // Light theme colors (Netflix-inspired light mode)
  lightBg: "#f5f5f5",
  lightSurface: "#ffffff",
  lightText: "#141414",
  lightBorder: "#e0e0e0",
  lightMuted: "#808080",

  // Primary colors (GitHub blue)
  primary: "#0969da",
  primaryHover: "#0860ca",
  primaryDark: "#0550ae",

  // Info colors (GitHub blue variants)
  infoDark: "#2083f4",
  infoDarkVariant: "#4493f8",
  infoLight: "#0969da",
  infoLightVariant: "#0860ca",

  // Success colors (GitHub green)
  success: "#1a7f37",
  successDark: "#238636",

  // Danger colors (GitHub red)
  dangerDark: "#f85149",
  dangerDarkVariant: "#da3633",
  dangerLight: "#cf222e",
  dangerLightVariant: "#a40e26",

  // Warning colors (GitHub orange/yellow)
  warning: "#9a6700",
  warningDark: "#bf8700",

  // Purple colors
  purple: "#8b5cf6",
  purpleDark: "#7c3aed",

  // Teal colors
  teal: "#14b8a6",
  tealDark: "#0d9488",

  // Pink colors
  pink: "#ec4899",
  pinkDark: "#db2777",

  // Indigo colors
  indigo: "#6366f1",
  indigoDark: "#4f46e5",

  // Orange colors
  orange: "#f97316",
  orangeDark: "#ea580c",

  // Cyan colors
  cyan: "#06b6d4",
  cyanDark: "#0891b2",

  // Shadow colors - dark mode uses lighter shadows, light mode uses darker shadows
  shadowDark: "rgba(255,255,255,0.1)",
  shadowLight: "rgba(0,0,0,0.15)",
} as const;

const dark = {
  // Application background (default darker gray)
  background: {
    color: COLORS.darkBg,
    textColor: COLORS.darkText,
    key: "background" as const,
  },
  // Elevated surfaces (cards, panels)
  surface: {
    color: COLORS.darkSurface,
    textColor: COLORS.darkText,
    key: "surface" as const,
  },

  // Primary action color (buttons, links) - GitHub blue
  primary: {
    color: COLORS.infoDark,
    textColor: COLORS.white,
    key: "primary" as const,
  },
  primaryHover: {
    color: COLORS.infoDarkVariant,
    textColor: COLORS.white,
    key: "primaryHover" as const,
  },
  primaryDark: {
    color: "#1f6feb",
    textColor: COLORS.white,
    key: "primaryDark" as const,
  },

  // Informational / accent (GitHub blue)
  info: {
    color: COLORS.infoDark,
    textColor: COLORS.white,
    key: "info" as const,
  },
  infoDark: {
    color: COLORS.infoDarkVariant,
    textColor: COLORS.white,
    key: "infoDark" as const,
  },

  // Status colors (GitHub colors)
  success: {
    color: COLORS.successDark,
    textColor: COLORS.white,
    key: "success" as const,
  },
  successDark: {
    color: "#2ea043",
    textColor: COLORS.white,
    key: "successDark" as const,
  },
  danger: {
    color: COLORS.dangerDark,
    textColor: COLORS.white,
    key: "danger" as const,
  },
  dangerDark: {
    color: COLORS.dangerDarkVariant,
    textColor: COLORS.white,
    key: "dangerDark" as const,
  },
  warning: {
    color: "#d29922",
    textColor: COLORS.white,
    key: "warning" as const,
  },
  warningDark: {
    color: "#bb8009",
    textColor: COLORS.white,
    key: "warningDark" as const,
  },

  // Purple colors
  purple: {
    color: COLORS.purple,
    textColor: COLORS.white,
    key: "purple" as const,
  },
  purpleDark: {
    color: COLORS.purpleDark,
    textColor: COLORS.white,
    key: "purpleDark" as const,
  },

  // Teal colors
  teal: {
    color: COLORS.teal,
    textColor: COLORS.white,
    key: "teal" as const,
  },
  tealDark: {
    color: COLORS.tealDark,
    textColor: COLORS.white,
    key: "tealDark" as const,
  },

  // Pink colors
  pink: {
    color: COLORS.pink,
    textColor: COLORS.white,
    key: "pink" as const,
  },
  pinkDark: {
    color: COLORS.pinkDark,
    textColor: COLORS.white,
    key: "pinkDark" as const,
  },

  // Indigo colors
  indigo: {
    color: COLORS.indigo,
    textColor: COLORS.white,
    key: "indigo" as const,
  },
  indigoDark: {
    color: COLORS.indigoDark,
    textColor: COLORS.white,
    key: "indigoDark" as const,
  },

  // Orange colors
  orange: {
    color: COLORS.orange,
    textColor: COLORS.white,
    key: "orange" as const,
  },
  orangeDark: {
    color: COLORS.orangeDark,
    textColor: COLORS.white,
    key: "orangeDark" as const,
  },

  // Cyan colors
  cyan: {
    color: COLORS.cyan,
    textColor: COLORS.white,
    key: "cyan" as const,
  },
  cyanDark: {
    color: COLORS.cyanDark,
    textColor: COLORS.white,
    key: "cyanDark" as const,
  },

  // Typography / neutral
  text: {
    color: COLORS.darkText,
    textColor: COLORS.darkBg,
    key: "text" as const,
  },
  muted: {
    color: COLORS.darkMuted,
    textColor: COLORS.darkBg,
    key: "muted" as const,
  },

  // UI outlines / borders
  border: {
    color: COLORS.darkBorder,
    textColor: COLORS.darkText,
    key: "border" as const,
  },

  // Generic shadow color (RGBA string may still be used inline)
  shadow: {
    color: COLORS.shadowDark,
    textColor: COLORS.transparent,
    key: "shadow" as const,
  },

  // Utility colors
  white: {
    color: COLORS.white,
    textColor: COLORS.black,
    key: "white" as const,
  },
  black: {
    color: COLORS.black,
    textColor: COLORS.white,
    key: "black" as const,
  },
} as const;

const light = {
  background: {
    color: COLORS.lightBg,
    textColor: COLORS.lightText,
    key: "background" as const,
  },
  surface: {
    color: COLORS.lightSurface,
    textColor: COLORS.lightText,
    key: "surface" as const,
  },

  primary: {
    color: COLORS.primary,
    textColor: COLORS.white,
    key: "primary" as const,
  },
  primaryHover: {
    color: COLORS.primaryHover,
    textColor: COLORS.white,
    key: "primaryHover" as const,
  },
  primaryDark: {
    color: COLORS.primaryDark,
    textColor: COLORS.white,
    key: "primaryDark" as const,
  },

  info: {
    color: COLORS.infoLight,
    textColor: COLORS.white,
    key: "info" as const,
  },
  infoDark: {
    color: COLORS.infoLightVariant,
    textColor: COLORS.white,
    key: "infoDark" as const,
  },

  success: {
    color: COLORS.success,
    textColor: COLORS.white,
    key: "success" as const,
  },
  successDark: {
    color: "#1a7f37",
    textColor: COLORS.white,
    key: "successDark" as const,
  },
  danger: {
    color: COLORS.dangerLight,
    textColor: COLORS.white,
    key: "danger" as const,
  },
  dangerDark: {
    color: COLORS.dangerLightVariant,
    textColor: COLORS.white,
    key: "dangerDark" as const,
  },
  warning: {
    color: COLORS.warning,
    textColor: COLORS.white,
    key: "warning" as const,
  },
  warningDark: {
    color: "#7c2d12",
    textColor: COLORS.white,
    key: "warningDark" as const,
  },

  // Purple colors
  purple: {
    color: COLORS.purple,
    textColor: COLORS.white,
    key: "purple" as const,
  },
  purpleDark: {
    color: COLORS.purpleDark,
    textColor: COLORS.white,
    key: "purpleDark" as const,
  },

  // Teal colors
  teal: {
    color: COLORS.teal,
    textColor: COLORS.white,
    key: "teal" as const,
  },
  tealDark: {
    color: COLORS.tealDark,
    textColor: COLORS.white,
    key: "tealDark" as const,
  },

  // Pink colors
  pink: {
    color: COLORS.pink,
    textColor: COLORS.white,
    key: "pink" as const,
  },
  pinkDark: {
    color: COLORS.pinkDark,
    textColor: COLORS.white,
    key: "pinkDark" as const,
  },

  // Indigo colors
  indigo: {
    color: COLORS.indigo,
    textColor: COLORS.white,
    key: "indigo" as const,
  },
  indigoDark: {
    color: COLORS.indigoDark,
    textColor: COLORS.white,
    key: "indigoDark" as const,
  },

  // Orange colors
  orange: {
    color: COLORS.orange,
    textColor: COLORS.white,
    key: "orange" as const,
  },
  orangeDark: {
    color: COLORS.orangeDark,
    textColor: COLORS.white,
    key: "orangeDark" as const,
  },

  // Cyan colors
  cyan: {
    color: COLORS.cyan,
    textColor: COLORS.white,
    key: "cyan" as const,
  },
  cyanDark: {
    color: COLORS.cyanDark,
    textColor: COLORS.white,
    key: "cyanDark" as const,
  },

  text: {
    color: COLORS.lightText,
    textColor: COLORS.lightBg,
    key: "text" as const,
  },
  muted: {
    color: COLORS.lightMuted,
    textColor: COLORS.lightBg,
    key: "muted" as const,
  },

  border: {
    color: COLORS.lightBorder,
    textColor: COLORS.lightText,
    key: "border" as const,
  },
  shadow: {
    color: COLORS.shadowLight,
    textColor: COLORS.transparent,
    key: "shadow" as const,
  },

  // Utility colors
  white: {
    color: COLORS.white,
    textColor: COLORS.black,
    key: "white" as const,
  },
  black: {
    color: COLORS.black,
    textColor: COLORS.white,
    key: "black" as const,
  },
} as const;

export const themes = {
  dark,
  light,
} as const;

export type ThemeName = keyof typeof themes;

export const colorsKeyList = [
  dark.primary.key,
  dark.primaryHover.key,
  dark.primaryDark.key,
  dark.success.key,
  dark.successDark.key,
  dark.danger.key,
  dark.dangerDark.key,
  dark.warning.key,
  dark.warningDark.key,
  dark.info.key,
  dark.infoDark.key,
  dark.purple.key,
  dark.purpleDark.key,
  dark.teal.key,
  dark.tealDark.key,
  dark.pink.key,
  dark.pinkDark.key,
  dark.indigo.key,
  dark.indigoDark.key,
  dark.orange.key,
  dark.orangeDark.key,
  dark.cyan.key,
  dark.cyanDark.key,
  dark.surface.key,
  dark.background.key,
  dark.text.key,
  dark.muted.key,
  dark.border.key,
  dark.shadow.key,
  dark.white.key,
  dark.black.key,
] as const;

export type ColorScheme = (typeof colorsKeyList)[number];

export const getTheme = (name: ThemeName = "dark") => themes[name];

// Default export kept for backward-compatibility: current default is the dark palette
export default dark;

export const getColorScheme = (colorScheme: ColorScheme, darkMode: boolean) => {
  const themeName: ThemeName = darkMode ? "dark" : "light";
  const theme = getTheme(themeName);

  return theme[colorScheme] as ColorEntry;
};

// Significance handling
export type Significance = "common" | "highlighted" | "distinct" | "subdued";

const highlightedMap: Partial<Record<ColorScheme, ColorScheme>> = {
  primary: "primaryDark",
  success: "successDark",
  danger: "dangerDark",
  warning: "warningDark",
  info: "infoDark",
  primaryHover: "primaryDark",
  purple: "purpleDark",
  teal: "tealDark",
  pink: "pinkDark",
  indigo: "indigoDark",
  orange: "orangeDark",
  cyan: "cyanDark",
};

export const getSignificanceColor = (
  colorScheme: ColorScheme,
  significance: Significance = "common",
  darkMode: boolean = true,
) => {
  if (significance === "common") {
    return getColorScheme(colorScheme, darkMode);
  }

  if (significance === "highlighted") {
    const mappedScheme = highlightedMap[colorScheme] ?? colorScheme;
    return getColorScheme(mappedScheme, darkMode);
  }

  if (significance === "distinct") {
    const baseScheme = getColorScheme(colorScheme, darkMode);
    return {
      color: hexToRgba(baseScheme.color, 0.2),
      textColor: baseScheme.color,
      key: baseScheme.key,
    } as ColorEntry;
  }

  const baseScheme = getColorScheme(colorScheme, darkMode);
  return {
    color: hexToRgba(baseScheme.color, 0.1),
    textColor: darkMode ? COLORS.darkMuted : COLORS.lightMuted,
    key: baseScheme.key,
  } as ColorEntry;
};

// Border utilities
export const getBorderColor = (darkMode: boolean = true): string => {
  return darkMode ? COLORS.darkBorder : COLORS.lightBorder;
};

export const getBorder = (
  darkMode: boolean = true,
  width: number = 1,
  side?: "top" | "right" | "bottom" | "left",
): string => {
  const color = getBorderColor(darkMode);
  const borderValue = `${width}px solid ${color}`;

  if (side) {
    return borderValue;
  }

  return borderValue;
};

export const getBorderStyle = (
  darkMode: boolean = true,
  width: number = 1,
  side?: "top" | "right" | "bottom" | "left",
): React.CSSProperties => {
  const borderValue = getBorder(darkMode, width, side);

  if (side) {
    return {
      [`border${side.charAt(0).toUpperCase() + side.slice(1)}`]: borderValue,
    } as React.CSSProperties;
  }

  return {
    border: borderValue,
  };
};

// Helper function to convert hex to rgba
export const hexToRgba = (hex: string, alpha: number): string => {
  const sanitized = hex.replace("#", "");
  const r = parseInt(sanitized.substring(0, 2), 16);
  const g = parseInt(sanitized.substring(2, 4), 16);
  const b = parseInt(sanitized.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Helper function to get rgba from color scheme
export const getRgbaFromScheme = (
  colorScheme: ColorScheme,
  darkMode: boolean,
  alpha: number,
): string => {
  const scheme = getColorScheme(colorScheme, darkMode);
  return hexToRgba(scheme.color, alpha);
};

export const mixHex = (base: string, mix: string, mixWeight: number): string => {
  const clamp = (value: number) => Math.max(0, Math.min(255, value));
  const toRgb = (hex: string) => {
    const sanitized = hex.replace("#", "");
    return {
      r: parseInt(sanitized.substring(0, 2), 16),
      g: parseInt(sanitized.substring(2, 4), 16),
      b: parseInt(sanitized.substring(4, 6), 16),
    };
  };

  const baseRgb = toRgb(base);
  const mixRgb = toRgb(mix);
  const weight = Math.max(0, Math.min(1, mixWeight));

  const r = clamp(Math.round(baseRgb.r * (1 - weight) + mixRgb.r * weight));
  const g = clamp(Math.round(baseRgb.g * (1 - weight) + mixRgb.g * weight));
  const b = clamp(Math.round(baseRgb.b * (1 - weight) + mixRgb.b * weight));

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export const getModernGradient = (
  colorScheme: ColorScheme,
  significance: Significance = "common",
  darkMode: boolean = true,
) => {
  const scheme = getSignificanceColor(colorScheme, significance, darkMode);
  const baseScheme = getColorScheme(colorScheme, darkMode);
  const surfaceScheme = getColorScheme("surface", darkMode);
  const white = getColorScheme("white", darkMode).color;
  const black = getColorScheme("black", darkMode).color;
  const shadowColor = getColorScheme("shadow", darkMode).color;

  const primaryDarkScheme = getColorScheme("primaryDark", darkMode);
  const successDarkScheme = getColorScheme("successDark", darkMode);
  const dangerDarkScheme = getColorScheme("dangerDark", darkMode);
  const warningDarkScheme = getColorScheme("warningDark", darkMode);
  const infoDarkScheme = getColorScheme("infoDark", darkMode);

  const hoverSchemeMap: Record<string, typeof primaryDarkScheme> = {
    primary: primaryDarkScheme,
    success: successDarkScheme,
    danger: dangerDarkScheme,
    warning: warningDarkScheme,
    info: infoDarkScheme,
  };

  const mixWeight =
    significance === "distinct" ? 0.6 : significance === "subdued" ? 0.75 : 0;

  const baseTone = mixWeight
    ? mixHex(baseScheme.color, surfaceScheme.color, mixWeight)
    : baseScheme.color;
  const midTone = mixWeight
    ? mixHex(scheme.color, surfaceScheme.color, mixWeight)
    : scheme.color;
  const hoverTone = mixWeight
    ? mixHex(
        hoverSchemeMap[colorScheme as string]?.color ?? scheme.color,
        surfaceScheme.color,
        mixWeight,
      )
    : hoverSchemeMap[colorScheme as string]?.color ?? scheme.color;

  const gradientFrom = hoverTone;
  const gradientMid = midTone;
  const gradientTo = baseTone;

  const highlightOverlay = `linear-gradient(120deg, ${hexToRgba(white, darkMode ? 0.2 : 0.28)} 0%, ${hexToRgba(white, 0)} 40%, ${hexToRgba(black, darkMode ? 0.18 : 0.12)} 100%)`;
  const overlayGradient = `linear-gradient(135deg, ${hexToRgba(white, darkMode ? 0.18 : 0.26)} 0%, ${hexToRgba(white, 0)} 44%, ${hexToRgba(black, darkMode ? 0.18 : 0.1)} 100%)`;
  const baseGradient = `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientMid} 45%, ${gradientTo} 100%)`;
  const hoverGradient = `linear-gradient(135deg, ${gradientTo} 0%, ${gradientMid} 45%, ${gradientFrom} 100%)`;
  const background = `${highlightOverlay}, ${overlayGradient}, ${baseGradient}`;
  const hoverBackground = `${highlightOverlay}, ${overlayGradient}, ${hoverGradient}`;
  const shadow = `0 6px 16px ${shadowColor}`;
  const hoverShadow = `0 10px 26px ${shadowColor}`;

  return {
    background,
    hoverBackground,
    shadow,
    hoverShadow,
  };
};
