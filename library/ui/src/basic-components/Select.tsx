//@@viewOn:imports
import React, { useState } from "react";
import { getColorScheme, getBorderColor } from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  wrapper: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    };
  },

  select: (
    removeDefaultStyle?: boolean,
    darkMode = true,
    focused?: boolean,
    borderRadiusValue?: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("background", darkMode);
    const borderColor = getBorderColor(darkMode);
    const primaryScheme = getColorScheme("primary", darkMode);

    return {
  minWidth: "10rem",
  padding: "0.5rem 2rem 0.5rem 0.75rem",
  border: `1px solid ${focused ? primaryScheme.color : borderColor}`,
  borderRadius: borderRadiusValue,

  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",

  fontSize: "1rem",
  fontFamily: "inherit",
  lineHeight: 1.5,
  outline: "none",
  transition: "border-color 160ms ease, box-shadow 160ms ease",
  boxShadow: focused ? `0 0 0 2px ${primaryScheme.color}40` : "none",
  backgroundColor: scheme.color,
  color: scheme.textColor,
  cursor: "pointer",
};

  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type SelectItem = {
  value: string | number;
  label: React.ReactNode;
};

export type SelectProps = {
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  itemList: SelectItem[];
  value?: string | number;
  borderRadius?: RadiusToken;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  className?: string;
};

// Const array for runtime prop extraction in Documentation
export const SELECT_PROP_NAMES = [
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "itemList",
  "value",
  "onChange",
  "onFocus",
  "onBlur",
  "name",
  "id",
  "className",
  "borderRadius",
] as const;
//@@viewOff:propTypes

const Select = ({
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  itemList,
  value = "",
  onChange,
  onFocus,
  onBlur,
  name,
  id,
  className,
  borderRadius = "none",
}: SelectProps) => {
  //@@viewOn:private
  const [focused, setFocused] = useState(false);
  if (hidden) return null;

  const borderRadiusValue = getRadiusValue(borderRadius);

  const valueStr = value === undefined || value === null ? "" : String(value);
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...Css.wrapper(removeDefaultStyle), ...style }}
    >
      <select
        id={id}
        name={name}
        className={className}
        value={valueStr}
        onChange={onChange}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        style={{
          ...Css.select(removeDefaultStyle, darkMode, focused, borderRadiusValue),
          borderRadius: borderRadiusValue,
        }}
      >
        {itemList.map((item) => (
          <option key={String(item.value)} value={String(item.value)}>
            {typeof item.label === "string" ? item.label : String(item.label)}
          </option>
        ))}
      </select>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Select };
export default Select;
//@@viewOff:exports
