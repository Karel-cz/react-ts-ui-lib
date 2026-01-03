//@@viewOn:imports
import React, { useState } from "react";
import Icon from "./Icon";
import { type ColorScheme } from "../tools/colors";
import { getColorScheme } from "../tools/colors";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  container: (
    removeDefaultStyle?: boolean,
    colorScheme: ColorScheme = "background",
    darkMode = true
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);

    // Border color: light in dark mode, dark in light mode
    const borderColor = darkMode ? "#374151" : "#e5e7eb";

    return {
      backgroundColor: scheme.color,
      width: 260,
      minHeight: "100vh",
      padding: "8px",
      boxSizing: "border-box",
      borderRight: `1px solid ${borderColor}`,
    };
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
    darkMode = true
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};

    const scheme = getColorScheme(colorScheme, darkMode);

    return {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 10px",
      borderRadius: 6,
      cursor: "pointer",
      userSelect: "none",
      color: scheme.textColor,
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
    colorScheme: ColorScheme = "background",
    darkMode = true
  ): React.CSSProperties => {
    if (removeDefaultStyle) return {};
    const scheme = getColorScheme(colorScheme, darkMode);

    return {
      fontSize: 14,
      color: scheme.textColor,
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

export const SideBarTypeScheme = {
  itemList: {
    name: "Items",
    description: "Top-level items to render in the sidebar (can be nested).",
    required: true,
    type: [] as SideBarItem[],
  },
  className: {
    name: "Class name",
    description: "Additional class names for the container.",
    required: false,
    type: "" as string,
  },
  removeDefaultStyle: {
    name: "Remove default style",
    description: "Disables built-in container and item styling.",
    required: false,
    type: false as boolean,
  },
  tooltip: {
    name: "Tooltip",
    description: "Optional tooltip on the container (native title).",
    required: false,
    type: "" as string,
  },
  label: {
    name: "Label",
    description: "Optional label text for the container.",
    required: false,
    type: "" as string,
  },
  onItemClick: {
    name: "On item click",
    description: "Callback when an item is clicked; receives item and event.",
    required: false,
    type: (undefined as unknown) as (item: SideBarItem, e?: React.MouseEvent) => void,
  },
  collapsed: {
    name: "Collapsed",
    description: "Whether the sidebar is collapsed.",
    required: false,
    type: false as boolean,
  },
  colorScheme: {
    name: "Color scheme",
    description: "Background and text colors based on theme palette.",
    required: false,
    type: "background" as ColorScheme,
  },
  darkMode: {
    name: "Dark mode",
    description: "Use dark mode palette when true.",
    required: false,
    type: true as boolean,
  },
};

export type SideBarProps = { [K in keyof typeof SideBarTypeScheme]?: (typeof SideBarTypeScheme)[K]["type"] };
//@@viewOff:propTypes

//@@viewOn:render
function SideBar({
  itemList,
  className,
  removeDefaultStyle = false,
  onItemClick,
  collapsed = false,
  colorScheme = "background",
  darkMode = true,
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
  };

  const renderItem = (item: SideBarItem | undefined, index: number | undefined, parentKey = "") => {
    if (!item || index === undefined || isHidden(item)) return null;
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
            ...Css.item(removeDefaultStyle, colorScheme, darkMode),
            ...(hasChildren ? { justifyContent: "space-between" } : {}),
          }}
          title={item.title}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {item.icon ? (
              <Icon icon={item.icon} darkMode={darkMode} size={1} />
            ) : null}
            {!collapsed && (
              <span
                style={Css.title(removeDefaultStyle, colorScheme, darkMode)}
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
              renderItem(child, i, key)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      style={Css.container(removeDefaultStyle, colorScheme, darkMode)}
    >
      {itemList?.map((item?: SideBarItem, i?: number) => renderItem(item, i))}
    </nav>
  );
}
//@@viewOff:render

//@@viewOn:exports
export { SideBar };
export default SideBar;
//@@viewOff:exports
