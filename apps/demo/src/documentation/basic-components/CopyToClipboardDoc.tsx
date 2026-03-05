//!#Imports: start
import {
  Documentation,
  COPY_TO_CLIPBOARD_PROP_NAMES,
  CopyToClipboard,
} from "@react-ts-ui-lib/ui";
import { copyToClipboard } from "@react-ts-ui-lib/utilities";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
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

const COPY_TO_CLIPBOARD_EXAMPLE_CODE = `<CopyToClipboard
  text="Text to copy"
  onCopy={copyToClipboard}
  backgroundColorScheme="background"
/>`;

const CopyToClipboardDoc = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations(
    "copyToClipboard",
    COPY_TO_CLIPBOARD_PROP_NAMES,
    t,
  );

  const componentList = [
    {
      category: t("copyToClipboard.categories.basic"),
      itemList: [
        {
          label: t("copyToClipboard.examples.default"),
          components: (
            <CopyToClipboard
              text="Text to copy"
              onCopy={copyToClipboard}
              label={t("copyToClipboard.examples.copyLabel")}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("copyToClipboard.examples.customLabel"),
          components: (
            <CopyToClipboard
              text="Hello, World!"
              onCopy={copyToClipboard}
              label="Copy text"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("copyToClipboard.categories.styling"),
      itemList: [
        {
          label: t("copyToClipboard.examples.light"),
          components: (
            <CopyToClipboard
              text="Light mode"
              onCopy={copyToClipboard}
              label="Copy"
              darkMode={false}
            />
          ),
        },
        {
          label: t("copyToClipboard.examples.noDefault"),
          components: (
            <CopyToClipboard
              text="No default style"
              onCopy={copyToClipboard}
              label="Copy"
              darkMode={darkMode}
              backgroundColorScheme={null}
            />
          ),
        },
        {
          label: t("copyToClipboard.examples.iconOnly"),
          components: (
            <CopyToClipboard
              text="Icon only"
              onCopy={copyToClipboard}
              label=""
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("copyToClipboard.categories.tooltip"),
      itemList: [
        {
          label: t("copyToClipboard.examples.withTooltip"),
          components: (
            <CopyToClipboard
              text="With tooltip"
              onCopy={copyToClipboard}
              label="Hover me"
              darkMode={darkMode}
              tooltip="Click to copy this text"
            />
          ),
        },
      ],
    },
  ];

  const pageTitle = t("copyToClipboard.title");
  const description = t("copyToClipboard.basicInfo.description");

  return (
    <div>
      <DocSeo title={pageTitle} description={description} />
      <Documentation
        state="inProgress"
        title={pageTitle}
        basicInfo={{
          description,
          exampleCode: COPY_TO_CLIPBOARD_EXAMPLE_CODE,
          preview: (
            <CopyToClipboard
              text="Text to copy"
              onCopy={copyToClipboard}
              label={t("copyToClipboard.examples.copyLabel")}
              darkMode={darkMode}
            />
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
};

export default CopyToClipboardDoc;
