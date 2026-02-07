//@@viewOn:imports
import {
  Documentation,
  POPOVER_PROP_NAMES,
  Popover,
  Button,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
import { useRef, useState } from "react";
//@@viewOff:imports

//@@viewOn:component
const PopoverDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations(
    "popover",
    POPOVER_PROP_NAMES,
    t,
  );

  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const triggerRef2 = useRef<HTMLDivElement>(null);
  const [open2, setOpen2] = useState(false);

  const componentList = [
    {
      category: t("popover.categories.basic"),
      itemList: [
        {
          label: t("popover.examples.basic"),
          components: (
            <>
              <div ref={triggerRef} style={{ display: "inline-block" }}>
                <Button
                  darkMode={darkMode}
                  onClick={() => setOpen(true)}
                >
                  {t("popover.examples.trigger")}
                </Button>
              </div>
              <Popover
                triggerRef={triggerRef}
                open={open}
                onOpenChange={setOpen}
                content={t("popover.examples.contentText")}
                darkMode={darkMode}
              />
            </>
          ),
        },
      ],
    },
    {
      category: t("popover.categories.styling"),
      itemList: [
        {
          label: t("popover.examples.noDefault"),
          components: (
            <>
              <div ref={triggerRef2} style={{ display: "inline-block" }}>
                <Button
                  darkMode={darkMode}
                  onClick={() => setOpen2(true)}
                >
                  {t("popover.examples.trigger")}
                </Button>
              </div>
              <Popover
                triggerRef={triggerRef2}
                open={open2}
                onOpenChange={setOpen2}
                content={t("popover.examples.contentText")}
                removeDefaultStyle
                darkMode={darkMode}
              />
            </>
          ),
        },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation
        state="draft"
        title={t("popover.title")}
        propTypesList={propTypesList}
        componentList={componentList}
        propTypesTitle={t("documentation.propTypes.title")}
        propTypesNameLabel={t("documentation.propTypes.name")}
        propTypesDescriptionLabel={t("documentation.propTypes.description")}
        propTypesTypeLabel={t("documentation.propTypes.type")}
        propTypesRequiredLabel={t("documentation.propTypes.required")}
        propTypesYes={t("documentation.propTypes.yes")}
        propTypesNo={t("documentation.propTypes.no")}
        tabBasicInfoLabel={t("documentation.tabs.basicInfo")}
        tabExamplesLabel={t("documentation.tabs.examples")}
        tabUsageLabel={t("documentation.tabs.usage")}
        tabPropTypesLabel={t("documentation.tabs.propTypes")}
        darkMode={darkMode}
      />
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { PopoverDoc };
export default PopoverDoc;
//@@viewOff:exports
