//!#Imports: start
import {
  Documentation,
  POPOVER_PROP_NAMES,
  Popover,
  Button,
  type RadiusToken,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
import { useRef, useState } from "react";
import DocSeo from "../../app/DocSeo";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
//!#propTypes: end

const POPOVER_EXAMPLE_CODE = `<Popover
  trigger={<Button label="Open" />}
  content={<div>Popover content</div>}
  darkMode={darkMode}
  borderRadius="md"
/>`;

const PopoverRadiusExample = ({
  label,
  borderRadius,
  darkMode,
}: {
  label: string;
  borderRadius: RadiusToken | number;
  darkMode: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div ref={ref} style={{ display: "inline-block" }}>
        <Button darkMode={darkMode} onClick={() => setOpen(true)}>
          {label}
        </Button>
      </div>
      <Popover
        triggerRef={ref}
        open={open}
        onOpenChange={setOpen}
        content={
          <div style={{ padding: 8 }}>{t("popover.examples.contentText")}</div>
        }
        darkMode={darkMode}
        borderRadius={borderRadius}
      />
    </>
  );
};

const PopoverDoc = () => {
  //!#visualComponent: start
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
    {
      category: t("popover.categories.borderRadius"),
      itemList: [
        {
          label: t("popover.examples.radiusNone"),
          components: <PopoverRadiusExample label={t("popover.examples.radiusNone")} borderRadius="none" darkMode={darkMode} />,
        },
        {
          label: t("popover.examples.radiusXs"),
          components: <PopoverRadiusExample label={t("popover.examples.radiusXs")} borderRadius="xs" darkMode={darkMode} />,
        },
        {
          label: t("popover.examples.radiusSm"),
          components: <PopoverRadiusExample label={t("popover.examples.radiusSm")} borderRadius="sm" darkMode={darkMode} />,
        },
        {
          label: t("popover.examples.radiusMd"),
          components: <PopoverRadiusExample label={t("popover.examples.radiusMd")} borderRadius="md" darkMode={darkMode} />,
        },
        {
          label: t("popover.examples.radiusLg"),
          components: <PopoverRadiusExample label={t("popover.examples.radiusLg")} borderRadius="lg" darkMode={darkMode} />,
        },
        {
          label: t("popover.examples.radiusFull"),
          components: <PopoverRadiusExample label={t("popover.examples.radiusFull")} borderRadius="full" darkMode={darkMode} />,
        },
        {
          label: "Custom (25px)",
          components: <PopoverRadiusExample label="25px" borderRadius={25} darkMode={darkMode} />,
        },
      ],
    },
  ];
  //!#visualComponent: end

  const pageTitle = t("popover.title");
  const description = t("popover.basicInfo.description");

  //!#render components: start
  return (
    <div>
      <DocSeo title={pageTitle} description={description} />
      <Documentation
        state="draft"
        title={pageTitle}
        basicInfo={{
          description,
          exampleCode: POPOVER_EXAMPLE_CODE,
          preview: (
            <>
              <div ref={triggerRef} style={{ display: "inline-block" }}>
                <Button
                  darkMode={darkMode}
                  label={t("popover.examples.trigger")}
                  onClick={() => setOpen(!open)}
                />
              </div>
              <Popover
                triggerRef={triggerRef}
                open={open}
                onOpenChange={setOpen}
                content={<div style={{ padding: 8 }}>{t("popover.examples.contentText")}</div>}
                darkMode={darkMode}
              />
            </>
          ),
        }}
        basicInfoDescriptionHeader={t("documentation.basicInfo.descriptionHeader")}
        basicInfoPreviewHeader={t("documentation.basicInfo.previewHeader")}
        basicInfoCodeHeader={t("documentation.basicInfo.codeHeader")}
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
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { PopoverDoc };
export default PopoverDoc;
//!#export: end
