import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerButton from "../UI/Buttons/HamburgerButton";
import style, { logo, navigation } from "./Header.module.css";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <header className={style[`${scroll && "scroll"}`]}>
      <Link to="/" className={logo}>
        {scroll ? (
          <img src="images/logo_white.png" alt="logo" />
        ) : (
          <img src="images/logo.png" alt="logo" />
        )}
      </Link>
      <nav className={navigation}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={style.active}>
              Főoldal
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName={style.active}>
              Projektek
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={style.active}>
              Rólam
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={style.active}>
              Kapcsolat
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style["hamburger-btn"]}>
        <HamburgerButton
          isMenuOpen={props.isMenuOpen}
          onToggleMenu={props.onMenuToggle}
          isScroll={scroll}
        />
      </div>
    </header>
  );
};

export default Header;
