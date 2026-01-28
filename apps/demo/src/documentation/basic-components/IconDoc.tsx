//@@viewOn:imports
import {
  Documentation,
  ICON_PROP_NAMES,
  Icon as UiIcon,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/themeContext";
//@@viewOff:imports

//@@viewOn:component
const IconDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("icon", ICON_PROP_NAMES, t);

  const componentList = [
    {
      category: t("icon.categories.size"),
      itemList: [
        {
          label: t("icon.examples.xs"),
          components: <UiIcon icon="mdi-check" size="xs" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.sm"),
          components: <UiIcon icon="mdi-check" size="sm" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.md"),
          components: <UiIcon icon="mdi-check" size="md" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.lg"),
          components: <UiIcon icon="mdi-check" size="lg" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.xl"),
          components: <UiIcon icon="mdi-check" size="xl" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.custom"),
          components: <UiIcon icon="mdi-check" size={2} darkMode={darkMode} />,
        },
      ],
    },
    {
      category: t("icon.categories.basic"),
      itemList: [
        {
          label: t("icon.examples.default"),
          components: <UiIcon icon="mdi-check" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.red"),
          components: (
            <UiIcon icon="mdi-heart" color="#ef4444" darkMode={darkMode} />
          ),
        },
        {
          label: t("icon.examples.label"),
          components: (
            <UiIcon
              icon="mdi-information"
              label={t("icon.examples.info")}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("icon.examples.tooltip"),
          components: (
            <UiIcon
              icon="mdi-help-circle"
              tooltip={t("icon.examples.help")}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("icon.categories.icons"),
      itemList: [
        {
          label: t("icon.examples.check"),
          components: <UiIcon icon="mdi-check" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.heart"),
          components: <UiIcon icon="mdi-heart" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.star"),
          components: <UiIcon icon="mdi-star" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.alert"),
          components: <UiIcon icon="mdi-alert" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.information"),
          components: <UiIcon icon="mdi-information" darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.close"),
          components: <UiIcon icon="mdi-close" darkMode={darkMode} />,
        },
      ],
    },
    {
      category: t("icon.categories.states"),
      itemList: [
        {
          label: t("icon.examples.onClick"),
          components: (
            <UiIcon
              icon="mdi-check"
              onClick={() => alert("Icon clicked!")}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("icon.examples.hidden"),
          components: <UiIcon icon="mdi-check" hidden darkMode={darkMode} />,
        },
        {
          label: t("icon.examples.removeDefaultStyle"),
          components: (
            <UiIcon icon="mdi-check" removeDefaultStyle darkMode={darkMode} />
          ),
        },
      ],
    },
    {
      category: t("icon.categories.darkMode"),
      itemList: [
        {
          label: t("icon.examples.dark"),
          components: <UiIcon icon="mdi-check" darkMode />,
        },
        {
          label: t("icon.examples.light"),
          components: <UiIcon icon="mdi-check" darkMode={false} />,
        },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation
        title={t("icon.title")}
        propTypesList={propTypesList}
        componentList={componentList}
        propTypesTitle={t("documentation.propTypes.title")}
        propTypesNameLabel={t("documentation.propTypes.name")}
        propTypesDescriptionLabel={t("documentation.propTypes.description")}
        propTypesTypeLabel={t("documentation.propTypes.type")}
        propTypesRequiredLabel={t("documentation.propTypes.required")}
        propTypesYes={t("documentation.propTypes.yes")}
        propTypesNo={t("documentation.propTypes.no")}
        darkMode={darkMode}
      />
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { IconDoc as Icon };
export default IconDoc;
//@@viewOff:exports
