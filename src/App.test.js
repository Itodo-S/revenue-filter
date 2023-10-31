import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

describe("App component", () => {
  test("renders App component with subcomponents", () => {
    render(<App />);

    // Assert that the main components are rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("wallet-section")).toBeInTheDocument();
    expect(screen.getByTestId("transactions-section")).toBeInTheDocument();
    expect(screen.getByTestId("app-bar")).toBeInTheDocument();
  });
});
