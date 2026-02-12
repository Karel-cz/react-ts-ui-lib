//@@viewOn:imports
import { useState } from "react";
import { Block, Button, Icon, Number, Pending, Badge, ThemeToggle, Label, CopyToClipboard } from "@react-ts-ui-lib/ui";
import { copyToClipboard } from "@react-ts-ui-lib/utilities";
import { useTranslation } from "../i18n/useTranslation";
import { useTheme } from "./context/ThemeContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const getStyles = (): Record<string, React.CSSProperties> => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    margin: 12
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 24,

  },
  blockContent: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 24,
  },
});
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const BasicComponents = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const styles = getStyles();
  const [demoDark, setDemoDark] = useState(false);
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div style={styles.container}>
      <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.title")}  >
        <p style={{ marginBottom: 24 }}>{t("basicComponentsPage.description")}</p>
        <p style={{ marginBottom: 24 }}>{t("basicComponentsPage.instructions")}</p>
      </Block>


      <div style={styles.grid}>
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.buttons")}>
          <div style={styles.blockContent}>
            <Button label={t("basicComponentsPage.examples.primary")} colorScheme="primary" modern />
            <Button label={t("basicComponentsPage.examples.success")} colorScheme="success" modern />
            <Button label={t("basicComponentsPage.examples.purple")} colorScheme="purple" modern />
            <Button label={t("basicComponentsPage.examples.danger")} colorScheme="danger" modern icon="mdi-alert" />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.icons")}>
          <div style={styles.blockContent}>
            <Icon icon="mdi-heart" color="#ef4444" size="lg" />
            <Icon icon="mdi-star" color="#f59e0b" size="lg" />
            <Icon icon="mdi-check-circle" color="#10b981" size="lg" />
            <Icon icon="mdi-information" color="#3b82f6" size="lg" />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.numbers")}>
          <div style={styles.blockContent}>
            <Number value={42} />
            <Number value={99} />
            <Number value={156} />
            <Number value={777} />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.pending")}>
          <div style={styles.blockContent}>
            <Pending colorScheme="primary" size="md" />
            <Pending colorScheme="success" size="md" />
            <Pending colorScheme="pink" size="md" />
            <Pending colorScheme="purple" type="horizontal" size="lg" />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.badges")}>
          <div style={styles.blockContent}>
            <Badge label={t("basicComponentsPage.examples.new")} colorScheme="primary" />
            <Badge label={t("basicComponentsPage.examples.success")} colorScheme="success" />
            <Badge label={t("basicComponentsPage.examples.warning")} colorScheme="warning" />
            <Badge label={t("basicComponentsPage.examples.hot")} colorScheme="danger" />
            <Badge label={t("basicComponentsPage.examples.premium")} colorScheme="purple" />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.labels")}>
          <div style={styles.blockContent}>
            <Label size="s" darkMode={darkMode}>Small</Label>
            <Label size="m" darkMode={darkMode}>Medium</Label>
            <Label size="l" colorScheme="primary" darkMode={darkMode}>Primary</Label>
            <Label size="xl" darkMode={darkMode}>Large</Label>
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.themeToggle")}>
          <div style={styles.blockContent}>
            <ThemeToggle
              darkMode={demoDark}
              onToggle={() => setDemoDark(!demoDark)}
              ariaLabelDark={t("themeToggle.ariaLabelDark")}
              ariaLabelLight={t("themeToggle.ariaLabelLight")}
            />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.copyToClipboard")}>
          <div style={styles.blockContent}>
            <CopyToClipboard
              text="Hello from Basic Components"
              onCopy={copyToClipboard}
              label={t("copyToClipboard.examples.copyLabel")}
              darkMode={darkMode}
            />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.block")}>
          <div style={styles.blockContent}>
            <Block darkMode={darkMode} header={t("basicComponentsPage.examples.dashboard")}>
              <p style={{ margin: 0 }}>{t("basicComponentsPage.description")}</p>
            </Block>
          </div>
        </Block>
      </div>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { BasicComponents };
export default BasicComponents;
//@@viewOff:exports
