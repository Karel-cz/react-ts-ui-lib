import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { getComponentList } from "./ComponentList";
import { getUtilsList } from "./utilsList";

export const getRouteList = (t: (key: string) => string): SideBarItem[] => [
  ...getComponentList(t),
  {
    title: t("sidebar.routes.table"),
    icon: "mdi-table-large",
    iconColor: "info",
    defaultExpandedItem: false,
    key: "Table",
  },
  {
    title: t("sidebar.routes.utilities"),
    icon: "mdi-wrench",
    iconColor: "cyan",
    defaultExpandedItem: false,
    key: "Utilities",
    itemList: getUtilsList(t),
  },
  { title: t("sidebar.routes.profile"), icon: "mdi-account", key: "Profile" },
  {
    title: t("sidebar.routes.contributors"),
    icon: "mdi-account-group",
    key: "Contributors",
  },
  {
    title: t("sidebar.routes.aboutApplication"),
    icon: "mdi-information-outline",
    iconColor: "info",
    key: "AboutApplication",
  },
];
