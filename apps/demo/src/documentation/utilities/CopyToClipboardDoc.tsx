//@@viewOn:imports
import { useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { copyToClipboard } from "@react-ts-ui-lib/utilities";
import { useTheme } from "../../app/context/ThemeContext";
import { useTranslation } from "../../i18n/useTranslation";
//@@viewOff:imports

//@@viewOn:component
const CopyToClipboardDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [value, setValue] = useState("Hello from react-ts-ui-lib!");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCopy = async () => {
    await copyToClipboard(value, {
      onSuccess: () => {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 1500);
      },
      onError: () => {
        setStatus("error");
      },
    });
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("copyToClipboard.description")}</p>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
        <input
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: "4px",
            border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
            background: darkMode ? "#2a2a2a" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button label={t("sidebar.utilities.copyToClipboard")} onClick={handleCopy} />
      </div>

      {status === "success" && (
        <p style={{ marginTop: 8, color: "var(--rt-success, #16a34a)" }}>
          ✓ {t("copyToClipboard.success")}
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: 8, color: "var(--rt-danger, #dc2626)" }}>
          ✗ {t("copyToClipboard.error")}
        </p>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("copyToClipboard.parameters.text.name"),
      description: t("copyToClipboard.parameters.text.description"),
      type: t("copyToClipboard.parameters.text.type"),
      required: true,
    },
    {
      name: t("copyToClipboard.parameters.options.name"),
      description: t("copyToClipboard.parameters.options.description"),
      type: t("copyToClipboard.parameters.options.type"),
      required: false,
    },
    {
      name: t("copyToClipboard.parameters.onSuccess.name"),
      description: t("copyToClipboard.parameters.onSuccess.description"),
      type: t("copyToClipboard.parameters.onSuccess.type"),
      required: false,
    },
    {
      name: t("copyToClipboard.parameters.onError.name"),
      description: t("copyToClipboard.parameters.onError.description"),
      type: t("copyToClipboard.parameters.onError.type"),
      required: false,
    },
  ];

  const returnValueParam = {
    name: "return",
    description: t("copyToClipboard.returnValue.description"),
    type: t("copyToClipboard.returnValue.type"),
    required: false,
  };

  const usageExamples = [
    {
      title: t("copyToClipboard.usage.basic.title"),
      code: t("copyToClipboard.usage.basic.code"),
    },
    {
      title: t("copyToClipboard.usage.withErrorHandling.title"),
      code: t("copyToClipboard.usage.withErrorHandling.code"),
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <UtilityDocumentation
      title={t("copyToClipboard.title")}
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
export { CopyToClipboardDoc };
export default CopyToClipboardDoc;
//@@viewOff:exports
