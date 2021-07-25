import React from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerButton from "../UI/Buttons/HamburgerButton";
import "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <Link to="/">
        <img src="images/logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="">Főoldal</NavLink>
          </li>
          <li>
            <NavLink to="">Projektek</NavLink>
          </li>
          <li>
            <NavLink to="">Rólam</NavLink>
          </li>
          <li>
            <NavLink to="">Kapcsolat</NavLink>
          </li>
        </ul>
      </nav>
      <div className="">
        <HamburgerButton
          isMenuOpen={props.isMenuOpen}
          onToggleMenu={props.onMenuToggle}
        />
      </div>
    </header>
  );
};

export default Header;
