 
//@@viewOn:imports
import React from "react";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  span: (): React.CSSProperties => ({
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type NumberProps = {
  value: number;
  tooltip?: string;
  wholeLengthNumberInTooltip?: boolean;
  minDecimalDigits?: number;
  style?: React.CSSProperties;
};

export const NUMBER_PROP_NAMES = [
  "value",
  "tooltip",
  "wholeLengthNumberInTooltip",
  "minDecimalDigits",
  "style",
] as const;
//@@viewOff:propTypes

export const Number: React.FC<NumberProps> = ({
  value,
  tooltip,
  wholeLengthNumberInTooltip,
  minDecimalDigits = 0,
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
    <span style={{ ...Css.span(), ...style }} title={tooltipContent}>
      {formattedValue}
    </span>
  );
  //@@viewOff:render
};
