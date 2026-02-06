import type { SideBarItem } from "@react-ts-ui-lib/ui";

export const getComponentList = (t: (key: string) => string): SideBarItem[] => [
  {
    title: t("sidebar.components.button"),
    icon: "mdi-button-cursor",
    key: "Button",
  },
  {
    title: t("sidebar.components.icon"),
    icon: "mdi-alpha-i-circle-outline",
    key: "Icon",
  },
  {
    title: t("sidebar.components.pending"),
    icon: "mdi-loading",
    key: "Pending",
  },
  {
    title: t("sidebar.components.sidebar"),
    icon: "mdi-menu-close",
    key: "SideBar",
  },
  { title: t("sidebar.components.navbar"), icon: "mdi-menu", key: "Navbar" },
  { title: t("sidebar.components.badge"), icon: "mdi-label", key: "Badge" },
  {
    title: t("sidebar.components.block"),
    icon: "mdi-view-dashboard",
    key: "Block",
  },
  { title: t("sidebar.components.number"), icon: "mdi-numeric", key: "Number" },
  { title: t("sidebar.components.input"), icon: "mdi-text-box", key: "Input" },
  {
    title: t("sidebar.components.profileCard"),
    icon: "mdi-account-card",
    key: "ProfileCard",
  },
  {
    title: t("sidebar.components.themeToggle"),
    icon: "mdi-theme-light-dark",
    key: "ThemeToggle",
  },
  {
    title: t("sidebar.components.infogroup"),
    icon: "mdi-information-outline",
    key: "InfoGroup",
  },
  {
    title: t("sidebar.components.tabgroup"),
    icon: "mdi-tab",
    key: "TabGroup",
  },
  {
    title: t("sidebar.components.checkbox"),
    icon: "mdi-checkbox-marked",
    key: "Checkbox",
  },
  {
    title: t("sidebar.components.date"),
    icon: "mdi-calendar",
    key: "Date",
  },
  {
    title: t("sidebar.components.select"),
    icon: "mdi-format-list-bulleted",
    key: "Select",
  },
  {
    title: t("sidebar.components.radios"),
    icon: "mdi-radiobox-marked",
    key: "Radios",
  },
  {
    title: t("sidebar.components.label"),
    icon: "mdi-format-title",
    key: "Label",
  },
  {
    title: t("sidebar.components.popover"),
    icon: "mdi-tooltip-outline",
    key: "Popover",
  },
];
