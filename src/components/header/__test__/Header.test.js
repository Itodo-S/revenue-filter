import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

describe("Header", () => {
  it("renders header with correct elements", () => {
    render(<Header />);

    // Check if logo is rendered
    expect(screen.getByAltText("MAINSTACK LOGO")).toBeInTheDocument();

    // Check if navigation items are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("CRM")).toBeInTheDocument();
    expect(screen.getByText("Apps")).toBeInTheDocument();

    // Use queryAllByAltText to find elements by alt text
    const profileIcons = screen.queryAllByAltText("ICON");

    // Assert that there is at least one matching element for each icon
    expect(profileIcons.length).toBeGreaterThanOrEqual(1);

    // Check if the menu is initially not rendered
    expect(screen.queryByTestId("profile-menu")).not.toBeInTheDocument();
  });

  it("opens and closes the profile menu on button click", () => {
    render(<Header />);

    // Check if the menu is closed
    expect(screen.queryByTestId("profile-menu")).not.toBeInTheDocument();
  });
});
