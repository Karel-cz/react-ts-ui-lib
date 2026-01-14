//@@viewOn:imports
import { Documentation, ButtonTypeScheme, Button } from "@react-ts-ui-lib/ui";
//@@viewOff:imports

//@@viewOn:constants
const TITLE = "Button Component";
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

const ButtonDoc = () => {
  //@@viewOn:private
  const propTypesList = Object.values(ButtonTypeScheme);


  const componentList = [
    {
      category: "Color scheme",
      itemList: [
        { label: "primary", components: <Button label="Primary" colorScheme="primary" /> },
        { label: "success", components: <Button label="Success" colorScheme="success" /> },
        { label: "danger", components: <Button label="Danger" colorScheme="danger" /> },
        { label: "warning", components: <Button label="Warning" colorScheme="warning" /> },
        { label: "info", components: <Button label="Info" colorScheme="info" /> },
      ],
    },
    {
      category: "State",
      itemList: [
        { label: "default", components: <Button label="Default" /> },
        { label: "disabled", components: <Button label="Disabled" disabled /> },
        { label: "pending", components: <Button label="Pending" isPending /> },
      ],
    },
    {
      category: "Content",
      itemList: [
        { label: "label", components: <Button label="Label only" /> },
        { label: "children", components: <Button><span><strong>Custom</strong> children</span></Button> },
      ],
    },
    {
      category: "Icons",
      itemList: [
        { label: "left", components: <Button label="Left icon" icon="mdi-check" iconPosition="left" /> },
        { label: "right", components: <Button label="Right icon" icon="mdi-check" iconPosition="right" /> },
      ],
    },
    {
      category: "Styling",
      itemList: [
        { label: "no default", components: <Button label="Raw button" removeDefaultStyle /> },
      ],
    },
    {
      category: "Significance",
      itemList: [
        { label: "common", components: <Button label="Common" colorScheme="primary" significance="common" /> },
        { label: "highlighted", components: <Button label="Highlighted" colorScheme="primary" significance="highlighted" /> },
        { label: "distinct", components: <Button label="Distinct" colorScheme="primary" significance="distinct" /> },
      ],
    },
    {
      category: "Size",
      itemList: [
        { label: "xs", components: <Button label="XS" size="xs" /> },
        { label: "sm", components: <Button label="SM" size="sm" /> },
        { label: "md", components: <Button label="MD" size="md" /> },
        { label: "lg", components: <Button label="LG" size="lg" /> },
        { label: "xl", components: <Button label="XL" size="xl" /> },
        { label: "full", components: <Button label="Full Width" size="full" /> },
        { label: "xs + icon", components: <Button label="XS" size="xs" icon="mdi-check" /> },
        { label: "md + icon", components: <Button label="MD" size="md" icon="mdi-check" /> },
        { label: "xl + icon", components: <Button label="XL" size="xl" icon="mdi-check" /> },
        { label: "md + pending", components: <Button label="Loading" size="md" isPending /> },
        { label: "lg + pending", components: <Button label="Loading" size="lg" isPending /> },
      ],
    },
    {
      category: "Border radius & print",
      itemList: [
        { label: "rounded", components: <Button label="Rounded" borderRadius="lg" /> },
        { label: "pill noPrint", components: <Button label="Pill noPrint" borderRadius="full" noPrint /> },
      ],
    },
    {
      category: "Tooltip",
      itemList: [
        { label: "tooltip", components: <Button label="Hover me" tooltip="Native tooltip" /> },
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
export { ButtonDoc };
export default ButtonDoc;
//@@viewOff:exports
