import React, { useRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Popover,type PopoverProps } from "../../../ui/src/basic-components/Popover";

type TestHostProps = Partial<PopoverProps>;

const renderPopover = (props: TestHostProps = {}) => {
  const onOpenChange = props.onOpenChange ?? jest.fn();

  const Host = () => {
    const triggerRef = useRef<HTMLButtonElement>(null);
    return (
      <div>
        <button ref={triggerRef}>Trigger</button>
        <Popover
          open={true}
          onOpenChange={onOpenChange}
          content="Popover content"
          {...props}
          triggerRef={triggerRef}
        />
      </div>
    );
  };

  const utils = render(<Host />);
  return { ...utils, onOpenChange };
};

describe("Popover component", () => {
  it("renders nothing when hidden is true", () => {
    renderPopover({ hidden: true });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders nothing when open is false", () => {
    renderPopover({ open: false });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders nothing when content is null", () => {
    renderPopover({ content: null });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders nothing when content is undefined", () => {
    renderPopover({ content: undefined });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders content in a portal attached to document.body when open", async () => {
    renderPopover();
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent("Popover content");
    expect(dialog.parentElement).toBe(document.body);
  });

  it("renders custom React node content", async () => {
    renderPopover({
      content: (
        <div data-testid="custom-content">
          <strong>Bold text</strong>
        </div>
      ),
    });
    expect(await screen.findByTestId("custom-content")).toBeInTheDocument();
    expect(screen.getByText("Bold text").tagName).toBe("STRONG");
  });

  it("sets aria-hidden to false while open", async () => {
    renderPopover();
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAttribute("aria-hidden", "false");
  });

  it("applies the no-print class when noPrint is true", async () => {
    renderPopover({ noPrint: true });
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveClass("no-print");
  });

  it("does not apply a class name by default", async () => {
    renderPopover();
    const dialog = await screen.findByRole("dialog");
    expect(dialog.className).toBe("");
  });

  it("applies default panel styling", async () => {
    renderPopover();
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveStyle({ padding: "12px" });
  });

  it("skips default panel styling when removeDefaultStyle is true", async () => {
    renderPopover({ removeDefaultStyle: true });
    const dialog = await screen.findByRole("dialog");
    expect(dialog).not.toHaveStyle({ padding: "12px" });
  });

  it("merges a custom style prop with the computed styles", async () => {
    renderPopover({ style: { marginTop: 10 } });
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveStyle({ marginTop: "10px", padding: "12px" });
  });

  it("defaults zIndex to 1000", async () => {
    renderPopover();
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveStyle({ zIndex: 1000 });
  });

  it("applies a custom zIndex to the panel", async () => {
    renderPopover({ zIndex: 2000 });
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveStyle({ zIndex: 2000 });
  });

  it("calls onOpenChange(false) when clicking outside the trigger and panel", async () => {
    const onOpenChange = jest.fn();
    renderPopover({ onOpenChange });
    await screen.findByRole("dialog");

    fireEvent.mouseDown(document.body);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("does not call onOpenChange when clicking inside the panel", async () => {
    const onOpenChange = jest.fn();
    renderPopover({ onOpenChange });
    const dialog = await screen.findByRole("dialog");

    fireEvent.mouseDown(dialog);

    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("does not call onOpenChange when clicking the trigger", async () => {
    const onOpenChange = jest.fn();
    renderPopover({ onOpenChange });
    await screen.findByRole("dialog");

    fireEvent.mouseDown(screen.getByText("Trigger"));

    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("calls onOpenChange(false) when Escape is pressed", async () => {
    const onOpenChange = jest.fn();
    renderPopover({ onOpenChange });
    await screen.findByRole("dialog");

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("does not call onOpenChange for keys other than Escape", async () => {
    const onOpenChange = jest.fn();
    renderPopover({ onOpenChange });
    await screen.findByRole("dialog");

    fireEvent.keyDown(document, { key: "Enter" });

    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("renders when content is an empty string", async () => {
    renderPopover({ content: "" });
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent("");
  });

  it("renders very large content without crashing", async () => {
    const longText = "A".repeat(5000);
    renderPopover({ content: longText });
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveTextContent(longText);
  });

  it("matches snapshot when open with content", async () => {
    renderPopover();
    await screen.findByRole("dialog");
    expect(document.body).toMatchSnapshot();
  });
});
