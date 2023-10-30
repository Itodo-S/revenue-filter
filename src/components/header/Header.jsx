import React, { useState } from "react";
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
import { useMainStack } from "../../context/MainStackContext";
import ProfileMenu from "./ProfileMenu";

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
  const { user } = useMainStack();
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  // Extracting the first and last letters of the names
  const firstNameInitial = user.first_name
    ? user.first_name[0].toUpperCase()
    : "";
  const lastNameInitial = user.last_name ? user.last_name[0].toUpperCase() : "";

  // Combines the fist and last name letters initial
  const userInitials = firstNameInitial + lastNameInitial;

  return (
    <>
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

          <div className="profile-button" onClick={toggleMenu}>
            <div className="name-short">{userInitials}</div>

            <img src={menue} alt="ICON" />
          </div>
        </div>
      </header>

      {show && <ProfileMenu />}
    </>
  );
};

export default Header;
