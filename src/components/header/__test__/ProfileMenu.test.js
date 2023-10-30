import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileMenu from "../ProfileMenu";
import { useMainStack } from "../../../context/MainStackContext";

// Mocking the context function
jest.mock("../../../context/MainStackContext");

describe("ProfileMenu Component", () => {
  // Mock user data for testing
  const mockUser = {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
  };

  // Mock the context value
  useMainStack.mockReturnValue({ user: mockUser });

  test("renders profile menu with user information", () => {
    render(<ProfileMenu />);

    // Check if user initials are displayed
    const userInitialsElement = screen.getByText(/JD/i);
    expect(userInitialsElement).toBeInTheDocument();

    // Check if user full name and email are displayed
    const fullNameElement = screen.getByText(/John Doe/i);
    const emailElement = screen.getByText(/john.doe@example.com/i);
    expect(fullNameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();

    // Check if each menu item is present
    const menuItems = [
      "Settings",
      "Purchase History",
      "Refer and Earn",
      "Integrations",
      "Report Bugs",
      "Switch Account",
      "Sign Out",
    ];

    menuItems.forEach((item) => {
      const menuItemElement = screen.getByText(item);
      expect(menuItemElement).toBeInTheDocument();
    });
  });
});
