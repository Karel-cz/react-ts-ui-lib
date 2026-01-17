import React from "react";

const componentMap: { [key: string]: React.LazyExoticComponent<React.FC> } = {
  //Routes
  Contributors: React.lazy(() => import("../Contributions")),

  //Components
  SideBar: React.lazy(() => import("../../Documentation/SideBar-doc")),
  Pending: React.lazy(() => import("../../Documentation/Pending-doc")),
  Icon: React.lazy(() => import("../../Documentation/Icon-doc")),
  Button: React.lazy(() => import("../../Documentation/Button-doc")),
  Navbar: React.lazy(() => import("../../Documentation/Navbar-doc")),
  Badge: React.lazy(() => import("../../Documentation/Badge-doc")),
  Block: React.lazy(() => import("../../Documentation/Block-doc")),
};

export { componentMap };
export default componentMap;
