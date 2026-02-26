//!#Imports: start
import React from "react";
import { getColorScheme } from "../tools/colors";
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

  optionRow: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      cursor: "pointer",
    };
  },

  radio: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("primary", darkMode);

    return {
      width: "1.125rem",
      height: "1.125rem",
      accentColor: scheme.color,
      cursor: "pointer",
    };
  },

  labelText: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("background", darkMode);

    return {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: scheme.textColor,
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
    /**
     * If true, radios are visible but non-interactive (read-only).
     */
    readOnly?: boolean;
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  itemList: RadiosItem[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  direction?: "row" | "column";
};

// Const array for runtime prop extraction in Documentation
export const RADIOS_PROP_NAMES = [
    "readOnly",
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
  "direction",
] as const;
//!#propTypes: end

const Radios = ({
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
  direction = "column",
  readOnly = false,
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
    >
      {itemList.map((item) => {
        const itemValueStr = String(item.value);
        const isChecked = valueStr === itemValueStr;
        const inputId = id ? `${id}-${itemValueStr}` : undefined;

        return (
          <label
            key={itemValueStr}
            style={Css.optionRow(removeDefaultStyle)}
            htmlFor={inputId}
          >
            <input
              type="radio"
              id={inputId}
              name={name}
              value={itemValueStr}
              checked={isChecked}
              onChange={readOnly ? undefined : onChange}
              onFocus={readOnly ? undefined : onFocus}
              onBlur={readOnly ? undefined : onBlur}
              tabIndex={readOnly ? -1 : 0}
              readOnly={readOnly}
              disabled={readOnly}
              style={{
                ...Css.radio(removeDefaultStyle, darkMode),
                cursor: readOnly ? "not-allowed" : "pointer",
                opacity: readOnly ? 0.7 : 1,
              }}
            />
            <span style={Css.labelText(removeDefaultStyle, darkMode)}>
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
