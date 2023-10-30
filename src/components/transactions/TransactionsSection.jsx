import React from "react";
import { call_received, download, expand_more } from "../../assets/icons";

const TransactionsSection = () => {
  return (
    <div className="transactions">
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
        <div className="body-item">
          <div className="flex items-center gap-[14px]">
            <div className="icon-in">
              <img src={call_received} alt="ICON" />
            </div>
            <div className="flex flex-col gap-[9px]">
              <p className="text-[#131316] font-medium">Psychology of Money </p>
              <p className="text-[#56616B] font-medium">Roy Cash</p>
            </div>
          </div>

          <div className="text-right flex flex-col gap-1">
            <p className="text-[#131316] font-bold">USD 600</p>
            <p className="text-sm text-[#56616B] font-medium">Apr 03,2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsSection;
