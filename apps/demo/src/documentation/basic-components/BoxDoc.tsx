//!#Imports: start
import {
  Documentation,
  BOX_PROP_NAMES,
  Box,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
import DocSeo from "../../app/DocSeo";
//!#Imports: end

//!#Constants: start
const BOX_EXAMPLE_CODE = `<Box darkMode={darkMode} padding={16}>
  Content inside the box
</Box>`;
//!#Constants: end

const BoxDoc = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("box", BOX_PROP_NAMES, t);

  const componentList = [
    {
      category: t("box.examples.default"),
      itemList: [
        {
          label: t("box.examples.default"),
          components: (
            <Box darkMode={darkMode}>
              <span>Default box with all borders and padding</span>
            </Box>
          ),
        },
      ],
    },
    {
      category: t("box.examples.borders"),
      itemList: [
        {
          label: t("box.examples.noTop"),
          components: (
            <Box darkMode={darkMode} borderTop={false}>
              <span>Box without top border</span>
            </Box>
          ),
        },
        {
          label: t("box.examples.sidesOnly"),
          components: (
            <Box darkMode={darkMode} borderTop={false} borderBottom={false}>
              <span>Box with left and right borders only</span>
            </Box>
          ),
        },
        {
          label: t("box.examples.noStyle"),
          components: (
            <Box darkMode={darkMode} removeDefaultStyle>
              <span>Box with removeDefaultStyle (no border/padding)</span>
            </Box>
          ),
        },
      ],
    },
    {
      category: t("box.examples.padding"),
      itemList: [
        {
          label: t("box.examples.smallPadding"),
          components: (
            <Box darkMode={darkMode} padding={8}>
              <span>Small padding (8px)</span>
            </Box>
          ),
        },
        {
          label: t("box.examples.largePadding"),
          components: (
            <Box darkMode={darkMode} padding={24}>
              <span>Large padding (24px)</span>
            </Box>
          ),
        },
      ],
    },
  ];

  const pageTitle = t("box.title");
  const description = t("box.basicInfo.description");

  return (
    <div>
      <DocSeo title={pageTitle} description={description} />
      <Documentation
        state="draft"
        title={pageTitle}
        basicInfo={{
          description: t("box.basicInfo.description"),
          exampleCode: BOX_EXAMPLE_CODE,
          preview: (
            <Box darkMode={darkMode} padding={16}>
              Content inside the box
            </Box>
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

//!#export: start
export { BoxDoc };
export default BoxDoc;
//!#export: end
