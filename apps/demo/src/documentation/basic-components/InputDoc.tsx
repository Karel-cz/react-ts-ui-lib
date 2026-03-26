//!#Imports: start
import { Documentation, INPUT_PROP_NAMES, Input } from "@react-ts-ui-lib/ui";
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

const INPUT_EXAMPLE_CODE = `<Input
  label="Email"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  darkMode={true}
/>`;

const InputDoc = () => {
  //!#visualComponent: start
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("input", INPUT_PROP_NAMES, t);

  const [basicValue, setBasicValue] = useState("");
  const [requiredValue, setRequiredValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("Disabled input");

  const componentList = [
    {
      category: t("input.examples.basic"),
      itemList: [
        {
          label: t("input.examples.basic"),
          components: (
            <Input
              label="Basic Input"
              placeholder="Type something..."
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("input.examples.placeholder"),
      itemList: [
        {
          label: t("input.examples.placeholder"),
          components: (
            <Input
              placeholder="Search..."
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("input.examples.withLabel"),
      itemList: [
        {
          label: t("input.examples.withLabel"),
          components: (
            <Input
              label="Your Name"
              placeholder="Enter your name"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("input.examples.required"),
      itemList: [
        {
          label: t("input.examples.required"),
          components: (
            <Input
              label="Email"
              placeholder="Enter email"
              required
              value={requiredValue}
              onChange={(e) => setRequiredValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("input.examples.disabled"),
      itemList: [
        {
          label: t("input.examples.disabled"),
          components: (
            <Input
              label="Disabled Input"
              disabled
              value={disabledValue}
              onChange={(e) => setDisabledValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("input.examples.noDefault"),
      itemList: [
        {
          label: t("input.examples.noDefault"),
          components: (
            <Input
              removeDefaultStyle
              placeholder="No default styling"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("input.examples.borderRadius") || "Border Radius",
      itemList: [
        {
          label: "xs",
          components: (
            <Input
              placeholder="xs radius"
              borderRadius="xs"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: "sm",
          components: (
            <Input
              placeholder="sm radius"
              borderRadius="sm"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: "md",
          components: (
            <Input
              placeholder="md radius (default)"
              borderRadius="md"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: "lg",
          components: (
            <Input
              placeholder="lg radius"
              borderRadius="lg"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: "full",
          components: (
            <Input
              placeholder="full radius"
              borderRadius="full"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
  ];
  //!#visualComponent: end

  const pageTitle = t("input.title");
  const description = t("input.basicInfo.description");

  //!#render components: start
  return (
    <div>
      <DocSeo title={pageTitle} description={description} />
      <Documentation
        state="draft"
        title={pageTitle}
        basicInfo={{
          description,
          exampleCode: INPUT_EXAMPLE_CODE,
          preview: (
            <Input
              label="Email"
              value="example@mail.com"
              onChange={() => {}}
              darkMode={darkMode}
            />
          ),
        }}
        basicInfoDescriptionHeader={t("documentation.basicInfo.descriptionHeader")}
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
export { InputDoc };
export default InputDoc;
//!#export: end
