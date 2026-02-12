//@@viewOn:imports
import { useState } from "react";
import { Block, Button, Input } from "@react-ts-ui-lib/ui";
import {
  copyToClipboard,
  getMostFrequentValue,
  generatePassword,
  parseQueryString,
  generateRandomString,
  validateEmail,
  validateJson,
} from "@react-ts-ui-lib/utilities";
import { useTranslation } from "../i18n/useTranslation";
import { useTheme } from "./context/ThemeContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const getStyles = (darkMode: boolean): Record<string, React.CSSProperties> => ({
  container: { display: "flex", flexDirection: "column", gap: 24, margin: 12 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 },
  blockContent: { display: "flex", flexDirection: "column", gap: 12 },
  input: {
    padding: "8px 12px",
    borderRadius: "4px",
    border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
    background: darkMode ? "#2a2a2a" : "#fff",
    color: darkMode ? "#fff" : "#000",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    padding: "8px 12px",
    borderRadius: "4px",
    border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
    background: darkMode ? "#2a2a2a" : "#fff",
    color: darkMode ? "#fff" : "#000",
    width: "100%",
    boxSizing: "border-box",
    minHeight: 60,
    fontFamily: "monospace",
  },
  result: { marginTop: 8, wordBreak: "break-all", fontSize: 14 },
  title: { fontSize: 24, fontWeight: 700, marginBottom: 24 },
});
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const Utilities = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const styles = getStyles(darkMode);

  const [copyText, setCopyText] = useState("Hello, copy me!");
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");

  const [freqInput, setFreqInput] = useState("apple, banana, apple, orange, apple");
  const [freqResult, setFreqResult] = useState<string | null>(null);

  const [pwdLength, setPwdLength] = useState(12);
  const [password, setPassword] = useState<string | null>(null);

  const [queryInput, setQueryInput] = useState("?name=John&age=25");
  const [queryResult, setQueryResult] = useState<Record<string, string> | null>(null);

  const [randomLength, setRandomLength] = useState(10);
  const [randomResult, setRandomResult] = useState<string | null>(null);

  const [emailInput, setEmailInput] = useState("user@example.com");
  const [emailResult, setEmailResult] = useState<boolean | null>(null);

  const [jsonInput, setJsonInput] = useState('{"a": 1, "b": "text"}');
  const [jsonResult, setJsonResult] = useState<boolean | null>(null);

  const handleCopy = async () => {
    const ok = await copyToClipboard(copyText);
    setCopyStatus(ok ? "success" : "error");
    if (ok) setTimeout(() => setCopyStatus("idle"), 1500);
  };

  const handleFreq = async () => {
    const items = freqInput.split(",").map((s) => s.trim()).filter(Boolean);
    const value = await getMostFrequentValue(items, "", false);
    setFreqResult(value);
  };

  const handlePassword = () => setPassword(generatePassword(pwdLength));
  const handleQuery = () => setQueryResult(parseQueryString(queryInput));
  const handleRandom = () => setRandomResult(generateRandomString(randomLength));
  const handleEmail = () => setEmailResult(validateEmail(emailInput));
  const handleJson = () => setJsonResult(validateJson(jsonInput));
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div style={styles.container}>
      <Block header={t("utilitiesPage.title")} card="full" darkMode={darkMode}>
        <p style={{ marginBottom: 24 }}>{t("utilitiesPage.description")}</p>
        <p style={{ marginBottom: 24 }}>{t("utilitiesPage.instructions")}</p>
      </Block>

      <div style={styles.grid}>
        <Block card="full" darkMode={darkMode} header={t("sidebar.utilities.copyToClipboard")}>
          <div style={styles.blockContent}>
            <Input
              value={copyText}
              onChange={(e) => setCopyText(e.target.value)}
            />
            <Button label={t("sidebar.utilities.copyToClipboard")} onClick={handleCopy} darkMode={darkMode} />
            {copyStatus === "success" && <span style={{ ...styles.result, color: "var(--rt-success, #16a34a)" }}>✓ {t("copyToClipboard.success")}</span>}
            {copyStatus === "error" && <span style={{ ...styles.result, color: "var(--rt-danger, #dc2626)" }}>✗ {t("copyToClipboard.error")}</span>}
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("sidebar.utilities.getMostFrequentValue")}>
          <div style={styles.blockContent}>
            <input
              value={freqInput}
              onChange={(e) => setFreqInput(e.target.value)}
              style={styles.input}
              placeholder="a, b, a, c"
            />
            <Button label={t("getMostFrequentValue.actions.calculate")} onClick={handleFreq} darkMode={darkMode} />
            {freqResult !== null && <span style={{ ...styles.result, color: "var(--rt-success, #16a34a)" }}>{t("getMostFrequentValue.result.label")}: {freqResult}</span>}
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("sidebar.utilities.generatePassword")}>
          <div style={styles.blockContent}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span>{t("generatePassword.inputs.length.label")}</span>
              <input
                type="number"
                min={1}
                max={128}
                value={pwdLength}
                onChange={(e) => setPwdLength(Math.max(1, Math.min(128, Number(e.target.value) || 1)))}
                style={styles.input}
              />
            </label>
            <Button label={t("generatePassword.actions.generate")} onClick={handlePassword} darkMode={darkMode} />
            {password !== null && <span style={{ ...styles.result, color: "var(--rt-success, #16a34a)" }}>{password}</span>}
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("sidebar.utilities.parseQueryString")}>
          <div style={styles.blockContent}>
            <input value={queryInput} onChange={(e) => setQueryInput(e.target.value)} style={styles.input} />
            <Button label={t("parseQueryString.actions.parse")} onClick={handleQuery} darkMode={darkMode} />
            {queryResult !== null && <pre style={{ ...styles.result, color: "var(--rt-success, #16a34a)" }}>{JSON.stringify(queryResult, null, 2)}</pre>}
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("sidebar.utilities.generateRandomString")}>
          <div style={styles.blockContent}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span>{t("generateRandomString.inputs.length.label")}</span>
              <input
                type="number"
                min={1}
                max={256}
                value={randomLength}
                onChange={(e) => setRandomLength(Math.max(1, Math.min(256, Number(e.target.value) || 1)))}
                style={styles.input}
              />
            </label>
            <Button label={t("generateRandomString.actions.generate")} onClick={handleRandom} darkMode={darkMode} />
            {randomResult !== null && <span style={{ ...styles.result, color: "var(--rt-success, #16a34a)" }}>{randomResult}</span>}
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("sidebar.utilities.validateEmail")}>
          <div style={styles.blockContent}>
            <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} style={styles.input} placeholder="email@example.com" />
            <Button label={t("validateEmail.actions.validate")} onClick={handleEmail} darkMode={darkMode} />
            {emailResult !== null && (
              <span style={{ ...styles.result, color: emailResult ? "var(--rt-success, #16a34a)" : "var(--rt-danger, #dc2626)" }}>
                {emailResult ? t("validateEmail.result.valid") : t("validateEmail.result.invalid")}
              </span>
            )}
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("sidebar.utilities.validateJson")}>
          <div style={styles.blockContent}>
            <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} style={styles.textarea} rows={3} />
            <Button label={t("validateJson.actions.validate")} onClick={handleJson} darkMode={darkMode} />
            {jsonResult !== null && (
              <span style={{ ...styles.result, color: jsonResult ? "var(--rt-success, #16a34a)" : "var(--rt-danger, #dc2626)" }}>
                {jsonResult ? t("validateJson.result.valid") : t("validateJson.result.invalid")}
              </span>
            )}
          </div>
        </Block>
      </div>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Utilities };
export default Utilities;
//@@viewOff:exports
