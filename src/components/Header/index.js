import { FaLaptopCode } from "react-icons/fa6";

import { GiHamburgerMenu } from "react-icons/gi";

import React, { useState } from "react";

import "./styles.css";

const Header = () => {
  const [showMenuItems, setMenuView] = useState(false);

  const onClickOfMenu = () => {
    setMenuView(!showMenuItems);
  };

  console.log(showMenuItems);

  return (
    <nav>
      <header>
        <p className="logo">
          NAGEENA <FaLaptopCode size={20} /> SHAIK
        </p>
        <ul className="header-large">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
        
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <button className="menu-button" type="button" onClick={onClickOfMenu}>
          <GiHamburgerMenu size={20} />
        </button>
      </header>
      {showMenuItems && (
        <ul className="header-small">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;