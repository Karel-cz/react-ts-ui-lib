//@@viewOn:imports
import { useState, useMemo, useEffect } from "react";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import type { SideBarItem } from "@react-ts-ui-lib/ui";
import { getRouteList } from "./tools/routeList";
import { Navbar, Button, getColorScheme } from "@react-ts-ui-lib/ui";
import { useTheme } from "./context/themeContext";
import { useLanguage } from "./context/languageContext";
import { useTranslation } from "../i18n/useTranslation";
import RegisterModal from "./RegisterModal";
import { storage } from "@react-ts-ui-lib/utilities";
import { useAuth } from "./context/AuthContext";
import GoogleUserChip from "./GoogleUserChip";
//@@viewOff:imports

//@@viewOff:imports

//@@viewOn:constants

const Logo = ({ isMobile }: { isMobile?: boolean }) => (
  <img 
    src={isMobile ? "/images/logo-icon.png" : "/images/logo2.png"}
    alt="Logo" 
    style={{
      width: "auto",
      height: isMobile ? 40 : 52,
      objectFit: "contain",
    }}
  />
);
const SUNNY = "mdi-white-balance-sunny";
const MOON = "mdi-moon-waxing-crescent";

const LANGUAGE_MAP: Record<string, string> = {
  en: "EN",
  cz: "CZ",
};

const STORAGE_KEY_DARK_MODE = "app-dark-mode";
//@@viewOff:constants

//@@viewOn:css
const getThemeStyles = (darkMode: boolean): React.CSSProperties => {
  const backgroundScheme = getColorScheme("background", darkMode);
  const textScheme = getColorScheme("text", darkMode);

  return {
    backgroundColor: backgroundScheme.color,
    color: textScheme.color,
    transition: "background-color 0.2s ease, color 0.2s ease",
  };
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
  const { user, signOut, loading } = useAuth();
  const routeList = useMemo(() => getRouteList(t), [t]);
  const [selectedItem, setSelectedItem] = useState<SideBarItem | null>(() =>
    routeList.length > 0 ? routeList[0] : null,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    storage.set(STORAGE_KEY_DARK_MODE, darkMode);
  }, [darkMode]);

  useEffect(() => {
    const backgroundScheme = getColorScheme("background", darkMode);
    document.body.style.backgroundColor = backgroundScheme.color;
    document.body.style.color = backgroundScheme.textColor;
    document.documentElement.style.backgroundColor = backgroundScheme.color;
    document.documentElement.style.color = backgroundScheme.textColor;

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.documentElement.style.backgroundColor = "";
      document.documentElement.style.color = "";
    };
  }, [darkMode]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const RightContent = () => {
    return (
      <>
      {user &&
       <GoogleUserChip user={user} showDetails={!isMobile} />}
        <Button
          size="sm"
          icon={!darkMode ? SUNNY : MOON}
          onClick={() => setDarkMode(!darkMode)}
          modern={true}
          
        />
        <Button
          size="sm"
          onClick={() => setLanguage(language === "en" ? "cz" : "en")}
          modern={true}
        >
          {LANGUAGE_MAP[language as keyof typeof LANGUAGE_MAP]}
        </Button>
        {user ? (
          <>
           
            <Button
              size="sm"
              onClick={signOut}
              modern={true}
              icon="mdi-logout"
              colorScheme="indigo"
            >
              {!isMobile && t("auth.signOut")}
            </Button>
          </>
        ) : (
          <Button
            size="sm"
            onClick={() => setIsModalOpen(true)}
            modern={true}
            colorScheme="indigo"
            disabled={loading}
          >
            {t("auth.signIn")}
          </Button>
        )}
      </>
    );
  };

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSetSelectedItem: React.Dispatch<
    React.SetStateAction<SideBarItem | null>
  > = (item) => {
    const actualItem = typeof item === "function" ? item(selectedItem) : item;
    setSelectedItem(actualItem);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };
  //@@viewOff:private

  //@@viewOn:render
  return (<>
   <div
      style={{
        ...getThemeStyles(darkMode),
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar
        sticky={true}
        logo={<Logo isMobile={isMobile} />}
        darkMode={darkMode}
        rightContent={RightContent()}
        onHamburgerClick={handleHamburgerClick}
        hamburgerOpen={isMobileMenuOpen}
      />
      <div style={{ display: "flex", flex: 1 }}>
        <LeftMenu
          setSelectedItem={handleSetSelectedItem}
          selectedItem={selectedItem}
          darkMode={darkMode}
          mobileMode={isMobile}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navbarHeight={80}
        />
        <div
          style={{
            flex: 1,
            padding: "16px",
            overflow: "auto",
            maxWidth: "100%",
          }}
        >
          <Content selectedItem={selectedItem} />
        </div>
      </div>
    </div>
    <RegisterModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
   
  );
  //@@viewOff:render
}

//@@viewOn:exports
export { App };
export default App;
//@@viewOff:exports
