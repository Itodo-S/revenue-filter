import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

// Mocking the image imports
jest.mock("../../../assets/icons", () => ({
  app: "../../../assets/icons/app.svg",
  chart: "../../../assets/icons/chart.svg",
  chat: "../../../assets/icons/chat.svg",
  group: "../../../assets/icons/group.svg",
  home: "../../../assets/icons/home.svg",
  logo: "../../../assets/icons/logo.svg",
  menue: "../../../assets/icons/menu.svg",
  notification: "../../../assets/icons/notifications.svg",
  payment: "../../../assets/icons/payment.svg",
}));

describe("Header Component", () => {
  test("renders header with navigation items", () => {
    render(<Header />);

    // Checking if the logo is present
    expect(screen.getByAltText("MAINSTACK LOGO")).toBeInTheDocument();

    // Checking if each navigation item is present
    const navigationItems = ["Home", "Analytics", "Revenue", "CRM", "Apps"];
    navigationItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    // Checking alt attribute for profile icons
    const profileIcons = [
      "ICON",
      "ICON",
      "ICON",
      "ICON",
      "ICON",
      "ICON",
      "ICON",
      "ICON",
    ];
    const profileIconElements = screen.getAllByAltText("ICON");

    // Assert that there are the correct number of profile icon elements
    expect(profileIconElements.length).toBe(profileIcons.length);

    // Assert that each profile icon element is in the document
    profileIconElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
