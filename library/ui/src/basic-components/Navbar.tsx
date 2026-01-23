//@@viewOn:imports
import React from "react";
import type { ReactNode } from "react";
import { type ColorScheme, getColorScheme, getBorderColor } from "../tools/colors";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  container: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background",
    darkMode = true,
    sticky?: boolean
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);
    const borderColor = getBorderColor(darkMode);

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      padding: "0 24px",
      backgroundColor: scheme.color,
      borderBottom: `1px solid ${borderColor}`,
      boxSizing: "border-box",
      minWidth: "100%",
      color: scheme.textColor,
      backdropFilter: sticky ? "blur(12px) saturate(180%)" : undefined,
      ...(sticky
        ? {
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: darkMode ? "rgba(13, 17, 23, 0.8)" : "rgba(255, 255, 255, 0.8)",
          }
        : {}),
    };
  },

  section: (align: "left" | "center" | "right"): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 16,
    flex: align === "center" ? 1 : undefined,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
        ? "flex-end"
        : "flex-start",
  }),

  logo: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background",
    darkMode = true
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);
    return {
      fontSize: 20,
      fontWeight: 600,
      color: scheme.textColor,
      cursor: "pointer",
      transition: "opacity 0.2s ease",
      letterSpacing: "-0.01em",
    };
  },

  actionButton: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    return {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    };
  },
};
//@@viewOff:css

//@@viewOn:propTypes
export type NavbarProps = {
  logo?: string | ReactNode;
  centerContent?: ReactNode;
  rightContent?: ReactNode;
  onLogoClick?: () => void;
  removeDefaultStyle?: boolean;
  colorScheme?: ColorScheme;
  darkMode?: boolean;
  sticky?: boolean;
};

// Const array for runtime prop extraction in documentation
export const NAVBAR_PROP_NAMES = [
  "logo",
  "centerContent",
  "rightContent",
  "onLogoClick",
  "removeDefaultStyle",
  "colorScheme",
  "darkMode",
  "sticky",
] as const;
//@@viewOff:propTypes

//@@viewOn:render
function Navbar({
  logo = "LOGO",
  centerContent,
  rightContent,
  onLogoClick,
  removeDefaultStyle = false,
  colorScheme = "background",
  darkMode = true,
  sticky = false,
}: NavbarProps) {
  return (
    <header style={Css.container(removeDefaultStyle, colorScheme, darkMode, sticky)}>
      {/* LEFT – LOGO */}
      <div style={Css.section("left")}>
        <div
          style={Css.logo(removeDefaultStyle, colorScheme, darkMode)}
          onClick={onLogoClick}
          onMouseEnter={(e) => {
            if (onLogoClick) {
              e.currentTarget.style.opacity = "0.8";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {logo}
        </div>
      </div>

      {/* CENTER */}
      <div style={Css.section("center")}>{centerContent}</div>

      {/* RIGHT – ACTIONS */}
      <div style={Css.section("right")}>{rightContent}</div>
    </header>
  );
}
//@@viewOff:render

//@@viewOn:exports
export { Navbar };
export default Navbar;
//@@viewOff:exports
