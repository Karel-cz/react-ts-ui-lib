/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
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
  input: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      padding: "0.5rem 0.75rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
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
  className?: string;
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
};

export const INPUT_PROP_NAMES = [
  "className",
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
] as const;
//@@viewOff:propTypes

export const Input: React.FC<InputProps> = ({
  className,
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
}) => {
  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div style={Css.wrapper()} className={className}>
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
        style={Css.input(removeDefaultStyle)}
      />
    </div>
  );
  //@@viewOff:render
};
