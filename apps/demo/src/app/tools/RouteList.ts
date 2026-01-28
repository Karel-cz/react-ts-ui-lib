import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { getComponentList } from "./ComponentList";
import { getUtilsList } from "./UtilsList";

export const getRouteList = (t: (key: string) => string): SideBarItem[] => [
  {
    title: t("sidebar.routes.basicComponents"),
    icon: "mdi-home",
    defaultExpandedItem: true,
    key: "BasicComponents",
    itemList: getComponentList(t),
  },
  {
    title: t("sidebar.routes.utilities"),
    icon: "mdi-wrench",
    defaultExpandedItem: false,
    key: "Utilities",
    itemList: getUtilsList(t),
  },
  { title: t("sidebar.routes.profile"), icon: "mdi-account", key: "Profile" },
  {
    title: t("sidebar.routes.contributors"),
    icon: "mdi-cog",
    key: "Contributors",
  },
  {
    title: t("sidebar.routes.aboutApplication"),
    icon: "mdi-cog",
    key: "AboutApplication",
  },
];
