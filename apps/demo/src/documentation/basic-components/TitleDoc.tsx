//!#Imports: start
import { Documentation, TITLE_PROP_NAMES, Title } from "@react-ts-ui-lib/ui";
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

const TITLE_EXAMPLE_CODE = `<Title darkMode={darkMode}>
  Nadpis sekce
</Title>`;

const TitleDoc = () => {
  //!#visualComponent: start
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("title", TITLE_PROP_NAMES, t);

  const pageTitle = t("title.title");
  const description = t("title.basicInfo.description");

  const componentList = [
    {
      category: t("title.categories.basic"),
      itemList: [
        {
          label: t("title.examples.basic"),
          components: (
            <Title darkMode={darkMode}>{t("title.examples.sampleText")}</Title>
          ),
        },
        {
          label: t("title.examples.withTooltip"),
          components: (
            <Title darkMode={darkMode} tooltip={t("title.examples.tooltipContent")}>
              {t("title.examples.sampleText")}
            </Title>
          ),
        },
      ],
    },
    {
      category: t("title.categories.sizes"),
      itemList: [
        { label: "xxs", components: <Title size="xxs" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "xs", components: <Title size="xs" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "s", components: <Title size="s" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "m", components: <Title size="m" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "l", components: <Title size="l" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "xl", components: <Title size="xl" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "xxl", components: <Title size="xxl" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
      ],
    },
    {
      category: t("title.categories.colorScheme"),
      itemList: [
        { label: "background", components: <Title colorScheme="background" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "primary", components: <Title colorScheme="primary" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "success", components: <Title colorScheme="success" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "danger", components: <Title colorScheme="danger" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
        { label: "muted", components: <Title colorScheme="muted" darkMode={darkMode}>{t("title.examples.sampleText")}</Title> },
      ],
    },
    {
      category: t("title.categories.styling"),
      itemList: [
        {
          label: t("title.examples.noDefault"),
          components: (
            <Title removeDefaultStyle darkMode={darkMode}>
              {t("title.examples.sampleText")}
            </Title>
          ),
        },
        {
          label: t("title.examples.block"),
          components: (
            <Title block darkMode={darkMode}>
              {t("title.examples.sampleText")}
            </Title>
          ),
        },
      ],
    },
  ];
  //!#render components: start
  return (
    <div>
      <DocSeo title={pageTitle} description={description} />
      <Documentation
        state="inProgress"
        title={pageTitle}
        basicInfo={{
          description,
          exampleCode: TITLE_EXAMPLE_CODE,
          preview: <Title darkMode={darkMode}>Nadpis sekce</Title>,
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
export { TitleDoc };
export default TitleDoc;
//!#export: end
