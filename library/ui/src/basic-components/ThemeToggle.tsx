//@@viewOn:imports
import React, { useState } from "react";
import {
  getColorScheme,
  getBorderColor,
  getRgbaFromScheme,
} from "../tools/colors";
import {
  getThemeToggleSize,
  type ThemeToggleSizeToken,
} from "../tools/size";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
const SUN_ICON = "mdi-white-balance-sunny";
const MOON_ICON = "mdi-moon-waxing-crescent";
//@@viewOff:constants

//@@viewOn:css
const Css = {
  wrapper: (): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
  }),

  switchTrack: (
    darkMode: boolean,
    trackWidth: number,
    trackHeight: number,
  ): React.CSSProperties => {
    const scheme = getColorScheme("surface", darkMode);
    const borderColor = getBorderColor(darkMode);
    const insetShadow = getRgbaFromScheme("text", false, darkMode ? 0.12 : 0.06);
    const c = (a: number) => getRgbaFromScheme("text", false, a);
    const outerShadow = darkMode
      ? `0 4px 8px -2px ${c(0.2)}, 0 8px 18px -4px ${c(0.14)}, 0 12px 28px 0 ${c(0.1)}`
      : `0 4px 12px -2px ${c(0.15)}, 0 2px 6px -2px ${c(0.08)}`;
    return {
      width: trackWidth,
      height: trackHeight,
      borderRadius: trackHeight / 2,
      background: scheme.color,
      border: `1px solid ${borderColor}`,
      cursor: "pointer",
      position: "relative",
      transition: "background 0.3s ease, border-color 0.2s ease, box-shadow 0.2s ease",
      flexShrink: 0,
      boxShadow: `${outerShadow}, inset 0 1px 2px ${insetShadow}`,
    };
  },
  trackIcon: (
    side: "left" | "right",
    gapLeft: number,
  ): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    ...(side === "left"
      ? { left: gapLeft }
      : { right: gapLeft }),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  }),
  switchThumb: (
    darkMode: boolean,
    isDark: boolean,
    thumbSize: number,
    gapLeft: number,
    leftWhenLight: number,
  ): React.CSSProperties => {
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
      left: isDark ? gapLeft : leftWhenLight,
      width: thumbSize,
      height: thumbSize,
      marginTop: -thumbSize / 2,
      borderRadius: thumbSize / 2,
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
  size?: ThemeToggleSizeToken;
  style?: React.CSSProperties;
  removeDefaultStyle?: boolean;
  ariaLabelDark?: string;
  ariaLabelLight?: string;
};

export const THEME_TOGGLE_PROP_NAMES = [
  "darkMode",
  "onToggle",
  "size",
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
  size = "md",
  style,
  removeDefaultStyle = false,
  ariaLabelDark = DEFAULT_ARIA_DARK,
  ariaLabelLight = DEFAULT_ARIA_LIGHT,
}: ThemeToggleProps) {
  const [pressed, setPressed] = useState(false);
  const isDark = darkMode;
  const textScheme = getColorScheme("text", darkMode);

  const toggleSize = getThemeToggleSize(size);
  const {
    trackWidth,
    trackHeight,
    thumbSize,
    gap,
    gapLeft,
    iconSize: iconSizeToken,
  } = toggleSize;
  const leftWhenLight = trackWidth - gap - thumbSize - gap;

  const wrapperStyle = removeDefaultStyle ? {} : Css.wrapper();

  return (
    <div
      style={{ ...wrapperStyle, ...style }}
    >
      <div
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? ariaLabelDark : ariaLabelLight}
        style={
          removeDefaultStyle
            ? {}
            : Css.switchTrack(darkMode, trackWidth, trackHeight)
        }
        onClick={onToggle}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
      >
        <span
          style={
            removeDefaultStyle ? {} : Css.trackIcon("left", gapLeft)
          }
        >
          <Icon
            icon={SUN_ICON}
            size={iconSizeToken}
            color={textScheme.color}
            darkMode={darkMode}
          />
        </span>
        <span
          style={
            removeDefaultStyle ? {} : Css.trackIcon("right", gapLeft)
          }
        >
          <Icon
            icon={MOON_ICON}
            size={iconSizeToken}
            color="#ffffff"
            darkMode={darkMode}
          />
        </span>
        <div
          style={{
            ...(removeDefaultStyle
              ? {}
              : Css.switchThumb(
                  darkMode,
                  isDark,
                  thumbSize,
                  gapLeft,
                  leftWhenLight,
                )),
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
