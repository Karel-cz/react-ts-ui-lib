//@@viewOn:imports
import React , {useState}from "react";
import colors, { type ColorScheme } from "../tools/colors";
import Pending from "../Pending/Pending";
import Icon from "../Icon/Icon";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  button: (
    removeDefaultStyle?: boolean,
    disabled?: boolean,
    pending?: boolean,
    colorScheme: ColorScheme = "primary"
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const schemeColors = {
      primary: { base: colors.primary.color, dark: colors.primaryDark.color, text: colors.text.color },
      success: { base: colors.success.color, dark: colors.successDark.color, text: colors.text.color },
      danger: { base: colors.danger.color, dark: colors.dangerDark.color, text: colors.text.color },
      warning: { base: colors.warning.color, dark: colors.warningDark.color, text: colors.background.color },
      info: { base: colors.info.color, dark: colors.infoDark.color, text: colors.background.color },
    };

    const scheme = schemeColors[colorScheme];
    const isDisabled = disabled || pending;
    const background = isDisabled ? colors.surface.color : scheme.base;
    const textColor = isDisabled ? colors.muted.color : scheme.text;

    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: 8,
      background: background,
      color: textColor,
      cursor: isDisabled ? "not-allowed" : "pointer",
      fontWeight: 600,
      transition: "transform 120ms ease, background 160ms ease, color 160ms ease",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
      position: "relative",
    };
  },

  buttonHover: (
    removeDefaultStyle?: boolean,
    disabled?: boolean,
    pending?: boolean,
    colorScheme: ColorScheme = "primary"
  ): React.CSSProperties => {
    if (removeDefaultStyle || disabled || pending) {
      return {};
    }

    const schemeColors = {
      primary: { dark: colors.primaryDark.color },
      success: { dark: colors.successDark.color },
      danger: { dark: colors.dangerDark.color },
      warning: { dark: colors.warningDark.color },
      info: { dark: colors.infoDark.color },
    };

    const scheme = schemeColors[colorScheme as ColorScheme];

    return {
      cursor: "pointer",
      background: scheme.dark,
    };
  },

  buttonFocus: (
    removeDefaultStyle?: boolean,
    disabled?: boolean,
    pending?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle || disabled || pending) {
      return {};
    }

    return {};
  },

  content: (isPending?: boolean): React.CSSProperties => ({
    visibility: isPending ? "hidden" : "visible",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  }),

  spinnerContainer: (): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers


//@@viewOn:propTypes
export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  removeDefaultStyle?: boolean;
  type?: "button" | "submit" | "reset";
  label?: string;
  tooltip?: string;
  isPending?: boolean;
  colorScheme?: ColorScheme;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: string;
  iconPosition?: "left" | "right";
};
//@@viewOff:propTypes


const Button = ({
  children,
  label,
  disabled = false,
  className,
  removeDefaultStyle = false,
  type = "button",
  tooltip,
  isPending = false,
  colorScheme = "primary",
  onClick,
  icon = "",
  iconPosition = "left",
}: ButtonProps) => {
  //@@viewOn:private
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  const isDisabled = disabled || isPending;

   //@@viewOff:private
  //@@viewOn:render
  return (
    <button
      disabled={isDisabled}
      className={className}
      style={{
        ...Css.button(removeDefaultStyle, disabled, isPending, colorScheme),
        ...(hover && !isDisabled ? Css.buttonHover(removeDefaultStyle, disabled, isPending, colorScheme) : {}),
        ...(focus && !isDisabled ? Css.buttonFocus(removeDefaultStyle, disabled, isPending) : {}),
      }}
      type={type}
      title={tooltip}
      aria-label={tooltip ?? (typeof children === "string" ? children : undefined)}
      aria-busy={isPending || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={onClick}
    >
      <span style={Css.content(isPending)}>
        {iconPosition === "left" && (<Icon icon={icon}  />)}
        {children || label}
        {iconPosition === "right" && ( <Icon icon={icon}  />)}
      </span>
      {isPending && (
        <span style={Css.spinnerContainer()}>
          <Pending />
        </span>
      )}
    </button>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Button };
export default Button;
//@@viewOff:exports
