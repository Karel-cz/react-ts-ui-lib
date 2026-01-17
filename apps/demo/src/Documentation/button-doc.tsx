//@@viewOn:imports
import { Documentation, BUTTON_PROP_NAMES, Button } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../i18n/useTranslation";
import { getPropsWithTranslations } from "../i18n/getPropsWithTranslations";
import { useTheme } from "../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:component
const ButtonDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("button", BUTTON_PROP_NAMES, t);

  const componentList = [
    {
      category: t("button.categories.colorScheme"),
      itemList: [
        { label: t("button.examples.primary"), components: <Button label={t("button.examples.primary")} colorScheme="primary" /> },
        { label: t("button.examples.success"), components: <Button label={t("button.examples.success")} colorScheme="success" /> },
        { label: t("button.examples.danger"), components: <Button label={t("button.examples.danger")} colorScheme="danger" /> },
        { label: t("button.examples.warning"), components: <Button label={t("button.examples.warning")} colorScheme="warning" /> },
        { label: t("button.examples.info"), components: <Button label={t("button.examples.info")} colorScheme="info" /> },
      ],
    },
    {
      category: t("button.categories.state"),
      itemList: [
        { label: t("button.examples.default"), components: <Button label={t("button.examples.default")} /> },
        { label: t("button.examples.disabled"), components: <Button label={t("button.examples.disabled")} disabled /> },
        { label: t("button.examples.pending"), components: <Button label={t("button.examples.pending")} isPending /> },
      ],
    },
    {
      category: t("button.categories.content"),
      itemList: [
        { label: t("button.examples.label"), components: <Button label={t("button.examples.labelOnly")} /> },
        { label: t("button.examples.children"), components: <Button><span><strong>{t("button.examples.customChildren")}</strong></span></Button> },
      ],
    },
    {
      category: t("button.categories.icons"),
      itemList: [
        { label: t("button.examples.left"), components: <Button label={t("button.examples.leftIcon")} icon="mdi-check" iconPosition="left" /> },
        { label: t("button.examples.right"), components: <Button label={t("button.examples.rightIcon")} icon="mdi-check" iconPosition="right" /> },
      ],
    },
    {
      category: t("button.categories.styling"),
      itemList: [
        { label: t("button.examples.noDefault"), components: <Button label={t("button.examples.rawButton")} removeDefaultStyle /> },
      ],
    },
    {
      category: t("button.categories.significance"),
      itemList: [
        { label: t("button.examples.common"), components: <Button label={t("button.examples.common")} colorScheme="primary" significance="common" /> },
        { label: t("button.examples.highlighted"), components: <Button label={t("button.examples.highlighted")} colorScheme="primary" significance="highlighted" /> },
        { label: t("button.examples.distinct"), components: <Button label={t("button.examples.distinct")} colorScheme="primary" significance="distinct" /> },
      ],
    },
    {
      category: t("button.categories.size"),
      itemList: [
        { label: t("button.examples.xs"), components: <Button label={t("button.examples.xs")} size="xs" /> },
        { label: t("button.examples.sm"), components: <Button label={t("button.examples.sm")} size="sm" /> },
        { label: t("button.examples.md"), components: <Button label={t("button.examples.md")} size="md" /> },
        { label: t("button.examples.lg"), components: <Button label={t("button.examples.lg")} size="lg" /> },
        { label: t("button.examples.xl"), components: <Button label={t("button.examples.xl")} size="xl" /> },
        { label: t("button.examples.full"), components: <Button label={t("button.examples.fullWidth")} size="full" /> },
        { label: t("button.examples.xsIcon"), components: <Button label={t("button.examples.xs")} size="xs" icon="mdi-check" /> },
        { label: t("button.examples.mdIcon"), components: <Button label={t("button.examples.md")} size="md" icon="mdi-check" /> },
        { label: t("button.examples.xlIcon"), components: <Button label={t("button.examples.xl")} size="xl" icon="mdi-check" /> },
        { label: t("button.examples.mdPending"), components: <Button label={t("button.examples.loading")} size="md" isPending /> },
        { label: t("button.examples.lgPending"), components: <Button label={t("button.examples.loading")} size="lg" isPending /> },
      ],
    },
    {
      category: t("button.categories.borderRadius"),
      itemList: [
        { label: t("button.examples.rounded"), components: <Button label={t("button.examples.rounded")} borderRadius="lg" /> },
        { label: t("button.examples.pillNoPrint"), components: <Button label={t("button.examples.pillNoPrint")} borderRadius="full" noPrint /> },
      ],
    },
    {
      category: t("button.categories.tooltip"),
      itemList: [
        { label: t("button.examples.tooltip"), components: <Button label={t("button.examples.hoverMe")} tooltip={t("button.examples.nativeTooltip")} /> },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation
        title={t("button.title")}
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
export { ButtonDoc };
export default ButtonDoc;
//@@viewOff:exports
