//@@viewOn:imports
import { useState } from "react";
import { Documentation, TAB_GROUP_PROP_NAMES, TabGroup, Button, Badge, Icon } from "@react-ts-ui-lib/ui";
import type { TabGroupItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:component
const TabGroupDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("tabgroup", TAB_GROUP_PROP_NAMES, t);
  const [activeTab, setActiveTab] = useState<string | number>("best");

  const basicTabs: TabGroupItem[] = [
    {
      title: t("tabgroup.examples.bestExamples"),
      subtitle: t("tabgroup.examples.topPicks"),
      icon: "mdi-star",
      code: "best",
      content: (
        <div style={{ padding: "1rem", background: darkMode ? "#1a1a1a" : "#f5f5f5", borderRadius: "8px" }}>
          <h3>{t("tabgroup.examples.bestExamples")}</h3>
          <p>{t("tabgroup.examples.bestExamplesContent")}</p>
        </div>
      ),
    },
    {
      title: t("tabgroup.examples.allExamples"),
      subtitle: t("tabgroup.examples.completeList"),
      icon: "mdi-view-list",
      code: "all",
      content: (
        <div style={{ padding: "1rem", background: darkMode ? "#1a1a1a" : "#f5f5f5", borderRadius: "8px" }}>
          <h3>{t("tabgroup.examples.allExamples")}</h3>
          <p>{t("tabgroup.examples.allExamplesContent")}</p>
        </div>
      ),
    },
    {
      title: t("tabgroup.examples.props"),
      subtitle: t("tabgroup.examples.documentation"),
      icon: "mdi-code-tags",
      code: "props",
      content: (
        <div style={{ padding: "1rem", background: darkMode ? "#1a1a1a" : "#f5f5f5", borderRadius: "8px" }}>
          <h3>{t("tabgroup.examples.props")}</h3>
          <p>{t("tabgroup.examples.propsContent")}</p>
        </div>
      ),
    },
  ];

  const tabsWithActionList: TabGroupItem[] = [
    {
      title: "Dashboard",
      subtitle: "Overview",
      icon: "mdi-view-dashboard",
      code: "dashboard",
      content: (
        <div style={{ padding: "1rem" }}>
          <p>Dashboard content with ActionList</p>
        </div>
      ),
    },
    {
      title: "Settings",
      subtitle: "Configuration",
      icon: "mdi-cog",
      code: "settings",
      content: (
        <div style={{ padding: "1rem" }}>
          <p>Settings content</p>
        </div>
      ),
    },
  ];

  const tabsWithComponentContent: TabGroupItem[] = [
    {
      title: "Statistics",
      subtitle: "Data overview",
      icon: "mdi-chart-line",
      code: "stats",
      content: (
        <div style={{ padding: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Badge label="Active" colorScheme="success" darkMode={darkMode} />
            <Badge label="Pending" colorScheme="warning" darkMode={darkMode} />
            <Badge label="Inactive" colorScheme="muted" darkMode={darkMode} />
          </div>
        </div>
      ),
    },
    {
      title: "Actions",
      subtitle: "Quick actions",
      icon: "mdi-lightning-bolt",
      code: "actions",
      content: (
        <div style={{ padding: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Button label="Save" colorScheme="primary" size="sm" darkMode={darkMode} />
          <Button label="Cancel" colorScheme="muted" size="sm" darkMode={darkMode} />
          <Button label="Delete" colorScheme="danger" size="sm" darkMode={darkMode} />
        </div>
      ),
    },
  ];

  const componentList = [
    {
      category: t("tabgroup.categories.basic"),
      itemList: [
        {
          label: t("tabgroup.examples.default"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive={activeTab}
              onChange={setActiveTab}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.withIcons"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive="best"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.withSubtitle"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive="all"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("tabgroup.categories.colorScheme"),
      itemList: [
        {
          label: t("tabgroup.examples.primary"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive="best"
              colorScheme="primary"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.success"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive="best"
              colorScheme="success"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.danger"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive="best"
              colorScheme="danger"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("tabgroup.examples.warning"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive="best"
              colorScheme="warning"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("tabgroup.categories.actionList"),
      itemList: [
        {
          label: t("tabgroup.examples.withActions"),
          components: (
            <TabGroup
              itemList={tabsWithActionList}
              codeActive="dashboard"
              ActionList={[
                <Button key="1" label="Export" size="sm" colorScheme="primary" darkMode={darkMode} />,
                <Button key="2" label="Settings" size="sm" colorScheme="muted" darkMode={darkMode} />,
              ]}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("tabgroup.categories.content"),
      itemList: [
        {
          label: t("tabgroup.examples.withComponentContent"),
          components: (
            <TabGroup
              itemList={tabsWithComponentContent}
              codeActive="stats"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("tabgroup.categories.styling"),
      itemList: [
        {
          label: t("tabgroup.examples.noDefault"),
          components: (
            <TabGroup
              itemList={basicTabs}
              codeActive="best"
              removeDefaultStyle
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation
        state="inProgress"
        title={t("tabgroup.title")}
        propTypesList={propTypesList}
        componentList={componentList}
        propTypesTitle={t("documentation.propTypes.title")}
        propTypesNameLabel={t("documentation.propTypes.name")}
        propTypesDescriptionLabel={t("documentation.propTypes.description")}
        propTypesTypeLabel={t("documentation.propTypes.type")}
        propTypesRequiredLabel={t("documentation.propTypes.required")}
        propTypesYes={t("documentation.propTypes.yes")}
        propTypesNo={t("documentation.propTypes.no")}
        tabBasicInfoLabel={t("documentation.tabs.basicInfo")}
        tabExamplesLabel={t("documentation.tabs.examples")}
        tabUsageLabel={t("documentation.tabs.usage")}
        tabPropTypesLabel={t("documentation.tabs.propTypes")}
        darkMode={darkMode}
      />
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { TabGroupDoc };
export default TabGroupDoc;
//@@viewOff:exports
