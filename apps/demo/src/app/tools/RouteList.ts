import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { getComponentList } from "./ComponentList";

export const getRouteList = (t: (key: string) => string): SideBarItem[] => [
  {
    title: t("sidebar.routes.documentation"),
    icon: "mdi-home",
    defaultExpandedItem: true,
    key: "Documentation",
    itemList: getComponentList(t),
  },
  { title: t("sidebar.routes.profile"), icon: "mdi-account", key: "Profile" },
  { title: t("sidebar.routes.contributors"), icon: "mdi-cog", key: "Contributors" },
  { title: t("sidebar.routes.aboutApplication"), icon: "mdi-cog", key: "AboutApplication" },
];
