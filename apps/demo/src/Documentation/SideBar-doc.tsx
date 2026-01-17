//@@viewOn:imports
import { Documentation, SIDEBAR_PROP_NAMES, SideBar as UiSideBar } from "@react-ts-ui-lib/ui";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { getPropsWithTranslations } from "../i18n/getPropsWithTranslations";
import { useTheme } from "../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:component
const SideBarDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("sidebar", SIDEBAR_PROP_NAMES, t);

  const items: SideBarItem[] = [
    { title: t("sidebar.examples.dashboard"), icon: "mdi-view-dashboard" },
    {
      title: t("sidebar.examples.settings"),
      icon: "mdi-cog",
      itemList: [
        { title: t("sidebar.examples.profile"), icon: "mdi-account" },
        { title: t("sidebar.examples.security"), icon: "mdi-shield-lock" },
      ],
    },
  ];

  const componentList = [
    {
      category: t("sidebar.categories.basic"),
      itemList: [
        { label: t("sidebar.examples.default"), components: <UiSideBar itemList={items} /> },
        { label: t("sidebar.examples.light"), components: <UiSideBar itemList={items} darkMode={false} /> },
      ],
    },
    {
      category: t("sidebar.categories.styling"),
      itemList: [
        { label: t("sidebar.examples.raw"), components: <UiSideBar itemList={items} removeDefaultStyle /> },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation
        title={t("sidebar.title")}
        propTypesList={propTypesList}
        componentList={componentList}
        propTypesTitle={t("documentation.propTypes.title")}
        propTypesNameLabel={t("documentation.propTypes.name")}
        propTypesDescriptionLabel={t("documentation.propTypes.description")}
        propTypesTypeLabel={t("documentation.propTypes.type")}
        propTypesRequiredLabel={t("documentation.propTypes.required")}
        propTypesYes={t("documentation.propTypes.yes")}
        propTypesNo={t("documentation.propTypes.no")}
        darkMode={darkMode}
      />
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { SideBarDoc as SideBar };
export default SideBarDoc;
//@@viewOff:exports
