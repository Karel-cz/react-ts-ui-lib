//@@viewOn:imports
import { Block } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { useTheme } from "./context/ThemeContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const Documentation = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <h1>{t("documentationPage.title")}</h1>
      <Block card="full" darkMode={darkMode}>
        <p>{t("documentationPage.description")}</p>
        <p>{t("documentationPage.instructions")}</p>
      </Block>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Documentation };
export default Documentation;
//@@viewOff:exports
