import React from "react";

const componentMap: { [key: string]: React.LazyExoticComponent<React.FC> } = {
  //Routes
  BasicComponents: React.lazy(() => import("../BasicComponents")),
  Utilities: React.lazy(() => import("../Utilities")),
  Contributors: React.lazy(() => import("../Contributions")),
  AboutApplication: React.lazy(() => import("../AboutApplication")),

  //Components
  SideBar: React.lazy(
    () => import("../../documentation/basic-components/SideBarDoc"),
  ),
  Pending: React.lazy(
    () => import("../../documentation/basic-components/PendingDoc"),
  ),
  Icon: React.lazy(
    () => import("../../documentation/basic-components/IconDoc"),
  ),
  Button: React.lazy(
    () => import("../../documentation/basic-components/ButtonDoc"),
  ),
  Navbar: React.lazy(
    () => import("../../documentation/basic-components/NavbarDoc"),
  ),
  Badge: React.lazy(
    () => import("../../documentation/basic-components/BadgeDoc"),
  ),
  Block: React.lazy(
    () => import("../../documentation/basic-components/BlockDoc"),
  ),
  Number: React.lazy(
    () => import("../../documentation/basic-components/NumberDoc"),
  ),
  Input: React.lazy(
    () => import("../../documentation/basic-components/InputDoc"),
  ),
  ProfileCard: React.lazy(
    () => import("../../documentation/basic-components/ProfileCardDoc"),
  ),
  ThemeToggle: React.lazy(
    () => import("../../documentation/basic-components/ThemeToggleDoc"),
  ),
  InfoGroup: React.lazy(
    () => import("../../documentation/basic-components/InfoGroupDoc"),
  ),
  TabGroup: React.lazy(
    () => import("../../documentation/basic-components/TabGroupDoc"),
  ),
  Checkbox: React.lazy(
    () => import("../../documentation/basic-components/CheckboxDoc"),
  ),

  //Utilities
  CopyToClipboard: React.lazy(
    () => import("../../documentation/utilities/CopyToClipboardDoc"),
  ),
  GetMostFrequentValue: React.lazy(
    () => import("../../documentation/utilities/GetMostFrequentValueDoc"),
  ),
};

export { componentMap };
export default componentMap;
