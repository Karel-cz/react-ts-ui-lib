//@@viewOn:imports
import { useState, useMemo } from "react";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { getRouteList } from "./tools/RouteList";
import { Navbar, Button } from "@react-ts-ui-lib/ui";
import { useTheme } from "./context/ThemeContext";
import { useLanguage } from "./context/LanguageContext";
import { useTranslation } from "../i18n/useTranslation";

//@@viewOff:imports

//@@viewOn:constants
const LOGO = "React TypeScript Lib";
const SUNNY = "mdi-white-balance-sunny";
const MOON = "mdi-moon-waxing-crescent";

const LANGUAGE_MAP: Record<string, string> = {
  en: "EN",
  cz: "CZ",
};
//@@viewOff:constants

//@@viewOn:css
const getThemeStyles = (darkMode: boolean): React.CSSProperties => {
  if (darkMode) {
    return {
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      transition: "background-color 0.2s ease, color 0.2s ease",
    };
  } else {
    return {
      backgroundColor: "#ffffff",
      color: "#24292f",
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
  const { t } = useTranslation();
  const routeList = useMemo(() => getRouteList(t), [t]);
  const [selectedItem, setSelectedItem] = useState<SideBarItem | null>(() => 
    routeList.length > 0 ? routeList[0] : null
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
      <Navbar sticky={true} logo={LOGO} darkMode={darkMode} rightContent={RightContent()} />
      <div style={{ display: "flex", flex: 1 }}>
        <LeftMenu setSelectedItem={setSelectedItem} selectedItem={selectedItem} darkMode={darkMode} />
        <div style={{ flex: 1, padding: "32px", overflow: "auto", maxWidth: "100%" }}>
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
