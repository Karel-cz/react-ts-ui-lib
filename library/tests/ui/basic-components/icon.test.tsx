import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Icon } from "../../../ui/src/basic-components/Icon";

jest.mock("@mdi/react", () => ({
  Icon: ({ path, size, color, style }: { path: string; size: number; color: string; style?: React.CSSProperties }) => (
    <svg data-testid="mdi-icon" data-path={path} data-size={size} data-color={color} style={style} />
  ),
}));

jest.mock("../../../ui/src/tools/size", () => ({
  getIconSize: jest.fn(() => ({ size: 24 })),
}));

jest.mock("../../../ui/src/tools/colors", () => ({
  getColorScheme: jest.fn(() => ({ color: "#000000" })),
}));


const silenceWarn = () =>
  jest.spyOn(console, "warn").mockImplementation(() => {});



describe("Icon component", () => {

  describe("default rendering", () => {
    it("renders without crashing using default props", () => {
      const { container } = render(<Icon />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders a <span> as the root element", () => {
      const { container } = render(<Icon />);
      expect(container.firstChild?.nodeName).toBe("SPAN");
    });

    it("renders inline-flex layout by default", () => {
      const { container } = render(<Icon />);
      expect(container.firstChild).toHaveStyle({ display: "inline-flex" });
    });
  });


  describe("icon name resolution", () => {
    it("renders a known kebab-case icon name (mdi-home)", () => {
      const { container } = render(<Icon icon="mdi-home" />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders a multi-word kebab-case icon name (mdi-account-circle)", () => {
      const { container } = render(<Icon icon="mdi-account-circle" />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("returns null and emits a console.warn for an unknown icon name", () => {
      const warn = silenceWarn();
      const { container } = render(<Icon icon="mdi-this-icon-does-not-exist" />);
      expect(container.firstChild).toBeNull();
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("not found")
      );
      warn.mockRestore();
    });

    it("returns null silently when icon prop is an empty string", () => {
      const { container } = render(<Icon icon="" />);
      expect(container.firstChild).toBeNull();
    });
  });


  describe("hidden prop", () => {
    it("returns null when hidden is true", () => {
      const { container } = render(<Icon hidden />);
      expect(container.firstChild).toBeNull();
    });

    it("renders normally when hidden is false (default)", () => {
      const { container } = render(<Icon hidden={false} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });


  describe("label prop", () => {
    it("renders the label text when provided", () => {
      render(<Icon icon="mdi-home" label="Home" />);
      expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("does not render a label span when label is empty (default)", () => {
      const { container } = render(<Icon icon="mdi-home" />);
      const spans = container.querySelectorAll("span > span");
      expect(spans).toHaveLength(0);
    });
  });


  describe("tooltip prop", () => {
    it("sets the title attribute on the root span when tooltip is provided", () => {
      render(<Icon icon="mdi-home" tooltip="Go to home" />);
      expect(screen.getByTitle("Go to home")).toBeInTheDocument();
    });

    it("does not set a title attribute when tooltip is omitted", () => {
      const { container } = render(<Icon icon="mdi-home" />);
      expect(container.firstChild).not.toHaveAttribute("title");
    });
  });


  describe("onClick prop", () => {
    it("calls onClick handler when the icon is clicked", async () => {
      const handleClick = jest.fn();
      render(<Icon icon="mdi-home" onClick={handleClick} tooltip="click-me" />);
      await userEvent.click(screen.getByTitle("click-me"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies pointer cursor when onClick is provided", () => {
      const { container } = render(<Icon icon="mdi-home" onClick={() => {}} />);
      expect(container.firstChild).toHaveStyle({ cursor: "pointer" });
    });

    it("applies inherit cursor when onClick is not provided", () => {
      const { container } = render(<Icon icon="mdi-home" />);
      expect(container.firstChild).toHaveStyle({ cursor: "inherit" });
    });
  });


  describe("size prop", () => {
    it("renders with a numeric size value", () => {
      const { container } = render(<Icon icon="mdi-home" size={48} />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders with a SizeToken string ('sm')", () => {
      const { container } = render(<Icon icon="mdi-home" size="sm" />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders with a SizeToken string ('lg')", () => {
      const { container } = render(<Icon icon="mdi-home" size="lg" />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });


  describe("color and colorScheme props", () => {
    it("renders without error when color is provided", () => {
      const { container } = render(<Icon icon="mdi-home" color="#ff0000" />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders without error when colorScheme is provided", () => {
      const { container } = render(<Icon icon="mdi-home" colorScheme="primary" />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });


  describe("style prop", () => {
    it("merges custom style with the base styles", () => {
      const { container } = render(
        <Icon icon="mdi-home" style={{ opacity: 0.5, marginTop: 8 }} />
      );
      expect(container.firstChild).toHaveStyle({ opacity: 0.5, marginTop: "8px" });
    });

    it("custom style does not remove base inline-flex display", () => {
      const { container } = render(
        <Icon icon="mdi-home" style={{ color: "red" }} />
      );
      expect(container.firstChild).toHaveStyle({ display: "inline-flex" });
    });
  });


  describe("removeDefaultStyle prop", () => {
    it("renders without crashing when removeDefaultStyle is true", () => {
      const { container } = render(<Icon icon="mdi-home" removeDefaultStyle />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("passes an empty style object to the inner icon when removeDefaultStyle is true", () => {
      render(<Icon icon="mdi-home" removeDefaultStyle />);
      const svg = screen.getByTestId("mdi-icon");
      expect(svg).not.toHaveStyle({ display: "flex" });
    });

    it("passes display:flex style to the inner icon by default", () => {
      render(<Icon icon="mdi-home" />);
      expect(screen.getByTestId("mdi-icon")).toHaveStyle({ display: "flex" });
    });
  });


  describe("darkMode prop", () => {
    it("renders in darkMode=true (default)", () => {
      const { container } = render(<Icon icon="mdi-home" darkMode />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders in darkMode=false", () => {
      const { container } = render(<Icon icon="mdi-home" darkMode={false} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});