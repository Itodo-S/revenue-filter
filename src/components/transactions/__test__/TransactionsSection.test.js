import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MainStackProvider } from "../../../context/MainStackContext";
import TransactionsSection from "../TransactionsSection";

describe("TransactionsSection component", () => {
  test("renders TransactionsSection component with transactions", () => {
    const mockTransactions = {
      transactions: [
        {
          type: "credit",
          status: "completed",
          amount: 100.0,
          date: "2023-10-01",
        },
      ],
    };

    render(
      <MainStackProvider transactions={mockTransactions}>
        <TransactionsSection />
      </MainStackProvider>
    );

    // Assert that the header is rendered correctly
    expect(screen.getByText("24 Transactions")).toBeInTheDocument();
    expect(
      screen.getByText("Your transactions for the last 7 days")
    ).toBeInTheDocument();
  });
});
