import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Block } from "../../../ui/src/basic-components/Block";

describe("Block component", () => {
  it("renders without crashing", () => {
    render(<Block>Test Block</Block>);
    expect(screen.getByText("Test Block")).toBeInTheDocument();
  });
});
