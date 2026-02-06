//@@viewOn:imports
import { useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { generatePassword } from "@react-ts-ui-lib/utilities";
import { useTheme } from "../../app/context/themeContext";
import { useTranslation } from "../../i18n/useTranslation";
//@@viewOff:imports

//@@viewOn:component
const GeneratePasswordDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState<string | null>(null);

  const handleGenerate = () => {
    const result = generatePassword(length);
    setPassword(result);
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("generatePassword.description")}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("generatePassword.inputs.length.label")}</span>
          <input
            type="number"
            min={1}
            max={128}
            value={length}
            onChange={(e) => setLength(Math.max(1, Math.min(128, Number(e.target.value) || 1)))}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
              background: darkMode ? "#2a2a2a" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
          />
        </label>
      </div>

      <Button label={t("generatePassword.actions.generate")} onClick={handleGenerate} />

      {password !== null && (
        <p style={{ marginTop: 12, color: "var(--rt-success, #16a34a)", wordBreak: "break-all" }}>
          {t("generatePassword.result.label")}: {password}
        </p>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("generatePassword.parameters.length.name"),
      description: t("generatePassword.parameters.length.description"),
      type: t("generatePassword.parameters.length.type"),
      required: true,
    },
  ];

  const returnValueParam = {
    name: "return",
    description: t("generatePassword.returnValue.description"),
    type: t("generatePassword.returnValue.type"),
    required: false,
  };

  const usageExamples = [
    {
      title: t("generatePassword.usage.basic.title"),
      code: t("generatePassword.usage.basic.code"),
    },
  ];

  //@@viewOff:private

  //@@viewOn:render
  return (
    <UtilityDocumentation
      title={t("generatePassword.title")}
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
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { GeneratePasswordDoc };
export default GeneratePasswordDoc;
//@@viewOff:exports
