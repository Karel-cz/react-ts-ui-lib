/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React, { useState } from "react";
import {
  type ColorScheme,
  type Significance,
  getColorScheme,
  getSignificanceColor,
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
    width?: string
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: padding,
      border: "none",
      borderRadius: borderRadiusValue,
      background: hover && !isDisabled ? hoverBackground : background,
      color: textColor,
      cursor: isDisabled ? "not-allowed" : "pointer",
      fontWeight: 600,
      fontSize: fontSize,
      width: width,
      transition:
        "transform 120ms ease, background 160ms ease, color 160ms ease",
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
    padding: isPending ? 10 : 0,
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
export const ButtonTypeScheme = {
  children: {
    name: "children",
    required: false,
    description:
      "Content rendered inside the button (text, icons, custom nodes).",
    type: undefined as React.ReactNode,
  },
  disabled: {
    name: "disabled",
    required: false,
    description: "Prevents interaction and visually disables the button.",
    type: false as boolean,
  },
  loading: {
    name: "loading",
    description:
      "Alias for pending state – indicates that an async action is running.",
    required: false,
    type: false as boolean,
  },
  colorScheme: {
    name: "colorScheme",
    description:
      "Determines visual look of the button based on predefined color palette (primary, success, danger…).",
    required: false,
    type: "primary" as ColorScheme,
  },
  significance: {
    name: "significance",
    description:
      "Controls visual intensity of the button: common (default), highlighted, distinct.",
    required: false,
    type: "common" as Significance,
  },
  icon: {
    name: "icon",
    description: "Name of mdi icon rendered inside the button.",
    required: false,
    type: "" as string,
  },
  iconPosition: {
    name: "iconPosition",
    description:
      "Controls whether icon is rendered on the left or right side of the content.",
    required: false,
    type: "undefined" as "left" | "right",
  },
  label: {
    name: "label",
    description:
      "Simple text alternative to children – useful for easy text buttons or accessibility.",
    required: false,
    type: "" as string,
  },
  onClick: {
    name: "onClick",
    description: "Triggered when the user clicks the button.",
    required: false,
    type: (undefined as unknown) as (e: React.MouseEvent<HTMLButtonElement>) => void,
  },
  className: {
    name: "className",
    description:
      "Additional CSS class names applied to the root button element.",
    required: false,
    type: "" as string,
  },
  borderRadius: {
    name: "borderRadius",
    description: "Predefined border radius token (xs, sm, md, lg, full).",
    required: false,
    type: "md" as RadiusToken,
  },
  size: {
    name: "size",
    description: "Button size token (xs, sm, md, lg, xl).",
    required: false,
    type: "md" as SizeToken,
  },
  removeDefaultStyle: {
    name: "removeDefaultStyle",
    description:
      "Disables built-in styling and leaves only raw button element for full customization.",
    required: false,
    type: false as boolean,
  },
  tooltip: {
    name: "tooltip",
    description: "Browser default tooltip shown when hovering over the button.",
    required: false,
    type: "" as string,
  },
  type: {
    name: "type",
    description: "Native button type (button, submit, reset).",
    required: false,
    type: "" as "button" | "submit" | "reset",
  },
  darkMode: {
    name: "darkMode",
    description:
      "Renders the button using dark mode palette (affects colorScheme behavior).",
    required: false,
    type: true as boolean,
  },
  isPending: {
    name: "isPending",
    description:
      "Shows loading spinner and blocks interactions. Content becomes visually hidden.",
    required: false,
    type: false as boolean,
  },
  noPrint: {
    name: "noPrint",
    description: "Hides the button when printing (adds no-print class).",
    required: false,
    type: false as boolean,
  },
};

export type ButtonProps = {
  [K in keyof typeof ButtonTypeScheme]?: (typeof ButtonTypeScheme)[K]["type"];
};
//@@viewOff:propTypes

const Button = ({
  children,
  label,
  disabled = false,
  className,
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

  const hoverBackground = hoverSchemeMap[colorScheme as string]?.color || background;

  const content = children || label;
  //@@viewOff:private

  //@@viewOn:render
  return (
    <button
      disabled={isDisabled}
      className={`${className ?? ""} ${noPrint ? "no-print" : ""}`.trim()}
      style={Css.button(
        removeDefaultStyle,
        background,
        textColor,
        borderRadiusValue,
        isDisabled,
        hover,
        hoverBackground,
        buttonSize.padding,
        buttonSize.fontSize,
        buttonSize.width
      )}
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
        {iconPosition === "left" && <Icon icon={icon} size={iconSize} />}
        {content}
        {iconPosition === "right" && <Icon icon={icon} size={iconSize} />}
      </span>
      {isPending && (
        <span style={Css.spinnerContainer()}>
          <Pending darkMode={darkMode} />
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
