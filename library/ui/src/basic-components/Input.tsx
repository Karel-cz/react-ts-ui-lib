/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  wrapper: (): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  }),
  label: (): React.CSSProperties => ({
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#333",
  }),
  input: (removeDefaultStyle?: boolean, borderRadiusValue?: number): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      padding: "0.5rem 0.75rem",
      border: "1px solid #ccc",
      borderRadius: borderRadiusValue,
      fontSize: "1rem",
      fontFamily: "inherit",
      outline: "none",
      transition: "border-color 160ms ease, box-shadow 160ms ease",
      boxShadow: "none",
      backgroundColor: "#fff",
      color: "#333",
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type InputProps = {
  style?: React.CSSProperties;
  removeDefaultStyle?: boolean;
  placeholder?: string;
  value?: string;
  required?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  borderRadius?: RadiusToken;
};

export const INPUT_PROP_NAMES = [
  "style",
  "removeDefaultStyle",
  "placeholder",
  "value",
  "required",
  "label",
  "onChange",
  "onBlur",
  "onFocus",
  "disabled",
  "id",
  "name",
  "borderRadius",
] as const;
//@@viewOff:propTypes

export const Input: React.FC<InputProps> = ({
  style,
  removeDefaultStyle,
  placeholder,
  value,
  required,
  label,
  onChange,
  onBlur,
  onFocus,
  disabled,
  id,
  name,
  borderRadius = "md",
}) => {
  //@@viewOn:private
  const borderRadiusValue = getRadiusValue(borderRadius);
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div style={{ ...Css.wrapper(), ...style }}>
      {label && (
        <label htmlFor={id} style={Css.label()}>
          {label}
          {required && <span style={{ color: "#d32f2f" }}> *</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        style={Css.input(removeDefaultStyle, borderRadiusValue)}
      />
    </div>
  );
  //@@viewOff:render
};
