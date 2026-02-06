import type { SideBarItem } from "@react-ts-ui-lib/ui";

export const getUtilsList = (t: (key: string) => string): SideBarItem[] => [
  {
    title: t("sidebar.utilities.copyToClipboard"),
    icon: "mdi-content-copy",
    key: "CopyToClipboard",
  },
  {
    title: t("sidebar.utilities.getMostFrequentValue"),
    icon: "mdi-chart-bar",
    key: "GetMostFrequentValue",
  },
  {
    title: t("sidebar.utilities.generatePassword"),
    icon: "mdi-key-variant",
    key: "GeneratePassword",
  },
  {
    title: t("sidebar.utilities.parseQueryString"),
    icon: "mdi-link-variant",
    key: "ParseQueryString",
  },
  {
    title: t("sidebar.utilities.generateRandomString"),
    icon: "mdi-format-letter-case",
    key: "GenerateRandomString",
  },
  {
    title: t("sidebar.utilities.validateEmail"),
    icon: "mdi-email-check",
    key: "ValidateEmail",
  },
  {
    title: t("sidebar.utilities.validateJson"),
    icon: "mdi-code-json",
    key: "ValidateJson",
  },
];
