//@@viewOn:imports
import React from "react";
import type { ReactNode } from "react";
import colors, { type ColorScheme } from "../tools/colors";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  container: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background"
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = colors[colorScheme];

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 56,
      padding: "0 16px",
      backgroundColor: scheme.color,
      borderBottom: `1px solid ${scheme}`,
      boxSizing: "border-box",
      minWidth: "100%",
    };
  },

  section: (align: "left" | "center" | "right"): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
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
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    return {
      fontSize: 18,
      fontWeight: 600,
      color: colors.text.color,
      cursor: "pointer",
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
};
//@@viewOff:propTypes

//@@viewOn:render
function Navbar({
  logo = "LOGO",
  centerContent,
  rightContent,
  onLogoClick,

  removeDefaultStyle = false,
  colorScheme = "background",
}: NavbarProps) {
  return (
    <header style={Css.container(removeDefaultStyle, colorScheme)}>
      {/* LEFT – LOGO */}
      <div style={Css.section("left")}>
        <div
          style={Css.logo(removeDefaultStyle)}
          onClick={onLogoClick}
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
