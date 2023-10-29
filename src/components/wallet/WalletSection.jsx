import React from "react";
import { info } from "../../assets/icons";
import { line28, line29 } from "../../assets/images";

const WalletSection = () => {
  return (
    <section className="wallet-section">
      <div className="wallet-section__chart">
        <div className="wallet-section__balance">
          <div className="">
            <p className="text-[#56616B] text-sm font-medium">
              Available Balance
            </p>
            <p className="font-bold text-3xl text-[#131316] leading-[48px] tracking-[-1.5px] mt-2">
              USD 120,500.00
            </p>
          </div>

          <button className="h-[52px] w-[167px] px-7 bg-[#131316] rounded-full font-semibold text-[#FFFFFF]">
            Withdraw
          </button>
        </div>

        <div className="mt-20">
          <img src={line29} alt="CHART LINE" />
          <img className="mt-[19px]" src={line28} alt="CHART LINE" />

          <div className="flex justify-between items-center mt-[15px]">
            <p className="text-sm font-medium text-[#56616B]">Apr 1 , 2022</p>
            <p className="text-sm font-medium text-[#56616B]">Apr 30 , 2022</p>
          </div>
        </div>
      </div>

      <div className="wallet-section__balance-items">
        <div className="balance-item">
          <div className=" flex justify-between items-center">
            <p className="font-medium text-sm text-[#56616B]">Ledger Balance</p>
            <img src={info} alt="INFO ICON" />
          </div>

          <p className="text-[28px] font-bold text-[#131316] mt-[10px]">
            USD 0.00
          </p>
        </div>

        <div className="balance-item">
          <div className=" flex justify-between items-center">
            <p className="font-medium text-sm text-[#56616B]">Total Payout</p>
            <img src={info} alt="INFO ICON" />
          </div>

          <p className="text-[28px] font-bold text-[#131316] mt-[10px]">
            USD 55,080.00
          </p>
        </div>

        <div className="balance-item">
          <div className=" flex justify-between items-center">
            <p className="font-medium text-sm text-[#56616B]">Total Revenue</p>
            <img src={info} alt="INFO ICON" />
          </div>

          <p className="text-[28px] font-bold text-[#131316] mt-[10px]">
            USD 175,580.00
          </p>
        </div>

        <div className="balance-item">
          <div className=" flex justify-between items-center">
            <p className="font-medium text-sm text-[#56616B]">Pending Payout</p>
            <img src={info} alt="INFO ICON" />
          </div>

          <p className="text-[28px] font-bold text-[#131316] mt-[10px]">
            USD 0.00
          </p>
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
