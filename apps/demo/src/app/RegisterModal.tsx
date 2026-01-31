//@@viewOn:imports
import { useState } from "react";
import { Modal, Button } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { useTheme } from "./context/themeContext";
import { useAuth } from "./context/AuthContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 24,
    minWidth: 320,
  },
  errorText: {
    color: "#f85149",
    fontSize: 14,
    textAlign: "center" as const,
  },
  successText: {
    color: "#238636",
    fontSize: 14,
    textAlign: "center" as const,
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const RegisterModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const { signInWithGoogle, user } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithGoogle();
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(t("auth.errorGeneric"));
      }
    } finally {
      setLoading(false);
    }
  };
  //@@viewOff:private

  //@@viewOn:render
  return (
    <Modal 
      open={open} 
      onClose={onClose}
      header={t("auth.modalTitle")}
      size="sm"
      darkMode={darkMode}
    >
      <div style={Css.container}>
        {user ? (
          <div style={Css.successText}>
            {t("auth.welcome").replace(
              "{name}",
              user.displayName || user.email || t("auth.googleUser"),
            )}
          </div>
        ) : (
          <>
            <Button
              onClick={handleGoogleSignIn}
              icon="mdi-google"
              label={t("auth.googleButton")}
              colorScheme="primary"
              size="md"
              darkMode={darkMode}
              isPending={loading}
              disabled={loading}
            />

            {error && <div style={Css.errorText}>{error}</div>}

          </>
        )}
      </div>
    </Modal>
  );
  //@@viewOff:render

};

//@@viewOn:exports
export { RegisterModal };
export default RegisterModal;
//@@viewOff:exports
