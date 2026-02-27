//!#Imports: start
import React from "react";
import { getColorScheme } from "../tools/colors";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
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

  label: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("background", darkMode);

    return {
      fontSize: "0.875rem",
      fontWeight: 600,
      color: scheme.textColor,
    };
  },

  labelRequired: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      color: "#d32f2f",
      marginLeft: "0.25rem",
    };
  },

  checkboxContainer: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5rem",
    };
  },

  checkbox: (
    removeDefaultStyle?: boolean,
    error?: boolean,
    disabled?: boolean,
    darkMode = true,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("background", darkMode);
    const dangerScheme = getColorScheme("danger", darkMode);

    const baseStyle: React.CSSProperties = {
      width: "18px",
      height: "18px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      accentColor: error ? dangerScheme.color : scheme.color,
    };

    return baseStyle;
  },

  errorMessage: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const dangerScheme = getColorScheme("danger", darkMode);

    return {
      fontSize: "0.75rem",
      color: dangerScheme.color,
      marginTop: "-0.25rem",
    };
  },
  boxContainer: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("surface", darkMode);
    const borderScheme = getColorScheme("border", darkMode);

    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.75rem 1rem",
      borderRadius: "8px",
      backgroundColor: scheme.color,
      border: `1px solid ${borderScheme.color}`,
      cursor: "pointer",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
    };
  },

  boxLabel: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("background", darkMode);

    return {
      fontSize: "0.95rem",
      fontWeight: 500,
      color: scheme.textColor,
      cursor: "pointer",
      flex: 1,
    };
  },
};
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type CheckboxProps = {
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  showInBox?: boolean;
};

// Const array for runtime prop extraction in Documentation
export const CHECKBOX_PROP_NAMES = [
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "value",
  "onChange",
  "name",
  "id",
  "disabled",
  "label",
  "required",
  "error",
  "errorMessage",
  "showInBox",
] as const;
//!#propTypes: end

const Checkbox = ({
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  value = false,
  onChange,
  name,
  id,
  disabled = false,
  label,
  required = false,
  error = false,
  errorMessage,
  showInBox = false,
}: CheckboxProps) => {
  //!#visualComponent: start
  if (hidden) return null;
  //!#render components: start
  if (showInBox) {
    return (
      <div
        className={noPrint ? "no-print" : undefined}
        style={{ ...Css.boxContainer(removeDefaultStyle, darkMode), ...style }}
        onClick={() => {
          if (!disabled && onChange) {
            const event = {
              target: {
                type: "checkbox",
                checked: !value,
                name: name,
                id: id,
              },
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
          }
        }}
      >
        <label
          htmlFor={id}
          style={Css.boxLabel(removeDefaultStyle, darkMode)}
          onClick={(e) => e.stopPropagation()}
        >
          {label}
          {required && <span style={Css.labelRequired(removeDefaultStyle)}> *</span>}
        </label>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          style={Css.checkbox(removeDefaultStyle, error, disabled, darkMode)}
          onClick={(e) => e.stopPropagation()}
        />
        {error && errorMessage && (
          <div style={Css.errorMessage(removeDefaultStyle, darkMode)}>{errorMessage}</div>
        )}
      </div>
    );
  }

  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...Css.wrapper(removeDefaultStyle), ...style }}
    >
      {label && (
        <label htmlFor={id} style={Css.label(removeDefaultStyle, darkMode)}>
          {label}
          {required && <span style={Css.labelRequired(removeDefaultStyle)}> *</span>}
        </label>
      )}
      <div style={Css.checkboxContainer(removeDefaultStyle)}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          style={Css.checkbox(removeDefaultStyle, error, disabled, darkMode)}
        />
      </div>
      {error && errorMessage && (
        <div style={Css.errorMessage(removeDefaultStyle, darkMode)}>{errorMessage}</div>
      )}
    </div>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { Checkbox };
export default Checkbox;
//!#export: end
