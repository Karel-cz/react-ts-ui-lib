/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React, { useEffect } from "react";
import { getBorderColor, getColorScheme, getRgbaFromScheme } from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
import Icon from "./Icon";
//@@viewOff:imports

//@@viewOn:constants
const DEFAULT_PADDING = 16;
//@@viewOff:constants

//@@viewOn:css
const Css = {
  overlay: (
    removeDefaultStyle?: boolean,
    overlayColor?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      backgroundColor: overlayColor,
      zIndex: 1000,
    };
  },

  modal: (
    removeDefaultStyle?: boolean,
    background?: string,
    textColor?: string,
    borderRadiusValue?: number,
    shadow?: string,
    width?: string | number,
    maxWidth?: string | number,
    height?: string | number,
    maxHeight?: string | number,
    borderColor?: string,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      backgroundColor: background,
      color: textColor,
      borderRadius: borderRadiusValue,
      boxShadow: shadow,
      border: borderColor ? `1px solid ${borderColor}` : undefined,
      width: width,
      maxWidth: maxWidth,
      height: height,
      maxHeight: maxHeight,
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      overflow: "hidden",
    };
  },

  header: (
    removeDefaultStyle?: boolean,
    padding?: number,
    borderColor?: string,
    headerSeparator?: boolean,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: `${padding}px`,
      borderBottom: headerSeparator && borderColor ? `1px solid ${borderColor}` : undefined,
      flexShrink: 0,
    };
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
    fontSize: 18,
    fontWeight: 600,
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
  }),

  body: (
    removeDefaultStyle?: boolean,
    padding?: number,
  ): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    return {
      padding: `${padding}px`,
      overflow: "auto",
      flex: "1 1 auto",
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
      padding: `${padding}px`,
      borderTop: borderColor ? `1px solid ${borderColor}` : undefined,
      flexShrink: 0,
    };
  },

  closeButton: (): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
  }),
};
//@@viewOff:css

//@@viewOn:helpers
const formatUnit = (value: string | number | undefined): string | number | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === "number") return `${value}px`;
  return value;
};

const getSizeDefaults = (size: ModalSize) => {
  switch (size) {
    case "sm":
      return { width: 360, maxWidth: "90vw" };
    case "lg":
      return { width: 720, maxWidth: "95vw" };
    case "xl":
      return { width: 960, maxWidth: "95vw" };
    case "full":
      return { width: "95vw", maxWidth: "95vw" };
    default:
      return { width: 520, maxWidth: "90vw" };
  }
};
//@@viewOff:helpers

//@@viewOn:propTypes
export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  ActionList?: React.ReactNode[];
  size?: ModalSize;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  borderRadius?: RadiusToken;
  className?: string;
  removeDefaultStyle?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  headerSeparator?: boolean;
  padding?: number;
  darkMode?: boolean;
  hidden?: boolean;
  noPrint?: boolean;
};

export const MODAL_PROP_NAMES = [
  "open",
  "onClose",
  "children",
  "header",
  "footer",
  "ActionList",
  "size",
  "width",
  "maxWidth",
  "height",
  "maxHeight",
  "borderRadius",
  "className",
  "removeDefaultStyle",
  "closeOnBackdrop",
  "closeOnEsc",
  "showCloseButton",
  "headerSeparator",
  "padding",
  "darkMode",
  "hidden",
  "noPrint",
] as const;
//@@viewOff:propTypes

//@@viewOn:component
const Modal = ({
  open,
  onClose,
  children,
  header,
  footer,
  ActionList,
  size = "md",
  width,
  maxWidth,
  height,
  maxHeight,
  borderRadius = "md",
  className,
  removeDefaultStyle = false,
  closeOnBackdrop = true,
  closeOnEsc = true,
  showCloseButton = true,
  headerSeparator = true,
  padding = DEFAULT_PADDING,
  darkMode = true,
  hidden = false,
  noPrint = false,
}: ModalProps) => {
  //@@viewOn:private
  useEffect(() => {
    if (!open || !closeOnEsc) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnEsc, onClose]);

  if (hidden || !open) return null;

  const surfaceScheme = getColorScheme("surface", darkMode);
  const textScheme = getColorScheme("text", darkMode);
  const shadowScheme = getColorScheme("shadow", darkMode);
  const borderColor = getBorderColor(darkMode);
  const overlayColor = getRgbaFromScheme("black", darkMode, darkMode ? 0.6 : 0.4);

  const borderRadiusValue = getRadiusValue(borderRadius);
  const shadow = darkMode
    ? `0 1px 2px ${shadowScheme.color}, 4px 8px 24px ${shadowScheme.color}`
    : `0 1px 3px ${shadowScheme.color}, 0 10px 30px ${shadowScheme.color}`;

  const sizeDefaults = getSizeDefaults(size);
  const resolvedWidth = formatUnit(width ?? sizeDefaults.width);
  const resolvedMaxWidth = formatUnit(maxWidth ?? sizeDefaults.maxWidth);
  const resolvedHeight = formatUnit(height);
  const resolvedMaxHeight = formatUnit(maxHeight ?? "90vh");

  const handleBackdropClick = () => {
    if (closeOnBackdrop) {
      onClose?.();
    }
  };
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div
      className={`${className ?? ""} ${noPrint ? "no-print" : ""}`.trim()}
      style={Css.overlay(removeDefaultStyle, overlayColor)}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        style={Css.modal(
          removeDefaultStyle,
          surfaceScheme.color,
          textScheme.color,
          borderRadiusValue,
          shadow,
          resolvedWidth,
          resolvedMaxWidth,
          resolvedHeight,
          resolvedMaxHeight,
          borderColor,
        )}
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        {(header || showCloseButton || (ActionList && ActionList.length > 0)) && (
          <div
            style={Css.header(
              removeDefaultStyle,
              padding,
              borderColor,
              headerSeparator,
            )}
          >
            <div style={Css.headerLeft()}>
              {typeof header === "string" ? (
                <h3 style={Css.headerTitle()}>{header}</h3>
              ) : (
                header
              )}
            </div>
            <div style={Css.headerRight()}>
              {ActionList && ActionList.length > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {ActionList.map((action, index) => (
                    <React.Fragment key={index}>{action}</React.Fragment>
                  ))}
                </div>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  style={Css.closeButton()}
                  onClick={onClose}
                  aria-label="Close"
                >
                  <Icon icon="mdi-close" size="sm" darkMode={darkMode} />
                </button>
              )}
            </div>
          </div>
        )}

        <div style={Css.body(removeDefaultStyle, padding)}>{children}</div>

        {footer && (
          <div style={Css.footer(removeDefaultStyle, padding, borderColor)}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { Modal };
export default Modal;
//@@viewOff:exports