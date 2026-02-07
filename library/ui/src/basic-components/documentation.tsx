/* eslint-disable react-refresh/only-export-components */
//@@viewOn:imports
import React, { useState } from "react";
import Block from "./Block";
import Label from "./Label";
import Box from "./Box";
import Badge from "./Badge";
import TabGroup, { type TabGroupItem } from "./TabGroup";
import {
  getColorScheme,
  getBorderColor,
  type ColorScheme,
} from "../tools/colors";

//@@viewOff:imports

//@@viewOn:constants
const BASIC_INFO = "basicInfo";
const PROP_TYPES = "propTypes";
const USAGE = "usage";
const EXAMPLES = "examples";

const STATES: Record<
  "production" | "nearlyReady" | "inProgress" | "draft",
  ColorScheme
> = {
  production: "success",
  nearlyReady: "warning",
  inProgress: "info",
  draft: "muted",
};


//@@viewOff:constants

//@@viewOn:css
const Css = {
  section: (): React.CSSProperties => ({
    marginTop: 0,
  }),
  table: (): React.CSSProperties => ({
    width: "100%",
    borderCollapse: "collapse",
  }),
  th: (borderColor: string): React.CSSProperties => ({
    textAlign: "left",
    borderBottom: `1px solid ${borderColor}`,
    padding: "8px",
  }),
  td: (borderColor: string): React.CSSProperties => ({
    borderBottom: `1px solid ${borderColor}`,
    padding: "8px",
    verticalAlign: "middle",
  }),
  itemsGrid: (): React.CSSProperties => ({
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "stretch",
  }),
  itemCard: (): React.CSSProperties => ({
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    padding: 8,
    borderRadius: 8,
    background: "transparent",
  }),
  itemLabel: (mutedColor: string): React.CSSProperties => ({
    fontSize: 12,
    color: mutedColor,
    textAlign: "center",
  }),
  box: (): React.CSSProperties => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "space-between",
  }),
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
    description:
      "Array of prop-type meta objects to render in the Prop Types table.",
    required: false,
    type: [] as Array<{
      name: string;
      description?: string;
      type?: string;
      required?: boolean;
    }>,
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
  state: {
    name: "state",
    description: "State of the component.",
    required: false,
    type: "production" as "production" | "nearlyReady" | "inProgress" | "draft",
  },
};

export type DocumentationProps = {
  [K in keyof typeof DocumentationTypeScheme]?: (typeof DocumentationTypeScheme)[K]["type"];
} & {
  propTypesTitle?: string;
  propTypesNameLabel?: string;
  propTypesDescriptionLabel?: string;
  propTypesTypeLabel?: string;
  propTypesRequiredLabel?: string;
  propTypesYes?: string;
  propTypesNo?: string;
  tabBasicInfoLabel?: string;
  tabExamplesLabel?: string;
  tabUsageLabel?: string;
  tabPropTypesLabel?: string;
  darkMode?: boolean;
  state?: "production" | "nearlyReady" | "inProgress" | "draft";
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
  tabBasicInfoLabel = "Basic",
  tabExamplesLabel = "Examples",
  tabUsageLabel = "Usage",
  tabPropTypesLabel = "Prop Types",
  darkMode = true,
  state = "draft",
}: DocumentationProps) => {

  //@@viewOn:private
  const [activeTab, setActiveTab] = useState<string>(BASIC_INFO);
  const borderColor = getBorderColor(darkMode);
  const mutedColor = getColorScheme("muted", darkMode).color;

  const tabsList: TabGroupItem[] = [
    {
      title: tabBasicInfoLabel,
      content: <div>{tabBasicInfoLabel}</div>,
      code: BASIC_INFO,
      onClick: () => {
        setActiveTab(BASIC_INFO);
      },
    },
    {
      title: tabExamplesLabel,
      code: EXAMPLES,
      onClick: () => {
        setActiveTab(EXAMPLES);
      },
      content: <>
        {componentList && componentList.length > 0 && (
          <section style={Css.section()}>
            {componentList.map((group, gi) => (
              <Block
                key={gi}
                card="full"
                header={group.category}
                darkMode={darkMode}
              >
                <div style={Css.itemsGrid()}>
                  {group.itemList.map((item, ii) => (
                    <div key={ii} style={Css.itemCard()}>
                      <div style={Css.itemLabel(mutedColor)}>{item.label}</div>
                      <div>{item.components}</div>
                    </div>
                  ))}
                </div>
              </Block>
            ))}
          </section>
        )}
      </>
    },
    {
      title: tabUsageLabel,
      content: <div>{tabUsageLabel}</div>,
      code: USAGE,
      onClick: () => {
        setActiveTab(USAGE);
      },
    },
    {
      title: tabPropTypesLabel,
      code: PROP_TYPES,
      onClick: () => {
        setActiveTab(PROP_TYPES);
      },
      content: <Block header={propTypesTitle} darkMode={darkMode}>
        {propTypesList && propTypesList.length > 0 && (
          <section style={Css.section()}>
            <table style={Css.table()}>
              <thead>
                <tr>
                  <th style={Css.th(borderColor)}>{propTypesNameLabel}</th>
                  <th style={Css.th(borderColor)}>{propTypesDescriptionLabel}</th>
                  <th style={Css.th(borderColor)}>{propTypesTypeLabel}</th>
                  <th style={Css.th(borderColor)}>{propTypesRequiredLabel}</th>
                </tr>
              </thead>
              <tbody>
                {propTypesList.map((propType, index: number) => (
                  <tr key={index}>
                    <td style={Css.td(borderColor)}>{propType.name}</td>
                    <td style={Css.td(borderColor)}>{propType.description}</td>
                    <td style={Css.td(borderColor)}>{propType.type}</td>
                    <td style={Css.td(borderColor)}>
                      {propType.required ? propTypesYes : propTypesNo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </Block>
    },

  ];

  //@@viewOff:private

  //@@viewOn:render


  return (
    <div>
      <Box darkMode={darkMode} style={Css.box()} borderRadius="none" borderTop={false} borderLeft={false} borderRight={false}   >
        <Label darkMode={darkMode} style={{ width: "auto", flex: "0 1 auto" }}>{title}</Label>
        <Badge colorScheme={STATES[state]} darkMode={darkMode}>{state}</Badge>
      </Box>
      <TabGroup
        itemList={tabsList}
        codeActive={activeTab}
        onChange={(code) => setActiveTab(code as string)}
        contentStyle={{ paddingTop: 0 }}
      />
    </div>
  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Documentation };
export default Documentation;
//@@viewOff:exports
