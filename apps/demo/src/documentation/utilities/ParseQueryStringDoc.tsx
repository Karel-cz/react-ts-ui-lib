//@@viewOn:imports
import { useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { parseQueryString } from "@react-ts-ui-lib/utilities";
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
const ParseQueryStringDoc = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState("?a=1&b=hello&c=3");
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const handleParse = () => {
    setResult(parseQueryString(search));
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("parseQueryString.description")}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("parseQueryString.inputs.search.label")}</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("parseQueryString.inputs.search.placeholder")}
            style={inputStyle(darkMode)}
          />
        </label>
      </div>
      <Button label={t("parseQueryString.actions.parse")} onClick={handleParse} />
      {result !== null && (
        <pre style={{ marginTop: 12, color: "var(--rt-success, #16a34a)", wordBreak: "break-all", fontSize: 14 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("parseQueryString.parameters.search.name"),
      description: t("parseQueryString.parameters.search.description"),
      type: t("parseQueryString.parameters.search.type"),
      required: true,
    },
  ];
  const returnValueParam = {
    name: "return",
    description: t("parseQueryString.returnValue.description"),
    type: t("parseQueryString.returnValue.type"),
    required: false,
  };
  const usageExamples = [
    { title: t("parseQueryString.usage.basic.title"), code: t("parseQueryString.usage.basic.code") },
  ];

  return (
    <UtilityDocumentation
      title={t("parseQueryString.title")}
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

export { ParseQueryStringDoc };
export default ParseQueryStringDoc;
