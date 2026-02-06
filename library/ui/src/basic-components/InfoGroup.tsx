/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
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
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
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
  className?: string;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
};

// Const array for runtime prop extraction in documentation
export const INFO_GROUP_PROP_NAMES = [
  "itemList",
  "direction",
  "itemDirection",
  "autoResize",
  "className",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
] as const;
//@@viewOff:propTypes

const InfoGroup = ({
  itemList,
  direction = "vertical",
  itemDirection = "horizontal",
  autoResize = false,
  className,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
}: InfoGroupProps) => {
  //@@viewOn:private
  if (hidden) return null;

  // TODO: Implement autoResize functionality
  if (autoResize) {
    // Placeholder for future implementation
  }
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div
      className={`${className ?? ""} ${noPrint ? "no-print" : ""}`.trim()}
      style={Css.container(removeDefaultStyle, direction)}
    >
      {itemList.map((item, index) => (
        <div
          key={index}
          style={Css.item(removeDefaultStyle, itemDirection)}
        >
          {item.icon && (
            <Icon icon={item.icon} size="md" darkMode={darkMode} />
          )}
          <div style={Css.itemContent()}>
            <div>{item.title}</div>
            {item.subtitle && <div style={{ fontSize: "0.875rem", opacity: 0.8 }}>{item.subtitle}</div>}
          </div>
        </div>
      ))}
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { InfoGroup };
export default InfoGroup;
//@@viewOff:exports
