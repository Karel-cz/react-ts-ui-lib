//@@viewOn:imports
import { Documentation, CHECKBOX_PROP_NAMES, Checkbox } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/themeContext";
import { useState } from "react";
//@@viewOff:imports

//@@viewOn:component
const CheckboxDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("checkbox", CHECKBOX_PROP_NAMES, t);

  const [basicChecked, setBasicChecked] = useState(false);
  const [requiredChecked, setRequiredChecked] = useState(false);
  const [errorChecked, setErrorChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const componentList = [
    {
      category: t("checkbox.categories.basic"),
      itemList: [
        {
          label: t("checkbox.examples.basic"),
          components: (
            <Checkbox
              label={t("checkbox.examples.basicLabel")}
              value={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("checkbox.examples.withLabel"),
          components: (
            <Checkbox
              label={t("checkbox.examples.termsLabel")}
              value={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("checkbox.categories.states"),
      itemList: [
        {
          label: t("checkbox.examples.required"),
          components: (
            <Checkbox
              label={t("checkbox.examples.requiredLabel")}
              value={requiredChecked}
              onChange={(e) => setRequiredChecked(e.target.checked)}
              required
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("checkbox.examples.disabled"),
          components: (
            <Checkbox
              label={t("checkbox.examples.disabledLabel")}
              value={true}
              disabled
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("checkbox.examples.checked"),
          components: (
            <Checkbox
              label={t("checkbox.examples.checkedLabel")}
              value={true}
              onChange={() => {}}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("checkbox.examples.unchecked"),
          components: (
            <Checkbox
              label={t("checkbox.examples.uncheckedLabel")}
              value={false}
              onChange={() => {}}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("checkbox.categories.validation"),
      itemList: [
        {
          label: t("checkbox.examples.withError"),
          components: (
            <Checkbox
              label={t("checkbox.examples.errorLabel")}
              value={errorChecked}
              onChange={(e) => {
                setErrorChecked(e.target.checked);
                setHasError(!e.target.checked);
              }}
              error={hasError}
              errorMessage={hasError ? t("checkbox.examples.errorMessage") : undefined}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("checkbox.examples.requiredWithError"),
          components: (
            <Checkbox
              label={t("checkbox.examples.requiredErrorLabel")}
              value={false}
              required
              error={true}
              errorMessage={t("checkbox.examples.requiredErrorMessage")}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("checkbox.categories.styling"),
      itemList: [
        {
          label: t("checkbox.examples.noDefault"),
          components: (
            <Checkbox
              label={t("checkbox.examples.noDefaultLabel")}
              value={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
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
        title={t("checkbox.title")}
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
export { CheckboxDoc };
export default CheckboxDoc;
//@@viewOff:exports
