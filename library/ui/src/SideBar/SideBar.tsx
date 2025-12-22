//@@viewOn:imports
import React, { useState } from "react";
import type { SideBarProps, SideBarItem } from "./SideBar.types";
import Icon from "../Icon/Icon";
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
      backgroundColor: scheme.color,
      width: 260,
      minHeight: "100vh",
      padding: "8px",
      boxSizing: "border-box",
      borderRight: `1px solid ${scheme}`,
    };
  },
  openIcon:(removeDefaultStyle?: boolean) => {
    if(removeDefaultStyle) return {}
    return {
      cursor: "pointer",
    }
  },
  item: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background"
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};

    const textColor =
      colorScheme === "warning" || colorScheme === "info"
        ? colors.background.color
        : colors.text.color;

    return {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 10px",
      borderRadius: 6,
      cursor: "pointer",
      userSelect: "none",
      color: textColor,
      borderColor: "white",
    };
  },

  nested: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    return {
      paddingLeft: 12,
      display: "flex",
      flexDirection: "column",
      gap: 4,
    };
  },
  title: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background"
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};

    const textColor =
      colorScheme === "warning" || colorScheme === "info"
        ? colors.background.color
        : colors.text.color;

    return {
      fontSize: 14,
      color: textColor,
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
  onClick?: (e?: React.MouseEvent) => void;
  hidden?: boolean;
  itemList?: SideBarItem[];
  defaultExpandedItem?: boolean; 
};

export type SideBarProps = {
  itemList: SideBarItem[];
  className?: string;
  removeDefaultStyle?: boolean;
  tooltip?: string;
  label?: string;
  onItemClick?: (item: SideBarItem, e?: React.MouseEvent) => void;
  collapsed?: boolean; 
  colorScheme?: ColorScheme;
};
//@@viewOff:propTypes

//@@viewOn:render
function SideBar({
  itemList,
  className,
  removeDefaultStyle = false,
  onItemClick,
  collapsed = false,
  colorScheme = "background",
}: SideBarProps) {
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
    collectDefaultExpanded(itemList);
    return initialMap;
  });

  const toggleOpen = (key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleItemClick = (item: SideBarItem, e?: React.MouseEvent) => {
    if (item.onClick) item.onClick(e);
    if (onItemClick) onItemClick(item, e);
  };

  const renderItem = (item: SideBarItem, index: number, parentKey = "") => {
    if (!item || isHidden(item)) return null;
    const key = parentKey ? `${parentKey}-${index}` : `${index}`;
    const hasChildren =
      Array.isArray(item.itemList) && item.itemList.length > 0;
    const open = !!openMap[key];

    return (
      <div key={key}>
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            if (hasChildren) toggleOpen(key);
            handleItemClick(item, e);
          }}
          className={className}
          style={{
            ...Css.item(removeDefaultStyle, colorScheme),
            ...(hasChildren ? { justifyContent: "space-between" } : {}),
          }}
          title={item.title}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {item.icon ? <Icon icon={item.icon} size={1} /> : null}
            {!collapsed && (
              <span style={Css.title(removeDefaultStyle, colorScheme)}>
                {item.title}
              </span>
            )}
          </div>

          {hasChildren && !collapsed && (
            <span style={Css.openIcon(removeDefaultStyle)} aria-expanded={open}>{open ? <Icon icon="mdi-chevron-down"/>:  <Icon icon="mdi-chevron-right"/>}</span>
          )}
        </div>

        {hasChildren && open && (
          <div style={Css.nested(removeDefaultStyle)}>
            {item.itemList?.map((child, i) => renderItem(child, i, key))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav style={Css.container(removeDefaultStyle, colorScheme)}>
      {itemList?.map((item, i) => renderItem(item, i))}
    </nav>
  );
}
//@@viewOff:render

//@@viewOn:exports
export { SideBar };
export default SideBar;
//@@viewOff:exports
