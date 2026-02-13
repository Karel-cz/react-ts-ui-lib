//@@viewOn:imports
import React, { useState } from "react";
import {
  type ColorScheme,
  type Significance,
  getColorScheme,
  getSignificanceColor,
  getModernCardGradient,
  getBorderColor,
} from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
const DEFAULT_PADDING = 16;
const PHOTO_SIZE = 48;
const CARD_RADIUS_MODERN = 8;
const DEFAULT_CARD_WIDTH = 320;
const DEFAULT_MIN_HEIGHT = 200;
const DEFAULT_MIN_HEIGHT_HEADER_ONLY = 0;
//@@viewOff:constants

//@@viewOn:helpers
const formatUnit = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === "number") return `${value}px`;
  return value;
};
//@@viewOff:helpers

//@@viewOn:css
const Css = {
  card: (
    removeDefaultStyle?: boolean,
    background?: string,
    textColor?: string,
    shadow?: string,
    borderColor?: string,
    layout?: "responsive" | "stacked",
    modern?: boolean,
    width?: string,
    height?: string,
    minWidth?: string,
    minHeight?: string,
    borderRadiusValue?: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    const isGradient = background?.includes("gradient") ?? false;
    return {
      display: "flex",
      flexDirection: "column",
      flexWrap: layout === "stacked" ? "nowrap" : "wrap",
      ...(isGradient ? { background } : { backgroundColor: background }),
      color: textColor,
      boxShadow: shadow,
      border: borderColor ? `1px solid ${borderColor}` : undefined,
      boxSizing: "border-box",
      overflow: "hidden",
      width,
      height,
      minWidth,
      minHeight,
      borderRadius: borderRadiusValue,
    };
  },
  
  header: (
    removeDefaultStyle?: boolean,
    padding?: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      padding: `${padding}px`,
      minWidth: 0,
    };
  },

  photoWrapper: (
    removeDefaultStyle?: boolean,
    borderColor?: string,
    photoCircle?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    const radius = PHOTO_SIZE / 2;
    return {
      flexShrink: 0,
      width: PHOTO_SIZE,
      height: PHOTO_SIZE,
      borderRadius: photoCircle ? radius : 0,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: "1",
      border:
        photoCircle
          ? borderColor
            ? `2px solid ${borderColor}`
            : "2px solid rgba(128,128,128,0.4)"
          : undefined,
    };
  },

  photoImg: (
    removeDefaultStyle?: boolean,
    photoCircle?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: photoCircle ? PHOTO_SIZE / 2 : 0,
    };
  },

  photoLink: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      display: "block",
      width: "100%",
      height: "100%",
      textDecoration: "none",
      color: "inherit",
    };
  },

  headerMeta: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0,
      flex: 1,
    };
  },

  collapsibleButton: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      padding: 4,
      margin: 0,
      flexShrink: 0,
    };
  },

  bodyWrapper: (
    removeDefaultStyle?: boolean,
    isCollapsed?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      overflow: isCollapsed ? "hidden" : "visible",
      maxHeight: isCollapsed ? 0 : "none",
      transition: "max-height 0.25s ease-out",
    };
  },

  role: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      fontSize: 12,
      lineHeight: 1.4,
      opacity: 0.85,
      margin: 0,
    };
  },

  name: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.4,
      margin: 0,
    };
  },

  body: (
    removeDefaultStyle?: boolean,
    padding?: number,
    borderColor?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      padding: `${padding}px ${padding}px ${padding}px`,
      borderTop: borderColor ? `1px solid ${borderColor}` : undefined,
      display: "flex",
      flexDirection: "column",
      gap: 14,
    };
  },

  labelRow: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      gap: 6,
      flexWrap: "wrap",
      justifyContent: "space-between",
    };
  },

  labelName: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      fontSize: 11,
      fontWeight: 600,
      opacity: 0.9,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      lineHeight: 1.3,
    };
  },

  labelValue: (removeDefaultStyle?: boolean): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }
    return {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
    };
  },

  footer: (
    removeDefaultStyle?: boolean,
    padding?: number,
    borderColor?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 8,
      flexWrap: "wrap",
      padding: `${padding}px`,
      borderTop: borderColor ? `1px solid ${borderColor}` : undefined,
      marginTop: "auto",
    };
  },
};
//@@viewOff:css

