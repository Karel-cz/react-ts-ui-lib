//@@viewOn:imports
import { useState } from "react";
import { Documentation, NAVBAR_PROP_NAMES, Navbar as UiNavbar, Icon, Button } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { getPropsWithTranslations } from "../i18n/getPropsWithTranslations";
import { useTheme } from "../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:component
const NavbarDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("navbar", NAVBAR_PROP_NAMES, t);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const commonRight = (
    <>
      <Icon icon="mdi-bell" />
      <Icon icon="mdi-account" />
    </>
  );

  const componentList = [
    {
      category: t("navbar.categories.layout"),
      itemList: [
        {
          label: t("navbar.examples.logoString"),
          components: <UiNavbar logo="LOGO" rightContent={commonRight} darkMode={darkMode} />,
        },
        {
          label: t("navbar.examples.customLogo"),
          components: (
            <UiNavbar
              logo={<span style={{ fontWeight: 700 }}>MyApp</span>}
              centerContent={<Button label={t("navbar.examples.center")} />}
              rightContent={commonRight}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("navbar.categories.colorScheme"),
      itemList: [
        { label: t("navbar.examples.background"), components: <UiNavbar colorScheme="background" darkMode={darkMode} /> },
        { label: t("navbar.examples.surface"), components: <UiNavbar colorScheme="surface" darkMode={darkMode} /> },
      ],
    },
    {
      category: t("navbar.categories.darkMode"),
      itemList: [
        { label: t("navbar.examples.dark"), components: <UiNavbar darkMode /> },
        { label: t("navbar.examples.light"), components: <UiNavbar darkMode={false} /> },
      ],
    },
    {
      category: t("navbar.categories.styling"),
      itemList: [
        { label: t("navbar.examples.raw"), components: <UiNavbar removeDefaultStyle darkMode={darkMode} /> },
      ],
    },
    {
      category: t("navbar.categories.sticky"),
      itemList: [
        { 
          label: t("navbar.examples.sticky"), 
          components: (
            <div style={{ height: 200, overflow: "auto", border: "1px solid #ccc", padding: 16 }}>
              <UiNavbar logo="Sticky Navbar" sticky darkMode={darkMode} />
              <div style={{ height: 400, padding: 16 }}>
                <p>Scroll down to see the navbar stick to the top</p>
                <p>Content here...</p>
                <p>More content...</p>
              </div>
            </div>
          ) 
        },
      ],
    },
    {
      category: t("navbar.categories.mobile"),
      itemList: [
        { 
          label: t("navbar.examples.hamburger"), 
          components: (
            <UiNavbar 
              logo="MyApp" 
              rightContent={commonRight}
              darkMode={darkMode}
              onHamburgerClick={() => setHamburgerOpen(!hamburgerOpen)}
              hamburgerOpen={hamburgerOpen}
              showHamburger={true}
            />
          ) 
        },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation
        title={t("navbar.title")}
        propTypesList={propTypesList}
        componentList={componentList}
        propTypesTitle={t("documentation.propTypes.title")}
        propTypesNameLabel={t("documentation.propTypes.name")}
        propTypesDescriptionLabel={t("documentation.propTypes.description")}
        propTypesTypeLabel={t("documentation.propTypes.type")}
        propTypesRequiredLabel={t("documentation.propTypes.required")}
        propTypesYes={t("documentation.propTypes.yes")}
        propTypesNo={t("documentation.propTypes.no")}
        darkMode={darkMode}
      />
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { NavbarDoc as Navbar };
export default NavbarDoc;
//@@viewOff:exports
