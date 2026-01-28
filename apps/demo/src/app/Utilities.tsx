//@@viewOn:imports
import { Block } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { useTheme } from "./context/themeContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const Utilities = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <h1>{t("utilitiesPage.title")}</h1>
      <Block card="full" darkMode={darkMode}>
        <p>{t("utilitiesPage.description")}</p>
        <p>{t("utilitiesPage.instructions")}</p>
      </Block>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Utilities };
export default Utilities;
//@@viewOff:exports
