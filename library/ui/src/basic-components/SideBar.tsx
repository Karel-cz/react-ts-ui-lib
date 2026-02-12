//@@viewOn:imports
import React, { useState } from "react";
import Icon from "./Icon";
import {
  type ColorScheme,
  getColorScheme,
  getBorderColor,
  getRgbaFromScheme,
} from "../tools/colors";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  container: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background",
    darkMode = true,
    mobileMode?: boolean,
    isOpen?: boolean,
    navbarHeight?: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);
    const borderColor = getBorderColor(darkMode);

    const baseStyle: React.CSSProperties = {
      backgroundColor: scheme.color,
      width: 280,
      padding: "12px",
      boxSizing: "border-box",
      borderRight: `1px solid ${borderColor}`,
    };

    if (mobileMode) {
      return {
        ...baseStyle,
        position: "fixed",
        top: navbarHeight || 64,
        left: 0,
        bottom: 0,
        minHeight: "auto",
        height: `calc(100vh - ${navbarHeight || 64}px)`,
        zIndex: 1000,
        transition: "transform 0.3s ease",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      } as React.CSSProperties;
    }

    return {
      ...baseStyle,
      position: "sticky",
      top: navbarHeight || 64,
      height: `calc(100vh - ${navbarHeight || 64}px)`,
      overflowY: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    } as React.CSSProperties;
  },
  openIcon: (removeDefaultStyle?: boolean) => {
    if (removeDefaultStyle) return {};
    return {
      cursor: "pointer",
    };
  },
  item: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background",
    darkMode = true,
    isActive?: boolean,
    isHovered?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};

    const scheme = getColorScheme(colorScheme, darkMode);
    const primaryScheme = getColorScheme("primary", darkMode);

    const baseStyle: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 12px",
      borderRadius: 8,
      cursor: "pointer",
      userSelect: "none",
      color: scheme.textColor,
      transition: "all 0.15s ease",
      fontSize: 14,
    };

    if (isActive) {
      const primaryColor = primaryScheme.color;
      const primaryRgba = getRgbaFromScheme(
        "primary",
        darkMode,
        darkMode ? 0.15 : 0.1,
      );

      return {
        ...baseStyle,
        backgroundColor: primaryRgba,
        color: primaryColor,
        fontWeight: 500,
        borderLeft: `3px solid ${primaryColor}`,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      };
    }

    if (isHovered) {
      const hoverAlpha = darkMode ? 0.1 : 0.05;
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

  nested: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    return {
      paddingLeft: 20,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginTop: 4,
    };
  },
  title: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background",
    darkMode = true,
    isActive?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);
    const primaryScheme = isActive ? getColorScheme("primary", darkMode) : null;

    return {
      fontSize: 14,
      color: isActive && primaryScheme ? primaryScheme.color : scheme.textColor,
      fontWeight: isActive ? 500 : 400,
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
const isHidden = (item?: SideBarItem) => !!(item && item.hidden);
//@@viewOff:helpers

//@@viewOn:propTypes
export type SideBarItem = {
  title: string;
  icon?: string;
  iconColor?: ColorScheme;
  onClick?: (e?: React.MouseEvent) => void;
  hidden?: boolean;
  itemList?: SideBarItem[];
  defaultExpandedItem?: boolean;
  key?: string;
};

export type SideBarProps = {
  itemList: SideBarItem[];
  style?: React.CSSProperties;
  removeDefaultStyle?: boolean;
  tooltip?: string;
  label?: string;
  onItemClick?: (item: SideBarItem, e?: React.MouseEvent) => void;
  collapsed?: boolean;
  colorScheme?: ColorScheme;
  darkMode?: boolean;
  selectedItem?: SideBarItem | null;
  mobileMode?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  navbarHeight?: number;
};

// Const array for runtime prop extraction in Documentation
export const SIDEBAR_PROP_NAMES = [
  "itemList",
  "style",
  "removeDefaultStyle",
  "tooltip",
  "label",
  "onItemClick",
  "collapsed",
  "colorScheme",
  "darkMode",
  "mobileMode",
  "isOpen",
  "onClose",
  "navbarHeight",
] as const;
//@@viewOff:propTypes

//@@viewOn:render
function SideBar({
  itemList,
  style,
  removeDefaultStyle = false,
  onItemClick,
  collapsed = false,
  colorScheme = "surface",
  darkMode = true,
  selectedItem,
  mobileMode = false,
  isOpen = false,
  onClose,
  navbarHeight = 64,
}: SideBarProps) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() => {
    const initialMap: Record<string, boolean> = {};
    const collectDefaultExpanded = (items: SideBarItem[], parentKey = "") => {
      items.forEach((item, index) => {
        const key = parentKey ? `${parentKey}-${index}` : `${index}`;
        if (
          item.defaultExpandedItem &&
          Array.isArray(item.itemList) &&
          item.itemList.length > 0
        ) {
          initialMap[key] = true;
        }
        if (Array.isArray(item.itemList) && item.itemList.length > 0) {
          collectDefaultExpanded(item.itemList, key);
        }
      });
    };
    if (Array.isArray(itemList) && itemList.length > 0) {
      collectDefaultExpanded(itemList);
    }
    return initialMap;
  });

  const toggleOpen = (key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleItemClick = (item: SideBarItem, e?: React.MouseEvent) => {
    if (item.onClick) item.onClick(e);
    if (onItemClick) onItemClick(item, e);
    if (mobileMode && onClose) {
      onClose();
    }
  };

  const isItemSelected = (item: SideBarItem): boolean => {
    if (!selectedItem) return false;
    return (
      (selectedItem.key && item.key === selectedItem.key) ||
      (selectedItem.title === item.title && !selectedItem.key && !item.key)
    );
  };

  const renderItem = (
    item: SideBarItem | undefined,
    index: number | undefined,
    parentKey = "",
  ) => {
    if (!item || index === undefined || isHidden(item)) return null;
    const key = parentKey ? `${parentKey}-${index}` : `${index}`;
    const hasChildren =
      Array.isArray(item.itemList) && item.itemList.length > 0;
    const open = !!openMap[key];
    const isActive = isItemSelected(item);
    const isHovered = hoveredKey === key;
    const scheme = getColorScheme(colorScheme, darkMode);
    const primaryScheme = getColorScheme("primary", darkMode);
    const iconDefaultColor = getColorScheme(
    "background",
    darkMode,
  ).textColor;

    return (
      <div key={key}>
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            if (hasChildren) toggleOpen(key);
            handleItemClick(item, e);
          }}
          onMouseEnter={() => setHoveredKey(key)}
          onMouseLeave={() => setHoveredKey(null)}
          style={{
            ...Css.item(
              removeDefaultStyle,
              colorScheme,
              darkMode,
              isActive,
              isHovered,
            ),
            ...(hasChildren ? { justifyContent: "space-between" } : {}),
          }}
          title={item.title}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {item.icon ? (
              <Icon
                icon={item.icon}
                darkMode={darkMode}
                size={1}
                color={
                  item.iconColor
                    ? getColorScheme(item.iconColor, darkMode).color
                    : isActive
                      ? primaryScheme.color
                      : iconDefaultColor
                }
              />
            ) : null}
            {!collapsed && (
              <span
                style={Css.title(
                  removeDefaultStyle,
                  colorScheme,
                  darkMode,
                  isActive,
                )}
              >
                {item.title}
              </span>
            )}
          </div>

          {hasChildren && !collapsed && (
            <span style={Css.openIcon(removeDefaultStyle)} aria-expanded={open}>
              {open ? (
                <Icon icon="mdi-chevron-down" darkMode={darkMode} />
              ) : (
                <Icon icon="mdi-chevron-right" darkMode={darkMode} />
              )}
            </span>
          )}
        </div>

        {hasChildren && open && (
          <div style={Css.nested(removeDefaultStyle)}>
            {item.itemList?.map((child?: SideBarItem, i?: number | undefined) =>
              renderItem(child, i, key),
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {mobileMode && isOpen && onClose && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={onClose}
        />
      )}
      <nav
        style={{
          ...Css.container(
            removeDefaultStyle,
            colorScheme,
            darkMode,
            mobileMode,
            isOpen,
            navbarHeight,
          ),
          ...style,
        }}
      >
        {itemList?.map((item?: SideBarItem, i?: number) => renderItem(item, i))}
      </nav>
    </>
  );
}
//@@viewOff:render

//@@viewOn:exports
export { SideBar };
export default SideBar;
//@@viewOff:exports
