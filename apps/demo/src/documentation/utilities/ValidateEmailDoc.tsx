//@@viewOn:imports
import { useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { validateEmail } from "@react-ts-ui-lib/utilities";
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
});

//@@viewOn:component
const ValidateEmailDoc = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [email, setEmail] = useState("user@example.com");
  const [result, setResult] = useState<boolean | null>(null);

  const handleValidate = () => {
    setResult(validateEmail(email));
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("validateEmail.description")}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("validateEmail.inputs.email.label")}</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("validateEmail.inputs.email.placeholder")}
            style={inputStyle(darkMode)}
          />
        </label>
      </div>
      <Button label={t("validateEmail.actions.validate")} onClick={handleValidate} />
      {result !== null && (
        <p style={{ marginTop: 12, color: result ? "var(--rt-success, #16a34a)" : "var(--rt-danger, #dc2626)" }}>
          {result ? t("validateEmail.result.valid") : t("validateEmail.result.invalid")}
        </p>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("validateEmail.parameters.str.name"),
      description: t("validateEmail.parameters.str.description"),
      type: t("validateEmail.parameters.str.type"),
      required: true,
    },
  ];
  const returnValueParam = {
    name: "return",
    description: t("validateEmail.returnValue.description"),
    type: t("validateEmail.returnValue.type"),
    required: false,
  };
  const usageExamples = [
    { title: t("validateEmail.usage.basic.title"), code: t("validateEmail.usage.basic.code") },
  ];

  return (
    <UtilityDocumentation
      title={t("validateEmail.title")}
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

export { ValidateEmailDoc };
export default ValidateEmailDoc;
