//!#Imports: start
import React from "react";
import { getColorScheme, type ColorScheme } from "../tools/colors";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
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
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type NumberProps = {
  value: number;
  tooltip?: string;
  wholeLengthNumberInTooltip?: boolean;
  minDecimalDigits?: number;
  maxDecimalDigits?: number;
  colorScheme?: ColorScheme;
  darkMode?: boolean;
  style?: React.CSSProperties;
  fixDecimalDigits?:number;
};

export const NUMBER_PROP_NAMES = [
  "value",
  "tooltip",
  "wholeLengthNumberInTooltip",
  "minDecimalDigits",
  "maxDecimalDigits",
  "colorScheme",
  "darkMode",
  "style",
  "fixDecimalDigits"
] as const;
//!#propTypes: end

const Number: React.FC<NumberProps> = ({
  value,
  tooltip,
  wholeLengthNumberInTooltip,
  minDecimalDigits = 0,
  maxDecimalDigits,
  colorScheme = "background",
  darkMode = true,
  style,
  fixDecimalDigits
}) => {
  //!#visualComponent: start
  const formattedValue = new Intl.NumberFormat(undefined, {
    minimumFractionDigits:
      fixDecimalDigits !== undefined ? fixDecimalDigits : minDecimalDigits,


    maximumFractionDigits:
      fixDecimalDigits !== undefined
        ? fixDecimalDigits
        : maxDecimalDigits ?? Math.max(minDecimalDigits, 20),
  }).format(value);

  const tooltipContent =
    tooltip ?? (wholeLengthNumberInTooltip ? String(value) : undefined);
  //!#render components: start
  return (
    <span
      style={{ ...Css.span(darkMode, colorScheme), ...style }}
      title={tooltipContent}
    >
      {formattedValue}
    </span>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { Number };
export default Number;
//!#export: end
