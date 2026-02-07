//@@viewOn:imports
import React, { useState } from "react";
import {
  getColorScheme,
  getBorderColor,
  getRgbaFromScheme,
} from "../tools/colors";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
const SUN_ICON = "mdi-white-balance-sunny";
const MOON_ICON = "mdi-moon-waxing-crescent";
const TRACK_WIDTH = 64;
const TRACK_HEIGHT = 32;
const THUMB_SIZE = 23;
const GAP = 3;
const GAP_LEFT = 5;
const LEFT_WHEN_DARK = TRACK_WIDTH - GAP - THUMB_SIZE - GAP;
//@@viewOff:constants

//@@viewOn:css
const Css = {
  wrapper: (): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
  }),

  switchTrack: (darkMode: boolean): React.CSSProperties => {
    const scheme = getColorScheme("surface", darkMode);
    const borderColor = getBorderColor(darkMode);
    const insetShadow = getRgbaFromScheme("text", false, darkMode ? 0.12 : 0.06);
    const c = (a: number) => getRgbaFromScheme("text", false, a);
    const outerShadow = darkMode
      ? `0 4px 8px -2px ${c(0.2)}, 0 8px 18px -4px ${c(0.14)}, 0 12px 28px 0 ${c(0.1)}`
      : `0 4px 12px -2px ${c(0.15)}, 0 2px 6px -2px ${c(0.08)}`;
    return {
      width: TRACK_WIDTH,
      height: TRACK_HEIGHT,
      borderRadius: TRACK_HEIGHT / 2,
      background: scheme.color,
      border: `1px solid ${borderColor}`,
      cursor: "pointer",
      position: "relative",
      transition: "background 0.3s ease, border-color 0.2s ease, box-shadow 0.2s ease",
      flexShrink: 0,
      boxShadow: `${outerShadow}, inset 0 1px 2px ${insetShadow}`,
    };
  },
  trackIcon: (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    ...(side === "left"
      ? { left: 10 }
      : { right: 10 }),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  }),
  switchThumb: (darkMode: boolean, isDark: boolean): React.CSSProperties => {
    const thumbBg = darkMode ? "#ffffff" : getColorScheme("text", false).color;
    const borderRgba = getRgbaFromScheme("border", darkMode, 0.5);
    const shadowColor = darkMode
      ? getRgbaFromScheme("background", true, 0.45)
      : getRgbaFromScheme("text", false, 0.1);
    const shadowColorSoft = darkMode
      ? getRgbaFromScheme("background", true, 0.25)
      : getRgbaFromScheme("text", false, 0.06);
    return {
      position: "absolute",
      top: "50%",
      left: isDark ? GAP_LEFT : LEFT_WHEN_DARK,
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      marginTop: -THUMB_SIZE / 2,
      borderRadius: THUMB_SIZE / 2,
      background: thumbBg,
      border: `1px solid ${borderRgba}`,
      boxShadow: `0 2px 4px ${shadowColorSoft}, 0 4px 12px ${shadowColor}`,
      transition:
        "left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
    };
  },
};
//@@viewOff:css

//@@viewOn:propTypes
export type ThemeToggleProps = {
  darkMode: boolean;
  onToggle: () => void;
  style?: React.CSSProperties;
  removeDefaultStyle?: boolean;
  ariaLabelDark?: string;
  ariaLabelLight?: string;
};

export const THEME_TOGGLE_PROP_NAMES = [
  "darkMode",
  "onToggle",
  "style",
  "removeDefaultStyle",
  "ariaLabelDark",
  "ariaLabelLight",
] as const;
//@@viewOff:propTypes

const DEFAULT_ARIA_DARK = "Dark mode";
const DEFAULT_ARIA_LIGHT = "Light mode";

function ThemeToggle({
  darkMode,
  onToggle,
  style,
  removeDefaultStyle = false,
  ariaLabelDark = DEFAULT_ARIA_DARK,
  ariaLabelLight = DEFAULT_ARIA_LIGHT,
}: ThemeToggleProps) {
  const [pressed, setPressed] = useState(false);
  const isDark = darkMode;
  const textScheme = getColorScheme("text", darkMode);

  const wrapperStyle = removeDefaultStyle ? {} : Css.wrapper();

  return (
    <div
      style={{ ...wrapperStyle, ...style }}
    >
      <div
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? ariaLabelDark : ariaLabelLight}
        style={removeDefaultStyle ? {} : Css.switchTrack(darkMode)}
        onClick={onToggle}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
      >
        <span style={removeDefaultStyle ? {} : Css.trackIcon("left")}>
          <Icon
            icon={SUN_ICON}
            size="xs"
            color={textScheme.color}
            darkMode={darkMode}
          />
        </span>
        <span style={removeDefaultStyle ? {} : Css.trackIcon("right")}>
          <Icon
            icon={MOON_ICON}
            size="xs"
            color="#ffffff"
            darkMode={darkMode}
          />
        </span>
        <div
          style={{
            ...(removeDefaultStyle ? {} : Css.switchThumb(darkMode, isDark)),
            ...(pressed ? { transform: "scale(0.96)" } : {}),
          }}
        />
      </div>
    </div>
  );
}

//@@viewOn:exports
export { ThemeToggle };
export default ThemeToggle;
//@@viewOff:exports
