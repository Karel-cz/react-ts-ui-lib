//@@viewOn:imports
import React, { useState } from "react";
import {
  type ColorScheme,
  type Significance,
  getColorScheme,
  getSignificanceColor,
  getModernGradient,
} from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import { getButtonSize, type SizeToken } from "../tools/size";
import Pending from "./Pending";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  button: (
    removeDefaultStyle?: boolean,
    background?: string,
    textColor?: string,
    borderRadiusValue?: number,
    isDisabled?: boolean,
    hover?: boolean,
    hoverBackground?: string,
    padding?: string,
    fontSize?: number,
    height?: string,
    width?: string,
    modernEnabled?: boolean,
    modernBackground?: string,
    modernHoverBackground?: string,
    shadow?: string,
    hoverShadow?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const useModern = modernEnabled && !isDisabled;

    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: padding,
      border: "none",
      borderRadius: borderRadiusValue,
      background: useModern
        ? hover
          ? modernHoverBackground
          : modernBackground
        : hover && !isDisabled
          ? hoverBackground
          : background,
      backgroundSize: useModern ? "200% 200%" : undefined,
      backgroundPosition: useModern ? (hover ? "100% 0%" : "0% 50%") : undefined,
      color: textColor,
      cursor: isDisabled ? "not-allowed" : "pointer",
      fontWeight: 600,
      fontSize: fontSize,
      height: height,
      width: width,
      transition:
        "background-position 260ms ease, background 160ms ease, color 160ms ease, box-shadow 180ms ease",
      boxShadow: useModern ? (hover ? hoverShadow : shadow) : undefined,
      outline: "none",
      WebkitTapHighlightColor: "transparent",
      position: "relative",
    };
  },

  content: (isPending?: boolean): React.CSSProperties => ({
    opacity: isPending ? 0 : 1,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: isPending ? 2 : 0,
  }),

  spinnerContainer: (): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  colorScheme?: ColorScheme;
  significance?: Significance;
  icon?: string;
  iconPosition?: "left" | "right";
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  borderRadius?: RadiusToken;
  size?: SizeToken;
  removeDefaultStyle?: boolean;
  tooltip?: string;
  type?: "button" | "submit" | "reset";
  darkMode?: boolean;
  isPending?: boolean;
  noPrint?: boolean;
  modern?: boolean;
};

// Const array for runtime prop extraction in Documentation
export const BUTTON_PROP_NAMES = [
  "children",
  "disabled",
  "loading",
  "colorScheme",
  "significance",
  "icon",
  "iconPosition",
  "label",
  "onClick",
  "style",
  "borderRadius",
  "size",
  "removeDefaultStyle",
  "tooltip",
  "type",
  "darkMode",
  "isPending",
  "noPrint",
  "modern",
] as const;
//@@viewOff:propTypes

const Button = ({
  children,
  label,
  disabled = false,
  style,
  removeDefaultStyle = false,
  type = "button",
  tooltip,
  isPending = false,
  colorScheme = "primary",
  significance = "common",
  borderRadius = "md",
  size = "md",
  onClick,
  icon = "",
  iconPosition = "left",
  darkMode = true,
  noPrint = false,
  modern = false,
}: ButtonProps) => {
  //@@viewOn:private
  const [hover, setHover] = useState(false);

  const scheme = getSignificanceColor(colorScheme, significance, darkMode);

  const disabledBg = getColorScheme("surface", darkMode).color;
  const disabledText = getColorScheme("muted", darkMode).color;

  const isDisabled = disabled || isPending;
  const background = isDisabled ? disabledBg : scheme.color;
  const textColor = isDisabled ? disabledText : scheme.textColor;
  const borderRadiusValue = getRadiusValue(borderRadius);

  const buttonSize = getButtonSize(size);
  const iconSize = buttonSize.iconSize;

  // Hover background - use darker variant of colorScheme
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

  const hoverBackground =
    hoverSchemeMap[colorScheme as string]?.color || background;

  const modernStyle = getModernGradient(colorScheme, significance, darkMode);
  const gradientBackground = modernStyle.background;
  const gradientHoverBackground = modernStyle.hoverBackground;
  const shadow = modernStyle.shadow;
  const hoverShadow = modernStyle.hoverShadow;

  const content = children || label;
  const useModernGradient = modern && significance !== "distinct";
  //@@viewOff:private

  //@@viewOn:render
  const buttonStyle = Css.button(
    removeDefaultStyle,
    background,
    textColor,
    borderRadiusValue,
    isDisabled,
    hover,
    hoverBackground,
    buttonSize.padding,
    buttonSize.fontSize,
    buttonSize.height,
    buttonSize.width,
    useModernGradient,
    gradientBackground,
    gradientHoverBackground,
    shadow,
    hoverShadow,
  );

  return (
    <button
      disabled={isDisabled}
      className={noPrint ? "no-print" : undefined}
      style={{ ...buttonStyle, ...style }}
      type={type}
      title={tooltip}
      aria-label={
        tooltip ?? (typeof children === "string" ? children : undefined)
      }
      aria-busy={isPending || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <span style={Css.content(isPending)}>
        {iconPosition === "left" && (
          <span style={{ display: "inline-flex", cursor: isDisabled ? "not-allowed" : "pointer" }}>
            <Icon icon={icon} size={iconSize} />
          </span>
        )}
        {content}
        {iconPosition === "right" && (
          <span style={{ display: "inline-flex", cursor: isDisabled ? "not-allowed" : "pointer" }}>
            <Icon icon={icon} size={iconSize} />
          </span>
        )}
      </span>
      {isPending && (
        <span style={Css.spinnerContainer()}>
          <Pending darkMode={darkMode} size={"xs"} />
        </span>
      )}
    </button>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Button };
export default Button;
//@@viewOff:exports