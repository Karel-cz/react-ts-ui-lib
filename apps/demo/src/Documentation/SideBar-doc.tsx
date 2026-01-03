//@@viewOn:imports
import { Documentation, SideBar as UiSideBar, SideBarTypeScheme } from "@react-ts-ui-lib/ui";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
//@@viewOff:imports

//@@viewOn:constants
const TITLE = "SideBar Component";
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const SideBarDoc = () => {
  //@@viewOn:private
  const propTypesList = Object.values(SideBarTypeScheme);

  const items: SideBarItem[] = [
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    {
      title: "Settings",
      icon: "mdi-cog",
      itemList: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Security", icon: "mdi-shield-lock" },
      ],
    },
  ];

  const componentList = [
    {
      category: "Basic",
      itemList: [
        { label: "default", components: <UiSideBar itemList={items} /> },
        { label: "light", components: <UiSideBar itemList={items} darkMode={false} /> },
      ],
    },
    {
      category: "Styling",
      itemList: [
        { label: "raw", components: <UiSideBar itemList={items} removeDefaultStyle /> },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation title={TITLE} propTypesList={propTypesList} componentList={componentList} />
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { SideBarDoc as SideBar };
export default SideBarDoc;
//@@viewOff:exports
