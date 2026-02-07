/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import { getColorScheme, getBorderColor } from "../tools/colors";
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

  input: (
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
    const borderColor = getBorderColor(darkMode);

    return {
      padding: "0.5rem 0.75rem",
      border: `1px solid ${error ? dangerScheme.color : borderColor}`,
      borderRadius: 8,
      fontSize: "1rem",
      fontFamily: "inherit",
      outline: "none",
      transition: "border-color 160ms ease, box-shadow 160ms ease",
      boxShadow: "none",
      backgroundColor: scheme.color,
      color: scheme.textColor,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
    };
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
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type DateProps = {
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
};

// Const array for runtime prop extraction in Documentation
export const DATE_PROP_NAMES = [
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
] as const;
//@@viewOff:propTypes

const DateInput = ({
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  value = "",
  onChange,
  name,
  id,
  disabled = false,
  label,
  required = false,
  error = false,
  errorMessage,
}: DateProps) => {
  //@@viewOn:private
  if (hidden) return null;
  //@@viewOff:private

  //@@viewOn:render
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
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        style={Css.input(removeDefaultStyle, error, disabled, darkMode)}
      />
      {error && errorMessage && (
        <div style={Css.errorMessage(removeDefaultStyle, darkMode)}>{errorMessage}</div>
      )}
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { DateInput as Date };
export default DateInput;
//@@viewOff:exports
