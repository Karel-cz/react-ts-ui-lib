//@@viewOn:imports
import { Documentation, INPUT_PROP_NAMES, Input } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/themeContext";
import { useState } from "react";
//@@viewOff:imports

//@@viewOn:component
const InputDoc = () => {
  //@@viewOn:private
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
        title={t("input.title")}
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
export { InputDoc };
export default InputDoc;
//@@viewOff:exports
