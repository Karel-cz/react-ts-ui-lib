//@@viewOn:imports
import { Icon as MdiIcon } from "@mdi/react";
import * as mdiIcons from "@mdi/js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css


//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type IconProps = {
  icon: string;
  size?: number | string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  removeDefaultStyle?: boolean;
  hidden?: boolean;
  label?: string;
  tooltip?: string;
};
//@@viewOff:propTypes


function Icon({
  icon = "mdi-close",
  size = 1,
  color = "white",
  className,
  onClick,
  removeDefaultStyle = false,
  hidden = false,
  label = "",
  tooltip,
}: IconProps) {
  //@@viewOn:private
  if (hidden) return null;
  if (!icon) return null;
  if (typeof icon !== "string") return null;

  console.log(icon)

  const camelCaseName = icon.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const path = (mdiIcons as Record<string, string>)[camelCaseName];

  if (!path) {
    console.warn(`Icon "${icon}" not found!`);
    return null;
  }

  console.log(icon, path)

  //@@viewOff:private

  //@@viewOn:render
  return (
    <span
      className={`inline-flex items-center gap-1 ${className || ""}`}
      onClick={onClick}
      title={tooltip}
      style={{ cursor: onClick ? "pointer" : "default", display: "flex", alignItems: "center" }}
    >
      <MdiIcon
        path={path}
        size={size}
        color={color}
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
