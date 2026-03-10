//!#Imports: start
import type { TextAlignOptions } from "../tools/textAlignOptions";
import React from "react";
import Icon from "./Icon";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
const Css = {
  container: (
    removeDefaultStyle?: boolean,
    direction?: "horizontal" | "vertical",
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: direction === "horizontal" ? "row" : "column",
      gap: "1rem",
      alignItems: direction === "horizontal" ? "center" : "stretch",
    };
  },

  item: (
    removeDefaultStyle?: boolean,
    itemDirection?: "horizontal" | "vertical",
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: itemDirection === "vertical" ? "column" : "row",
      gap: "0.5rem",
      alignItems: itemDirection === "vertical" ? "flex-start" : "center",
    };
  },

  itemContent: (): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  }),
};
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type InfoGroupItem = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: string;
};

export type InfoGroupProps = {
  itemList: InfoGroupItem[];
  direction?: "horizontal" | "vertical";
  // TODO: Add 'vertical-reverse' and 'horizontal-reverse' variants to itemDirection
  itemDirection?: "horizontal" | "vertical";
  // TODO: Implement autoResize functionality
  autoResize?: boolean;
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  titleAlign?: TextAlignOptions;
  subtitleAlign?: TextAlignOptions;
  lines?: boolean;
};

// Const array for runtime prop extraction in Documentation
export const INFO_GROUP_PROP_NAMES = [
  "itemList",
  "direction",
  "itemDirection",
  "autoResize",
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "titleAlign",
  "subtitleAlign",
  "lines",
] as const;
//!#propTypes: end

const InfoGroup = ({
  itemList,
  direction = "vertical",
  itemDirection = "horizontal",
  autoResize = false,
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  titleAlign = "left",
  subtitleAlign = "left",
  lines = false,
}: InfoGroupProps) => {
  //!#visualComponent: start
  if (hidden) return null;

  // TODO: Implement autoResize functionality
  if (autoResize) {
    // Placeholder for future implementation
  }
  //!#render components: start
  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...Css.container(removeDefaultStyle, direction), ...style }}
    >
      {itemList.map((item, index) => (
        <React.Fragment key={index}>
          <div style={Css.item(removeDefaultStyle, itemDirection)}>
            {item.icon && (
              <Icon icon={item.icon} size="md" darkMode={darkMode} />
            )}
            <div style={Css.itemContent()}>
              <div style={{ textAlign: titleAlign, width: "100%" }}>
                {item.title}
              </div>

              {item.subtitle && (
                <div
                  style={{
                    fontSize: "0.875rem",
                    opacity: 0.8,
                    textAlign: subtitleAlign,
                    width: "100%",
                  }}
                >
                  {item.subtitle}
                </div>
              )}
            </div>
          </div>
          {lines && index < itemList.length - 1 && (
            <div
              style={{
                borderBottom: direction === "vertical" ? "1px solid rgba(128, 128, 128, 0.2)" : "none",
                borderRight: direction === "horizontal" ? "1px solid rgba(128, 128, 128, 0.2)" : "none",
                height: direction === "horizontal" ? "100%" : "0",
                width: direction === "vertical" ? "100%" : "0",
                margin: direction === "vertical" ? "0.5rem 0" : "0 0.5rem",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { InfoGroup };
export default InfoGroup;
//!#export: end
