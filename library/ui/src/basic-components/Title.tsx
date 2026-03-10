//!#Imports: start
import React from "react";
import { getColorScheme, getBorderColor, type ColorScheme } from "../tools/colors";
import { getTitleSize, type TitleSizeToken } from "../tools/titleSize";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
const Css = {
  title: (
    removeDefaultStyle?: boolean,
    darkMode = true,
    sizeToken?: TitleSizeToken,
    colorScheme?: ColorScheme,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme(colorScheme ?? "background", darkMode);
    const size = getTitleSize(sizeToken ?? "m");
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
  blockWrapper: (darkMode = true): React.CSSProperties => {
    const borderColor = getBorderColor(darkMode);
    return {
      display: "block",
      width: "100%",
      border: `1px solid ${borderColor}`,
      padding: 8,
      boxSizing: "border-box",
    };
  },
};
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type TitleProps = {
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  children?: React.ReactNode;
  size?: TitleSizeToken;
  colorScheme?: ColorScheme;
  tooltip?: string;
  block?: boolean;
};

// Const array for runtime prop extraction in Documentation
export const TITLE_PROP_NAMES = [
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "children",
  "size",
  "colorScheme",
  "tooltip",
  "block",
] as const;
//!#propTypes: end

const Title = ({
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  children,
  size = "m",
  colorScheme = "background",
  tooltip,
  block = false,
}: TitleProps) => {
  //!#visualComponent: start
  if (hidden) return null;

  const titleStyle = Css.title(removeDefaultStyle, darkMode, size, colorScheme);
  const span = (
    <span style={titleStyle}>
      {children}
    </span>
  );

  //!#render components: start
  if (block) {
    return (
      <div
        className={noPrint ? "no-print" : undefined}
        style={{ ...Css.blockWrapper(darkMode), ...style }}
        title={tooltip}
      >
        {span}
      </div>
    );
  }
  return (
    <span
      className={noPrint ? "no-print" : undefined}
      style={{ ...titleStyle, ...style }}
      title={tooltip}
    >
      {children}
    </span>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { Title };
export default Title;
//!#export: end
