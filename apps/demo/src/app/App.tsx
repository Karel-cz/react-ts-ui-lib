//@@viewOn:imports
import { useState } from "react";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
import routeList from "./tools/RouteList";
import { Navbar, Button } from "@react-ts-ui-lib/ui";
import { useTheme } from "./context/ThemeContext";
import { useLanguage } from "./context/LanguageContext";

//@@viewOff:imports

//@@viewOn:constants
const LOGO = "React TypeScript Lib";
const SUNNY = "mdi-white-balance-sunny";
const MOON = "mdi-moon-waxing-crescent";

const LANGUAGE_MAP = {
  en: "EN",
  cz: "CU",
};
//@@viewOff:constants

//@@viewOn:css
const getThemeStyles = (darkMode: boolean): React.CSSProperties => {
  if (darkMode) {
    return {
      backgroundColor: "#1b1d1fff",
      color: "#e6eef8",
      transition: "background-color 0.2s ease, color 0.2s ease",
    };
  } else {
    return {
      backgroundColor: "#f4f6f8",
      color: "#0b1220",
      transition: "background-color 0.2s ease, color 0.2s ease",
    };
  }
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

function App() {
  //@@viewOn:private
  const { darkMode, setDarkMode } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<SideBarItem | null>(
    routeList[0]
  );

  const RightContent = () => {
    return (
      <>
        <Button
        size="sm"
          icon={!darkMode ? SUNNY : MOON}
          onClick={() => setDarkMode(!darkMode)}
        />
        <Button  onClick={() => setLanguage(language === "en" ? "cz" : "en")}>
          {LANGUAGE_MAP[language as keyof typeof LANGUAGE_MAP]}
        </Button>
      </>
    );
  };
  return (
    <div
      style={{
        ...getThemeStyles(darkMode),
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar logo={LOGO} darkMode={darkMode} rightContent={RightContent()} />
      <div style={{ display: "flex", flex: 1 }}>
        <LeftMenu setSelectedItem={setSelectedItem} darkMode={darkMode} />
        <div style={{ flex: 1, padding: "20px", overflow: "auto" }}>
          <Content selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
  //@@viewOff:render
}

//@@viewOn:exports
export { App };
export default App;
//@@viewOff:exports
