import React from "react";

const componentMap: { [key: string]: React.LazyExoticComponent<React.FC> } = {
  // Overview pages (category roots)
  basicComponents: React.lazy(() => import("../BasicComponents")),
  formComponents: React.lazy(() => import("../FormComponents")),
  layoutStructureComponents: React.lazy(() => import("../LayoutStructureComponents")),
  utilities: React.lazy(() => import("../Utilities")),
  contributors: React.lazy(() => import("../Contributions")),
  aboutApplication: React.lazy(() => import("../AboutApplication")),
  table: React.lazy(() => import("../Table")),

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
  ButtonGroup: React.lazy(
    () => import("../../documentation/basic-components/ButtonGroupDoc"),
  ),
  Navbar: React.lazy(
    () => import("../../documentation/basic-components/NavbarDoc"),
  ),
  Badge: React.lazy(
    () => import("../../documentation/basic-components/BadgeDoc"),
  ),
  Breadcrumb: React.lazy(
    () => import("../../documentation/basic-components/BreadcrumbDoc"),
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
  Date: React.lazy(
    () => import("../../documentation/basic-components/DateDoc"),
  ),
  Select: React.lazy(
    () => import("../../documentation/basic-components/SelectDoc"),
  ),
  Radios: React.lazy(
    () => import("../../documentation/basic-components/RadiosDoc"),
  ),
  Label: React.lazy(
    () => import("../../documentation/basic-components/LabelDoc"),
  ),
  Popover: React.lazy(
    () => import("../../documentation/basic-components/PopoverDoc"),
  ),
  CopyToClipboardComponent: React.lazy(
    () => import("../../documentation/basic-components/CopyToClipboardDoc.tsx"),
  ),

  //Utilities
  CopyToClipboard: React.lazy(
    () => import("../../documentation/utilities/CopyToClipboardDoc"),
  ),
  GetMostFrequentValue: React.lazy(
    () => import("../../documentation/utilities/GetMostFrequentValueDoc"),
  ),
  GeneratePassword: React.lazy(
    () => import("../../documentation/utilities/GeneratePasswordDoc"),
  ),
  ParseQueryString: React.lazy(
    () => import("../../documentation/utilities/ParseQueryStringDoc"),
  ),
  GenerateRandomString: React.lazy(
    () => import("../../documentation/utilities/GenerateRandomStringDoc.tsx"),
  ),
  ValidateEmail: React.lazy(
    () => import("../../documentation/utilities/ValidateEmailDoc.tsx"),
  ),
  ValidateJson: React.lazy(
    () => import("../../documentation/utilities/ValidateJsonDoc.tsx"),
  ),
  FromCamelCase: React.lazy(
    () => import("../../documentation/utilities/FromCamelCaseDoc"),
  ),
};

export { componentMap };
export default componentMap;
