/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { getColorScheme, getBorderColor } from "../tools/colors";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  /** Core positioning – always applied so popover logic works regardless of removeDefaultStyle */
  panelPosition: (position: { top: number; left: number }): React.CSSProperties => ({
    position: "fixed",
    top: position.top,
    left: position.left,
    zIndex: 9999,
  }),

  /** Visual styling – only applied when removeDefaultStyle is false */
  panelStyle: (removeDefaultStyle?: boolean, darkMode = true): React.CSSProperties => {
    if (removeDefaultStyle) {
      return {};
    }

    const scheme = getColorScheme("surface", darkMode);
    const borderColor = getBorderColor(darkMode);
    const shadowScheme = getColorScheme("shadow", darkMode);
    const shadowColor = shadowScheme.color;
    const shadow =
      darkMode
        ? `0 1px 2px ${shadowColor}, 2px 2px 4px ${shadowColor}`
        : `0 1px 3px ${shadowColor}, 0 8px 24px ${shadowColor}`;

    return {
      padding: 12,
      backgroundColor: scheme.color,
      color: scheme.textColor,
      border: `1px solid ${borderColor}`,
      borderRadius: 0,
      boxShadow: shadow,
      minWidth: 120,
      maxWidth: 320,
      whiteSpace: "normal",
      wordWrap: "break-word",
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type PopoverProps = {
  className?: string;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  triggerRef: RefObject<HTMLElement | null>;
  content?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// Const array for runtime prop extraction in documentation
export const POPOVER_PROP_NAMES = [
  "className",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "triggerRef",
  "content",
  "open",
  "onOpenChange",
] as const;
//@@viewOff:propTypes

const GAP = 8;

const Popover = ({
  className,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  triggerRef,
  content,
  open,
  onOpenChange,
}: PopoverProps) => {
  //@@viewOn:private
  const [panelPosition, setPanelPosition] = useState<{ top: number; left: number } | undefined>(undefined);
  const panelRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPanelPosition({
        top: rect.bottom + GAP,
        left: rect.left,
      });
    } else {
      setPanelPosition(undefined);
    }
  }, [triggerRef]);

  useLayoutEffect(() => {
    if (!open || content == null) return;
    const rect = triggerRef?.current?.getBoundingClientRect();
    if (rect) {
      const position = { top: rect.bottom + GAP, left: rect.left };
      const id = requestAnimationFrame(() => setPanelPosition(position));
      return () => cancelAnimationFrame(id);
    }
  }, [open, content, triggerRef]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef?.current &&
        panelRef.current &&
        !triggerRef.current.contains(target) &&
        !panelRef.current.contains(target)
      ) {
        onOpenChange(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    const handleScrollOrResize = () => updatePosition();

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [open, onOpenChange, triggerRef, updatePosition]);

  if (hidden) return null;
  //@@viewOff:private

  //@@viewOn:render
  const panelElement =
    open && content != null && panelPosition != null && typeof document !== "undefined"
      ? createPortal(
          <div
            ref={panelRef}
            className={[className, noPrint ? "no-print" : null].filter(Boolean).join(" ") || undefined}
            style={{ ...Css.panelPosition(panelPosition), ...Css.panelStyle(removeDefaultStyle, darkMode) }}
            role="dialog"
            aria-hidden={!open}
          >
            {content}
          </div>,
          document.body,
        )
      : null;

  return <>{panelElement}</>;
  //@@viewOff:render
};

//@@viewOn:exports
export { Popover };
export default Popover;
//@@viewOff:exports
