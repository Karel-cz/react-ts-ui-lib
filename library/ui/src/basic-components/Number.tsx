//@@viewOn:imports
import React from "react";
import { getColorScheme, type ColorScheme } from "../tools/colors";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  span: (
    darkMode = true,
    colorScheme?: ColorScheme,
  ): React.CSSProperties => {
    const scheme = getColorScheme(colorScheme ?? "background", darkMode);
    const isNeutral =
      colorScheme === "background" || colorScheme === "surface";

    const textColor = isNeutral ? scheme.textColor : scheme.color;

    return {
      color: textColor,
    };
  },
};
//@@viewOff:css

//@@viewOn:propTypes
export type NumberProps = {
  value: number;
  tooltip?: string;
  wholeLengthNumberInTooltip?: boolean;
  minDecimalDigits?: number;
  colorScheme?: ColorScheme;
  darkMode?: boolean;
  style?: React.CSSProperties;
};

export const NUMBER_PROP_NAMES = [
  "value",
  "tooltip",
  "wholeLengthNumberInTooltip",
  "minDecimalDigits",
  "colorScheme",
  "darkMode",
  "style",
] as const;
//@@viewOff:propTypes

export const Number: React.FC<NumberProps> = ({
  value,
  tooltip,
  wholeLengthNumberInTooltip,
  minDecimalDigits = 0,
  colorScheme = "background",
  darkMode = true,
  style,
}) => {
  //@@viewOn:private
  const formattedValue = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: minDecimalDigits,
    maximumFractionDigits: minDecimalDigits,
  }).format(value);

  const tooltipContent =
    tooltip ?? (wholeLengthNumberInTooltip ? String(value) : undefined);
  //@@viewOff:private

  //@@viewOn:render
  return (
    <span
      style={{ ...Css.span(darkMode, colorScheme), ...style }}
      title={tooltipContent}
    >
      {formattedValue}
    </span>
  );
  //@@viewOff:render
};
