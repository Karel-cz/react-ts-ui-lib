/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import { type ColorScheme, getColorScheme } from "../tools/colors";
import { getPendingSize, type SizeToken } from "../tools/size";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  // accept ColorScheme and darkMode so color mapping works as expected
  pending: (colorScheme: ColorScheme, darkMode = true) => {
    const scheme = getColorScheme(colorScheme, darkMode);

    return {
      display: "inline-block",
      color: scheme.color,
      lineHeight: 0,
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
export type PendingProps = {
  className?: string;
  type?: "circular" | "horizontal";
  size?: SizeToken;
  darkMode?: boolean;
  colorScheme?: ColorScheme;
};

// Const array for runtime prop extraction in documentation
export const PENDING_PROP_NAMES = [
  "className",
  "type",
  "size",
  "darkMode",
  "colorScheme",
] as const;
//@@viewOff:propTypes

const Pending = ({
  className,
  type = "circular",
  size = "sm",
  darkMode = true,
  colorScheme = "primary",
}: PendingProps) => {
  const pendingSize = getPendingSize(size as SizeToken).size;

  const mutedScheme = getColorScheme("muted", darkMode);
  // use the provided colorScheme for the foreground so e.g. "primary" actually appears
  const scheme = getColorScheme(colorScheme as ColorScheme, darkMode);

  const strokeBackground = mutedScheme.color;
  const strokeForeground = scheme.color;

  if (type === "horizontal") {
    // horizontal track with moving foreground bar inside (light track, darker moving bar)
    const trackWidth = Math.max(48, pendingSize * 4);
    const height = Math.max(6, Math.floor(pendingSize / 4));
    const innerWidth = Math.max(12, Math.floor(trackWidth * 0.28));
    const startX = -innerWidth;

    //@@viewOn:render
    return (
      <svg
        width={trackWidth}
        height={height}
        viewBox={`0 0 ${trackWidth} ${height}`}
        fill="none"
        aria-hidden={true}
        focusable={false}
        className={className}
        style={Css.pending(colorScheme as ColorScheme, darkMode)}
      >
        <rect
          x={0}
          y={0}
          width={trackWidth}
          height={height}
          rx={height / 2}
          fill={strokeBackground}
        />

        <rect
          x={startX}
          y={0}
          width={innerWidth}
          height={height}
          rx={height / 2}
          fill={strokeForeground}
        >
          <animate
            attributeName="x"
            values={`${startX};${trackWidth};${startX}`}
            dur="1.2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    );
  }

  // default circular spinner
  return (
    <svg
      width={pendingSize}
      height={pendingSize}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      focusable={false}
      className={className}
      style={Css.pending(colorScheme as ColorScheme, darkMode)}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={strokeBackground}
        strokeWidth="4"
      />
      <path
        d="M22 12a10 10 0 00-10-10"
        stroke={strokeForeground}
        strokeWidth="4"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
//@@viewOff:render

//@@viewOn:exports
export { Pending };
export default Pending;
//@@viewOff:exports
