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

const AboutApplication = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <h1>{t("aboutApplication.title")}</h1>
      <Block
        card="full"
        header={t("aboutApplication.about.title")}
        darkMode={darkMode}
      >
        <p>{t("aboutApplication.about.description")}</p>
      </Block>
      <Block
        card="full"
        header={t("aboutApplication.features.title")}
        darkMode={darkMode}
      >
        <ul>
          <li>{t("aboutApplication.features.feature1")}</li>
          <li>{t("aboutApplication.features.feature2")}</li>
          <li>{t("aboutApplication.features.feature3")}</li>
          <li>{t("aboutApplication.features.feature4")}</li>
        </ul>
      </Block>
      <Block
        card="full"
        header={t("aboutApplication.technology.title")}
        darkMode={darkMode}
      >
        <p>{t("aboutApplication.technology.description")}</p>
      </Block>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { AboutApplication };
export default AboutApplication;
//@@viewOff:exports
