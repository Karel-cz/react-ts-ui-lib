//!#Imports: start
import React from "react";
import { getColorScheme, type ColorScheme } from "../tools/colors";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
const Css = {
  wrapper: (
    removeDefaultStyle?: boolean,
    direction: "row" | "column" = "column",
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: direction,
      gap: "0.75rem",
      flexWrap: "wrap",
    };
  },

  optionRow: (removeDefaultStyle?: boolean, readOnly?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      cursor: readOnly ? "default" : "pointer",
      pointerEvents: readOnly ? "none" : "auto",
      opacity: readOnly ? 0.8 : 1,
    };
  },

  radio: (
    removeDefaultStyle?: boolean,
    darkMode = true,
    readOnly?: boolean,
    color?:ColorScheme,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme(color ? color : "primary", darkMode);

    return {
      width: "1.125rem",
      height: "1.125rem",
      accentColor: scheme.color,
      cursor: readOnly ? "default" : "pointer",
    };
  },

  labelText: (
    removeDefaultStyle?: boolean,
    darkMode = true,
    readOnly?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("background", darkMode);

    return {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: readOnly ? (darkMode ? "#a0a0a0" : "#707070") : scheme.textColor,
      fontFamily: "inherit",
    };
  },
};
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type RadiosItem = {
  value: string | number;
  label: React.ReactNode;
};

export type RadiosProps = {
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  readOnly?: boolean;
  darkMode?: boolean;
  itemList: RadiosItem[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  direction?: "row" | "column";
  colorScheme?:ColorScheme
};

// Const array for runtime prop extraction in Documentation
export const RADIOS_PROP_NAMES = [
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "readOnly",
  "darkMode",
  "itemList",
  "value",
  "onChange",
  "onFocus",
  "onBlur",
  "name",
  "id",
  "direction",
  "colorScheme"
] as const;
//!#propTypes: end

const Radios = ({
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  readOnly = false,
  darkMode = true,
  itemList,
  value = "",
  onChange,
  onFocus,
  onBlur,
  name,
  id,
  direction = "column",
  colorScheme
}: RadiosProps) => {
  //!#visualComponent: start
  if (hidden) return null;

  const valueStr = value === undefined || value === null ? "" : String(value);
  //!#render components: start
  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...Css.wrapper(removeDefaultStyle, direction), ...style }}
      role="radiogroup"
      aria-readonly={readOnly}
    >
      {itemList.map((item) => {
        const itemValueStr = String(item.value);
        const isChecked = valueStr === itemValueStr;
        const inputId = id ? `${id}-${itemValueStr}` : undefined;

        return (
          <label
            key={itemValueStr}
            style={Css.optionRow(removeDefaultStyle, readOnly)}
            htmlFor={inputId}
          >
            <input
              type="radio"
              id={inputId}
              name={name}
              value={itemValueStr}
              checked={isChecked}
              readOnly={readOnly}
              onChange={readOnly ? undefined : onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              style={Css.radio(removeDefaultStyle, darkMode, readOnly, colorScheme)}
              onClick={readOnly ? (e) => e.preventDefault() : undefined}
            />
            <span style={Css.labelText(removeDefaultStyle, darkMode, readOnly)}>
              {typeof item.label === "string" ? item.label : String(item.label)}
            </span>
          </label>
        );
      })}
    </div>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { Radios };
export default Radios;
//!#export: end
