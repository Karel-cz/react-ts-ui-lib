//!#Imports: start
import { Documentation, RADIOS_PROP_NAMES, Radios } from "@react-ts-ui-lib/ui";
import type { RadiosItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
import { useState } from "react";
import DocSeo from "../../app/DocSeo";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
//!#propTypes: end

const RADIOS_EXAMPLE_CODE = `<Radios
  name="choice"
  itemList={[
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' }
  ]}
  value={value}
  onChange={setValue}
  darkMode={darkMode}
/>`;

const RadiosDoc = () => {
  //!#visualComponent: start
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations(
    "radios",
    RADIOS_PROP_NAMES,
    t,
  );

  const fruitItems: RadiosItem[] = [
    { value: "apple", label: t("radios.examples.apple") },
    { value: "banana", label: t("radios.examples.banana") },
    { value: "orange", label: t("radios.examples.orange") },
    { value: "grape", label: t("radios.examples.grape") },
  ];

  const [basicValue, setBasicValue] = useState<string | number>("");
  const [readonlyValue, setReadonlyValue] = useState<string | number>("banana");
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
          label: "Read-only (light mode)",
          components: (
            <Radios
              name="radios-readonly-light"
              itemList={fruitItems}
              value={readonlyValue}
              readOnly
              darkMode={false}
            />
          ),
        },
        {
          label: "Read-only (dark mode)",
          components: (
            <Radios
              name="radios-readonly-dark"
              itemList={fruitItems}
              value={readonlyValue}
              readOnly
              darkMode={true}
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
  //!#visualComponent: end

  const pageTitle = t("radios.title");
  const description = t("radios.basicInfo.description");

  //!#render components: start
  return (
    <div>
      <DocSeo title={pageTitle} description={description} />
      <Documentation
        state="draft"
        title={pageTitle}
        basicInfo={{
          description: t("radios.basicInfo.description"),
          exampleCode: RADIOS_EXAMPLE_CODE,
          preview: (
            <Radios
              name="radios-preview"
              itemList={fruitItems}
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        }}
        basicInfoDescriptionHeader={t(
          "documentation.basicInfo.descriptionHeader",
        )}
        basicInfoPreviewHeader={t("documentation.basicInfo.previewHeader")}
        basicInfoCodeHeader={t("documentation.basicInfo.codeHeader")}
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
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { RadiosDoc };
export default RadiosDoc;
//!#export: end
