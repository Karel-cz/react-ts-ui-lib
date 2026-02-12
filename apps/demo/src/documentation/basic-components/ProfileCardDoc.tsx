//@@viewOn:imports
import {
  Documentation,
  PROFILE_CARD_PROP_NAMES,
  ProfileCard,
  Button,
} from "@react-ts-ui-lib/ui";
import { useTranslation } from "../../i18n/useTranslation";
import { getPropsWithTranslations } from "../../i18n/getPropsWithTranslations";
import { useTheme } from "../../app/context/ThemeContext";
//@@viewOff:imports

const PROFILE_CARD_EXAMPLE_CODE = `<ProfileCard
  name="John Doe"
  description="Short bio"
  avatarSrc="/avatar.jpg"
  darkMode={darkMode}
/>`;

//@@viewOn:component
const ProfileCardDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const propTypesList = getPropsWithTranslations(
    "profileCard",
    PROFILE_CARD_PROP_NAMES,
    t,
  );

  const componentList = [
    {
      category: t("profileCard.categories.basic"),
      itemList: [
        {
          label: t("profileCard.examples.withPhotoUrl"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=default"
              name="Jane Doe"
              role={t("profileCard.examples.roleDeveloper")}
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("profileCard.examples.fullContent"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=profile"
              name="John Smith"
              role={t("profileCard.examples.roleDesigner")}
              labelName={t("profileCard.examples.labelEmail")}
              labelValue="john@example.com"
              descriptionName={t("profileCard.examples.descriptionBio")}
              descriptionValue={t("profileCard.examples.bioShort")}
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("profileCard.categories.modernWithContent"),
      itemList: [
        {
          label: t("profileCard.examples.modernFullContent"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=m1"
              name="Marie Novak"
              role={t("profileCard.examples.roleDesigner")}
              labelName={t("profileCard.examples.labelEmail")}
              labelValue="marie@example.com"
              descriptionName={t("profileCard.examples.descriptionBio")}
              descriptionValue={t("profileCard.examples.bioShort")}
              darkMode={darkMode}
              modern
              colorScheme="primary"
            />
          ),
        },
        {
          label: t("profileCard.examples.modernWithContent"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=m2"
              name="Tom User"
              role={t("profileCard.examples.roleDeveloper")}
              content={
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, opacity: 0.9 }}>
                  {t("profileCard.examples.customContentText")}
                </p>
              }
              darkMode={darkMode}
              modern
              colorScheme="success"
            />
          ),
        },
        {
          label: t("profileCard.examples.modernComplete"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=m3"
              name="Eva Complete"
              role={t("profileCard.examples.roleAdmin")}
              labelName={t("profileCard.examples.labelEmail")}
              labelValue="eva@example.com"
              descriptionName={t("profileCard.examples.descriptionBio")}
              descriptionValue={t("profileCard.examples.bioShort")}
              content={
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, opacity: 0.85 }}>
                  {t("profileCard.examples.customContentText")}
                </p>
              }
              darkMode={darkMode}
              modern
              colorScheme="primary"
              actionList={[
                <Button key="1" size="sm" label={t("profileCard.examples.edit")} />,
                <Button key="2" size="sm" label={t("profileCard.examples.message")} significance="subdued" />,
              ]}
            />
          ),
        },
      ],
    },
    {
      category: t("profileCard.categories.actionList"),
      itemList: [
        {
          label: t("profileCard.examples.withActions"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
              name="Alex User"
              role={t("profileCard.examples.roleAdmin")}
              darkMode={darkMode}
              actionList={[
                <Button key="1" size="sm" label={t("profileCard.examples.edit")} />,
                <Button key="2" size="sm" label={t("profileCard.examples.message")} significance="subdued" />,
              ]}
            />
          ),
        },
      ],
    },
    {
      category: t("profileCard.categories.modern"),
      itemList: [
        {
          label: t("profileCard.examples.modernOff"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=a"
              name="Classic"
              role={t("profileCard.examples.roleDeveloper")}
              darkMode={darkMode}
              modern={false}
            />
          ),
        },
        {
          label: t("profileCard.examples.modernOn"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=b"
              name="Modern"
              role={t("profileCard.examples.roleDesigner")}
              labelName={t("profileCard.examples.labelEmail")}
              labelValue="user@example.com"
              descriptionName={t("profileCard.examples.descriptionBio")}
              descriptionValue={t("profileCard.examples.bioShort")}
              darkMode={darkMode}
              modern
            />
          ),
        },
      ],
    },
    {
      category: t("profileCard.categories.layout"),
      itemList: [
        {
          label: t("profileCard.examples.layoutResponsive"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=r"
              name="Responsive"
              role={t("profileCard.examples.roleDeveloper")}
              layout="responsive"
              darkMode={darkMode}
            />
          ),
        },
        {
          label: t("profileCard.examples.layoutStacked"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=s"
              name="Stacked"
              role={t("profileCard.examples.roleDesigner")}
              layout="stacked"
              darkMode={darkMode}
            />
          ),
        },
      ],
    },
    {
      category: t("profileCard.categories.colorScheme"),
      itemList: [
        {
          label: "primary",
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=p"
              name="Primary"
              role={t("profileCard.examples.roleDeveloper")}
              colorScheme="primary"
              darkMode={darkMode}
              modern
            />
          ),
        },
        {
          label: "success",
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=su"
              name="Success"
              role={t("profileCard.examples.roleDesigner")}
              colorScheme="success"
              darkMode={darkMode}
              modern
            />
          ),
        },
        {
          label: "danger",
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=d"
              name="Danger"
              role={t("profileCard.examples.roleAdmin")}
              colorScheme="danger"
              darkMode={darkMode}
              modern
            />
          ),
        },
      ],
    },
    {
      category: t("profileCard.categories.significance"),
      itemList: [
        {
          label: t("profileCard.examples.common"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=c"
              name="Common"
              role={t("profileCard.examples.roleDeveloper")}
              significance="common"
              darkMode={darkMode}
              modern
            />
          ),
        },
        {
          label: t("profileCard.examples.highlighted"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=h"
              name="Highlighted"
              role={t("profileCard.examples.roleDesigner")}
              significance="highlighted"
              colorScheme="primary"
              darkMode={darkMode}
              modern
            />
          ),
        },
      ],
    },
    {
      category: t("profileCard.categories.darkMode"),
      itemList: [
        {
          label: t("profileCard.examples.dark"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=dark"
              name="Dark"
              role={t("profileCard.examples.roleDeveloper")}
              darkMode
              modern
            />
          ),
        },
        {
          label: t("profileCard.examples.light"),
          components: (
            <ProfileCard
              photo="https://api.dicebear.com/7.x/avataaars/svg?seed=light"
              name="Light"
              role={t("profileCard.examples.roleDesigner")}
              darkMode={false}
              modern
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
        title={t("profileCard.title")}
        basicInfo={{
          description: t("profileCard.basicInfo.description"),
          exampleCode: PROFILE_CARD_EXAMPLE_CODE,
          preview: (
            <ProfileCard
              name="Jane Doe"
              role={t("profileCard.examples.roleDeveloper")}
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
export { ProfileCardDoc };
export default ProfileCardDoc;
//@@viewOff:exports
