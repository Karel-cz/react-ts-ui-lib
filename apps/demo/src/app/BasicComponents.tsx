//@@viewOn:imports
import { Block, Button, Icon, Input, Number, Pending, Badge, Navbar, SideBar } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { useTheme } from "./context/themeContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const getStyles = (): Record<string, React.CSSProperties> => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
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
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t("basicComponentsPage.title")}</h1>

      <div style={styles.grid}>
        {/* Button Examples */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.buttons")}>
          <div style={styles.blockContent}>
            <Button label={t("basicComponentsPage.examples.primary")} colorScheme="primary" modern />
            <Button label={t("basicComponentsPage.examples.success")} colorScheme="success" modern />
            <Button label={t("basicComponentsPage.examples.purple")} colorScheme="purple" modern />
            <Button label={t("basicComponentsPage.examples.danger")} colorScheme="danger" modern icon="mdi-alert" />
          </div>
        </Block>

        {/* Icon Examples */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.icons")}>
          <div style={styles.blockContent}>
            <Icon icon="mdi-heart" color="#ef4444" size="lg" />
            <Icon icon="mdi-star" color="#f59e0b" size="lg" />
            <Icon icon="mdi-check-circle" color="#10b981" size="lg" />
            <Icon icon="mdi-information" color="#3b82f6" size="lg" />
          </div>
        </Block>

        {/* Input Examples */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.inputs")}>
          <div style={styles.blockContent}>
            <Input placeholder={t("basicComponentsPage.examples.primaryInput")} colorScheme="primary" />
            <Input placeholder={t("basicComponentsPage.examples.successInput")} colorScheme="success" />
            <Input placeholder={t("basicComponentsPage.examples.tealInput")} colorScheme="teal" />
          </div>
        </Block>

        {/* Number Examples */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.numbers")}>
          <div style={styles.blockContent}>
            <Number value={42} colorScheme="primary" />
            <Number value={99} colorScheme="danger" />
            <Number value={156} colorScheme="purple" />
            <Number value={777} colorScheme="cyan" />
          </div>
        </Block>

        {/* Pending Examples */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.pending")}>
          <div style={styles.blockContent}>
            <Pending colorScheme="primary" size="md" />
            <Pending colorScheme="success" size="md" />
            <Pending colorScheme="pink" size="md" />
            <Pending colorScheme="purple" type="horizontal" size="lg" />
          </div>
        </Block>

        {/* Badge Examples */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.badges")}>
          <div style={styles.blockContent}>
            <Badge label={t("basicComponentsPage.examples.new")} colorScheme="primary" />
            <Badge label={t("basicComponentsPage.examples.success")} colorScheme="success" />
            <Badge label={t("basicComponentsPage.examples.warning")} colorScheme="warning" />
            <Badge label={t("basicComponentsPage.examples.hot")} colorScheme="danger" />
            <Badge label={t("basicComponentsPage.examples.premium")} colorScheme="purple" />
          </div>
        </Block>

        {/* Navbar Example */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.navbar")}>
          <Navbar
            logo={<span style={{ fontWeight: 700 }}>{t("basicComponentsPage.examples.logo")}</span>}
            darkMode={darkMode}
            leftContent={<Button label={t("basicComponentsPage.examples.menu")} size="sm" modern colorScheme="primary" />}
            rightContent={
              <>
                <Button size="sm" modern colorScheme="success">{t("basicComponentsPage.examples.action")}</Button>
                <Icon icon="mdi-cog" color="#8b5cf6" size="md" />
              </>
            }
          />
        </Block>

        {/* SideBar Example */}
        <Block card="full" darkMode={darkMode} header={t("basicComponentsPage.components.sidebar")}>
          <div style={{ height: 200, overflow: "hidden" }}>
            <SideBar
              itemList={[
                { title: t("basicComponentsPage.examples.dashboard"), icon: "mdi-view-dashboard", key: "1" },
                { title: t("basicComponentsPage.examples.settings"), icon: "mdi-cog", key: "2" },
                { title: t("basicComponentsPage.examples.profile"), icon: "mdi-account", key: "3" },
              ]}
              selectedItem={{ title: t("basicComponentsPage.examples.dashboard"), icon: "mdi-view-dashboard", key: "1" }}
              darkMode={darkMode}
              onItemClick={() => {}}
            />
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
