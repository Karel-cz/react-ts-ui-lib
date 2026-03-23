//!#Imports: start
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { getColorScheme, getBorderColor } from "../tools/colors";
import { getRadiusValue, type RadiusToken } from "../tools/radius";
//!#Imports: end

//!#Constants: start
const GAP = 8;
//!#Constants: end

//!#Styles: start
const Css = {
  panelPosition: (position: { top: number; left: number; zIndex:number }): React.CSSProperties => ({
    position: "fixed",
    top: position.top,
    left: position.left,
    zIndex: position.zIndex,
  }),

  panelStyle: (removeDefaultStyle?: boolean, darkMode = true, borderRadiusValue = 8): React.CSSProperties => {
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
      borderRadius: borderRadiusValue,
      boxShadow: shadow,
      minWidth: 120,
      maxWidth: 320,
      whiteSpace: "normal",
      wordWrap: "break-word",
    };
  },
};
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type PopoverProps = {
  style?: React.CSSProperties;
  noPrint?: boolean;
  hidden?: boolean;
  removeDefaultStyle?: boolean;
  darkMode?: boolean;
  triggerRef: RefObject<HTMLElement | null>;
  content?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  borderRadius?: RadiusToken | number;
  zIndex?:number;
};

// Const array for runtime prop extraction in Documentation
export const POPOVER_PROP_NAMES = [
  "style",
  "noPrint",
  "hidden",
  "removeDefaultStyle",
  "darkMode",
  "triggerRef",
  "content",
  "open",
  "onOpenChange",
  "borderRadius",
  "zIndex"
] as const;
//!#propTypes: end

const Popover = ({
  style,
  noPrint = false,
  hidden = false,
  removeDefaultStyle = false,
  darkMode = true,
  triggerRef,
  content,
  open,
  onOpenChange,
  borderRadius = "md",
  zIndex=1000
}: PopoverProps) => {
  //!#visualComponent: start
  const [panelPosition, setPanelPosition] = useState<{ top: number; left: number; zIndex:number } | undefined>(undefined);
  const panelRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPanelPosition({
        top: rect.bottom + GAP,
        left: rect.left,
        zIndex:zIndex,
      });
    } else {
      setPanelPosition(undefined);
    }
  }, [triggerRef,zIndex]);

  useLayoutEffect(() => {
    if (!open || content == null) return;
    const rect = triggerRef?.current?.getBoundingClientRect();
    if (rect) {
      const position = { top: rect.bottom + GAP, left: rect.left, zIndex:zIndex };
      const id = requestAnimationFrame(() => setPanelPosition(position));
      return () => cancelAnimationFrame(id);
    }
  }, [open, content, triggerRef, zIndex]);

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
  //!#render components: start
  const borderRadiusValue = getRadiusValue(borderRadius);

  const panelElement =
    open && content != null && panelPosition != null && typeof document !== "undefined"
      ? createPortal(
        <div
          ref={panelRef}
          className={noPrint ? "no-print" : undefined}
          style={{
            ...Css.panelPosition(panelPosition),
            ...Css.panelStyle(removeDefaultStyle, darkMode, borderRadiusValue),
            ...style,
          }}
          role="dialog"
          aria-hidden={!open}
        >
          {content}
        </div>,
        document.body,
      )
      : null;

  return <>{panelElement}</>;
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { Popover };
export default Popover;
//!#export: end
