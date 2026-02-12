/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React from "react";
import Block from "./Block";
import { getColorScheme, getBorderColor } from "../tools/colors";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const getCss = (darkMode: boolean = true) => {
  const borderColor = getBorderColor(darkMode);
  const textScheme = getColorScheme("text", darkMode);

  return {
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
      borderBottom: `1px solid ${borderColor}`,
      padding: "8px",
    } as React.CSSProperties,
    td: {
      borderBottom: `1px solid ${borderColor}`,
      padding: "8px",
      verticalAlign: "middle",
    } as React.CSSProperties,
    codeBlock: {
      padding: "12px",
      borderRadius: "4px",
      overflow: "auto",
      marginTop: 8,
    } as React.CSSProperties,
    code: {
      fontFamily: "monospace",
      fontSize: "14px",
      color: textScheme.color,
      whiteSpace: "pre",
    } as React.CSSProperties,
    container: {
      margin: 12,
    } as React.CSSProperties,
  };
};
//@@viewOff:css

//@@viewOn:helpers
export type UtilityParameter = {
  name: string;
  description?: string;
  type?: string;
  required?: boolean;
};

export type UsageExample = {
  title?: string;
  code: string;
};
//@@viewOff:helpers

//@@viewOn:propTypes
export const UtilityDocumentationTypeScheme = {
  title: {
    name: "title",
    required: false,
    type: "" as string,
  },
  demoComponent: {
    name: "demoComponent",
    required: false,
    type: null as React.ReactNode,
  },
  parametersList: {
    name: "parametersList",
    type: [] as UtilityParameter[],
  },
  usageExamples: {
    name: "usageExamples",
    required: false,
    type: [] as UsageExample[],
  },
  parametersTitle: {
    name: "parametersTitle",
    required: false,
    type: "" as string,
  },
  parametersNameLabel: {
    name: "parametersNameLabel",
    required: false,
    type: "" as string,
  },
  parametersDescriptionLabel: {
    name: "parametersDescriptionLabel",
    required: false,
    type: "" as string,
  },
  parametersTypeLabel: {
    name: "parametersTypeLabel",
    required: false,
    type: "" as string,
  },
  parametersRequiredLabel: {
    name: "parametersRequiredLabel",
    required: false,
    type: "" as string,
  },
  parametersYes: {
    name: "parametersYes",
    required: false,
    type: "" as string,
  },
  parametersNo: {
    name: "parametersNo",
    required: false,
    type: "" as string,
  },
  usageTitle: {
    name: "usageTitle",
    required: false,
    type: "" as string,
  },
  darkMode: {
    name: "darkMode",
    required: false,
    type: true as boolean,
  },
};

export type UtilityDocumentationProps = {
  [K in keyof typeof UtilityDocumentationTypeScheme]?: (typeof UtilityDocumentationTypeScheme)[K]["type"];
};
//@@viewOff:propTypes

const UtilityDocumentation = ({
  title,
  demoComponent,
  parametersList,
  usageExamples,
  parametersTitle = "Parameters",
  parametersNameLabel = "Name",
  parametersDescriptionLabel = "Description",
  parametersTypeLabel = "Type",
  parametersRequiredLabel = "Required",
  parametersYes = "Yes",
  parametersNo = "No",
  usageTitle = "Usage Examples",
  darkMode = true,
}: UtilityDocumentationProps) => {
  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  const Css = getCss(darkMode);

  return (
    <div style={Css.container}>
      {title && <h1>{title}</h1>}

      {demoComponent && (
        <section style={Css.section}>
          <Block card="full" header="Demo" darkMode={darkMode}>
            {demoComponent}
          </Block>
        </section>
      )}

      {parametersList && parametersList.length > 0 && (
        <section style={Css.section}>
          <Block card="full" header={parametersTitle} darkMode={darkMode}>
            <table style={Css.table}>
              <thead>
                <tr>
                  <th style={Css.th}>{parametersNameLabel}</th>
                  <th style={Css.th}>{parametersDescriptionLabel}</th>
                  <th style={Css.th}>{parametersTypeLabel}</th>
                  <th style={Css.th}>{parametersRequiredLabel}</th>
                </tr>
              </thead>
              <tbody>
                {parametersList.map((param, index: number) => (
                  <tr key={index}>
                    <td style={Css.td}>{param.name}</td>
                    <td style={Css.td}>{param.description || "-"}</td>
                    <td style={Css.td}>{param.type || "-"}</td>
                    <td style={Css.td}>
                      {param.required ? parametersYes : parametersNo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Block>
        </section>
      )}

      {usageExamples && usageExamples.length > 0 && (
        <section style={Css.section}>
          <Block card="full" header={usageTitle} darkMode={darkMode}>
            {usageExamples.map((example, index: number) => (
              <div key={index} style={{ marginTop: index > 0 ? 16 : 0 }}>
                {example.title && (
                  <h3 style={{ marginBottom: 8 }}>{example.title}</h3>
                )}
                <div style={Css.codeBlock}>
                  <pre style={Css.code}>{example.code}</pre>
                </div>
              </div>
            ))}
          </Block>
        </section>
      )}
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { UtilityDocumentation };
export default UtilityDocumentation;
//@@viewOff:exports
