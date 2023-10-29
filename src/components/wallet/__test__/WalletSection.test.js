import React from "react";
import { render, screen } from "@testing-library/react";
import WalletSection from "../WalletSection";

describe("WalletSection", () => {
  it("renders the component with mock data", () => {
    render(<WalletSection />);

    expect(screen.getByText("Available Balance")).toBeInTheDocument();
    expect(screen.getByText("Ledger Balance")).toBeInTheDocument();
    expect(screen.getByText("Total Payout")).toBeInTheDocument();
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
    expect(screen.getByText("Pending Payout")).toBeInTheDocument();
  });
});
