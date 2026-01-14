/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import { getColorScheme, getSignificanceColor, type ColorScheme, type Significance } from "../tools/colors";
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
    width?: string
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
export const BadgeTypeScheme = {
  children: {
    name: "children",
    description: "Obsah badge (text nebo vlastní node).",
    required: false,
    type: undefined as React.ReactNode,
  },
  label: {
    name: "label",
    description: "Textový obsah badge (pokud není children).",
    required: false,
    type: "" as string,
  },
  icon: {
    name: "icon",
    description: "Název MDI ikony, renderuje interní Icon komponentu.",
    required: false,
    type: "" as string,
  },
  colorScheme: {
    name: "colorScheme",
    description: "Barevné schéma badge (primary, success, danger, warning, info).",
    required: false,
    type: "primary" as ColorScheme,
  },
  significance: {
    name: "significance",
    description: "Intenzita barvy: common (default), highlighted, distinct.",
    required: false,
    type: "common" as Significance,
  },
  borderRadius: {
    name: "borderRadius",
    description: "Předdefinované zaoblení (xs, sm, md, lg, full).",
    required: false,
    type: "md" as RadiusToken,
  },
  size: {
    name: "size",
    description: "Badge size token (xs, sm, md, lg, xl).",
    required: false,
    type: "md" as SizeToken,
  },
  onClick: {
    name: "onClick",
    description: "Click handler pro badge.",
    required: false,
    type: (undefined as unknown) as React.MouseEventHandler<HTMLSpanElement>,
  },
  disabled: {
    name: "disabled",
    description: "Vypne interakce a změní vzhled.",
    required: false,
    type: false as boolean,
  },
  hidden: {
    name: "hidden",
    description: "Pokud true, badge se nevyrenderuje.",
    required: false,
    type: false as boolean,
  },
  noPrint: {
    name: "noPrint",
    description: "Skryje badge při tisku (přidá className no-print).",
    required: false,
    type: false as boolean,
  },
  className: {
    name: "className",
    description: "Dodatečné className pro wrapper.",
    required: false,
    type: "" as string,
  },
  tooltip: {
    name: "tooltip",
    description: "Native tooltip při hoveru.",
    required: false,
    type: "" as string,
  },
  darkMode: {
    name: "darkMode",
    description: "Použije tmavé schéma barev.",
    required: false,
    type: true as boolean,
  },
  removeDefaultStyle: {
    name: "removeDefaultStyle",
    description: "Bez defaultních stylů (ponechá jen obsah).",
    required: false,
    type: false as boolean,
  },
};

export type BadgeProps = {
  [K in keyof typeof BadgeTypeScheme]?: (typeof BadgeTypeScheme)[K]["type"];
};
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
}: BadgeProps) => {
  //@@viewOn:private
  if (hidden) return null;

  const scheme = getSignificanceColor(colorScheme, significance, darkMode);
  const baseScheme = getColorScheme(colorScheme, darkMode);

  const disabledBg = getColorScheme("surface", darkMode).color;
  const disabledText = getColorScheme("muted", darkMode).color;

  const background = disabled ? disabledBg : scheme.color;
  const textColor = disabled ? disabledText : scheme.textColor;
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
        background,
        textColor,
        borderRadiusValue,
        clickable,
        disabled,
        disabledBg,
        baseScheme.color,
        badgeSize.padding,
        badgeSize.fontSize,
        badgeSize.gap,
        badgeSize.width
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
