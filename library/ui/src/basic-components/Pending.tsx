//!#Imports: start
import { type ColorScheme, getColorScheme } from "../tools/colors";
import { getPendingSize, type SizeToken } from "../tools/size";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
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
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
export type PendingProps = {
  style?: React.CSSProperties;
  type?: "circular" | "horizontal";
  size?: SizeToken;
  darkMode?: boolean;
  colorScheme?: ColorScheme;
  animationSpeed?: number;
  image?: string;
};

// Const array for runtime prop extraction in Documentation
export const PENDING_PROP_NAMES = [
  "style",
  "type",
  "size",
  "darkMode",
  "colorScheme",
  "animationSpeed",
  "image",
] as const;
//!#propTypes: end

const Pending = ({
  style,
  type = "circular",
  size = "sm",
  darkMode = true,
  colorScheme = "primary",
  animationSpeed = 1,
  image,
}: PendingProps) => {
  //!#visualComponent: start
  const pendingSize = getPendingSize(size as SizeToken).size;

  const mutedScheme = getColorScheme("muted", darkMode);
  // use the provided colorScheme for the foreground so e.g. "primary" actually appears
  const scheme = getColorScheme(colorScheme as ColorScheme, darkMode);

  const strokeBackground = mutedScheme.color;
  const strokeForeground = scheme.color;

  const pendingStyle = Css.pending(colorScheme as ColorScheme, darkMode);

  if (type === "horizontal") {
    // horizontal track with moving foreground bar inside (light track, darker moving bar)
    const trackWidth = Math.max(48, pendingSize * 4);
    const height = Math.max(6, Math.floor(pendingSize / 4));
    const innerWidth = Math.max(12, Math.floor(trackWidth * 0.28));
    const startX = -innerWidth;
    const imageSize = Math.floor(pendingSize * 2);

    //!#render components: start
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          width: trackWidth,
        }}
      >
        {image && (
          <img
            src={image}
            alt="logo"
            style={{
              width: imageSize,
              height: imageSize / 2,
              objectFit: "contain",
            }}
          />
        )}

        <svg
          width={trackWidth}
          height={height}
          viewBox={`0 0 ${trackWidth} ${height}`}
          fill="none"
          aria-hidden={true}
          focusable={false}
          style={{ ...pendingStyle, ...style }}
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
              dur={`${1.2 / animationSpeed}s`}
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    );
  }

  // default circular spinner
  return (
    <div
      style={{ position: "relative", width: pendingSize, height: pendingSize }}
    >
      <svg
        width={pendingSize}
        height={pendingSize}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden={true}
        focusable={false}
        style={{ ...pendingStyle, ...style }}
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
            dur={`${0.9 / animationSpeed}s`}
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {image && (
        <img
          src={image}
          alt="logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: pendingSize * 0.4,
            height: pendingSize * 0.4,
          }}
        />
      )}
    </div>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { Pending };
export default Pending;
//!#export: end
