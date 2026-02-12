//@@viewOn:imports
import React from "react";
import { getColorScheme, getBorderColor } from "../tools/colors";
//@@viewOff:imports

//@@viewOn:component
type UnderConstructionProps = { darkMode?: boolean };

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  darkMode = true,
}) => {
  //@@viewOn:private
  const surfaceScheme = getColorScheme("surface", darkMode);
  const textScheme = getColorScheme("text", darkMode);
  const mutedScheme = getColorScheme("muted", darkMode);
  const accentScheme = getColorScheme("info", darkMode);
  const borderColor = getBorderColor(darkMode);
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 520,
          width: "100%",
          textAlign: "center",
          padding: 32,
          borderRadius: 16,
          border: `1px dashed ${borderColor}`,
          backgroundColor: surfaceScheme.color,
          boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 12,
            color: accentScheme.color,
          }}
        >
          Under construction
        </div>
        <h1
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: 26,
            lineHeight: 1.2,
            color: textScheme.color,
          }}
        >
          This section is on the way
        </h1>
        <p
          style={{
            margin: 0,
            marginTop: 8,
            fontSize: 14,
            lineHeight: 1.6,
            color: mutedScheme.color,
          }}
        >
          We&apos;re currently building out this part of the documentation.
          Check back soon for fully interactive examples and usage guides.
        </p>
      </div>
    </div>
  );
  //@@viewOff:render
};
//@@viewOff:component

//@@viewOn:exports
export { UnderConstruction };
export default UnderConstruction;
//@@viewOff:exports

