//@@viewOn:imports
import { Documentation, DATE_PROP_NAMES, Date as DateComponent } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
import { useState } from "react";
//@@viewOff:imports

//@@viewOn:component
const DateDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("date", DATE_PROP_NAMES, t);

  const [basicValue, setBasicValue] = useState("");
  const [requiredValue, setRequiredValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const componentList = [
    {
      category: t("date.categories.basic"),
      itemList: [
        {
          label: t("date.examples.basic"),
          components: (
            <DateComponent
              label={t("date.examples.basicLabel")}
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("date.examples.withLabel"),
          components: (
            <DateComponent
              label={t("date.examples.dateLabel")}
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("date.categories.states"),
      itemList: [
        {
          label: t("date.examples.required"),
          components: (
            <DateComponent
              label={t("date.examples.requiredLabel")}
              value={requiredValue}
              onChange={(e) => setRequiredValue(e.target.value)}
              required
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("date.examples.disabled"),
          components: (
            <DateComponent
              label={t("date.examples.disabledLabel")}
              value="2024-01-15"
              disabled
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("date.categories.validation"),
      itemList: [
        {
          label: t("date.examples.withError"),
          components: (
            <DateComponent
              label={t("date.examples.errorLabel")}
              value={errorValue}
              onChange={(e) => {
                setErrorValue(e.target.value);
                setHasError(!e.target.value);
              }}
              error={hasError}
              errorMessage={hasError ? t("date.examples.errorMessage") : undefined}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("date.examples.requiredWithError"),
          components: (
            <DateComponent
              label={t("date.examples.requiredErrorLabel")}
              value=""
              required
              error={true}
              errorMessage={t("date.examples.requiredErrorMessage")}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("date.categories.styling"),
      itemList: [
        {
          label: t("date.examples.noDefault"),
          components: (
            <DateComponent
              label={t("date.examples.noDefaultLabel")}
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
        state="inProgress"
        title={t("date.title")}
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
export { DateDoc };
export default DateDoc;
//@@viewOff:exports
