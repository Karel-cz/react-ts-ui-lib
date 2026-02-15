//@@viewOn:imports
import { Documentation, INFO_GROUP_PROP_NAMES, InfoGroup, Badge, Icon, Number } from "@react-ts-ui-lib/ui";
import type { InfoGroupItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

const INFO_GROUP_EXAMPLE_CODE = `<InfoGroup
  itemList={[
    { title: 'Name', subtitle: 'Jan' },
    { title: 'Email', subtitle: 'jan@example.com' }
  ]}
    titleAlign="center"
    subtitleAlign="right"
  darkMode={darkMode}
/>`;

//@@viewOn:component
const InfoGroupDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("infogroup", INFO_GROUP_PROP_NAMES, t);

  const basicItems: InfoGroupItem[] = [
    { title: t("infogroup.examples.item1Title"), subtitle: t("infogroup.examples.item1Subtitle") },
    { title: t("infogroup.examples.item2Title"), subtitle: t("infogroup.examples.item2Subtitle") },
    { title: t("infogroup.examples.item3Title"), subtitle: t("infogroup.examples.item3Subtitle") },
  ];

  const itemsWithIcons: InfoGroupItem[] = [
    { title: t("infogroup.examples.item1Title"), subtitle: t("infogroup.examples.item1Subtitle"), icon: "mdi-check-circle" },
    { title: t("infogroup.examples.item2Title"), subtitle: t("infogroup.examples.item2Subtitle"), icon: "mdi-information" },
    { title: t("infogroup.examples.item3Title"), subtitle: t("infogroup.examples.item3Subtitle"), icon: "mdi-alert" },
  ];

  const itemsWithComponentSubtitles: InfoGroupItem[] = [
    {
      title: "Active Users",
      subtitle: (
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Badge label="Online" colorScheme="success" size="sm" darkMode={darkMode} />
          <Number value={1247} colorScheme="primary" darkMode={darkMode} />
        </span>
      ),
      icon: "mdi-account-group",
    },
    {
      title: "System Status",
      subtitle: (
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Icon icon="mdi-check-circle" color="#10b981" size="sm" darkMode={darkMode} />
          <span>All systems operational</span>
        </span>
      ),
      icon: "mdi-server",
    },
    {
      title: "Notifications",
      subtitle: (
        <Badge label="3 new" colorScheme="danger" size="sm" darkMode={darkMode} />
      ),
      icon: "mdi-bell",
    },
  ];

  const itemsWithMixedContent: InfoGroupItem[] = [
    {
      title: <strong>Revenue</strong>,
      subtitle: (
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Number value={45230} colorScheme="success" darkMode={darkMode} />
          <Badge label="+12%" colorScheme="success" size="xs" darkMode={darkMode} />
        </span>
      ),
      icon: "mdi-trending-up",
    },
    {
      title: "Tasks",
      subtitle: (
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>Completed:</span>
          <Number value={23} colorScheme="primary" darkMode={darkMode} />
          <span>/</span>
          <Number value={30} colorScheme="muted" darkMode={darkMode} />
        </span>
      ),
      icon: "mdi-checkbox-marked-circle",
    },
    {
      title: "Messages",
      subtitle: (
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Icon icon="mdi-email" color="#3b82f6" size="sm" darkMode={darkMode} />
          <Badge label="Unread" colorScheme="warning" size="sm" darkMode={darkMode} />
        </span>
      ),
      icon: "mdi-email-outline",
    },
  ];

  const componentList = [
    {
      category: t("infogroup.categories.basic"),
      itemList: [
        {
          label: t("infogroup.examples.default"),
          components: (
            <InfoGroup itemList={basicItems} darkMode={darkMode} />
          ),
        },
        {
          label: t("infogroup.examples.horizontal"),
          components: (
            <InfoGroup itemList={basicItems} direction="horizontal" darkMode={darkMode} />
          ),
        },
        {
          label: t("infogroup.examples.vertical"),
          components: (
            <InfoGroup itemList={basicItems} direction="vertical" darkMode={darkMode} />
          ),
        },
      ],
    },
    {
      category: t("infogroup.categories.itemDirections"),
      itemList: [
        {
          label: t("infogroup.examples.itemHorizontal"),
          components: (
            <InfoGroup itemList={basicItems} itemDirection="horizontal" darkMode={darkMode} />
          ),
        },
        {
          label: t("infogroup.examples.itemVertical"),
          components: (
            <InfoGroup itemList={basicItems} itemDirection="vertical" darkMode={darkMode} />
          ),
        },
      ],
    },
    {
      category: t("infogroup.categories.content"),
      itemList: [
        {
          label: t("infogroup.examples.withIcons"),
          components: (
            <InfoGroup itemList={itemsWithIcons} darkMode={darkMode} />
          ),
        },
        {
          label: t("infogroup.examples.withSubtitle"),
          components: (
            <InfoGroup itemList={basicItems} darkMode={darkMode} />
          ),
        },
        {
          label: t("infogroup.examples.withComponentSubtitles"),
          components: (
            <InfoGroup itemList={itemsWithComponentSubtitles} darkMode={darkMode} />
          ),
        },
        {
          label: t("infogroup.examples.mixedContent"),
          components: (
            <InfoGroup itemList={itemsWithMixedContent} darkMode={darkMode} />
          ),
        },
        {
          label: t("infogroup.examples.customContent"),
          components: (
            <InfoGroup
              itemList={[
                { title: 123, subtitle: "Number title" },
                { title: <strong>Bold Title</strong>, subtitle: "React component" },
                { title: "String title", subtitle: 456 },
              ]}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("infogroup.categories.styling"),
      itemList: [
        {
          label: t("infogroup.examples.noDefault"),
          components: (
            <InfoGroup itemList={basicItems} removeDefaultStyle darkMode={darkMode} />
          ),
        },
        {
          label: "Text Alignment",
          components: (
            <InfoGroup
              itemList={basicItems}
              itemDirection="vertical"
              titleAlign="center"
              subtitleAlign="right"
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
        state="nearlyReady"
        title={t("infogroup.title")}
        basicInfo={{
          description: t("infogroup.basicInfo.description"),
          exampleCode: INFO_GROUP_EXAMPLE_CODE,
          preview: (
            <InfoGroup
              itemList={basicItems}
              itemDirection="vertical"
              titleAlign ="center"
              subtitleAlign ="right"
              darkMode={darkMode}
            />
          ),
        }}
        basicInfoDescriptionHeader={t("documentation.basicInfo.descriptionHeader")}
        basicInfoPreviewHeader={t("documentation.basicInfo.previewHeader")}
        basicInfoCodeHeader={t("documentation.basicInfo.codeHeader")}
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
export { InfoGroupDoc };
export default InfoGroupDoc;
//@@viewOff:exports
