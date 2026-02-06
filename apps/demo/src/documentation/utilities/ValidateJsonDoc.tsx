//@@viewOn:imports
import { useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { validateJson } from "@react-ts-ui-lib/utilities";
import { useTheme } from "../../app/context/themeContext";
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
  minHeight: 80,
  fontFamily: "monospace",
});

//@@viewOn:component
const ValidateJsonDoc = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [input, setInput] = useState('{"a": 1, "b": "text"}');
  const [result, setResult] = useState<boolean | null>(null);

  const handleValidate = () => {
    setResult(validateJson(input));
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("validateJson.description")}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("validateJson.inputs.str.label")}</span>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("validateJson.inputs.str.placeholder")}
            style={inputStyle(darkMode)}
          />
        </label>
      </div>
      <Button label={t("validateJson.actions.validate")} onClick={handleValidate} />
      {result !== null && (
        <p style={{ marginTop: 12, color: result ? "var(--rt-success, #16a34a)" : "var(--rt-danger, #dc2626)" }}>
          {result ? t("validateJson.result.valid") : t("validateJson.result.invalid")}
        </p>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("validateJson.parameters.str.name"),
      description: t("validateJson.parameters.str.description"),
      type: t("validateJson.parameters.str.type"),
      required: true,
    },
  ];
  const returnValueParam = {
    name: "return",
    description: t("validateJson.returnValue.description"),
    type: t("validateJson.returnValue.type"),
    required: false,
  };
  const usageExamples = [
    { title: t("validateJson.usage.basic.title"), code: t("validateJson.usage.basic.code") },
  ];

  return (
    <UtilityDocumentation
      title={t("validateJson.title")}
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

export { ValidateJsonDoc };
export default ValidateJsonDoc;
