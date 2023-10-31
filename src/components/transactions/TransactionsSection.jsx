import React from "react";
import { call_made, download, expand_more } from "../../assets/icons";
import { useMainStack } from "../../context/MainStackContext";

const TransactionsSection = () => {
  const { transactions } = useMainStack();

  // Helper function to format the date
  const formatDate = (dateString) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div className="transactions" data-testid="transactions-section">
      <div className="transactions__header">
        <div className="">
          <p className="text-2xl text-[#131316] font-bold">24 Transactions</p>
          <p className="text-sm text-[#56616B] font-medium">
            Your transactions for the last 7 days
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="transactions-button">
            <p className="text-[#131316] font-semibold">Filter</p>
            <img src={expand_more} alt="ICON" />
          </div>

          <div className="transactions-button">
            <p className="text-[#131316] font-semibold">Export list</p>
            <img src={download} alt="ICON" />
          </div>
        </div>
      </div>

      <div className="transactions__body">
        {transactions?.transactions?.map((item) => (
          <div className="body-item">
            <div className="flex items-center gap-[14px]">
              <div className="icon-in">
                <img src={call_made} alt="ICON" />
              </div>
              <div className="flex flex-col gap-[9px]">
                <p className="text-[#131316] capitalize font-medium">
                  {item?.type}{" "}
                </p>
                <p className="text-[#0EA163] text-sm font-medium">
                  {item?.status}
                </p>
              </div>
            </div>

            <div className="text-right flex flex-col gap-1">
              <p className="text-[#131316] font-bold">USD {item?.amount}</p>
              <p className="text-sm text-[#56616B] font-medium">
                {formatDate(item?.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsSection;
