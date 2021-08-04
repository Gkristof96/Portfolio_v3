import { hamburger, line, open, scroll } from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  console.log(props.isScroll);
  return (
    <button
      className={`${hamburger} ${props.isScroll && scroll} ${
        props.isMenuOpen && open
      }`}
      onClick={props.onToggleMenu}
    >
      <div className={line} />
      <div className={line} />
      <div className={line} />
    </button>
  );
};

export default HamburgerButton;
