/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import {
  getColorScheme,
  getSignificanceColor,
  getModernGradient,
  type ColorScheme,
  type Significance,
} from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import { getBadgeSize, type SizeToken } from "../tools/size";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  badge: (
    removeDefaultStyle?: boolean,
    background?: string,
    textColor?: string,
    borderRadiusValue?: number,
    clickable?: boolean,
    disabled?: boolean,
    disabledBg?: string,
    baseSchemeColor?: string,
    padding?: string,
    fontSize?: number,
    gap?: number,
    width?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "inline-flex",
      alignItems: "center",
      gap: gap,
      padding: padding,
      background,
      color: textColor,
      borderRadius: borderRadiusValue,
      fontSize: fontSize,
      lineHeight: `${(fontSize || 12) + 4}px`,
      fontWeight: 600,
      cursor: clickable ? "pointer" : "default",
      userSelect: "none",
      border: `1px solid ${disabled ? disabledBg : baseSchemeColor}`,
      opacity: disabled ? 0.65 : 1,
      width: width,
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type BadgeProps = {
  children?: React.ReactNode;
  label?: string;
  icon?: string;
  colorScheme?: ColorScheme;
  significance?: Significance;
  borderRadius?: RadiusToken;
  size?: SizeToken;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  disabled?: boolean;
  hidden?: boolean;
  noPrint?: boolean;
  className?: string;
  tooltip?: string;
  darkMode?: boolean;
  removeDefaultStyle?: boolean;
  modern?: boolean;
};

// Const array for runtime prop extraction in documentation
export const BADGE_PROP_NAMES = [
  "children",
  "label",
  "icon",
  "colorScheme",
  "significance",
  "borderRadius",
  "size",
  "onClick",
  "disabled",
  "hidden",
  "noPrint",
  "className",
  "tooltip",
  "darkMode",
  "removeDefaultStyle",
  "modern",
] as const;
//@@viewOff:propTypes

//@@viewOn:component
const Badge = ({
  children,
  label,
  icon = "",
  colorScheme = "primary",
  significance = "common",
  borderRadius = "md",
  size = "md",
  onClick,
  disabled = false,
  hidden = false,
  noPrint = false,
  className,
  tooltip,
  darkMode = true,
  removeDefaultStyle = false,
  modern = false,
}: BadgeProps) => {
  //@@viewOn:private
  if (hidden) return null;

  const scheme = getSignificanceColor(colorScheme, significance, darkMode);
  const baseScheme = getColorScheme(colorScheme, darkMode);

  const disabledBg = getColorScheme("surface", darkMode).color;
  const disabledText = getColorScheme("muted", darkMode).color;

  const background = disabled ? disabledBg : scheme.color;
  const textColor = disabled ? disabledText : scheme.textColor;
  const modernStyle = getModernGradient(colorScheme, significance, darkMode);
  const finalBackground = disabled
    ? disabledBg
    : modern
      ? modernStyle.background
      : background;
  const borderRadiusValue = getRadiusValue(borderRadius);

  const badgeSize = getBadgeSize(size);
  const iconSize = badgeSize.iconSize;

  const clickable = !!onClick && !disabled;
  const content = children ?? label;
  //@@viewOff:private

  //@@viewOn:render
  return (
    <span
      className={`${className ?? ""} ${noPrint ? "no-print" : ""}`.trim()}
      onClick={clickable ? onClick : undefined}
      role={clickable ? "button" : undefined}
      aria-disabled={disabled || undefined}
      title={tooltip}
      style={Css.badge(
        removeDefaultStyle,
        finalBackground,
        textColor,
        borderRadiusValue,
        clickable,
        disabled,
        disabledBg,
        baseScheme.color,
        badgeSize.padding,
        badgeSize.fontSize,
        badgeSize.gap,
        badgeSize.width,
      )}
    >
      {icon && <Icon icon={icon} size={iconSize} darkMode={darkMode} />}
      {content}
    </span>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { Badge };
export default Badge;
//@@viewOff:exports
