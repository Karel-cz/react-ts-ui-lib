import React from "react";
import { render, screen } from "@testing-library/react";
import { Box } from "../Box";

describe("Box component", () => {
  it("renders without crashing", () => {
    render(<Box>Test Box</Box>);
    expect(screen.getByText("Test Box")).toBeInTheDocument();
  });
});
