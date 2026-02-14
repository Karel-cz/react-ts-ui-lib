import type { SideBarItem } from "@react-ts-ui-lib/ui";

export const getComponentList = (t: (key: string) => string): SideBarItem[] => [
  {
    title: t("sidebar.componentCategories.basic"),
    key: "Basic",
    icon: "mdi-puzzle-outline",
    iconColor: "primary",
    defaultExpandedItem: true,
    itemList: [
      { title: t("sidebar.components.button"), icon: "mdi-button-cursor", iconColor: "primary", key: "Button" },
      { title: t("sidebar.components.buttonGroup"), icon: "mdi-format-list-group", iconColor: "primary", key: "ButtonGroup" },
      { title: t("sidebar.components.icon"), icon: "mdi-alpha-i-circle-outline", iconColor: "primary", key: "Icon" },
      { title: t("sidebar.components.pending"), icon: "mdi-loading", iconColor: "primary", key: "Pending" },
      { title: t("sidebar.components.badge"), icon: "mdi-label", iconColor: "primary", key: "Badge" },
      { title: t("sidebar.components.number"), icon: "mdi-numeric", iconColor: "primary", key: "Number" },
      { title: t("sidebar.components.label"), icon: "mdi-format-title", iconColor: "primary", key: "Label" },
      { title: t("sidebar.components.themeToggle"), icon: "mdi-theme-light-dark", iconColor: "primary", key: "ThemeToggle" },
      { title: t("sidebar.components.copyToClipboard"), icon: "mdi-content-copy", iconColor: "primary", key: "CopyToClipboardComponent" },
      { title: t("sidebar.components.infogroup"), icon: "mdi-information-outline", iconColor: "primary", key: "InfoGroup" },
      { title: t("sidebar.components.profileCard"), icon: "mdi-account-card", iconColor: "primary", key: "ProfileCard" },
      { title: t("sidebar.components.popover"), icon: "mdi-tooltip-outline", iconColor: "primary", key: "Popover" },
    ],
  },
  {
    title: t("sidebar.componentCategories.form"),
    key: "Form",
    icon: "mdi-form-select",
    iconColor: "teal",
    defaultExpandedItem: false,
    itemList: [
      { title: t("sidebar.components.input"), icon: "mdi-text-box", iconColor: "teal", key: "Input" },
      { title: t("sidebar.components.checkbox"), icon: "mdi-checkbox-marked", iconColor: "teal", key: "Checkbox" },
      { title: t("sidebar.components.date"), icon: "mdi-calendar", iconColor: "teal", key: "Date" },
      { title: t("sidebar.components.select"), icon: "mdi-format-list-bulleted", iconColor: "teal", key: "Select" },
      { title: t("sidebar.components.radios"), icon: "mdi-radiobox-marked", iconColor: "teal", key: "Radios" },
    ],
  },
  {
    title: t("sidebar.componentCategories.layoutStructure"),
    key: "LayoutStructure",
    icon: "mdi-page-layout-sidebar-left",
    iconColor: "cyan",
    defaultExpandedItem: false,
    itemList: [
      { title: t("sidebar.components.navbar"), icon: "mdi-menu", iconColor: "cyan", key: "Navbar" },
      { title: t("sidebar.components.sidebar"), icon: "mdi-menu-close", iconColor: "cyan", key: "SideBar" },
      { title: t("sidebar.components.tabgroup"), icon: "mdi-tab", iconColor: "cyan", key: "TabGroup" },
      { title: t("sidebar.components.block"), icon: "mdi-view-dashboard", iconColor: "cyan", key: "Block" },
    ],
  },
];
