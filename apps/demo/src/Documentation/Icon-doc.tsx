//@@viewOn:imports
import { Documentation, Icon as UiIcon, IconTypeScheme } from "@react-ts-ui-lib/ui";
import { useTheme } from "../app/context/ThemeContext";
//@@viewOff:imports

//@@viewOn:constants
const TITLE = "Icon Component";
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const IconDoc = () => {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const propTypesList = Object.values(IconTypeScheme);

  const componentList = [
    {
      category: "Size",
      itemList: [
        { label: "xs", components: <UiIcon icon="mdi-check" size="xs" darkMode={darkMode} /> },
        { label: "sm", components: <UiIcon icon="mdi-check" size="sm" darkMode={darkMode} /> },
        { label: "md", components: <UiIcon icon="mdi-check" size="md" darkMode={darkMode} /> },
        { label: "lg", components: <UiIcon icon="mdi-check" size="lg" darkMode={darkMode} /> },
        { label: "xl", components: <UiIcon icon="mdi-check" size="xl" darkMode={darkMode} /> },
        { label: "custom", components: <UiIcon icon="mdi-check" size={2} darkMode={darkMode} /> },
      ],
    },
    {
      category: "Basic",
      itemList: [
        { label: "default", components: <UiIcon icon="mdi-check" darkMode={darkMode} /> },
        { label: "red", components: <UiIcon icon="mdi-heart" color="#ef4444" darkMode={darkMode} /> },
        { label: "label", components: <UiIcon icon="mdi-information" label="Info" darkMode={darkMode} /> },
        { label: "tooltip", components: <UiIcon icon="mdi-help-circle" tooltip="Help" darkMode={darkMode} /> },
      ],
    },
    {
      category: "Icons",
      itemList: [
        { label: "check", components: <UiIcon icon="mdi-check" darkMode={darkMode} /> },
        { label: "heart", components: <UiIcon icon="mdi-heart" darkMode={darkMode} /> },
        { label: "star", components: <UiIcon icon="mdi-star" darkMode={darkMode} /> },
        { label: "alert", components: <UiIcon icon="mdi-alert" darkMode={darkMode} /> },
        { label: "information", components: <UiIcon icon="mdi-information" darkMode={darkMode} /> },
        { label: "close", components: <UiIcon icon="mdi-close" darkMode={darkMode} /> },
      ],
    },
    {
      category: "States",
      itemList: [
        { label: "onClick", components: <UiIcon icon="mdi-check" onClick={() => alert("Icon clicked!")} darkMode={darkMode} /> },
        { label: "hidden", components: <UiIcon icon="mdi-check" hidden darkMode={darkMode} /> },
        { label: "removeDefaultStyle", components: <UiIcon icon="mdi-check" removeDefaultStyle darkMode={darkMode} /> },
      ],
    },
    {
      category: "Dark mode",
      itemList: [
        { label: "dark", components: <UiIcon icon="mdi-check" darkMode /> },
        { label: "light", components: <UiIcon icon="mdi-check" darkMode={false} /> },
      ],
    },
  ];
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      <Documentation title={TITLE} propTypesList={propTypesList} componentList={componentList} />
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { IconDoc as Icon };
export default IconDoc;
//@@viewOff:exports
