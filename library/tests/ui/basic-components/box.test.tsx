import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Box } from "../../../ui/src/basic-components/Box";

describe("Box component", () => {
  it("renders without crashing", () => {
    render(<Box>Test Box</Box>);
    expect(screen.getByText("Test Box")).toBeInTheDocument();
  });

  it("renders custom children content", () => {
    render(
      <Box>
        <span data-testid="custom-child">Custom child content</span>
      </Box>,
    );
    expect(screen.getByTestId("custom-child")).toBeInTheDocument();
    expect(screen.getByText("Custom child content")).toBeInTheDocument();
  });

  it("renders nothing when hidden is true", () => {
    render(<Box hidden>Should not render</Box>);
    expect(screen.queryByText("Should not render")).not.toBeInTheDocument();
  });

  it("renders empty when no children are provided", () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("applies default padding of 16px", () => {
    render(<Box>Padded content</Box>);
    expect(screen.getByText("Padded content")).toHaveStyle({
      padding: "16px",
    });
  });

  it("applies a custom padding value", () => {
    render(<Box padding={32}>Padded content</Box>);
    expect(screen.getByText("Padded content")).toHaveStyle({
      padding: "32px",
    });
  });

  it("supports a padding of 0", () => {
    render(<Box padding={0}>No padding</Box>);
    expect(screen.getByText("No padding")).toHaveStyle({ padding: "0px" });
  });

  it("supports an extreme padding value", () => {
    render(<Box padding={1000}>Huge padding</Box>);
    expect(screen.getByText("Huge padding")).toHaveStyle({
      padding: "1000px",
    });
  });

  it("shows all borders by default", () => {
    render(<Box>Bordered</Box>);
    const box = screen.getByText("Bordered");
    expect(box).not.toHaveStyle({ borderTop: "none" });
    expect(box).not.toHaveStyle({ borderRight: "none" });
    expect(box).not.toHaveStyle({ borderBottom: "none" });
    expect(box).not.toHaveStyle({ borderLeft: "none" });
  });

  it("hides the top border when borderTop is false", () => {
    render(<Box borderTop={false}>No top border</Box>);
    expect(screen.getByText("No top border")).toHaveStyle({
      borderTop: "none",
    });
  });

  it("hides the right border when borderRight is false", () => {
    render(<Box borderRight={false}>No right border</Box>);
    expect(screen.getByText("No right border")).toHaveStyle({
      borderRight: "none",
    });
  });

  it("hides the bottom border when borderBottom is false", () => {
    render(<Box borderBottom={false}>No bottom border</Box>);
    expect(screen.getByText("No bottom border")).toHaveStyle({
      borderBottom: "none",
    });
  });

  it("hides the left border when borderLeft is false", () => {
    render(<Box borderLeft={false}>No left border</Box>);
    expect(screen.getByText("No left border")).toHaveStyle({
      borderLeft: "none",
    });
  });

  it("hides all borders when all border props are false", () => {
    render(
      <Box
        borderTop={false}
        borderRight={false}
        borderBottom={false}
        borderLeft={false}
      >
        No borders
      </Box>,
    );
    const box = screen.getByText("No borders");
    expect(box).toHaveStyle({
      borderTop: "none",
      borderRight: "none",
      borderBottom: "none",
      borderLeft: "none",
    });
  });

  it("applies a border radius by default", () => {
    render(<Box>Rounded</Box>);
    const box = screen.getByText("Rounded");
    expect(box.style.borderRadius).not.toBe("");
  });

  it("applies box-sizing: border-box by default", () => {
    render(<Box>Sized</Box>);
    expect(screen.getByText("Sized")).toHaveStyle({ boxSizing: "border-box" });
  });

  it("removes default styling when removeDefaultStyle is true", () => {
    render(<Box removeDefaultStyle>No default style</Box>);
    const box = screen.getByText("No default style");
    expect(box).not.toHaveStyle({ padding: "16px" });
    expect(box.style.borderRadius).toBe("");
  });

  it("applies the no-print class when noPrint is true", () => {
    render(<Box noPrint>No print content</Box>);
    expect(screen.getByText("No print content")).toHaveClass("no-print");
  });

  it("does not apply a class name by default", () => {
    render(<Box>Default class</Box>);
    expect(screen.getByText("Default class")).not.toHaveClass("no-print");
  });

  it("merges a custom style prop with the computed styles", () => {
    render(<Box style={{ marginTop: 20 }}>Styled content</Box>);
    expect(screen.getByText("Styled content")).toHaveStyle({
      marginTop: "20px",
      padding: "16px",
    });
  });

  it("lets a custom style prop override computed styles", () => {
    render(<Box style={{ padding: "5px" }}>Overridden padding</Box>);
    expect(screen.getByText("Overridden padding")).toHaveStyle({
      padding: "5px",
    });
  });

  it("renders consistently for darkMode prop variations", () => {
    const { rerender } = render(<Box darkMode={false}>Light mode</Box>);
    expect(screen.getByText("Light mode")).toBeInTheDocument();

    rerender(<Box darkMode={true}>Dark mode</Box>);
    expect(screen.getByText("Dark mode")).toBeInTheDocument();
  });

  it("renders long/large children content without crashing", () => {
    const longText = "A".repeat(5000);
    render(<Box>{longText}</Box>);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it("matches snapshot for default rendering", () => {
    const { asFragment } = render(<Box>Snapshot content</Box>);
    expect(asFragment()).toMatchSnapshot();
  });
});
