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
    category: t("radios.categories.color"),
    itemList: [
      {
        label: "Primary",
        components: (
          <Radios
            name="radio-primary"
            itemList={[{ label: "Primary", value: "primary" }]}
            value="primary"
            colorScheme="primary"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Success",
        components: (
          <Radios
            name="radio-success"
            itemList={[{ label: "Success", value: "success" }]}
            value="success"
            colorScheme="success"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Danger",
        components: (
          <Radios
            name="radio-danger"
            itemList={[{ label: "Danger", value: "danger" }]}
            value="danger"
            colorScheme="danger"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Warning",
        components: (
          <Radios
            name="radio-warning"
            itemList={[{ label: "Warning", value: "warning" }]}
            value="warning"
            colorScheme="warning"
            darkMode={darkMode}
            readOnly
          />
        ),
      },

      {
        label: "Purple",
        components: (
          <Radios
            name="radio-purple"
            itemList={[{ label: "Purple", value: "purple" }]}
            value="purple"
            colorScheme="purple"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Purple Dark",
        components: (
          <Radios
            name="radio-purple-dark"
            itemList={[{ label: "Purple Dark", value: "purpleDark" }]}
            value="purpleDark"
            colorScheme="purpleDark"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Teal",
        components: (
          <Radios
            name="radio-teal"
            itemList={[{ label: "Teal", value: "teal" }]}
            value="teal"
            colorScheme="teal"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Teal Dark",
        components: (
          <Radios
            name="radio-teal-dark"
            itemList={[{ label: "Teal Dark", value: "tealDark" }]}
            value="tealDark"
            colorScheme="tealDark"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Pink",
        components: (
          <Radios
            name="radio-pink"
            itemList={[{ label: "Pink", value: "pink" }]}
            value="pink"
            colorScheme="pink"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Pink Dark",
        components: (
          <Radios
            name="radio-pink-dark"
            itemList={[{ label: "Pink Dark", value: "pinkDark" }]}
            value="pinkDark"
            colorScheme="pinkDark"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Indigo",
        components: (
          <Radios
            name="radio-indigo"
            itemList={[{ label: "Indigo", value: "indigo" }]}
            value="indigo"
            colorScheme="indigo"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Indigo Dark",
        components: (
          <Radios
            name="radio-indigo-dark"
            itemList={[{ label: "Indigo Dark", value: "indigoDark" }]}
            value="indigoDark"
            colorScheme="indigoDark"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Orange",
        components: (
          <Radios
            name="radio-orange"
            itemList={[{ label: "Orange", value: "orange" }]}
            value="orange"
            colorScheme="orange"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Orange Dark",
        components: (
          <Radios
            name="radio-orange-dark"
            itemList={[{ label: "Orange Dark", value: "orangeDark" }]}
            value="orangeDark"
            colorScheme="orangeDark"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Cyan",
        components: (
          <Radios
            name="radio-cyan"
            itemList={[{ label: "Cyan", value: "cyan" }]}
            value="cyan"
            colorScheme="cyan"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
      {
        label: "Cyan Dark",
        components: (
          <Radios
            name="radio-cyan-dark"
            itemList={[{ label: "Cyan Dark", value: "cyanDark" }]}
            value="cyanDark"
            colorScheme="cyanDark"
            darkMode={darkMode}
            readOnly
          />
        ),
      },
    ]
    },
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
      category: t("radios.categories.states"),
      itemList: [
        {
          label: t("radios.examples.readOnly"),
          components: (
            <Radios
              name="radios-readonly"
              itemList={fruitItems}
              value="apple"
              readOnly
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
export { RadiosDoc };
export default RadiosDoc;
//!#export: end
