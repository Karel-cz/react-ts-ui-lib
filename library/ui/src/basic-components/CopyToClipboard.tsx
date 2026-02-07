//@@viewOn:imports
import React, { useState } from "react";
import { getColorScheme, getBorderColor } from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
const ICON_COPY = "mdi-content-copy";
const ICON_CHECK = "mdi-check";
//@@viewOff:constants

//@@viewOn:css
const Css = {
  button: (
    darkMode: boolean,
    borderRadiusValue: number,
    success: boolean,
  ): React.CSSProperties => {
    const scheme = getColorScheme(success ? "success" : "primary", darkMode);
    const borderColor = getBorderColor(darkMode);
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "8px 14px",
      border: `1px solid ${borderColor}`,
      borderRadius: borderRadiusValue,
      background: scheme.color,
      color: scheme.textColor,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 14,
      outline: "none",
      transition: "background 0.2s ease, color 0.2s ease",
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type CopyToClipboardProps = {
  text: string;
  onCopy: (text: string) => Promise<boolean>;
  label?: string;
  children?: React.ReactNode;
  darkMode?: boolean;
  className?: string;
  removeDefaultStyle?: boolean;
  borderRadius?: RadiusToken;
};

export const COPY_TO_CLIPBOARD_PROP_NAMES = [
  "text",
  "onCopy",
  "label",
  "children",
  "darkMode",
  "className",
  "removeDefaultStyle",
  "borderRadius",
] as const;
//@@viewOff:propTypes

const CopyToClipboard = ({
  text,
  onCopy,
  label = "Copy",
  children,
  darkMode = true,
  className,
  removeDefaultStyle = false,
  borderRadius = "md",
}: CopyToClipboardProps) => {
  //@@viewOn:private
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleClick = async () => {
    const ok = await onCopy(text);
    setStatus(ok ? "success" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 1500);
  };

  const borderRadiusValue = getRadiusValue(borderRadius);
  const success = status === "success";
  //@@viewOff:private

  //@@viewOn:render
  const content = children ?? (
    <>
      <Icon
        icon={success ? ICON_CHECK : ICON_COPY}
        size="sm"
        color={success ? undefined : "currentColor"}
      />
      <span>{label}</span>
    </>
  );

  if (removeDefaultStyle) {
    return (
      <button
        type="button"
        className={className}
        onClick={handleClick}
        aria-label={typeof label === "string" ? label : "Copy to clipboard"}
      >
        {content}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={className}
      style={Css.button(darkMode, borderRadiusValue, success)}
      onClick={handleClick}
      aria-label={typeof label === "string" ? label : "Copy to clipboard"}
    >
      {content}
    </button>
  );
  //@@viewOff:render
};

export { CopyToClipboard };
export default CopyToClipboard;
