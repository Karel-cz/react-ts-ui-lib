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
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  removeDefaultStyle?: boolean;
  hidden?: boolean;
  label?: string;
  tooltip?: string;
  darkMode?: boolean;
};

// Const array for runtime prop extraction in documentation
export const ICON_PROP_NAMES = [
  "icon",
  "size",
  "color",
  "className",
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
  color = "white",
  className,
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

  //@@viewOff:private

  //@@viewOn:render
  return (
    <span
      className={`inline-flex items-center gap-1 ${className || ""}`}
      onClick={onClick}
      title={tooltip}
      style={{
        cursor: onClick ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
      }}
    >
      <MdiIcon
        path={path}
        size={iconSize}
        color={darkMode ? color : "black"}
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
