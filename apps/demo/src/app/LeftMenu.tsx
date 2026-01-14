//@@viewOn:imports
import React from "react";
import { SideBar } from "@react-ts-ui-lib/ui";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { getRouteList } from "../app/tools/RouteList.ts";
import { useTranslation } from "../i18n/useTranslation";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
type LeftMenuPropTypes = {
  setSelectedItem: React.Dispatch<React.SetStateAction<SideBarItem | null>>;
  darkMode?: boolean;
};
//@@viewOff:propTypes

const LeftMenu = ({ setSelectedItem, darkMode }: LeftMenuPropTypes) => {
  //@@viewOn:private
  const { t } = useTranslation();
  const routeList = getRouteList(t);
  
  const handleItemClick = (item: SideBarItem) => {
    setSelectedItem(item);
  };
  //@@viewOff:private

  //@@viewOn:render
  return (
    <SideBar
      itemList={routeList}
      onItemClick={handleItemClick}
      darkMode={darkMode}
    />
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { LeftMenu };
export default LeftMenu;
//@@viewOff:exports
