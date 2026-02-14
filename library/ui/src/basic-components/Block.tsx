//@@viewOn:imports
import React, { useState, useRef, useEffect } from "react";
import {
  type ColorScheme,
  type Significance,
  getColorScheme,
  getSignificanceColor,
  getBorderColor,
} from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
const DEFAULT_PADDING = 16;
//@@viewOff:constants

//@@viewOn:css
const Css = {
  block: (
    removeDefaultStyle?: boolean,
    background?: string,
    textColor?: string,
    borderRadiusValue?: number,
    shadow?: string,
    height?: string | number,
    minHeight?: string | number,
    maxHeight?: string | number,
    maxWidth?: string | number,
    cardType?: "none" | "full",
    borderColor?: string,
    borderTop: boolean,
    borderRight: boolean,
    borderBottom: boolean,
    borderLeft: boolean,
    padding?: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    
    const borderStyle = borderColor? `1px solid ${borderColor}`: undefined;

    const baseStyle: React.CSSProperties = {
      backgroundColor: background,
      color: textColor,
      borderRadius: borderRadiusValue,
      height: height,
      minHeight: minHeight,
      maxHeight: maxHeight,
      maxWidth: maxWidth,
      boxSizing: "border-box",
      borderTop: borderTop ? borderStyle : "none",
      borderRight: borderRight ? borderStyle : "none",
      borderBottom: borderBottom ? borderStyle : "none",
      borderLeft: borderLeft ? borderStyle : "none",

      overflow: "hidden",
      marginBottom: 16,
    };

    if (cardType === "none") {
      const p = padding ?? DEFAULT_PADDING;
      const topPadding = Math.round(p * 0.4);
      return {
        ...baseStyle,
        padding: `${topPadding}px ${p}px ${p}px ${p}px`,
      };
    }

    if (cardType === "full") {
      return {
        ...baseStyle,
        boxShadow: shadow,
      };
    }

    return baseStyle;
  },

  header: (
    removeDefaultStyle?: boolean,
    padding?: number,
    cardType?: "none" | "full",
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const baseStyle: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    };

    if (cardType === "full") {
      return {
        ...baseStyle,
        padding: `${padding}px`,
      };
    }

    if (cardType === "none") {
      return {
        ...baseStyle,
        padding: "8px 0",
      };
    }

    return baseStyle;
  },

  headerLeft: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    flex: 1,
    minWidth: 0,
    overflow: "hidden",
  }),

  headerTitle: (): React.CSSProperties => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.5,
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),

  headerRight: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexShrink: 0,
    marginLeft: 8,
  }),

  headerSeparator: (
    removeDefaultStyle?: boolean,
    borderColor?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      width: "100%",
      height: 1,
      backgroundColor: borderColor,
      margin: "0 0 12px 0",
      border: "none",
    };
  },

  contentWrapper: (
    removeDefaultStyle?: boolean,
    isCollapsed?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const baseStyle: React.CSSProperties = {
      overflow: isCollapsed ? "hidden" : "visible",
      maxHeight: isCollapsed ? 0 : "none",
      transition: "max-height 0.3s ease-out",
    };

    return baseStyle;
  },

  content: (
    removeDefaultStyle?: boolean,
    padding?: number,
    cardType?: "none" | "full",
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    if (cardType === "full") {
      return {
        padding: `${padding}px`,
      };
    }

    return {};
  },

  collapsibleButton: (): React.CSSProperties => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: 0,
    margin: 0,
  }),

  infoIcon: (): React.CSSProperties => ({
    cursor: "pointer",
    position: "relative",
    flexShrink: 0,
  }),

  popover: (
    removeDefaultStyle?: boolean,
    background?: string,
    textColor?: string,
    borderRadiusValue?: number,
    shadow?: string,
    borderColor?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      position: "absolute",
      top: "100%",
      right: 0,
      marginTop: 8,
      padding: 12,
      backgroundColor: background,
      color: textColor,
      borderRadius: borderRadiusValue,
      boxShadow: shadow,
      border: borderColor ? `1px solid ${borderColor}` : undefined,
      zIndex: 1000,
      minWidth: 200,
      maxWidth: 300,
      whiteSpace: "normal",
      wordWrap: "break-word",
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
const formatUnit = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === "number") return `${value}px`;
  return value;
};
//@@viewOff:helpers

//@@viewOn:propTypes
export type BlockProps = {
  children?: React.ReactNode;
  card?: "none" | "full";
  ActionList?: React.ReactNode[];
  header?: React.ReactNode;
  headerSeparator?: boolean;
  footer?: React.ReactNode;
  info?: React.ReactNode;
  collapsible?: boolean;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  borderRadius?: RadiusToken;
  colorScheme?: ColorScheme;
  significance?: Significance;
  maxWidth?: string | number;
  style?: React.CSSProperties;
  removeDefaultStyle?: boolean;
  hidden?: boolean;
  noPrint?: boolean;
  darkMode?: boolean;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;

};

