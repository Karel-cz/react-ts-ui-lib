//@@viewOn:imports
import { useState } from "react";
import {
  Documentation,
  THEME_TOGGLE_PROP_NAMES,
  ThemeToggle as UiThemeToggle,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:component
const ThemeToggleDoc = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { t } = useTranslation();
  const [demoDark, setDemoDark] = useState(false);
  const propTypesList = getPropsWithTranslations(
    "themeToggle",
    THEME_TOGGLE_PROP_NAMES,
    t,
  );

  const componentList = [
    {
      category: t("themeToggle.categories.darkMode"),
      itemList: [
        {
          label: t("themeToggle.examples.dark"),
          components: (
            <UiThemeToggle
              darkMode={true}
              onToggle={() => {}}
              ariaLabelDark={t("themeToggle.ariaLabelDark")}
              ariaLabelLight={t("themeToggle.ariaLabelLight")}
            />
          ),
        },
        {
          label: t("themeToggle.examples.light"),
          components: (
            <UiThemeToggle
              darkMode={false}
              onToggle={() => {}}
              ariaLabelDark={t("themeToggle.ariaLabelDark")}
              ariaLabelLight={t("themeToggle.ariaLabelLight")}
            />
          ),
        },
      ],
    },
    {
      category: t("themeToggle.categories.interactive"),
      itemList: [
        {
          label: t("themeToggle.examples.interactive"),
          components: (
            <UiThemeToggle
              darkMode={demoDark}
              onToggle={() => setDemoDark(!demoDark)}
              ariaLabelDark={t("themeToggle.ariaLabelDark")}
              ariaLabelLight={t("themeToggle.ariaLabelLight")}
            />
          ),
        },
      ],
    },
    {
      category: t("themeToggle.categories.styling"),
      itemList: [
        {
          label: t("themeToggle.examples.noDefault"),
          components: (
            <UiThemeToggle
              darkMode={darkMode}
              onToggle={() => setDarkMode(!darkMode)}
              removeDefaultStyle
              ariaLabelDark={t("themeToggle.ariaLabelDark")}
              ariaLabelLight={t("themeToggle.ariaLabelLight")}
            />
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <Documentation
        state="inProgress"
        title={t("themeToggle.title")}
        propTypesList={propTypesList}
        componentList={componentList}
        propTypesTitle={t("documentation.propTypes.title")}
        propTypesNameLabel={t("documentation.propTypes.name")}
        propTypesDescriptionLabel={t("documentation.propTypes.description")}
        propTypesTypeLabel={t("documentation.propTypes.type")}
        propTypesRequiredLabel={t("documentation.propTypes.required")}
        propTypesYes={t("documentation.propTypes.yes")}
        propTypesNo={t("documentation.propTypes.no")}
        tabBasicInfoLabel={t("documentation.tabs.basicInfo")}
        tabExamplesLabel={t("documentation.tabs.examples")}
        tabUsageLabel={t("documentation.tabs.usage")}
        tabPropTypesLabel={t("documentation.tabs.propTypes")}
        darkMode={darkMode}
      />
    </div>
  );
};
//@@viewOff:component

//@@viewOn:exports
export { ThemeToggleDoc as ThemeToggle };
export default ThemeToggleDoc;
//@@viewOff:exports
