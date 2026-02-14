//@@viewOn:imports
import {
  Documentation,
  BLOCK_PROP_NAMES,
  Block,
  Button,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

const BLOCK_EXAMPLE_CODE = `<Block
  header="Nadpis"
  darkMode={darkMode}
  card="full"
>
  Obsah
</Block>`;

//@@viewOn:component
const BlockDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("block", BLOCK_PROP_NAMES, t);

  const componentList = [
    {
      category: t("block.categories.card"),
      itemList: [
        {
          label: t("block.examples.none"),
          components: (
            <Block card="none" darkMode={darkMode}>
              <div>Content without card styling</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.full"),
          components: (
            <Block card="full" header="Full Card" darkMode={darkMode}>
              <div>Content with full card styling</div>
            </Block>
          ),
        },
      ],
    },

    // ✅ NEW SEPARATE CATEGORY
    {
      category: "Border Controls",
      itemList: [
        {
          label: "Disable Top Border",
          components: (
            <Block
              card="full"
              header="No Top Border"
              borderTop={false}
              darkMode={darkMode}
            >
              <div>Top border disabled</div>
            </Block>
          ),
        },
        {
          label: "Disable Left & Right Borders",
          components: (
            <Block
              card="full"
              header="No Side Borders"
              borderLeft={false}
              borderRight={false}
              darkMode={darkMode}
            >
              <div>Left and right borders disabled</div>
            </Block>
          ),
        },
        {
          label: "Default (All Borders)",
          components: (
            <Block
              card="full"
              header="Default Borders"
              darkMode={darkMode}
            >
              <div>All borders enabled (default)</div>
            </Block>
          ),
        },
      ],
    },

    {
      category: t("block.categories.header"),
      itemList: [
        {
          label: t("block.examples.withHeader"),
          components: (
            <Block card="full" header="Block Header" darkMode={darkMode}>
              <div>Content with header</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.withSeparator"),
          components: (
            <Block
              card="full"
              header="Header with Separator"
              headerSeparator
              darkMode={darkMode}
            >
              <div>Content separated from header</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.actionList"),
      itemList: [
        {
          label: t("block.examples.withActions"),
          components: (
            <Block
              card="full"
              header="Block with Actions"
              darkMode={darkMode}
              ActionList={[
                <Button key="1" size="sm" label="Action 1" />,
                <Button key="2" size="sm" label="Action 2" />,
              ]}
            >
              <div>Content with action buttons</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.footer"),
      itemList: [
        {
          label: t("block.examples.withFooter"),
          components: (
            <Block
              card="full"
              header="Block with Footer"
              darkMode={darkMode}
              footer={<Button label="Submit" />}
            >
              <div>Content with footer</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.info"),
      itemList: [
        {
          label: t("block.examples.withInfo"),
          components: (
            <Block
              card="full"
              header="Block with Info"
              darkMode={darkMode}
              info={<div>This is info content in popover</div>}
            >
              <div>Click the info icon to see popover</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.collapsible"),
      itemList: [
        {
          label: t("block.examples.collapsible"),
          components: (
            <Block
              card="full"
              header="Collapsible Block"
              collapsible
              darkMode={darkMode}
            >
              <div>This content can be collapsed</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.colorScheme"),
      itemList: [
        {
          label: "background",
          components: (
            <Block
              card="full"
              header="Background"
              colorScheme="background"
              darkMode={darkMode}
            >
              <div>Background color scheme</div>
            </Block>
          ),
        },
        {
          label: "surface",
          components: (
            <Block
              card="full"
              header="Surface"
              colorScheme="surface"
              darkMode={darkMode}
            >
              <div>Surface color scheme</div>
            </Block>
          ),
        },
        {
          label: "primary",
          components: (
            <Block
              card="full"
              header="Primary"
              colorScheme="primary"
              darkMode={darkMode}
            >
              <div>Primary color scheme</div>
            </Block>
          ),
        },
        {
          label: "primaryHover",
          components: (
            <Block
              card="full"
              header="Primary Hover"
              colorScheme="primaryHover"
              darkMode={darkMode}
            >
              <div>Primary hover color scheme</div>
            </Block>
          ),
        },
        {
          label: "primaryDark",
          components: (
            <Block
              card="full"
              header="Primary Dark"
              colorScheme="primaryDark"
              darkMode={darkMode}
            >
              <div>Primary dark color scheme</div>
            </Block>
          ),
        },
        {
          label: "success",
          components: (
            <Block
              card="full"
              header="Success"
              colorScheme="success"
              darkMode={darkMode}
            >
              <div>Success color scheme</div>
            </Block>
          ),
        },
        {
          label: "successDark",
          components: (
            <Block
              card="full"
              header="Success Dark"
              colorScheme="successDark"
              darkMode={darkMode}
            >
              <div>Success dark color scheme</div>
            </Block>
          ),
        },
        {
          label: "danger",
          components: (
            <Block
              card="full"
              header="Danger"
              colorScheme="danger"
              darkMode={darkMode}
            >
              <div>Danger color scheme</div>
            </Block>
          ),
        },
        {
          label: "dangerDark",
          components: (
            <Block
              card="full"
              header="Danger Dark"
              colorScheme="dangerDark"
              darkMode={darkMode}
            >
              <div>Danger dark color scheme</div>
            </Block>
          ),
        },
        {
          label: "warning",
          components: (
            <Block
              card="full"
              header="Warning"
              colorScheme="warning"
              darkMode={darkMode}
            >
              <div>Warning color scheme</div>
            </Block>
          ),
        },
        {
          label: "warningDark",
          components: (
            <Block
              card="full"
              header="Warning Dark"
              colorScheme="warningDark"
              darkMode={darkMode}
            >
              <div>Warning dark color scheme</div>
            </Block>
          ),
        },
        {
          label: "info",
          components: (
            <Block
              card="full"
              header="Info"
              colorScheme="info"
              darkMode={darkMode}
            >
              <div>Info color scheme</div>
            </Block>
          ),
        },
        {
          label: "infoDark",
          components: (
            <Block
              card="full"
              header="Info Dark"
              colorScheme="infoDark"
              darkMode={darkMode}
            >
              <div>Info dark color scheme</div>
            </Block>
          ),
        },
        {
          label: "text",
          components: (
            <Block
              card="full"
              header="Text"
              colorScheme="text"
              darkMode={darkMode}
            >
              <div>Text color scheme</div>
            </Block>
          ),
        },
        {
          label: "muted",
          components: (
            <Block
              card="full"
              header="Muted"
              colorScheme="muted"
              darkMode={darkMode}
            >
              <div>Muted color scheme</div>
            </Block>
          ),
        },
        {
          label: "border",
          components: (
            <Block
              card="full"
              header="Border"
              colorScheme="border"
              darkMode={darkMode}
            >
              <div>Border color scheme</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.significance"),
      itemList: [
        {
          label: t("block.examples.common"),
          components: (
            <Block
              card="full"
              header="Common"
              significance="common"
              darkMode={darkMode}
            >
              <div>Common significance</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.highlighted"),
          components: (
            <Block
              card="full"
              header="Highlighted"
              significance="highlighted"
              colorScheme="primary"
              darkMode={darkMode}
            >
              <div>Highlighted significance</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.distinct"),
          components: (
            <Block
              card="full"
              header="Distinct"
              significance="distinct"
              colorScheme="primary"
              darkMode={darkMode}
            >
              <div>Distinct significance</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.subdued"),
          components: (
            <Block
              card="full"
              header="Subdued"
              significance="subdued"
              colorScheme="primary"
              darkMode={darkMode}
            >
              <div>Subdued significance</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.borderRadius"),
      itemList: [
        {
          label: t("block.examples.xs"),
          components: (
            <Block
              card="full"
              header="XS Radius"
              borderRadius="xs"
              darkMode={darkMode}
            >
              <div>XS border radius</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.sm"),
          components: (
            <Block card="full" header="SM Radius" borderRadius="sm">
              <div>SM border radius</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.md"),
          components: (
            <Block card="full" header="MD Radius" borderRadius="md">
              <div>MD border radius</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.lg"),
          components: (
            <Block card="full" header="LG Radius" borderRadius="lg">
              <div>LG border radius</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.full"),
          components: (
            <Block card="full" header="Full Radius" borderRadius="full">
              <div>Full border radius</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.sizing"),
      itemList: [
        {
          label: t("block.examples.maxWidth"),
          components: (
            <Block
              card="full"
              header="Max Width"
              maxWidth={300}
              darkMode={darkMode}
            >
              <div>Block with max width</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.height"),
          components: (
            <Block
              card="full"
              header="Fixed Height"
              height={150}
              darkMode={darkMode}
            >
              <div>Block with fixed height</div>
            </Block>
          ),
        },
      ],
    },
    {
      category: t("block.categories.darkMode"),
      itemList: [
        {
          label: t("block.examples.dark"),
          components: (
            <Block card="full" header="Dark Mode" darkMode>
              <div>Block with dark mode</div>
            </Block>
          ),
        },
        {
          label: t("block.examples.light"),
          components: (
            <Block card="full" header="Light Mode" darkMode={false}>
              <div>Block with light mode</div>
            </Block>
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
        state="nearlyReady"
        title={t("block.title")}
        basicInfo={{
          description: t("block.basicInfo.description"),
          exampleCode: BLOCK_EXAMPLE_CODE,
          preview: (
            <Block header={t("block.examples.basic")} darkMode={darkMode} card="full">
              Obsah
            </Block>
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
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { BlockDoc };
export default BlockDoc;
//@@viewOff:exports
