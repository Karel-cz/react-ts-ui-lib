//@@viewOn:imports
import {
  Documentation,
  BUTTON_GROUP_PROP_NAMES,
  ButtonGroup,
  Button,
} from "@react-ts-ui-lib/ui";
import type { ButtonGroupItem } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

const BUTTON_GROUP_EXAMPLE_CODE = `<ButtonGroup
  itemList={[
    { label: 'Ok' },
    { label: 'Cancel' }
  ]}
  direction="row"
  darkMode={darkMode}
/>`;

//@@viewOn:component
const ButtonGroupDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations(
    "buttongroup",
    BUTTON_GROUP_PROP_NAMES,
    t,
  );

  const defaultItems: ButtonGroupItem[] = [
    { label: t("buttongroup.examples.save"), colorScheme: "primary" },
    { label: t("buttongroup.examples.cancel"), colorScheme: "muted" },
    { label: t("buttongroup.examples.delete"), colorScheme: "danger" },
  ];

  const itemsWithIcons: ButtonGroupItem[] = [
    {
      label: t("buttongroup.examples.edit"),
      icon: "mdi-pencil",
      iconPosition: "left",
      colorScheme: "primary",
    },
    {
      label: t("buttongroup.examples.copy"),
      icon: "mdi-content-copy",
      iconPosition: "left",
      colorScheme: "success",
    },
    {
      label: t("buttongroup.examples.delete"),
      icon: "mdi-delete",
      iconPosition: "left",
      colorScheme: "danger",
    },
  ];

  const itemsWithCustomComponent: ButtonGroupItem[] = [
    { label: t("buttongroup.examples.primary"), colorScheme: "primary" },
    {
      component: (
        <Button
          label={t("buttongroup.examples.custom")}
          colorScheme="warning"
          size="sm"
          darkMode={darkMode}
        />
      ),
    },
    { label: t("buttongroup.examples.success"), colorScheme: "success" },
  ];

  const componentList = [
    {
      category: t("buttongroup.categories.basic"),
      itemList: [
        {
          label: t("buttongroup.examples.default"),
          components: (
            <ButtonGroup itemList={defaultItems} darkMode={darkMode} />
          ),
        },
        {
          label: t("buttongroup.examples.withIcons"),
          components: (
            <ButtonGroup itemList={itemsWithIcons} darkMode={darkMode} />
          ),
        },
        {
          label: t("buttongroup.examples.customComponent"),
          components: (
            <ButtonGroup
              itemList={itemsWithCustomComponent}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("buttongroup.categories.variant"),
      itemList: [
        {
          label: t("buttongroup.examples.segmented"),
          components: (
            <ButtonGroup
              itemList={defaultItems}
              variant="segmented"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("buttongroup.examples.column"),
          components: (
            <ButtonGroup
              itemList={defaultItems}
              direction="column"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("buttongroup.categories.styling"),
      itemList: [
        {
          label: t("buttongroup.examples.noDefault"),
          components: (
            <ButtonGroup
              itemList={defaultItems}
              removeDefaultStyle
              darkMode={darkMode}
            />
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
        state="inProgress"
        title={t("buttongroup.title")}
        basicInfo={{
          description: t("buttongroup.basicInfo.description"),
          exampleCode: BUTTON_GROUP_EXAMPLE_CODE,
          preview: (
            <ButtonGroup
              itemList={[
                { label: "Ok" },
                { label: t("button.examples.danger") },
              ]}
              direction="row"
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
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { ButtonGroupDoc };
export default ButtonGroupDoc;
//@@viewOff:exports
