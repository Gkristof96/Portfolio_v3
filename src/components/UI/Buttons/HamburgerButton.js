import { hamburger, line, open } from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return (
    <button
      className={`${hamburger} ${props.isMenuOpen && open}`}
      onClick={props.onToggleMenu}
    >
      <div className={line} />
      <div className={line} />
      <div className={line} />
    </button>
  );
};

export default HamburgerButton;
