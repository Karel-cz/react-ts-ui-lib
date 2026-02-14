//@@viewOn:imports
import { Block, Button, Icon, Navbar, SideBar, TabGroup } from "@react-ts-ui-lib/ui";
import type { SideBarItem, TabGroupItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { useTheme } from "./context/ThemeContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const getStyles = (): Record<string, React.CSSProperties> => ({
  container: { display: "flex", flexDirection: "column", gap: 24, margin: 12 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 },
  blockContent: { display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" },
  title: { fontSize: 24, fontWeight: 700, marginBottom: 24 },
});
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const LayoutStructureComponents = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const styles = getStyles();

  const sidebarItems: SideBarItem[] = [
    { title: t("basicComponentsPage.examples.dashboard"), icon: "mdi-view-dashboard", key: "1" },
    { title: t("basicComponentsPage.examples.settings"), icon: "mdi-cog", key: "2" },
    { title: t("basicComponentsPage.examples.profile"), icon: "mdi-account", key: "3" },
  ];

  const tabItems: TabGroupItem[] = [
    { title: "Overview", subtitle: "Summary", content: <p>Overview content.</p>, code: "overview" },
    { title: "Details", subtitle: "More info", content: <p>Details content.</p>, code: "details" },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div style={styles.container}>
      <Block header={t("layoutStructureComponentsPage.title")} card="full" darkMode={darkMode}>
        <p style={{ marginBottom: 24 }}>{t("layoutStructureComponentsPage.description")}</p>
        <p style={{ marginBottom: 24 }}>{t("layoutStructureComponentsPage.instructions")}</p>
      </Block>

      <div style={styles.grid}>
        <Block card="full" darkMode={darkMode} header={t("layoutStructureComponentsPage.components.navbar")}>
          <Navbar
            logo={<span style={{ fontWeight: 700 }}>{t("basicComponentsPage.examples.logo")}</span>}
            darkMode={darkMode}
            centerContent={<Button label={t("basicComponentsPage.examples.menu")} size="sm" modern colorScheme="primary" darkMode={darkMode} />}
            rightContent={
              <>
                <Button size="sm" modern colorScheme="success" darkMode={darkMode}>{t("basicComponentsPage.examples.action")}</Button>
                <Icon icon="mdi-cog" color="#8b5cf6" size="md" />
              </>
            }
          />
        </Block>

        <Block card="full" darkMode={darkMode} header={t("layoutStructureComponentsPage.components.sidebar")}>
          <div style={{ height: 200, overflow: "hidden" }}>
            <SideBar
              itemList={sidebarItems}
              selectedItem={sidebarItems[0]}
              darkMode={darkMode}
              onItemClick={() => { }}
            />
          </div>
        </Block>

        <Block card="full" darkMode={darkMode} header={t("layoutStructureComponentsPage.components.tabGroup")}>
          <TabGroup itemList={tabItems} codeActive="overview" darkMode={darkMode} />
        </Block>

        <Block card="full" darkMode={darkMode} header={t("layoutStructureComponentsPage.components.block")}>
          <div style={styles.blockContent}>
            <Block darkMode={darkMode} header={t("basicComponentsPage.examples.dashboard")}>
              <p style={{ margin: 0 }}>{t("layoutStructureComponentsPage.blockExample")}</p>
            </Block>
          </div>
        </Block>
      </div>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { LayoutStructureComponents };
export default LayoutStructureComponents;
//@@viewOff:exports
