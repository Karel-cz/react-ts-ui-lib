export type SizeToken = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export const sizeKeyList: SizeToken[] = ["xs", "sm", "md", "lg", "xl", "full"];

// Icon Size - returns em value for MdiIcon
export const getIconSize = (size: SizeToken = "md"): { size: number } => {
  const sizeMap: Record<SizeToken, number> = {
    xs: 0.75,
    sm: 1,
    md: 1.25,
    lg: 1.5,
    xl: 2,
    full: 1.25, // default to md for full
  };

  return { size: sizeMap[size] || sizeMap.md };
};

// Button Size - returns padding, fontSize, iconSize, height and width
export const getButtonSize = (
  size: SizeToken = "md",
): {
  padding: string;
  fontSize: number;
  iconSize: number;
  height?: string;
  width?: string;
} => {
  const sizeMap: Record<
    SizeToken,
    {
      padding: string;
      fontSize: number;
      iconSize: number;
      height?: string;
      width?: string;
    }
  > = {
    xs: {
      padding: "0.25rem 0.5rem",
      fontSize: 12,
      iconSize: 0.75,
      height: "24px",
    },
    sm: {
      padding: "0.375rem 0.75rem",
      fontSize: 13,
      iconSize: 1,
      height: "32px",
    },
    md: { padding: "0.5rem 1rem", fontSize: 14, iconSize: 1, height: "36px" },
    lg: {
      padding: "0.625rem 1.25rem",
      fontSize: 16,
      iconSize: 1.25,
      height: "44px",
    },
    xl: {
      padding: "0.75rem 1.5rem",
      fontSize: 18,
      iconSize: 1.5,
      height: "52px",
    },
    full: {
      padding: "0.5rem 1rem",
      fontSize: 14,
      iconSize: 1,
      height: "36px",
      width: "100%",
    },
  };

  return sizeMap[size] || sizeMap.md;
};

// Badge Size - returns padding, fontSize, iconSize, gap, and width
export const getBadgeSize = (
  size: SizeToken = "md",
): {
  padding: string;
  fontSize: number;
  iconSize: number;
  gap: number;
  width?: string;
} => {
  const sizeMap: Record<
    SizeToken,
    {
      padding: string;
      fontSize: number;
      iconSize: number;
      gap: number;
      width?: string;
    }
  > = {
    xs: { padding: "1px 4px", fontSize: 10, iconSize: 0.5, gap: 4 },
    sm: { padding: "1px 6px", fontSize: 11, iconSize: 0.625, gap: 4 },
    md: { padding: "2px 8px", fontSize: 12, iconSize: 0.75, gap: 6 },
    lg: { padding: "3px 10px", fontSize: 13, iconSize: 0.875, gap: 6 },
    xl: { padding: "4px 12px", fontSize: 14, iconSize: 1, gap: 8 },
    full: {
      padding: "2px 8px",
      fontSize: 12,
      iconSize: 0.75,
      gap: 6,
      width: "100%",
    },
  };

  return sizeMap[size] || sizeMap.md;
};

// Pending Size - returns pixel value for SVG
export const getPendingSize = (size: SizeToken = "md"): { size: number } => {
  const sizeMap: Record<SizeToken, number> = {
    xs: 24,
    sm: 32,
    md: 36,
    lg: 48,
    xl: 64,
    full: 36, // default to md for full
  };

  return { size: sizeMap[size] || sizeMap.md };
};

export type ThemeToggleSizeToken = "xs" | "sm" | "md" | "lg" | "xl";

// ThemeToggle Size - track, thumb and icon scale with size
export const getThemeToggleSize = (
  size: ThemeToggleSizeToken | SizeToken = "md",
): {
  trackWidth: number;
  trackHeight: number;
  thumbSize: number;
  gap: number;
  gapLeft: number;
  iconSize: SizeToken;
} => {
  const sizeMap: Record<
    ThemeToggleSizeToken,
    {
      trackWidth: number;
      trackHeight: number;
      thumbSize: number;
      gap: number;
      gapLeft: number;
      iconSize: SizeToken;
    }
  > = {
    xs: {
      trackWidth: 46,
      trackHeight: 20,
      thumbSize: 14,
      gap: 2,
      gapLeft: 5,
      iconSize: "xs",
    },
    sm: {
      trackWidth: 52,
      trackHeight: 26,
      thumbSize: 18,
      gap: 2,
      gapLeft: 4,
      iconSize: "xs",
    },
    md: {
      trackWidth: 64,
      trackHeight: 32,
      thumbSize: 23,
      gap: 3,
      gapLeft: 5,
      iconSize: "xs",
    },
    lg: {
      trackWidth: 76,
      trackHeight: 38,
      thumbSize: 28,
      gap: 4,
      gapLeft: 6,
      iconSize: "sm",
    },
    xl: {
      trackWidth: 88,
      trackHeight: 44,
      thumbSize: 33,
      gap: 4,
      gapLeft: 6,
      iconSize: "sm",
    },
  };

  const key: ThemeToggleSizeToken =
    size === "full" ? "md" : (size as ThemeToggleSizeToken);
  return sizeMap[key] ?? sizeMap.md;
};
