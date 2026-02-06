/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import { getColorScheme } from "../tools/colors";
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
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type CheckboxProps = {
  className?: string;
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
};

// Const array for runtime prop extraction in documentation
export const CHECKBOX_PROP_NAMES = [
  "className",
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

const Checkbox = ({
  className,
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
}: CheckboxProps) => {
  //@@viewOn:private
  if (hidden) return null;
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div
      className={`${className ?? ""} ${noPrint ? "no-print" : ""}`.trim()}
      style={Css.wrapper(removeDefaultStyle)}
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
  //@@viewOff:render
};

//@@viewOn:exports
export { Checkbox };
export default Checkbox;
//@@viewOff:exports
