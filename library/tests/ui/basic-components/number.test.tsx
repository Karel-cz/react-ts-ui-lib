import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Number } from "../../../ui/src/basic-components/Number";

describe("Number component", () => {
  it("renders without crashing", () => {
    render(<Number value={1234} />);
    expect(screen.getByText("1,234")).toBeInTheDocument();
  });

  it("renders with default props for a decimal value", () => {
    // default minDecimalDigits = 0, maxDecimalDigits defaults to 20,
    // so decimals are preserved but not padded
    render(<Number value={3.5} />);
    expect(screen.getByText("3.5")).toBeInTheDocument();
  });

  it("renders zero correctly", () => {
    render(<Number value={0} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders negative numbers correctly", () => {
    render(<Number value={-42} />);
    expect(screen.getByText("-42")).toBeInTheDocument();
  });

  it("renders very large numbers with grouping separators", () => {
    render(<Number value={1234567890} />);
    expect(screen.getByText("1,234,567,890")).toBeInTheDocument();
  });

  it("respects maxDecimalDigits by truncating/rounding decimals", () => {
    render(<Number value={3.14159} maxDecimalDigits={2} />);
    expect(screen.getByText("3.14")).toBeInTheDocument();
  });

  it("respects minDecimalDigits by padding with trailing zeros", () => {
    render(<Number value={5} minDecimalDigits={2} />);
    expect(screen.getByText("5.00")).toBeInTheDocument();
  });

  it("applies both minDecimalDigits and maxDecimalDigits together", () => {
    render(<Number value={5.6} minDecimalDigits={2} maxDecimalDigits={3} />);
    expect(screen.getByText("5.60")).toBeInTheDocument();
  });

  it("rounds correctly when value exceeds maxDecimalDigits precision", () => {
    render(<Number value={2.5678} maxDecimalDigits={1} />);
    expect(screen.getByText("2.6")).toBeInTheDocument();
  });

  it("fixDecimalDigits overrides both min and max decimal digits", () => {
    render(
      <Number
        value={5.6789}
        minDecimalDigits={0}
        maxDecimalDigits={4}
        fixDecimalDigits={1}
      />,
    );
    expect(screen.getByText("5.7")).toBeInTheDocument();
  });

  it("fixDecimalDigits pads whole numbers with zeros", () => {
    render(<Number value={7} fixDecimalDigits={3} />);
    expect(screen.getByText("7.000")).toBeInTheDocument();
  });

  it("renders the tooltip prop as the title attribute", () => {
    render(<Number value={10} tooltip="Custom tooltip text" />);
    expect(screen.getByText("10")).toHaveAttribute(
      "title",
      "Custom tooltip text",
    );
  });

  it("uses the raw value as the tooltip when wholeLengthNumberInTooltip is true", () => {
    render(<Number value={3.14159265358979} wholeLengthNumberInTooltip />);
    expect(screen.getByText("3.14159265358979")).toHaveAttribute(
      "title",
      "3.14159265358979",
    );
  });

  it("prefers explicit tooltip over wholeLengthNumberInTooltip", () => {
    render(
      <Number
        value={3.14159}
        tooltip="Explicit tooltip"
        wholeLengthNumberInTooltip
      />,
    );
    expect(screen.getByText("3.14159")).toHaveAttribute(
      "title",
      "Explicit tooltip",
    );
  });

  it("has no title attribute when neither tooltip nor wholeLengthNumberInTooltip is set", () => {
    render(<Number value={10} />);
    expect(screen.getByText("10")).not.toHaveAttribute("title");
  });

  it("merges custom style prop with the computed styles", () => {
    render(<Number value={10} style={{ fontWeight: "bold" }} />);
    expect(screen.getByText("10")).toHaveStyle({ fontWeight: "bold" });
  });

  it("renders consistently for darkMode and colorScheme prop combinations", () => {
    const { rerender } = render(
      <Number value={10} darkMode={false} colorScheme="surface" />,
    );
    expect(screen.getByText("10")).toBeInTheDocument();

    rerender(<Number value={10} darkMode={true} colorScheme="background" />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("matches snapshot for default rendering", () => {
    const { asFragment } = render(<Number value={1234.5} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
