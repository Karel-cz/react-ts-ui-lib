//@@viewOn:imports
import { Documentation, NUMBER_PROP_NAMES, Number } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:component
const NumberDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations(
    "number",
    NUMBER_PROP_NAMES,
    t,
  );

  const componentList = [
    {
      category: t("number.examples.basic"),
      itemList: [
        {
          label: t("number.examples.basic"),
          components: <Number value={12345.678} />,
        },
      ],
    },
    {
      category: t("number.examples.decimals"),
      itemList: [
        {
          label: t("number.examples.decimals"),
          components: <Number value={12345.678} minDecimalDigits={2} />,
        },
      ],
    },
    {
      category: t("number.examples.tooltip"),
      itemList: [
        {
          label: t("number.examples.tooltip"),
          components: (
            <Number value={987654321.12345} wholeLengthNumberInTooltip />
          ),
        },
      ],
    },
    {
      category: t("number.examples.customTooltip"),
      itemList: [
        {
          label: t("number.examples.customTooltip"),
          components: (
            <Number
              value={12345}
              tooltip="This is a custom tooltip"
              wholeLengthNumberInTooltip
            />
          ),
        },
      ],
    },
    {
      category: t("number.examples.color"),
      itemList: [
        {
          label: t("background"),
          components: (
            <Number
              value={12345}
              colorScheme="background"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.primary"),
          components: (
            <Number
              value={12345}
              colorScheme="primary"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.success"),
          components: (
            <Number
              value={12345}
              colorScheme="success"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.danger"),
          components: (
            <Number
              value={12345}
              colorScheme="danger"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("muted"),
          components: (
            <Number
              value={12345}
              colorScheme="muted"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation
        state="draft"
        title={t("number.title")}
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
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { NumberDoc };
export default NumberDoc;
//@@viewOff:exports
