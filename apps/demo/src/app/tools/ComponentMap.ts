import React from "react";

const componentMap: { [key: string]: React.LazyExoticComponent<React.FC> } = {
  //Routes
  Documentation: React.lazy(() => import("../Documentation")),
  Contributors: React.lazy(() => import("../Contributions")),
  AboutApplication: React.lazy(() => import("../AboutApplication")),

  //Components
  SideBar: React.lazy(() => import("../../Documentation/SideBar-doc")),
  Pending: React.lazy(() => import("../../Documentation/Pending-doc")),
  Icon: React.lazy(() => import("../../Documentation/Icon-doc")),
  Button: React.lazy(() => import("../../Documentation/button-doc")),
  Navbar: React.lazy(() => import("../../Documentation/Navbar-doc")),
  Badge: React.lazy(() => import("../../Documentation/Badge-doc")),
  Block: React.lazy(() => import("../../Documentation/Block-doc")),
};

export { componentMap };
export default componentMap;
