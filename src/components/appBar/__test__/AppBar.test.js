import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AppBar from "../AppBar";

describe("AppBar component", () => {
  test("renders AppBar component with icons", () => {
    render(<AppBar />);

    // Use queryAllByAltText to find elements by alt text
    const productIcons = screen.queryAllByAltText("APP BAR ICON");

    // Assert that there is at least one matching element for each icon
    expect(productIcons.length).toBeGreaterThanOrEqual(1);
  });
});
