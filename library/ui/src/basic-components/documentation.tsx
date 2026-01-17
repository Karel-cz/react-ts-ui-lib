//@@viewOn:imports
import React from "react";
import Block from "./Block";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  section: {
    marginTop: 24,
  } as React.CSSProperties,
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 8,
  } as React.CSSProperties,
  th: {
    textAlign: "left",
    borderBottom: "1px solid #ccc",
    padding: "8px",
  } as React.CSSProperties,
  td: {
    borderBottom: "1px solid #eee",
    padding: "8px",
    verticalAlign: "middle",
  } as React.CSSProperties,
  itemsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "stretch",
  } as React.CSSProperties,
  itemCard: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    padding: 8,
    borderRadius: 8,
    background: "transparent",
  } as React.CSSProperties,
  itemLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  } as React.CSSProperties,
};
//@@viewOff:css

//@@viewOn:helpers
export type DocItem = {
  label: string;
  components: React.ReactNode;
};

export type DocCategory = {
  category: string;
  itemList: DocItem[];
};
//@@viewOff:helpers

//@@viewOn:propTypes
export const DocumentationTypeScheme = {
  title: {
    name: "title",
    description: "Optional page title rendered at the top.",
    required: false,
    type: "" as string,
  },
  propTypesList: {
    name: "propTypesList",
    description: "Array of prop-type meta objects to render in the Prop Types table.",
    required: false,
    type: [] as Array<{ name: string; description?: string; type?: string; required?: boolean }>,
  },
  componentList: {
    name: "componentList",
    description: "Variant groups to preview components in labeled blocks.",
    required: false,
    type: [] as DocCategory[],
  },
  basicInfo: {
    name: "basicInfo",
    description: "Optional object for future general information section.",
    required: false,
    type: {} as object,
  },
};

export type DocumentationProps = {
  [K in keyof typeof DocumentationTypeScheme]?: (typeof DocumentationTypeScheme)[K]["type"]
} & {
  propTypesTitle?: string;
  propTypesNameLabel?: string;
  propTypesDescriptionLabel?: string;
  propTypesTypeLabel?: string;
  propTypesRequiredLabel?: string;
  propTypesYes?: string;
  propTypesNo?: string;
  darkMode?: boolean;
};
//@@viewOff:propTypes

const Documentation = ({
  title,
  propTypesList,
  componentList,
  propTypesTitle = "Prop Types",
  propTypesNameLabel = "Name",
  propTypesDescriptionLabel = "Description",
  propTypesTypeLabel = "Type",
  propTypesRequiredLabel = "Required",
  propTypesYes = "Yes",
  propTypesNo = "No",
  darkMode = true,
}: DocumentationProps) => {
  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  return (
    <div>
      {title && <h1>{title}</h1>}

       {componentList && componentList.length > 0 && (
        <section style={Css.section}>
          {componentList.map((group, gi) => (
            <Block key={gi} card="full" header={group.category} darkMode={darkMode}>
              <div style={Css.itemsGrid}>
                {group.itemList.map((item, ii) => (
                  <div key={ii} style={Css.itemCard}>
                    <div style={Css.itemLabel}>{item.label}</div>
                    <div>{item.components}</div>
                  </div>
                ))}
              </div>
            </Block>
          ))}
        </section>
      )}

       {propTypesList && propTypesList.length > 0 && (
        <section style={Css.section}>
          <h2>{propTypesTitle}</h2>
          <table style={Css.table}>
            <thead></thead>
            <tr>
              <th style={Css.th}>{propTypesNameLabel}</th>
              <th style={Css.th}>{propTypesDescriptionLabel}</th>
              <th style={Css.th}>{propTypesTypeLabel}</th>
              <th style={Css.th}>{propTypesRequiredLabel}</th>
            </tr>
            <tbody></tbody>
            {propTypesList.map((propType, index: number) => (
              <tr key={index}>
                <td style={Css.td}>{propType.name}</td>
                <td style={Css.td}>{propType.description}</td>
                <td style={Css.td}>{propType.type}</td>
                <td style={Css.td}>{propType.required ? propTypesYes : propTypesNo}</td>
              </tr>
            ))}
          </table>
        </section>
      )}

     

     
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Documentation };
export default Documentation;
//@@viewOff:exports
