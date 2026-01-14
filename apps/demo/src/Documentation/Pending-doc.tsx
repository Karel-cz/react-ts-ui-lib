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
        { label: "xs", components: <UiPending size="xs" /> },
        { label: "sm", components: <UiPending size="sm" /> },
        { label: "md", components: <UiPending size="md" /> },
        { label: "lg", components: <UiPending size="lg" /> },
        { label: "xl", components: <UiPending size="xl" /> },
      ],
    },
    {
      category: "Color Scheme",
      itemList: [
        { label: "primary", components: <UiPending colorScheme={"primary"} size="lg" /> },
        { label: "warning", components: <UiPending colorScheme={"warning"} size="lg" /> },
        { label: "info", components: <UiPending colorScheme={"info"} size="lg" /> },
        { label: "danger", components: <UiPending colorScheme={"danger"} size="lg" /> },
        { label: "success", components: <UiPending colorScheme={"success"} size="lg" /> },
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
