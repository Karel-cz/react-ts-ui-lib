//@@viewOn:imports
import {
  Documentation,
  PENDING_PROP_NAMES,
  Pending as UiPending,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:component
const PendingDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations(
    "pending",
    PENDING_PROP_NAMES,
    t,
  );

  const componentList = [
    {
      category: t("pending.categories.type"),
      itemList: [
        {
          label: t("pending.examples.circular"),
          components: <UiPending type="circular" />,
        },
        {
          label: t("pending.examples.horizontal"),
          components: <UiPending type="horizontal" />,
        },
      ],
    },
    {
      category: t("pending.categories.size"),
      itemList: [
        {
          label: t("pending.examples.xs"),
          components: <UiPending size="xs" />,
        },
        {
          label: t("pending.examples.sm"),
          components: <UiPending size="sm" />,
        },
        {
          label: t("pending.examples.md"),
          components: <UiPending size="md" />,
        },
        {
          label: t("pending.examples.lg"),
          components: <UiPending size="lg" />,
        },
        {
          label: t("pending.examples.xl"),
          components: <UiPending size="xl" />,
        },
      ],
    },
    {
      category: t("pending.categories.colorScheme"),
      itemList: [
        {
          label: t("pending.examples.primary"),
          components: <UiPending colorScheme={"primary"} size="lg" />,
        },
        {
          label: t("pending.examples.warning"),
          components: <UiPending colorScheme={"warning"} size="lg" />,
        },
        {
          label: t("pending.examples.info"),
          components: <UiPending colorScheme={"info"} size="lg" />,
        },
        {
          label: t("pending.examples.danger"),
          components: <UiPending colorScheme={"danger"} size="lg" />,
        },
        {
          label: t("pending.examples.success"),
          components: <UiPending colorScheme={"success"} size="lg" />,
        },
      ],
    },
    {
      category: t("pending.categories.darkMode"),
      itemList: [
        {
          label: t("pending.examples.dark"),
          components: <UiPending darkMode />,
        },
        {
          label: t("pending.examples.light"),
          components: <UiPending darkMode={false} />,
        },
      ],
    },
    {
      category: t("pending.categories.animationSpeed"),
      itemList: [
        {
          label: t("pending.examples.slow"),
          components: <UiPending animationSpeed={0.5} />,
        },
        {
          label: t("pending.examples.fast"),
          components: <UiPending animationSpeed={2} />,
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
        title={t("pending.title")}
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
export { PendingDoc as Pending };
export default PendingDoc;
//@@viewOff:exports
