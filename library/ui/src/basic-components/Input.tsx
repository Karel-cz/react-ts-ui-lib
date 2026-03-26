//!#Imports: start
import React from "react";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import { getColorScheme } from "../tools/colors";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
const Css = {
  wrapper: (): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  }),
  label: (darkMode: boolean): React.CSSProperties => {
    const scheme = getColorScheme("background", darkMode);

    return {
      fontSize: "0.875rem",
      fontWeight: 600,
      color: scheme.textColor,
    };
  },
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
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
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
  darkMode:boolean,
};

export const INPUT_PROP_NAMES = [
  "style",
  "removeDefaultStyle",
  "placeholder",
  "value",
  "required",
  "label",
  "darkMode",
  "onChange",
  "onBlur",
  "onFocus",
  "disabled",
  "id",
  "name",
  "borderRadius",
] as const;
//!#propTypes: end

const Input: React.FC<InputProps> = ({
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
  darkMode = true,
}) => {
  //!#visualComponent: start
  const borderRadiusValue = getRadiusValue(borderRadius);
  //!#render components: start
  return (
    <div style={{ ...Css.wrapper(), ...style }}>
      {label && (
        <label htmlFor={id} style={Css.label(darkMode)}>{label}
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
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { Input };
export default Input;
//!#export: end
