//@@viewOn:imports
import { Documentation, NAVBAR_PROP_NAMES, Navbar as UiNavbar, Icon, Button } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { getPropsWithTranslations } from "../i18n/getPropsWithTranslations";
//@@viewOff:imports

//@@viewOn:component
const NavbarDoc = () => {
  //@@viewOn:private
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("navbar", NAVBAR_PROP_NAMES, t);

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
          components: <UiNavbar logo="LOGO" rightContent={commonRight} />,
        },
        {
          label: t("navbar.examples.customLogo"),
          components: (
            <UiNavbar
              logo={<span style={{ fontWeight: 700 }}>MyApp</span>}
              centerContent={<Button label={t("navbar.examples.center")} />}
              rightContent={commonRight}
            />
          ),
        },
      ],
    },
    {
      category: t("navbar.categories.colorScheme"),
      itemList: [
        { label: t("navbar.examples.background"), components: <UiNavbar colorScheme="background" /> },
        { label: t("navbar.examples.surface"), components: <UiNavbar colorScheme="surface" /> },
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
        { label: t("navbar.examples.raw"), components: <UiNavbar removeDefaultStyle /> },
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
        propTypesRequiredLabel={t("documentation.propTypes.required")}
        propTypesYes={t("documentation.propTypes.yes")}
        propTypesNo={t("documentation.propTypes.no")}
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