//@@viewOn:propTypes
export type ProfileCardProps = {
  photo?: string | React.ReactNode;
  photoLink?: string;
  name?: string;
  role?: string;
  labelName?: string;
  labelValue?: string;
  descriptionName?: string;
  descriptionValue?: string;
  content?: React.ReactNode;
  actionList?: React.ReactNode[];
  darkMode?: boolean;
  removeDefaultStyle?: boolean;
  style?: React.CSSProperties;
  colorScheme?: ColorScheme;
  significance?: Significance;
  modern?: boolean;
  layout?: "responsive" | "stacked";
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  photoCircle?: boolean;
  collapsed?: boolean;
  noPrint?: boolean;
  hidden?: boolean;
  borderRadius?: RadiusToken;
};

export const PROFILE_CARD_PROP_NAMES = [
  "photo",
  "photoLink",
  "name",
  "role",
  "labelName",
  "labelValue",
  "descriptionName",
  "descriptionValue",
  "content",
  "actionList",
  "darkMode",
  "removeDefaultStyle",
  "style",
  "colorScheme",
  "significance",
  "modern",
  "layout",
  "width",
  "height",
  "minWidth",
  "minHeight",
  "photoCircle",
  "collapsed",
  "noPrint",
  "hidden",
] as const;
//@@viewOff:propTypes