// Const array for runtime prop extraction in Documentation
export const BLOCK_PROP_NAMES = [
  "children",
  "card",
  "ActionList",
  "header",
  "headerSeparator",
  "footer",
  "info",
  "collapsible",
  "height",
  "minHeight",
  "maxHeight",
  "borderRadius",
  "colorScheme",
  "significance",
  "maxWidth",
  "style",
  "removeDefaultStyle",
  "hidden",
  "noPrint",
  "darkMode",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
] as const;
//@@viewOff:propTypes

//@@viewOn:component
const Block = ({
  children,
  card = "none",
  ActionList,
  header,
  headerSeparator = true,
  footer,
  info,
  collapsible = false,
  height,
  minHeight,
  maxHeight,
  borderRadius = "md",
  colorScheme = "background",
  significance = "common",
  maxWidth,
  style,
  removeDefaultStyle = false,
  hidden = false,
  noPrint = false,
  darkMode = true,
  borderTop = true,
  borderRight = true,
  borderBottom = true,
  borderLeft = true,
}: BlockProps) => {
  //@@viewOn:private
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        infoRef.current &&
        popoverRef.current &&
        !infoRef.current.contains(event.target as Node) &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsInfoOpen(false);
      }
    };

    if (isInfoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInfoOpen]);

  if (hidden) return null;

  const scheme = getSignificanceColor(colorScheme, significance, darkMode);
  const shadowScheme = getColorScheme("shadow", darkMode);

  const borderColor = getBorderColor(darkMode);

  let background = scheme.color;
  if (colorScheme === "background" || colorScheme === "surface") {
    const surfaceScheme = getColorScheme("surface", darkMode);
    background = surfaceScheme.color;
  }

  const textColor = scheme.textColor;
  const borderRadiusValue = getRadiusValue(borderRadius);

  const shadowColor = shadowScheme.color;
  const shadow = darkMode
    ? `0 1px 2px ${shadowColor}, 2px 2px 4px ${shadowColor}`
    : `0 1px 3px ${shadowColor}, 0 8px 24px ${shadowColor}`;

  const hasHeader = header || ActionList || info || collapsible;

  const padding = DEFAULT_PADDING;

  const renderFooter = () => {
    if (!footer) return null;

    if (card === "full") {
      return <div style={{ padding: `${padding}px` }}>{footer}</div>;
    }

    return <div style={{ padding: `${padding}px` }}>{footer}</div>;
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };
  //@@viewOff:private

  //@@viewOn:render
  const blockStyle = Css.block(
    removeDefaultStyle,
    card === "full" ? background : undefined,
    textColor,
    card === "full" ? borderRadiusValue : undefined,
    card === "full" ? shadow : undefined,
    formatUnit(height),
    formatUnit(minHeight),
    formatUnit(maxHeight),
    formatUnit(maxWidth),
    card,
    borderColor,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    padding,
  );

  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...blockStyle, ...style }}
    >
      {hasHeader && (
        <div style={Css.header(removeDefaultStyle, padding, card)}>
          <div style={Css.headerLeft()}>
            {collapsible && (
              <button
                type="button"
                onClick={toggleCollapse}
                style={Css.collapsibleButton()}
                aria-expanded={!isCollapsed}
              >
                <Icon
                  icon={isCollapsed ? "mdi-chevron-right" : "mdi-chevron-down"}
                  size="sm"
                  darkMode={darkMode}
                />
              </button>
            )}
            {typeof header === "string" ? (
              <h3 style={Css.headerTitle()}>{header}</h3>
            ) : (
              header
            )}
          </div>
          <div style={Css.headerRight()}>
            {ActionList && ActionList.length > 0 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexShrink: 0,
                }}
              >
                {ActionList.map((action, index) => (
                  <React.Fragment key={index}>{action}</React.Fragment>
                ))}
              </div>
            )}
            {info && (
              <div ref={infoRef} style={Css.infoIcon()}>
                <Icon
                  icon="mdi-information-outline"
                  size="sm"
                  darkMode={darkMode}
                  onClick={toggleInfo}
                />
                {isInfoOpen && (
                  <div
                    ref={popoverRef}
                    style={Css.popover(
                      removeDefaultStyle,
                      background,
                      textColor,
                      borderRadiusValue,
                      shadow,
                      borderColor,
                    )}
                  >
                    {info}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {hasHeader && headerSeparator && (
        <hr style={Css.headerSeparator(removeDefaultStyle, borderColor)} />
      )}

      <div
        style={Css.contentWrapper(
          removeDefaultStyle,
          collapsible && isCollapsed,
        )}
      >
        <div style={Css.content(removeDefaultStyle, padding, card)}>
          {children}
        </div>
      </div>

      {footer && renderFooter()}
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { Block };
export default Block;
//@@viewOff:exports
