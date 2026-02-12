//@@viewOn:imports
import { UnderConstruction } from "@react-ts-ui-lib/ui";
import { useTheme } from "./context/ThemeContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:propTypes
// No props for now – simple placeholder page.
//@@viewOff:propTypes

const Table = () => {
  const { darkMode } = useTheme();
  //@@viewOn:render
  return <UnderConstruction darkMode={darkMode} />;
  //@@viewOff:render
};

//@@viewOn:exports
export { Table };
export default Table;
//@@viewOff:exports

