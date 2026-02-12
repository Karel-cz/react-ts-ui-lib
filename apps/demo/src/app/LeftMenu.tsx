//@@viewOn:imports
import React, { useMemo } from "react";
import { SideBar } from "@react-ts-ui-lib/ui";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { getRouteList } from "../app/tools/RouteList";
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
  selectedItem: SideBarItem | null;
  darkMode?: boolean;
  mobileMode?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  navbarHeight?: number;
};
//@@viewOff:propTypes

const LeftMenu = ({
  setSelectedItem,
  selectedItem,
  darkMode,
  mobileMode,
  isOpen,
  onClose,
  navbarHeight,
}: LeftMenuPropTypes) => {
  //@@viewOn:private
  const { t } = useTranslation();
  const routeList = useMemo(() => getRouteList(t), [t]);

  const handleItemClick = (item: SideBarItem) => {
    const cleanItem: SideBarItem = {
      title: item.title,
      icon: item.icon,
      key: item.key,
      onClick: item.onClick,
      hidden: item.hidden,
      defaultExpandedItem: item.defaultExpandedItem,
    };
    setSelectedItem(cleanItem);
  };
  //@@viewOff:private

  //@@viewOn:render
  return (
    <SideBar
      itemList={routeList}
      onItemClick={handleItemClick}
      darkMode={darkMode}
      selectedItem={selectedItem}
      mobileMode={mobileMode}
      isOpen={isOpen}
      onClose={onClose}
      navbarHeight={navbarHeight}
    />
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { LeftMenu };
export default LeftMenu;
//@@viewOff:exports
