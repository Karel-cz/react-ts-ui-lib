//@@viewOn:imports
import { Documentation, RADIOS_PROP_NAMES, Radios } from "@react-ts-ui-lib/ui";
import type { RadiosItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
import { useState } from "react";
//@@viewOff:imports

//@@viewOn:component
const RadiosDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("radios", RADIOS_PROP_NAMES, t);

  const fruitItems: RadiosItem[] = [
    { value: "apple", label: t("radios.examples.apple") },
    { value: "banana", label: t("radios.examples.banana") },
    { value: "orange", label: t("radios.examples.orange") },
    { value: "grape", label: t("radios.examples.grape") },
  ];

  const [basicValue, setBasicValue] = useState<string | number>("");
  const [rowValue, setRowValue] = useState<string | number>("");

  const componentList = [
    {
      category: t("radios.categories.basic"),
      itemList: [
        {
          label: t("radios.examples.basic"),
          components: (
            <Radios
              name="radios-basic"
              itemList={fruitItems}
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("radios.examples.directionRow"),
          components: (
            <Radios
              name="radios-row"
              itemList={fruitItems}
              value={rowValue}
              onChange={(e) => setRowValue(e.target.value)}
              direction="row"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("radios.categories.styling"),
      itemList: [
        {
          label: t("radios.examples.noDefault"),
          components: (
            <Radios
              name="radios-nodefault"
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
        title={t("radios.title")}
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
export { RadiosDoc };
export default RadiosDoc;
//@@viewOff:exports
