//@@viewOn:imports
import React, { Suspense } from "react";
import { Pending, type SideBarItem } from "@react-ts-ui-lib/ui";
import componentMap from "./tools/componentMap";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
type ContentProps = {
  selectedItem: SideBarItem | null;
};
//@@viewOff:propTypes

const Content = ({ selectedItem }: ContentProps) => {
  //@@viewOn:private
  if (!selectedItem) {
    return <div>Select a component from the menu.</div>;
  }

  const mapKey = selectedItem.key || selectedItem.title;
  const Component = componentMap[mapKey];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Suspense fallback={<Pending />}>
        {Component ? (
          <Component />
        ) : (
          <div>Component "{selectedItem.title}" not found in map</div>
        )}
      </Suspense>
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Content };
export default Content;
//@@viewOff:exports
