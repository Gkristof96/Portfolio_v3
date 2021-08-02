import style from "./SideDrawer.module.css";
import { NavLink } from "react-router-dom";

const SideDrawer = (props) => {
  const closeDrawerHandler = () => {
    props.onCloseDrawer();
  };
  return (
    <ul
      className={`${style.sidemenu} ${style[`${props.isMenuOpen && "open"}`]}`}
      onClick={closeDrawerHandler}
    >
      <li>
        <NavLink to="/" activeClassName={style.active} exact>
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
  );
};

export default SideDrawer;
