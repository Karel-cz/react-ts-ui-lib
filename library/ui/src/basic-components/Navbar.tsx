//@@viewOn:imports
import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  type ColorScheme,
  getColorScheme,
  getBorderColor,
  getRgbaFromScheme,
} from "../tools/colors";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  container: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background",
    darkMode = true,
    sticky?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);
    const borderColor = getBorderColor(darkMode);

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      gap: 16,
      padding: "0 16px",
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
            backgroundColor: getRgbaFromScheme(colorScheme, darkMode, 0.9),
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
    darkMode = true,
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: 600,
      color: scheme.textColor,
      marginRight: "auto",
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

  hamburgerButton: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    return {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      padding: "8px",
      borderRadius: "4px",
      transition: "background-color 0.2s ease",
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
  onHamburgerClick?: () => void;
  showHamburger?: boolean;
  hamburgerOpen?: boolean;
  mobileBreakpoint?: number;
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
  "onHamburgerClick",
  "showHamburger",
  "hamburgerOpen",
  "mobileBreakpoint",
] as const;
//@@viewOff:propTypes

//@@viewOn:render
function Navbar({
  logo = "LOGO",
  centerContent,
  rightContent,
  onLogoClick,
  removeDefaultStyle = false,
  colorScheme = "surface",
  darkMode = true,
  sticky = false,
  onHamburgerClick,
  showHamburger,
  hamburgerOpen = false,
  mobileBreakpoint = 768,
}: NavbarProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

  const shouldShowHamburger =
    showHamburger !== undefined ? showHamburger : isMobile;

  const handleHamburgerClick = () => {
    if (onHamburgerClick) {
      onHamburgerClick();
    }
  };

  const hamburgerIcon = hamburgerOpen ? "mdi-close" : "mdi-menu";

  return (
    <header
      style={Css.container(removeDefaultStyle, colorScheme, darkMode, sticky)}
    >
      {/* LEFT – HAMBURGER + LOGO */}
      <div style={Css.section("left")}>
        {shouldShowHamburger && onHamburgerClick && (
          <div
            style={Css.hamburgerButton(removeDefaultStyle)}
            onClick={handleHamburgerClick}
          >
            <Icon
              icon={hamburgerIcon}
              size="md"
              color={darkMode ? "white" : "black"}
              darkMode={darkMode}
            />
          </div>
        )}
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
      <div
        style={{
          ...Css.section("center"),
          display: isMobile && shouldShowHamburger ? "none" : "flex",
        }}
      >
        {centerContent}
      </div>

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
