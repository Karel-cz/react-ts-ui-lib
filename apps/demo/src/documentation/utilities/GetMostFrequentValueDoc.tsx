//@@viewOn:imports
import{ useState } from "react";
import { Button, UtilityDocumentation } from "@react-ts-ui-lib/ui";
import { getMostFrequentValue } from "@react-ts-ui-lib/utilities";
import { useTheme } from "../../app/context/themeContext";
import { useTranslation } from "../../i18n/useTranslation";
//@@viewOff:imports

//@@viewOn:component
const GetMostFrequentValueDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [itemsInput, setItemsInput] = useState("apple, banana, apple, orange, banana, apple");
  const [keyInput, setKeyInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = async () => {
    setError(null);
    setHasCalculated(true);

    const raw = itemsInput.trim();
    if (!raw) {
      setResult(null);
      setError(t("getMostFrequentValue.errors.empty"));
      return;
    }

    let parsedItems: unknown[] = [];

    if (raw.startsWith("[") || raw.startsWith("{")) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          parsedItems = parsed;
        } else {
          setResult(null);
          setError(t("getMostFrequentValue.errors.invalidInput"));
          return;
        }
      } catch {
        setResult(null);
        setError(t("getMostFrequentValue.errors.invalidInput"));
        return;
      }
    } else {
      parsedItems = raw
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    if (keyInput) {
      const hasKey = parsedItems.some(
        (item) => item && typeof item === "object" && keyInput in item,
      );
      if (!hasKey) {
        setResult(null);
        setError(t("getMostFrequentValue.errors.invalidKey"));
        return;
      }
    }

    const value = await getMostFrequentValue(parsedItems, keyInput, caseSensitive);
    setResult(value);
  };

  const loadExample1 = () => {
    setItemsInput("apple, banana, apple, orange, banana, apple");
    setKeyInput("");
    setCaseSensitive(false);
    setResult(null);
    setError(null);
    setHasCalculated(false);
  };

  const loadExample2 = () => {
    const data = [
      { name: "Alice", role: "Admin" },
      { name: "Bob", role: "User" },
      { name: "Charlie", role: "admin" },
      { name: "Diana", role: "User" },
      { name: "Eve", role: "admin" },
    ];
    setItemsInput(JSON.stringify(data, null, 2));
    setKeyInput("role");
    setCaseSensitive(false);
    setResult(null);
    setError(null);
    setHasCalculated(false);
  };

  const DemoComponent = (
    <div>
      <p style={{ marginBottom: 16 }}>{t("getMostFrequentValue.description")}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("getMostFrequentValue.inputs.array.label")}</span>
          <textarea
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
              background: darkMode ? "#2a2a2a" : "#fff",
              color: darkMode ? "#fff" : "#000",
              minHeight: 72,
            }}
            value={itemsInput}
            onChange={(e) => setItemsInput(e.target.value)}
            placeholder={t("getMostFrequentValue.inputs.array.placeholder")}
          />
        </label>

        <div style={{ display: "flex", gap: 8 }}>
          <Button label={t("getMostFrequentValue.examples.simple")} onClick={loadExample1} />
          <Button label={t("getMostFrequentValue.examples.withObjects")} onClick={loadExample2} />
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>{t("getMostFrequentValue.inputs.key.label")}</span>
          <input
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
              background: darkMode ? "#2a2a2a" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            placeholder={t("getMostFrequentValue.inputs.key.placeholder")}
          />
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />
          <span>{t("getMostFrequentValue.inputs.caseSensitive.label")}</span>
        </label>
      </div>

      <Button label={t("getMostFrequentValue.actions.calculate")} onClick={handleCalculate} />

      {error && (
        <p style={{ marginTop: 12, color: "var(--rt-danger, #dc2626)" }}>
          ✗ {error}
        </p>
      )}

      {!error && hasCalculated && (
        <p style={{ marginTop: 12, color: "var(--rt-success, #16a34a)" }}>
          {t("getMostFrequentValue.result.label")}: {result === null ? t("getMostFrequentValue.result.empty") : String(result)}
        </p>
      )}
    </div>
  );

  const parametersList = [
    {
      name: t("getMostFrequentValue.parameters.arr.name"),
      description: t("getMostFrequentValue.parameters.arr.description"),
      type: t("getMostFrequentValue.parameters.arr.type"),
      required: true,
    },
    {
      name: t("getMostFrequentValue.parameters.key.name"),
      description: t("getMostFrequentValue.parameters.key.description"),
      type: t("getMostFrequentValue.parameters.key.type"),
      required: true,
    },
    {
      name: t("getMostFrequentValue.parameters.caseSensitive.name"),
      description: t("getMostFrequentValue.parameters.caseSensitive.description"),
      type: t("getMostFrequentValue.parameters.caseSensitive.type"),
      required: false,
    },
  ];

  const returnValueParam = {
    name: "return",
    description: t("getMostFrequentValue.returnValue.description"),
    type: t("getMostFrequentValue.returnValue.type"),
    required: false,
  };

  const usageExamples = [
    {
      title: t("getMostFrequentValue.usage.basic.title"),
      code: t("getMostFrequentValue.usage.basic.code"),
    },
    {
      title: t("getMostFrequentValue.usage.withObjects.title"),
      code: t("getMostFrequentValue.usage.withObjects.code"),
    },
  ];

  //@@viewOff:private

  //@@viewOn:render
  return (
    <UtilityDocumentation
      title={t("getMostFrequentValue.title")}
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
export { GetMostFrequentValueDoc };
export default GetMostFrequentValueDoc;
//@@viewOff:exports
