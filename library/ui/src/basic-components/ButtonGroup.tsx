/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import { getBorderColor } from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import Button from "./Button";
import type { ButtonProps } from "./Button";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  wrapper: (
    removeDefaultStyle?: boolean,
    direction: "row" | "column" = "row",
    gap?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: direction,
      gap: gap ?? "0.5rem",
      flexWrap: "wrap",
      alignItems: "center",
    };
  },

  itemWrapper: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      display: "inline-flex",
    };
  },

  segmentedWrapper: (
    removeDefaultStyle?: boolean,
    darkMode = true,
    borderRadius?: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const borderColor = getBorderColor(darkMode);

    return {
      display: "inline-flex",
      border: `1px solid ${borderColor}`,
      borderRadius: borderRadius ?? 8,
      overflow: "hidden",
      gap: 0,
    };
  },

  segmentedItem: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      borderRadius: 0,
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
function isButtonItem(
  item: ButtonGroupItem,
): item is ButtonGroupItemButton {
  return !("component" in item) || item.component == null;
}
//@@viewOff:helpers

//@@viewOn:propTypes
/** Item as Button props – same API as Button component */
export type ButtonGroupItemButton = ButtonProps & { key?: React.Key };

/** Item as custom component – user provides their own element */
export type ButtonGroupItemCustom = {
  component: React.ReactNode;
  key?: React.Key;
};

/** Single item: either Button props or custom component */
export type ButtonGroupItem = ButtonGroupItemButton | ButtonGroupItemCustom;

export type ButtonGroupProps = {
  itemList: ButtonGroupItem[];
  direction?: "row" | "column";
  gap?: string;
  variant?: "default" | "segmented";
  borderRadius?: RadiusToken;
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
};

// Const array for runtime prop extraction in Documentation
export const BUTTON_GROUP_PROP_NAMES = [
  "itemList",
  "direction",
  "gap",
  "variant",
  "borderRadius",
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
] as const;
//@@viewOff:propTypes

const ButtonGroup = ({
  itemList,
  direction = "row",
  gap,
  variant = "default",
  borderRadius = "md",
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
}: ButtonGroupProps) => {
  //@@viewOn:private
  if (hidden) return null;

  const borderRadiusValue = getRadiusValue(borderRadius);
  const isSegmented = variant === "segmented";

  const containerStyle = isSegmented
    ? Css.segmentedWrapper(removeDefaultStyle, darkMode, borderRadiusValue)
    : Css.wrapper(removeDefaultStyle, direction, gap ?? (isSegmented ? "0" : "0.5rem"));

  const itemStyle = isSegmented ? Css.segmentedItem(removeDefaultStyle) : Css.itemWrapper(removeDefaultStyle);
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...containerStyle, ...style }}
      role="group"
    >
      {itemList.map((item, index) => {
        const key = "key" in item && item.key != null ? item.key : index;

        if (!isButtonItem(item)) {
          return (
            <div key={key} style={itemStyle}>
              {item.component}
            </div>
          );
        }

        const { key: _itemKey, ...buttonProps } = item;
        return (
          <div key={key} style={itemStyle}>
            <Button
              {...buttonProps}
              darkMode={darkMode}
              removeDefaultStyle={isSegmented ? false : buttonProps.removeDefaultStyle}
              borderRadius={
                isSegmented ? "xs" : (buttonProps.borderRadius ?? borderRadius)
              }
            />
          </div>
        );
      })}
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { ButtonGroup };
export default ButtonGroup;
//@@viewOff:exports
