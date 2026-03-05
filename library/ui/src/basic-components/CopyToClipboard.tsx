//!#Imports: start
import React, { useState } from "react";
import { getColorScheme, type ColorScheme } from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import Icon from "./Icon";
//!#Imports: end

//!#Constants: start
const ICON_COPY = "mdi-content-copy";
const ICON_CHECK = "mdi-check";
//!#Constants: end

//!#Styles: start
const Css = {
  container: (): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  }),
  iconWrapper: (
    scheme: ReturnType<typeof getColorScheme>,
    borderRadiusValue: number,
  ): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: borderRadiusValue,
    background: scheme.color,
    color: scheme.textColor,
    cursor: "pointer",
    transition: "background 0.2s ease, color 0.2s ease",
  }),
};
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type CopyToClipboardProps = {
  text: string;
  onCopy: (text: string) => Promise<boolean>;
  label?: string;
  children?: React.ReactNode;
  darkMode?: boolean;
  style?: React.CSSProperties;
  removeDefaultStyle?: boolean;
  borderRadius?: RadiusToken;
  backgroundColorScheme?: ColorScheme | null;
  tooltip?: string;
};

export const COPY_TO_CLIPBOARD_PROP_NAMES = [
  "text",
  "onCopy",
  "label",
  "children",
  "darkMode",
  "style",
  "removeDefaultStyle",
  "borderRadius",
  "backgroundColorScheme",
  "tooltip",
] as const;
//!#propTypes: end

const CopyToClipboard = ({
  text,
  onCopy,
  label = "Copy",
  children,
  darkMode = true,
  style,
  removeDefaultStyle = false,
  borderRadius = "md",
  backgroundColorScheme = "background",
  tooltip,
}: CopyToClipboardProps) => {
  //!#visualComponent: start
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleClick = async () => {
    const ok = await onCopy(text);
    setStatus(ok ? "success" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 1500);
  };

  const borderRadiusValue = getRadiusValue(borderRadius);
  const success = status === "success";

  const hasBackground =
    !removeDefaultStyle && backgroundColorScheme !== null && backgroundColorScheme !== undefined;

  const resolvedBackgroundScheme =
    hasBackground && backgroundColorScheme
      ? getColorScheme(backgroundColorScheme, darkMode)
      : null;
  //!#render components: start
  const iconContent = (
    <Icon
      icon={success ? ICON_CHECK : ICON_COPY}
      size="sm"
      color={resolvedBackgroundScheme ? resolvedBackgroundScheme.textColor : undefined}
      darkMode={darkMode}
      onClick={async (event) => {
        event.stopPropagation();
        await handleClick();
      }}
    />
  );

  const iconWithBackground = hasBackground && resolvedBackgroundScheme ? (
    <div
      style={Css.iconWrapper(resolvedBackgroundScheme, borderRadiusValue)}
      onClick={handleClick}
    >
      {iconContent}
    </div>
  ) : (
    iconContent
  );

  const defaultContent = (
    <>
      {iconWithBackground}
      {label && <span>{label}</span>}
    </>
  );

  const content = children ?? defaultContent;

  if (removeDefaultStyle) {
    return (
      <span
        style={style}
        aria-label={typeof label === "string" ? label : "Copy to clipboard"}
        role="button"
        onClick={handleClick}
        title={tooltip}
      >
        {children ?? (
          <>
            <Icon
              icon={success ? ICON_CHECK : ICON_COPY}
              size="sm"
              onClick={async (event) => {
                event.stopPropagation();
                await handleClick();
              }}
            />
            {label && <span>{label}</span>}
          </>
        )}
      </span>
    );
  }

  return (
    <span
      style={{ ...Css.container(), ...style }}
      aria-label={typeof label === "string" ? label : "Copy to clipboard"}
      role="button"
      onClick={handleClick}
      title={tooltip}
    >
      {content}
    </span>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { CopyToClipboard };
export default CopyToClipboard;
//!#export: end
