import React from "react";
import {
  app_bar_list,
  app_bar_list1,
  product_icon,
  product_icon1,
} from "../../assets/icons";

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="p-1 rounded-full hover:bg-[#EFF1F6] cursor-pointer">
        <img className="w-7 h-7" src={product_icon} alt="APP BAR ICON" />
      </div>

      <div className="p-1 rounded-full hover:bg-[#EFF1F6] cursor-pointer">
        <img className="w-7 h-7" src={app_bar_list1} alt="APP BAR ICON" />
      </div>

      <div className="p-1 rounded-full hover:bg-[#EFF1F6] cursor-pointer">
        <img className="w-7 h-7" src={app_bar_list} alt="APP BAR ICON" />
      </div>

      <div className="p-1 rounded-full hover:bg-[#EFF1F6] cursor-pointer">
        <img className="w-7 h-7" src={product_icon1} alt="APP BAR ICON" />
      </div> 
    </div>
  );
};

export default AppBar;
