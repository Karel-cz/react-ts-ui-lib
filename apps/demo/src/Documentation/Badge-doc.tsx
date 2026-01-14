//@@viewOn:imports
import { Documentation, BadgeTypeScheme, Badge } from "@react-ts-ui-lib/ui";
//@@viewOff:imports

//@@viewOn:constants
const TITLE = "Badge Component";
//@@viewOff:constants

//@@viewOn:component
const BadgeDoc = () => {
  //@@viewOn:private
  const propTypesList = Object.values(BadgeTypeScheme);

  const componentList = [
    {
      category: "Color scheme",
      itemList: [
        { label: "primary", components: <Badge label="Primary" colorScheme="primary" /> },
        { label: "success", components: <Badge label="Success" colorScheme="success" /> },
        { label: "danger", components: <Badge label="Danger" colorScheme="danger" /> },
        { label: "warning", components: <Badge label="Warning" colorScheme="warning" /> },
        { label: "info", components: <Badge label="Info" colorScheme="info" /> },
      ],
    },
    {
      category: "Significance",
      itemList: [
        { label: "common", components: <Badge label="Common" colorScheme="primary" significance="common" /> },
        { label: "highlighted", components: <Badge label="Highlighted" colorScheme="primary" significance="highlighted" /> },
        { label: "distinct", components: <Badge label="Distinct" colorScheme="primary" significance="distinct" /> },
      ],
    },
    {
      category: "Size",
      itemList: [
        { label: "xs", components: <Badge label="XS" size="xs" /> },
        { label: "sm", components: <Badge label="SM" size="sm" /> },
        { label: "md", components: <Badge label="MD" size="md" /> },
        { label: "lg", components: <Badge label="LG" size="lg" /> },
        { label: "xl", components: <Badge label="XL" size="xl" /> },
      ],
    },
    {
      category: "Icon",
      itemList: [
        { label: "icon left", components: <Badge label="With icon" icon="mdi-check" colorScheme="success" /> },
        { label: "danger", components: <Badge label="Alert" icon="mdi-alert" colorScheme="danger" /> },
      ],
    },
    {
      category: "States",
      itemList: [
        { label: "disabled", components: <Badge label="Disabled" colorScheme="muted" disabled /> },
        { label: "noPrint", components: <Badge label="No print" colorScheme="info" noPrint tooltip="Hidden when printing" /> },
        { label: "onClick", components: <Badge label="Click me" colorScheme="primary" onClick={() => alert("Badge clicked!")} /> },
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
//@@viewOff:component

//@@viewOn:exports
export { BadgeDoc };
export default BadgeDoc;
//@@viewOff:exports
