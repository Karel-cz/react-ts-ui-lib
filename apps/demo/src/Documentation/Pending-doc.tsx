//@@viewOn:imports
import React from "react";
import { Documentation, Pending as UiPending, PendingTypeScheme } from "@react-ts-ui-lib/ui";
//@@viewOff:imports

//@@viewOn:constants
const TITLE = "Pending Component";
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const PendingDoc = () => {
  //@@viewOn:private
  const propTypesList = Object.values(PendingTypeScheme);

  const componentList = [
    {
      category: "Type",
      itemList: [
        { label: "circular", components: <UiPending type="circular" /> },
        { label: "horizontal", components: <UiPending type="horizontal" /> },
      ],
    },
    {
      category: "Size",
      itemList: [
        { label: "12px", components: <UiPending size={12} /> },
        { label: "24px", components: <UiPending size={24} /> },
        { label: "36px", components: <UiPending size={36} /> },
      ],
    },
    {
      category: "Color Scheme",
      itemList: [
        { label: "primary", components: <UiPending colorScheme={"primary"} size={36} /> },
        { label: "warning", components: <UiPending colorScheme={"warning"}  size={36}/> },
        { label: "info", components: <UiPending colorScheme={"info"}  size={36}/> },
        { label: "danger", components: <UiPending colorScheme={"danger"} size={36}/> },
        { label: "success", components: <UiPending colorScheme={"success"} size={36}/> },
      ],
    },
    {
      category: "Dark mode",
      itemList: [
        { label: "dark", components: <UiPending darkMode /> },
        { label: "light", components: <UiPending darkMode={false} /> },
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
export { PendingDoc as Pending };
export default PendingDoc;
//@@viewOff:exports
