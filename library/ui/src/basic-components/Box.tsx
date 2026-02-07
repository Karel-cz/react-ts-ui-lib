/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import { getBorderColor } from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
//@@viewOff:imports

//@@viewOn:constants
const DEFAULT_PADDING = 16;
//@@viewOff:constants

//@@viewOn:css
const Css = {
  box: (
    removeDefaultStyle: boolean,
    borderColor: string,
    borderTop: boolean,
    borderRight: boolean,
    borderBottom: boolean,
    borderLeft: boolean,
    borderRadiusValue: number,
    padding: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    const borderStyle = `1px solid ${borderColor}`;
    return {
      boxSizing: "border-box",
      borderTop: borderTop ? borderStyle : "none",
      borderRight: borderRight ? borderStyle : "none",
      borderBottom: borderBottom ? borderStyle : "none",
      borderLeft: borderLeft ? borderStyle : "none",
      borderRadius: borderRadiusValue,
      padding: `${padding}px`,
    };
  },
};
//@@viewOff:css

//@@viewOn:propTypes
export type BoxProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  /** Show top border. */
  borderTop?: boolean;
  /** Show right border. */
  borderRight?: boolean;
  /** Show bottom border. */
  borderBottom?: boolean;
  /** Show left border. */
  borderLeft?: boolean;
  /** Inner padding (px). */
  padding?: number;
  /** Border radius token. */
  borderRadius?: RadiusToken;
};

export const BOX_PROP_NAMES = [
  "children",
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "padding",
  "borderRadius",
] as const;
//@@viewOff:propTypes

//@@viewOn:component
const Box = ({
  children,
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  borderTop = true,
  borderRight = true,
  borderBottom = true,
  borderLeft = true,
  padding = DEFAULT_PADDING,
  borderRadius = "md",
}: BoxProps) => {
  if (hidden) return null;

  const borderColor = getBorderColor(darkMode);
  const borderRadiusValue = getRadiusValue(borderRadius);

  const baseStyle = Css.box(
    removeDefaultStyle,
    borderColor,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderRadiusValue,
    padding,
  );

  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...baseStyle, ...style }}
    >
      {children}
    </div>
  );
};
//@@viewOff:component

//@@viewOn:exports
export { Box };
export default Box;
//@@viewOff:exports
