//@@viewOn:imports
import { useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { generateRandomString } from "@react-ts-ui-lib/utilities";
import { useTheme } from "../../app/context/themeContext";
import { useTranslation } from "../../i18n/useTranslation";
//@@viewOff:imports

const inputStyle = (darkMode: boolean) => ({
  padding: "8px 12px",
  borderRadius: "4px",
  border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
  background: darkMode ? "#2a2a2a" : "#fff",
  color: darkMode ? "#fff" : "#000",
});

//@@viewOn:component
const GenerateRandomStringDoc = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [length, setLength] = useState(12);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setResult(generateRandomString(length));
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("generateRandomString.description")}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("generateRandomString.inputs.length.label")}</span>
          <input
            type="number"
            min={1}
            max={256}
            value={length}
            onChange={(e) => setLength(Math.max(1, Math.min(256, Number(e.target.value) || 1)))}
            style={inputStyle(darkMode)}
          />
        </label>
      </div>
      <Button label={t("generateRandomString.actions.generate")} onClick={handleGenerate} />
      {result !== null && (
        <p style={{ marginTop: 12, color: "var(--rt-success, #16a34a)", wordBreak: "break-all" }}>
          {t("generateRandomString.result.label")}: {result}
        </p>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("generateRandomString.parameters.length.name"),
      description: t("generateRandomString.parameters.length.description"),
      type: t("generateRandomString.parameters.length.type"),
      required: true,
    },
  ];
  const returnValueParam = {
    name: "return",
    description: t("generateRandomString.returnValue.description"),
    type: t("generateRandomString.returnValue.type"),
    required: false,
  };
  const usageExamples = [
    { title: t("generateRandomString.usage.basic.title"), code: t("generateRandomString.usage.basic.code") },
  ];

  return (
    <UtilityDocumentation
      title={t("generateRandomString.title")}
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

export { GenerateRandomStringDoc };
export default GenerateRandomStringDoc;
