type ColorEntry = {
  color: string;
  textColor: string;
  key: string;
};

// Common colors used across themes
const COLORS = {
  // Whites & Transparent
  white: "#ffffff",
  transparent: "transparent",

  // Dark theme colors
  darkBg: "#1b1d1fff",
  darkSurface: "#1f2937",
  darkText: "#e6eef8",
  darkBorder: "#374151",
  darkMuted: "#9ca3af",

  // Light theme colors
  lightBg: "#eeeef3",
  lightSurface: "#ffffff",
  lightText: "#0b1220",
  lightBorder: "#e5e7eb",
  lightMuted: "#6b7280",

  // Primary colors
  primary: "#2563eb",
  primaryHover: "#1d4ed8",
  primaryDark: "#1e40af",

  // Info colors
  infoDark: "#06b6d4",
  infoDarkVariant: "#0891b2",
  infoLight: "#0ea5a4",
  infoLightVariant: "#0284c7",

  // Success colors
  success: "#16a34a",
  successDark: "#15803d",

  // Danger colors
  dangerDark: "#ef4444",
  dangerDarkVariant: "#dc2626",
  dangerLight: "#dc2626",
  dangerLightVariant: "#b91c1c",

  // Warning colors
  warning: "#f59e0b",
  warningDark: "#d97706",

  // Shadow colors
  shadowDark: "rgba(2,6,23,0.08)",
  shadowLight: "rgba(2,6,23,0.06)",
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

  // Primary action color (buttons, links)
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

  // Informational / accent
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

  // Status colors
  success: {
    color: COLORS.success,
    textColor: COLORS.white,
    key: "success" as const,
  },
  successDark: {
    color: COLORS.successDark,
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
    color: COLORS.warning,
    textColor: COLORS.white,
    key: "warning" as const,
  },
  warningDark: {
    color: COLORS.warningDark,
    textColor: COLORS.white,
    key: "warningDark" as const,
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
    color: COLORS.successDark,
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
    color: COLORS.warningDark,
    textColor: COLORS.white,
    key: "warningDark" as const,
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
  dark.surface.key,
  dark.background.key,
  dark.text.key,
  dark.muted.key,
  dark.border.key,
  dark.shadow.key,
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

const hexToRgba = (hex: string, alpha: number) => {
  const sanitized = hex.replace("#", "");
  const r = parseInt(sanitized.substring(0, 2), 16);
  const g = parseInt(sanitized.substring(2, 4), 16);
  const b = parseInt(sanitized.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const highlightedMap: Partial<Record<ColorScheme, ColorScheme>> = {
  primary: "primaryDark",
  success: "successDark",
  danger: "dangerDark",
  warning: "warningDark",
  info: "infoDark",
  primaryHover: "primaryDark",
};

export const getSignificanceColor = (
  colorScheme: ColorScheme,
  significance: Significance = "common",
  darkMode: boolean = true
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
  side?: "top" | "right" | "bottom" | "left"
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
  side?: "top" | "right" | "bottom" | "left"
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
