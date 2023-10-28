import React from "react";
import {
  app,
  chart,
  chat,
  group,
  home,
  logo,
  menue,
  notification,
  payment,
} from "../../assets/icons";

const navList = [
  {
    id: 1,
    name: "Home",
    icon: home,
  },
  {
    id: 2,
    name: "Analytics",
    icon: chart,
  },
  {
    id: 3,
    name: "Revenue",
    icon: payment,
  },
  {
    id: 4,
    name: "CRM",
    icon: group,
  },
  {
    id: 5,
    name: "Apps",
    icon: app,
  },
];

const Header = () => {
  return (
    <header className="header">
      <img className="ml-6 w-9 h-9" src={logo} alt="MAINSTACK LOGO" />

      <div className="header__nav">
        {navList.map((item) => (
          <div
            key={item.id}
            className={
              item.name === "Revenue" ? "nav-active" : "header__nav-item"
            }
          >
            <img src={item.icon} alt="ICON" />
            {item.name}
          </div>
        ))}
      </div>

      <div className="header__profile">
        <img src={notification} alt="ICON" />
        <img src={chat} alt="ICON" />

        <div className="profile-button">
          <div className="name-short">IS</div>

          <img src={menue} alt="ICON" />
        </div>
      </div>
    </header>
  );
};

export default Header;
