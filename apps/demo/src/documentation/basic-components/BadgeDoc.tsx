//@@viewOn:imports
import { Documentation, BADGE_PROP_NAMES, Badge } from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/themeContext";
//@@viewOff:imports

//@@viewOn:component
const BadgeDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations("badge", BADGE_PROP_NAMES, t);

  const componentList = [
    {
      category: t("badge.categories.colorScheme"),
      itemList: [
        {
          label: t("badge.examples.primary"),
          components: (
            <Badge label={t("badge.examples.primary")} colorScheme="primary" />
          ),
        },
        {
          label: t("badge.examples.success"),
          components: (
            <Badge label={t("badge.examples.success")} colorScheme="success" />
          ),
        },
        {
          label: t("badge.examples.danger"),
          components: (
            <Badge label={t("badge.examples.danger")} colorScheme="danger" />
          ),
        },
        {
          label: t("badge.examples.warning"),
          components: (
            <Badge label={t("badge.examples.warning")} colorScheme="warning" />
          ),
        },
        {
          label: t("badge.examples.info"),
          components: (
            <Badge label={t("badge.examples.info")} colorScheme="info" />
          ),
        },
      ],
    },
    {
      category: t("badge.categories.significance"),
      itemList: [
        {
          label: t("badge.examples.common"),
          components: (
            <Badge
              label={t("badge.examples.common")}
              colorScheme="primary"
              significance="common"
            />
          ),
        },
        {
          label: t("badge.examples.highlighted"),
          components: (
            <Badge
              label={t("badge.examples.highlighted")}
              colorScheme="primary"
              significance="highlighted"
            />
          ),
        },
        {
          label: t("badge.examples.distinct"),
          components: (
            <Badge
              label={t("badge.examples.distinct")}
              colorScheme="primary"
              significance="distinct"
            />
          ),
        },
      ],
    },
    {
      category: t("badge.categories.modern"),
      itemList: [
        {
          label: t("badge.examples.modernPrimary"),
          components: (
            <Badge
              label={t("badge.examples.primary")}
              colorScheme="primary"
              modern
            />
          ),
        },
        {
          label: t("badge.examples.modernSuccess"),
          components: (
            <Badge
              label={t("badge.examples.success")}
              colorScheme="success"
              modern
            />
          ),
        },
        {
          label: t("badge.examples.modernDanger"),
          components: (
            <Badge
              label={t("badge.examples.danger")}
              colorScheme="danger"
              modern
            />
          ),
        },
        {
          label: t("badge.examples.modernWarning"),
          components: (
            <Badge
              label={t("badge.examples.warning")}
              colorScheme="warning"
              modern
            />
          ),
        },
      ],
    },
    {
      category: t("badge.categories.modernSignificance"),
      itemList: [
        {
          label: t("badge.examples.modernCommon"),
          components: (
            <Badge
              label={t("badge.examples.common")}
              colorScheme="primary"
              significance="common"
              modern
            />
          ),
        },
        {
          label: t("badge.examples.modernHighlighted"),
          components: (
            <Badge
              label={t("badge.examples.highlighted")}
              colorScheme="primary"
              significance="highlighted"
              modern
            />
          ),
        },
        {
          label: t("badge.examples.modernDistinct"),
          components: (
            <Badge
              label={t("badge.examples.distinct")}
              colorScheme="primary"
              significance="distinct"
              modern
            />
          ),
        },
      ],
    },
    {
      category: t("badge.categories.size"),
      itemList: [
        {
          label: t("badge.examples.xs"),
          components: <Badge label={t("badge.examples.xs")} size="xs" />,
        },
        {
          label: t("badge.examples.sm"),
          components: <Badge label={t("badge.examples.sm")} size="sm" />,
        },
        {
          label: t("badge.examples.md"),
          components: <Badge label={t("badge.examples.md")} size="md" />,
        },
        {
          label: t("badge.examples.lg"),
          components: <Badge label={t("badge.examples.lg")} size="lg" />,
        },
        {
          label: t("badge.examples.xl"),
          components: <Badge label={t("badge.examples.xl")} size="xl" />,
        },
      ],
    },
    {
      category: t("badge.categories.icon"),
      itemList: [
        {
          label: t("badge.examples.iconLeft"),
          components: (
            <Badge
              label={t("badge.examples.withIcon")}
              icon="mdi-check"
              colorScheme="success"
            />
          ),
        },
        {
          label: t("badge.examples.alert"),
          components: (
            <Badge
              label={t("badge.examples.alert")}
              icon="mdi-alert"
              colorScheme="danger"
            />
          ),
        },
      ],
    },
    {
      category: t("badge.categories.states"),
      itemList: [
        {
          label: t("badge.examples.disabled"),
          components: (
            <Badge
              label={t("badge.examples.disabled")}
              colorScheme="muted"
              disabled
            />
          ),
        },
        {
          label: t("badge.examples.noPrint"),
          components: (
            <Badge
              label={t("badge.examples.noPrint")}
              colorScheme="info"
              noPrint
              tooltip={t("badge.examples.noPrintTooltip")}
            />
          ),
        },
        {
          label: t("badge.examples.onClick"),
          components: (
            <Badge
              label={t("badge.examples.clickMe")}
              colorScheme="primary"
              onClick={() => alert("Badge clicked!")}
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
        title={t("badge.title")}
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
export { BadgeDoc };
export default BadgeDoc;
//@@viewOff:exports
