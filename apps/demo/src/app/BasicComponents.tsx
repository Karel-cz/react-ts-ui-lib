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

const BasicComponents = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <h1>{t("basicComponentsPage.title")}</h1>
      <Block card="full" darkMode={darkMode}>
        <p>{t("basicComponentsPage.description")}</p>
        <p>{t("basicComponentsPage.instructions")}</p>
      </Block>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { BasicComponents };
export default BasicComponents;
//@@viewOff:exports
