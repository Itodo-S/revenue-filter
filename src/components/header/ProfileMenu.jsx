import React from "react";
import { CiSettings } from "react-icons/ci";
import { GiStabbedNote } from "react-icons/gi";
import { GoBug } from "react-icons/go";
import {
  MdOutlineHowToVote,
  MdOutlineSwitchAccount,
  MdOutlineLogout,
} from "react-icons/md";
import { TiPointOfInterest } from "react-icons/ti";
import { useMainStack } from "../../context/MainStackContext";

const ProfileMenu = () => {
  const { user } = useMainStack();

  // Extracting the first and last letters of the names
  const firstNameInitial = user?.user.first_name
    ? user?.user.first_name[0].toUpperCase()
    : "";
  const lastNameInitial = user?.user?.last_name
    ? user?.user?.last_name[0].toUpperCase()
    : "";

  // Combines the fist and last name letters initial
  const userInitials = firstNameInitial + lastNameInitial;
  return (
    <div className="absolute w-[340px] shadow-lg top-24 right-9 bg-[#fff] p-3 rounded-2xl">
      <div className="flex gap-4 items-center">
        <div className="rounded-full w-8 h-8 flex items-center justify-center text-[#FFFFFF] font-semibold text-sm bg-[#3f454c]">
          {userInitials}
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[#131316]">
            {user?.user?.first_name + " " + user?.user?.last_name}
          </p>
          <p className="font-medium text-xs text-[#56616B]">
            {user?.user?.email}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <div className="flex items-center gap-2 text-[131316]] font-medium py-1 hover:bg-[#EFF1F6] rounded-md cursor-pointer">
          <CiSettings />
          <p className="text-sm">Settings</p>
        </div>

        <div className="flex items-center gap-2 text-[131316]] font-medium py-1 hover:bg-[#EFF1F6] rounded-md cursor-pointer">
          <GiStabbedNote />
          <p className="text-sm">Purchase History</p>
        </div>

        <div className="flex items-center gap-2 text-[131316]] font-medium py-1 hover:bg-[#EFF1F6] rounded-md cursor-pointer">
          <MdOutlineHowToVote />
          <p className="text-sm">Refer and Earn</p>
        </div>

        <div className="flex items-center gap-2 text-[131316]] font-medium py-1 hover:bg-[#EFF1F6] rounded-md cursor-pointer">
          <TiPointOfInterest />
          <p className="text-sm">Integrations</p>
        </div>

        <div className="flex items-center gap-2 text-[131316]] font-medium py-1 hover:bg-[#EFF1F6] rounded-md cursor-pointer">
          <GoBug />
          <p className="text-sm">Report Bugs</p>
        </div>

        <div className="flex items-center gap-2 text-[131316]] font-medium py-1 hover:bg-[#EFF1F6] rounded-md cursor-pointer">
          <MdOutlineSwitchAccount />
          <p className="text-sm">Switch Account</p>
        </div>

        <div className="flex items-center gap-2 text-[131316]] font-medium py-1 hover:bg-[#EFF1F6] rounded-md cursor-pointer">
          <MdOutlineLogout />
          <p className="text-sm">Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
