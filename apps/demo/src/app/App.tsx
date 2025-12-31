//@@viewOn:imports
import { useState } from "react";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
import routeList from "./tools/RouteList";
import { Navbar, ThemeToggle, Button } from "@react-ts-ui-lib/ui";

//@@viewOff:imports

//@@viewOn:constants
const LOGO = "React TypeScript Ui Lib";
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

function App() {
  //@@viewOn:private
  const [selectedItem, setSelectedItem] = useState<SideBarItem | null>(
    routeList[0]
  );
  const [darkMode, setDarkMode] = useState(true);

  const _rightContent = (
    <Button
      icon={darkMode ? "mdi-white-balance-sunny" : "mdi-moon-waxing-crescent"}
      onClick={() => setDarkMode(!darkMode)}
    />
  );

  //@@viewOff:private

  //@@viewOn:render
  return (
    <>
      <Navbar logo={LOGO} rightContent={_rightContent} />

      <div style={{ display: "flex", minHeight: "100vh" }}>
        <LeftMenu setSelectedItem={setSelectedItem} />
        <div style={{ flex: 1, padding: "20px", overflow: "auto" }}>
          <Content selectedItem={selectedItem} />
        </div>
      </div>
    </>
  );
  //@@viewOff:render
}

//@@viewOn:exports
export { App };
export default App;
//@@viewOff:exports
