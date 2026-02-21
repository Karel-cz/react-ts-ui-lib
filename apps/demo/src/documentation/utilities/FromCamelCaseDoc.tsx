//@@viewOn:imports
import { useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { fromCamelCase } from "@react-ts-ui-lib/utilities";
import { useTheme } from "../../app/context/ThemeContext";
import { useTranslation } from "../../i18n/useTranslation";
//@@viewOff:imports

const inputStyle = (darkMode: boolean) => ({
  padding: "8px 12px",
  borderRadius: "4px",
  border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
  background: darkMode ? "#2a2a2a" : "#fff",
  color: darkMode ? "#fff" : "#000",
  width: "100%",
  boxSizing: "border-box" as const,
});

//@@viewOn:component
const FromCamelCaseDoc = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [input, setInput] = useState("helloWorld");
  const [separator, setSeparator] = useState("");
  const [result, setResult] = useState<string>("");

  const handleConvert = () => {
    if(separator.length === 0){
      setResult(fromCamelCase(input));
      return;
    }
    setResult(fromCamelCase(input, separator));
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("fromCamelCase.description")}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("fromCamelCase.inputs.str.label")}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("fromCamelCase.inputs.str.placeholder")}
            style={inputStyle(darkMode)}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("fromCamelCase.inputs.separator.label")}</span>
          <input
            type="text"
            value={separator}
            onChange={(e) => setSeparator(e.target.value) }
            placeholder={t("fromCamelCase.inputs.separator.placeholder")}
            style={inputStyle(darkMode)}
          />
        </label>
      </div>
      <Button label={t("fromCamelCase.actions.convert")} onClick={handleConvert} />
      {result !== "" && (
        <p style={{ marginTop: 12 }}>
          {t("fromCamelCase.result.label")}: <strong>{result}</strong>
        </p>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("fromCamelCase.parameters.str.name"),
      description: t("fromCamelCase.parameters.str.description"),
      type: t("fromCamelCase.parameters.str.type"),
      required: true,
    },
    {
      name: t("fromCamelCase.parameters.separator.name"),
      description: t("fromCamelCase.parameters.separator.description"),
      type: t("fromCamelCase.parameters.separator.type"),
      required: false,
    }
  ];
  const returnValueParam = {
    name: "return",
    description: t("fromCamelCase.returnValue.description"),
    type: t("fromCamelCase.returnValue.type"),
    required: false,
  };
  const usageExamples = [
    { title: t("fromCamelCase.usage.basic.title"), code: t("fromCamelCase.usage.basic.code") },
    { title: t("fromCamelCase.usage.custom.title"), code: t("fromCamelCase.usage.custom.code") },
  ];

  return (
    <UtilityDocumentation
      title={t("fromCamelCase.title")}
      demoComponent={DemoComponent}
      parametersList={[...parametersList, returnValueParam]}
      usageExamples={usageExamples}
      parametersTitle={t("documentation.utility.parameters.title")}
      parametersNameLabel={t("documentation.utility.parameters.name")}
      parametersDescriptionLabel={t("documentation.utility.parameters.description")}
      parametersTypeLabel={t("documentation.utility.parameters.type")}
      parametersRequiredLabel={t("documentation.utility.parameters.required")}
      parametersYes={t("documentation.utility.parameters.yes")}
      parametersNo={t("documentation.utility.parameters.no")}
      usageTitle={t("documentation.utility.usage.title")}
      darkMode={darkMode}
    />
  );
};
//@@viewOff:component

export { FromCamelCaseDoc };
export default FromCamelCaseDoc;
