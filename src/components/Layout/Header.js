import React from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerButton from "../UI/Buttons/HamburgerButton";
import style, { logo, navigation } from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <Link to="/" className={logo}>
        <img src="images/logo.png" alt="logo" />
      </Link>
      <nav className={navigation}>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Főoldal
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projektek
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              Rólam
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Kapcsolat
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style["hamburger-btn"]}>
        <HamburgerButton
          isMenuOpen={props.isMenuOpen}
          onToggleMenu={props.onMenuToggle}
        />
      </div>
    </header>
  );
};

export default Header;
