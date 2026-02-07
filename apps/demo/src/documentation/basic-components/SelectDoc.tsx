//@@viewOn:imports
import { Documentation, SELECT_PROP_NAMES, Select } from "@react-ts-ui-lib/ui";
import type { SelectItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
import { useState } from "react";
//@@viewOff:imports

//@@viewOn:component
const SelectDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("select", SELECT_PROP_NAMES, t);

  const fruitItems: SelectItem[] = [
    { value: "apple", label: t("select.examples.apple") },
    { value: "banana", label: t("select.examples.banana") },
    { value: "orange", label: t("select.examples.orange") },
    { value: "grape", label: t("select.examples.grape") },
  ];

  const [basicValue, setBasicValue] = useState<string | number>("");

  const componentList = [
    {
      category: t("select.categories.basic"),
      itemList: [
        {
          label: t("select.examples.basic"),
          components: (
            <Select
              itemList={fruitItems}
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("select.categories.styling"),
      itemList: [
        {
          label: t("select.examples.noDefault"),
          components: (
            <Select
              itemList={fruitItems}
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              removeDefaultStyle
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
        title={t("select.title")}
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
export { SelectDoc };
export default SelectDoc;
//@@viewOff:exports
