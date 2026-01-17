import type { SideBarItem } from "@react-ts-ui-lib/ui";

export const getComponentList = (t: (key: string) => string): SideBarItem[] => [
  { title: t("sidebar.components.button"), icon: "mdi-button-cursor", key: "Button" },
  { title: t("sidebar.components.icon"), icon: "mdi-alpha-i-circle-outline", key: "Icon" },
  { title: t("sidebar.components.pending"), icon: "mdi-loading", key: "Pending" },
  { title: t("sidebar.components.sidebar"), icon: "mdi-menu-close", key: "SideBar" },
  { title: t("sidebar.components.navbar"), icon: "mdi-menu", key: "Navbar" },
  { title: t("sidebar.components.badge"), icon: "mdi-label", key: "Badge" },
  { title: t("sidebar.components.block"), icon: "mdi-view-dashboard", key: "Block" },
];
