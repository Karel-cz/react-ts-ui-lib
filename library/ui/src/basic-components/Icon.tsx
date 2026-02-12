/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import { Icon as MdiIcon } from "@mdi/react";
import * as mdiIcons from "@mdi/js";
import { getIconSize, type SizeToken } from "../tools/size";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type IconProps = {
  icon?: string;
  size?: SizeToken | number;
  color?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  removeDefaultStyle?: boolean;
  hidden?: boolean;
  label?: string;
  tooltip?: string;
  darkMode?: boolean;
};

// Const array for runtime prop extraction in Documentation
export const ICON_PROP_NAMES = [
  "icon",
  "size",
  "color",
  "style",
  "onClick",
  "removeDefaultStyle",
  "hidden",
  "label",
  "tooltip",
  "darkMode",
] as const;
//@@viewOff:propTypes

function Icon({
  icon = "mdi-close",
  size = "md",
  color,
  style,
  onClick,
  removeDefaultStyle = false,
  hidden = false,
  label = "",
  darkMode = true,
  tooltip,
}: IconProps) {
  //@@viewOn:private
  if (hidden) return null;
  if (!icon) return null;

  const camelCaseName = icon.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const path = (mdiIcons as Record<string, string>)[camelCaseName];

  if (!path) {
    console.warn(`Icon "${icon}" not found!`);
    return null;
  }

  const iconSize =
    typeof size === "number" ? size : getIconSize(size as SizeToken).size;

  // Resolve default color based on theme when color is not provided
  const resolvedColor = color ?? (darkMode ? "white" : "#111827");

  //@@viewOff:private

  //@@viewOn:render
  const baseStyle: React.CSSProperties = {
    cursor: onClick ? "pointer" : "default",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
  };

  return (
    <span
      onClick={onClick}
      title={tooltip}
      style={{ ...baseStyle, ...style }}
    >
      <MdiIcon
        path={path}
        size={iconSize}
        color={resolvedColor}
        style={removeDefaultStyle ? {} : { display: "flex" }}
      />
      {label && <span>{label}</span>}
    </span>
  );
  //@@viewOff:render
}

//@@viewOn:exports
export { Icon };
export default Icon;
//@@viewOff:exports
