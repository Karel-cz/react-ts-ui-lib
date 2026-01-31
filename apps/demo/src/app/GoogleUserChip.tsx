//@@viewOn:imports
import { Icon, getColorScheme } from "@react-ts-ui-lib/ui";
import { useTheme } from "./context/themeContext";
import { useTranslation } from "../i18n/useTranslation";
import type { User } from "firebase/auth";
//@@viewOff:imports

//@@viewOn:css
const getAuthStyles = (darkMode: boolean): Record<string, React.CSSProperties> => {
  const borderColor = getColorScheme("border", darkMode).color;
  const muted = getColorScheme("muted", darkMode).color;
  const surfaceColor = getColorScheme("surface", darkMode).color;

  return {
    userChip: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 12px",
      borderRadius: 12,
      border: `1px solid ${borderColor}`,
      background: surfaceColor,
      maxWidth: 220,
      transition: "all 0.2s ease",
      cursor: "default",
      boxShadow: darkMode 
        ? "0 2px 8px rgba(0, 0, 0, 0.2)" 
        : "0 2px 8px rgba(0, 0, 0, 0.08)",
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #fbbf24",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    userText: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.3,
      minWidth: 0,
      gap: 2,
    },
    userName: {
      fontSize: 13,
      fontWeight: 600,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      letterSpacing: "-0.01em",
    },
    userEmail: {
      fontSize: 11,
      color: muted,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      opacity: 0.85,
    },
    googleIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "linear-gradient(135deg, rgba(66, 133, 244, 0.2), rgba(66, 133, 244, 0.1))",
      border: `2px solid ${borderColor}`,
      flexShrink: 0,
      boxShadow: "0 2px 4px rgba(66, 133, 244, 0.2)",
    },
  };
};
//@@viewOff:css

//@@viewOn:propTypes
interface GoogleUserChipProps {
  user: User;
  showDetails?: boolean;
}
//@@viewOff:propTypes

//@@viewOn:component
const GoogleUserChip = ({ user, showDetails = true }: GoogleUserChipProps) => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const authCss = getAuthStyles(darkMode);
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div style={authCss.userChip}>
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt={user.displayName || "User"}
          style={authCss.avatar}
        />
      ) : (
        <span style={authCss.googleIcon}>
          <Icon icon="mdi-google" size="xs" />
        </span>
      )}
      {showDetails && (
        <div style={authCss.userText}>
          <span style={authCss.userName}>
            {user.displayName || t("auth.googleUser")}
          </span>
          <span style={authCss.userEmail}>{user.email || ""}</span>
        </div>
      )}
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

export default GoogleUserChip;