//@@viewOn:component
const ProfileCard = ({
  photo,
  photoLink,
  name,
  role,
  labelName,
  labelValue,
  descriptionName,
  descriptionValue,
  content,
  actionList,
  darkMode = true,
  removeDefaultStyle = false,
  style,
  colorScheme = "surface",
  significance = "common",
  modern = false,
  layout = "responsive",
  width,
  height,
  minWidth,
  minHeight,
  photoCircle = true,
  collapsed = true,
  noPrint = false,
  hidden = false,
  borderRadius = "md",
}: ProfileCardProps) => {
  //@@viewOn:private
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const bodyVisible = !isCollapsed;
  

  if (hidden) return null;

  const borderColor = getBorderColor(darkMode);
  const padding = DEFAULT_PADDING;
  const borderRadiusValue = getRadiusValue(borderRadius);

  let background: string;
  let textColor: string;
  let shadow: string | undefined;

  if (modern) {
    const modernStyle = getModernCardGradient(colorScheme, significance, darkMode);
    background = modernStyle.background;
    textColor = getSignificanceColor(colorScheme, significance, darkMode).textColor;
    shadow = modernStyle.shadow;
  } else {
    const scheme = getSignificanceColor(colorScheme, significance, darkMode);
    if (colorScheme === "background" || colorScheme === "surface") {
      const surfaceScheme = getColorScheme("surface", darkMode);
      background = surfaceScheme.color;
      textColor = surfaceScheme.textColor;
    } else {
      background = scheme.color;
      textColor = scheme.textColor;
    }
    shadow = undefined;
  }

  const hasBody =
    (labelName !== undefined && labelName !== "") ||
    labelValue !== undefined ||
    (descriptionName !== undefined && descriptionName !== "") ||
    descriptionValue !== undefined ||
    content != null;
  const hasFooter = actionList != null && actionList.length > 0;
  const useCompactMinHeight = !hasBody || !bodyVisible;

  const cardWidth = formatUnit(width) ?? formatUnit(DEFAULT_CARD_WIDTH);
  const cardHeight = formatUnit(height);
  const cardMinWidth = formatUnit(minWidth);
  const cardMinHeight =
    formatUnit(minHeight) ??
    (useCompactMinHeight ? formatUnit(DEFAULT_MIN_HEIGHT_HEADER_ONLY) : formatUnit(DEFAULT_MIN_HEIGHT));
  //@@viewOff:private

  //@@viewOn:render
  const cardStyle = Css.card(
    removeDefaultStyle,
    background,
    textColor,
    shadow,
    borderColor,
    layout,
    modern,
    cardWidth,
    cardHeight,
    cardMinWidth,
    cardMinHeight,
    borderRadiusValue,
  );

  return (
    <div
      className={noPrint ? "no-print" : undefined}
      style={{ ...cardStyle, ...style }}
    >
      {(photo !== undefined || name !== undefined || role !== undefined) && (
        <div style={Css.header(removeDefaultStyle, padding)}>
          {photo !== undefined && (
            <div style={Css.photoWrapper(removeDefaultStyle, borderColor, photoCircle)}>
              {photoLink ? (
                <a
                  href={photoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={Css.photoLink(removeDefaultStyle)}
                  aria-label={name ?? "Open profile"}
                >
                  {typeof photo === "string" ? (
                    <img
                      src={photo}
                      alt=""
                      style={Css.photoImg(removeDefaultStyle, photoCircle)}
                    />
                  ) : (
                    photo
                  )}
                </a>
              ) : typeof photo === "string" ? (
                <img
                  src={photo}
                  alt=""
                  style={Css.photoImg(removeDefaultStyle, photoCircle)}
                />
              ) : (
                photo
              )}
            </div>
          )}
          <div style={Css.headerMeta(removeDefaultStyle)}>
            {role !== undefined && role !== "" && (
              <p style={Css.role(removeDefaultStyle)}>{role}</p>
            )}
            {name !== undefined && name !== "" && (
              <p style={Css.name(removeDefaultStyle)}>{name}</p>
            )}
          </div>
          {hasBody && (
          <button
              type="button"
              onClick={() => setIsCollapsed((prev) => !prev)}
              style={Css.collapsibleButton(removeDefaultStyle)}
              aria-expanded={bodyVisible}
              aria-label={bodyVisible ? "Collapse" : "Expand"}
            >
              <Icon
                icon={bodyVisible ? "mdi-chevron-up" : "mdi-chevron-down"}
                size="sm"
                darkMode={darkMode}
              />
            </button>
          )}
        </div>
      )}

      {hasBody && (
        <div style={Css.bodyWrapper(removeDefaultStyle, !bodyVisible)}>
          <div style={Css.body(removeDefaultStyle, padding, borderColor)}>
            {(labelName !== undefined || labelValue !== undefined) && (
              <div style={Css.labelRow(removeDefaultStyle)}>
                {labelName !== undefined && labelName !== "" && (
                  <span style={Css.labelName(removeDefaultStyle)}>{labelName}</span>
                )}
                {labelValue !== undefined && (
                  <span style={Css.labelValue(removeDefaultStyle)}>{labelValue}</span>
                )}
              </div>
            )}
            {(descriptionName !== undefined || descriptionValue !== undefined) && (
              <div style={Css.labelRow(removeDefaultStyle)}>
                {descriptionName !== undefined && descriptionName !== "" && (
                  <span style={Css.labelName(removeDefaultStyle)}>{descriptionName}</span>
                )}
                {descriptionValue !== undefined && (
                  <span style={Css.labelValue(removeDefaultStyle)}>{descriptionValue}</span>
                )}
              </div>
            )}
            {content != null ? <div>{content}</div> : null}
          </div>
        </div>
      )}

      {hasFooter && (
        <div style={Css.footer(removeDefaultStyle, padding, borderColor)}>
          {actionList.map((action, index) => (
            <React.Fragment key={index}>{action}</React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { ProfileCard };
export default ProfileCard;
//@@viewOff:exports
