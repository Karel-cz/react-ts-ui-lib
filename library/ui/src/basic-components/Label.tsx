/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import { getColorScheme, type ColorScheme } from "../tools/colors";
import { getLabelSize, type LabelSizeToken } from "../tools/labelSize";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  label: (
    removeDefaultStyle?: boolean,
    darkMode = true,
    sizeToken?: LabelSizeToken,
    colorScheme?: ColorScheme,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme(colorScheme ?? "background", darkMode);
    const size = getLabelSize(sizeToken ?? "m");
    const isNeutral = colorScheme === "background" || colorScheme === "surface";
    const textColor = isNeutral ? scheme.textColor : scheme.color;

    return {
      fontFamily: "inherit",
      fontWeight: 600,
      color: textColor,
      fontSize: size.fontSize,
      lineHeight: size.lineHeight,
      margin: 0,
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type LabelProps = {
  className?: string;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  children?: React.ReactNode;
  size?: LabelSizeToken;
  colorScheme?: ColorScheme;
  tooltip?: string;
};

// Const array for runtime prop extraction in documentation
export const LABEL_PROP_NAMES = [
  "className",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "children",
  "size",
  "colorScheme",
  "tooltip",
] as const;
//@@viewOff:propTypes

const Label = ({
  className,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  children,
  size = "m",
  colorScheme = "background",
  tooltip,
}: LabelProps) => {
  //@@viewOn:private
  if (hidden) return null;
  //@@viewOff:private

  //@@viewOn:render
  return (
    <span
      className={`${className ?? ""} ${noPrint ? "no-print" : ""}`.trim()}
      style={Css.label(removeDefaultStyle, darkMode, size, colorScheme)}
      title={tooltip}
    >
      {children}
    </span>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Label };
export default Label;
//@@viewOff:exports
