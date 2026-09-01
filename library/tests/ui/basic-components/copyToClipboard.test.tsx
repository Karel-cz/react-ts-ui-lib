import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as mdiIcons from "@mdi/js";
import {
  CopyToClipboard,
  COPY_TO_CLIPBOARD_PROP_NAMES,
} from "../../../ui/src/basic-components/CopyToClipboard";
import DefaultCopyToClipboard from "../../../ui/src/basic-components/CopyToClipboard";

jest.mock("@mdi/react", () => ({
  Icon: ({
    path,
    size,
    color,
    style,
  }: {
    path: string;
    size: number;
    color: string;
    style?: React.CSSProperties;
  }) => (
    <svg
      data-testid="mdi-icon"
      data-path={path}
      data-size={size}
      data-color={color}
      style={style}
    />
  ),
}));

describe("CopyToClipboard component", () => {
  describe("default rendering", () => {
    it("renders without crashing with required props", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard text="test text" onCopy={onCopy} />
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders a <span> with role='button' and default aria-label", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text="test text" onCopy={onCopy} />);
      const button = screen.getByRole("button", { name: "Copy" });
      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe("SPAN");
    });

    it("renders default label text 'Copy'", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text="test text" onCopy={onCopy} />);
      expect(screen.getByText("Copy")).toBeInTheDocument();
    });

    it("renders the copy icon initially", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text="test text" onCopy={onCopy} />);
      const icon = screen.getByTestId("mdi-icon");
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("data-path", mdiIcons.mdiContentCopy);
    });

    it("applies default container styles", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard text="test text" onCopy={onCopy} />
      );
      expect(container.firstChild).toHaveStyle({
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      });
    });
  });

  describe("props handling", () => {
    it("renders a custom label and sets aria-label", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard
          text="https://example.com"
          onCopy={onCopy}
          label="Copy URL"
        />
      );
      expect(screen.getByText("Copy URL")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Copy URL" })
      ).toBeInTheDocument();
    });

    it("falls back to 'Copy to clipboard' aria-label when label is not a string", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard
          text="text"
          onCopy={onCopy}
          label={123 as any}
        />
      );
      expect(
        screen.getByRole("button", { name: "Copy to clipboard" })
      ).toBeInTheDocument();
    });

    it("falls back to 'Copy to clipboard' aria-label in removeDefaultStyle when label is not a string", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard
          text="text"
          onCopy={onCopy}
          removeDefaultStyle
          label={123 as any}
        />
      );
      expect(
        screen.getByRole("button", { name: "Copy to clipboard" })
      ).toBeInTheDocument();
    });

    it("does not render a label span when label is empty", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard text="text" onCopy={onCopy} label="" />
      );
      const spans = container.querySelectorAll("span > span");
      expect(spans).toHaveLength(0);
    });

    it("renders custom children instead of default icon and label", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard text="text" onCopy={onCopy}>
          <div data-testid="custom-child">Custom Content</div>
        </CopyToClipboard>
      );
      expect(screen.getByTestId("custom-child")).toBeInTheDocument();
      expect(screen.queryByText("Copy")).not.toBeInTheDocument();
      expect(screen.queryByTestId("mdi-icon")).not.toBeInTheDocument();
    });

    it("sets the title attribute when tooltip is provided", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard
          text="text"
          onCopy={onCopy}
          tooltip="Click to copy to clipboard"
        />
      );
      expect(screen.getByTitle("Click to copy to clipboard")).toBeInTheDocument();
    });

    it("does not set a title attribute when tooltip is omitted", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard text="text" onCopy={onCopy} />
      );
      expect(container.firstChild).not.toHaveAttribute("title");
    });

    it("merges custom style prop with container styles", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard
          text="text"
          onCopy={onCopy}
          style={{ padding: "12px", opacity: 0.8 }}
        />
      );
      expect(container.firstChild).toHaveStyle({
        display: "inline-flex",
        padding: "12px",
        opacity: "0.8",
      });
    });

    it("handles removeDefaultStyle=true without children", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard
          text="text"
          onCopy={onCopy}
          removeDefaultStyle
          label="Copy Clean"
        />
      );
      expect(container.firstChild).not.toHaveStyle({ gap: "8px" });
      expect(screen.getByText("Copy Clean")).toBeInTheDocument();
      expect(screen.getByTestId("mdi-icon")).toBeInTheDocument();
    });

    it("handles removeDefaultStyle=true with custom children", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard text="text" onCopy={onCopy} removeDefaultStyle>
          <button>Clean Button</button>
        </CopyToClipboard>
      );
      expect(screen.getByText("Clean Button")).toBeInTheDocument();
      expect(screen.queryByTestId("mdi-icon")).not.toBeInTheDocument();
    });

    it("renders without icon background wrapper when backgroundColorScheme is null", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard
          text="text"
          onCopy={onCopy}
          backgroundColorScheme={null}
        />
      );
      // No intermediate wrapper div between container and icon
      const wrapperDiv = container.querySelector("div");
      expect(wrapperDiv).toBeNull();
      expect(screen.getByTestId("mdi-icon")).toBeInTheDocument();
    });

    it("applies custom borderRadius and backgroundColorScheme", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { container } = render(
        <CopyToClipboard
          text="text"
          onCopy={onCopy}
          borderRadius="lg"
          backgroundColorScheme="primary"
        />
      );
      const wrapperDiv = container.querySelector("div");
      expect(wrapperDiv).toBeInTheDocument();
      expect(wrapperDiv).toHaveStyle({ cursor: "pointer" });
    });

    it("renders properly with darkMode=false and darkMode=true", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { rerender } = render(
        <CopyToClipboard text="text" onCopy={onCopy} darkMode={false} />
      );
      expect(screen.getByRole("button")).toBeInTheDocument();

      rerender(<CopyToClipboard text="text" onCopy={onCopy} darkMode={true} />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("copy action and status transitions", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("calls onCopy with the provided text when root element is clicked", async () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text="https://test.io" onCopy={onCopy} />);

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(onCopy).toHaveBeenCalledTimes(1);
      expect(onCopy).toHaveBeenCalledWith("https://test.io");
    });

    it("switches to check icon on successful copy and resets after 1500ms", async () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text="copied text" onCopy={onCopy} />);

      expect(screen.getByTestId("mdi-icon")).toHaveAttribute(
        "data-path",
        mdiIcons.mdiContentCopy
      );

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      // Check icon is shown upon success
      expect(screen.getByTestId("mdi-icon")).toHaveAttribute(
        "data-path",
        mdiIcons.mdiCheck
      );

      // Advance timers by 1500ms
      act(() => {
        jest.advanceTimersByTime(1500);
      });

      // Icon should reset back to copy icon
      expect(screen.getByTestId("mdi-icon")).toHaveAttribute(
        "data-path",
        mdiIcons.mdiContentCopy
      );
    });

    it("handles onCopy resolving to false (failure)", async () => {
      const onCopy = jest.fn().mockResolvedValue(false);
      render(<CopyToClipboard text="failed text" onCopy={onCopy} />);

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(onCopy).toHaveBeenCalledWith("failed text");
      // When false, status is "error", icon remains copy icon
      expect(screen.getByTestId("mdi-icon")).toHaveAttribute(
        "data-path",
        mdiIcons.mdiContentCopy
      );
    });

    it("calls onCopy only once when clicking directly on the icon", async () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text="icon click" onCopy={onCopy} />);

      const icon = screen.getByTestId("mdi-icon");
      await act(async () => {
        fireEvent.click(icon);
      });

      expect(onCopy).toHaveBeenCalledTimes(1);
      expect(onCopy).toHaveBeenCalledWith("icon click");
    });

    it("calls onCopy when clicking on the icon in removeDefaultStyle mode", async () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard text="icon clean click" onCopy={onCopy} removeDefaultStyle />
      );

      const icon = screen.getByTestId("mdi-icon");
      await act(async () => {
        fireEvent.click(icon);
      });

      expect(onCopy).toHaveBeenCalledTimes(1);
      expect(onCopy).toHaveBeenCalledWith("icon clean click");
    });

    it("calls onCopy when clicking on custom children", async () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(
        <CopyToClipboard text="child click" onCopy={onCopy}>
          <button>Custom Trigger</button>
        </CopyToClipboard>
      );

      await act(async () => {
        fireEvent.click(screen.getByText("Custom Trigger"));
      });

      expect(onCopy).toHaveBeenCalledTimes(1);
      expect(onCopy).toHaveBeenCalledWith("child click");
    });
  });

  describe("edge cases", () => {
    it("handles empty string text prop", async () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text="" onCopy={onCopy} />);

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(onCopy).toHaveBeenCalledWith("");
    });

    it("handles very long text strings without crashing", async () => {
      const longText = "x".repeat(10000);
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text={longText} onCopy={onCopy} />);

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(onCopy).toHaveBeenCalledWith(longText);
    });

    it("handles text with special characters and line breaks", async () => {
      const specialText = "line1\nline2\t<xml>&\"'\u00A0";
      const onCopy = jest.fn().mockResolvedValue(true);
      render(<CopyToClipboard text={specialText} onCopy={onCopy} />);

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(onCopy).toHaveBeenCalledWith(specialText);
    });

    it("exports COPY_TO_CLIPBOARD_PROP_NAMES containing all expected props", () => {
      expect(COPY_TO_CLIPBOARD_PROP_NAMES).toEqual([
        "text",
        "onCopy",
        "label",
        "children",
        "darkMode",
        "style",
        "removeDefaultStyle",
        "borderRadius",
        "backgroundColorScheme",
        "tooltip",
      ]);
    });

    it("provides both named and default exports identically", () => {
      expect(CopyToClipboard).toBe(DefaultCopyToClipboard);
    });
  });

  describe("snapshots", () => {
    it("matches snapshot for default rendering", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { asFragment } = render(
        <CopyToClipboard text="snapshot text" onCopy={onCopy} />
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("matches snapshot with removeDefaultStyle", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { asFragment } = render(
        <CopyToClipboard
          text="snapshot text"
          onCopy={onCopy}
          removeDefaultStyle
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("matches snapshot with custom children", () => {
      const onCopy = jest.fn().mockResolvedValue(true);
      const { asFragment } = render(
        <CopyToClipboard text="snapshot text" onCopy={onCopy}>
          <span>Copy something</span>
        </CopyToClipboard>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
