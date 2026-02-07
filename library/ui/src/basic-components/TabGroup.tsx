/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React, { useState } from "react";
import {
  type ColorScheme,
  getColorScheme,
  getRgbaFromScheme,
  getBorderColor,
} from "../tools/colors";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  container: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    };
  },

  tabsContainer: (
    removeDefaultStyle?: boolean,
    darkMode = true,
    borderTop = false,
    borderRight = false,
    borderBottom = true,
    borderLeft = false,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const borderColor = getBorderColor(darkMode);
    const borderStyle = `1px solid ${borderColor}`;

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      borderTop: borderTop ? borderStyle : undefined,
      borderRight: borderRight ? borderStyle : undefined,
      borderBottom: borderBottom ? borderStyle : undefined,
      borderLeft: borderLeft ? borderStyle : undefined,
      gap: "1rem",
    };
  },

  tabsWrapper: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      flexDirection: "row",
      gap: "0.5rem",
      flex: 1,
      overflowX: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    };
  },

  tab: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "primary",
    darkMode = true,
    isActive?: boolean,
    isHovered?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme(colorScheme, darkMode);
    const baseScheme = getColorScheme("background", darkMode);

    const baseStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.25rem",
      padding: "12px 16px",
      cursor: "pointer",
      userSelect: "none",
      color: baseScheme.textColor,
      transition: "all 0.15s ease",
      position: "relative",
      whiteSpace: "nowrap",
      borderBottom: "2px solid transparent",
    };

    if (isActive) {
      const activeColor = scheme.color;
      const activeRgba = getRgbaFromScheme(
        colorScheme,
        darkMode,
        darkMode ? 0.15 : 0.1,
      );

      return {
        ...baseStyle,
        backgroundColor: activeRgba,
        color: activeColor,
        fontWeight: 500,
        borderBottom: `2px solid ${activeColor}`,
      };
    }

    if (isHovered) {
      const hoverAlpha = darkMode ? 0.05 : 0.03;
      const hoverBg = getRgbaFromScheme(
        darkMode ? "white" : "black",
        darkMode,
        hoverAlpha,
      );
      return {
        ...baseStyle,
        backgroundColor: hoverBg,
      };
    }

    return baseStyle;
  },

  tabTitle: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "primary",
    darkMode = true,
    isActive?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const baseScheme = getColorScheme("background", darkMode);
    const activeScheme = isActive ? getColorScheme(colorScheme, darkMode) : null;

    return {
      fontSize: 14,
      color: isActive && activeScheme ? activeScheme.color : baseScheme.textColor,
      fontWeight: isActive ? 500 : 400,
      lineHeight: 1.2,
    };
  },

  tabSubtitle: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const baseScheme = getColorScheme("background", darkMode);

    return {
      fontSize: 12,
      color: baseScheme.textColor,
      opacity: 0.7,
      lineHeight: 1.2,
    };
  },

  tabContent: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      paddingTop: "1rem",
      width: "100%",
    };
  },

  actionListWrapper: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexShrink: 0,
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type TabGroupItem = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: string;
  // TODO: Implement iconAnimation functionality
  iconAnimation?: string;
  onClick?: (e?: React.MouseEvent) => void;
  content: React.ReactNode;
  code: string | number;
};

export type TabGroupProps = {
  itemList: TabGroupItem[];
  codeActive?: string | number;
  colorScheme?: ColorScheme;
  ActionList?: React.ReactNode[];
  onChange?: (codeActive: string | number) => void;
  style?: React.CSSProperties;
  /** Optional style for the content wrapper below tabs (e.g. paddingTop). */
  contentStyle?: React.CSSProperties;
  /** Show top border on the tab bar. */
  borderTop?: boolean;
  /** Show right border on the tab bar. */
  borderRight?: boolean;
  /** Show bottom border on the tab bar. Default true. */
  borderBottom?: boolean;
  /** Show left border on the tab bar. */
  borderLeft?: boolean;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
};

// Const array for runtime prop extraction in Documentation
export const TAB_GROUP_PROP_NAMES = [
  "itemList",
  "codeActive",
  "colorScheme",
  "ActionList",
  "onChange",
  "style",
  "contentStyle",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
] as const;
//@@viewOff:propTypes

const TabGroup = ({
  itemList,
  codeActive,
  colorScheme = "primary",
  ActionList,
  onChange,
  style,
  contentStyle,
  borderTop = false,
  borderRight = false,
  borderBottom = true,
  borderLeft = false,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
}: TabGroupProps) => {
  //@@viewOn:private
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (hidden) return null;

  const activeItem = itemList.find((item) => item.code === codeActive);
  const activeContent = activeItem?.content || null;

  const handleTabClick = (item: TabGroupItem, index: number) => {
    if (item.onClick) {
      item.onClick();
    }
    if (onChange) {
      onChange(item.code);
    }
  };

  const isTabActive = (item: TabGroupItem): boolean => {
    return item.code === codeActive;
  };
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...Css.container(removeDefaultStyle), ...style }}
    >
      <div
          style={Css.tabsContainer(
            removeDefaultStyle,
            darkMode,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
          )}
        >
        <div style={Css.tabsWrapper(removeDefaultStyle)}>
          {itemList.map((item, index) => {
            const isActive = isTabActive(item);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.code}
                role="button"
                tabIndex={0}
                onClick={() => handleTabClick(item, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={Css.tab(
                  removeDefaultStyle,
                  colorScheme,
                  darkMode,
                  isActive,
                  isHovered,
                )}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {item.icon && (
                    <Icon icon={item.icon} size="sm" darkMode={darkMode} />
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "0.125rem",
                    }}
                  >
                    <div style={Css.tabTitle(removeDefaultStyle, colorScheme, darkMode, isActive)}>
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div style={Css.tabSubtitle(removeDefaultStyle, darkMode)}>
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {ActionList && ActionList.length > 0 && (
          <div style={Css.actionListWrapper()}>
            {ActionList.map((action, index) => (
              <React.Fragment key={index}>{action}</React.Fragment>
            ))}
          </div>
        )}
      </div>
      {activeContent && (
        <div
          style={{
            ...Css.tabContent(removeDefaultStyle),
            ...contentStyle,
          }}
        >
          {activeContent}
        </div>
      )}
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { TabGroup };
export default TabGroup;
//@@viewOff:exports
