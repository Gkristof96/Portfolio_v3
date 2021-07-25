import { useState } from "react";
import Header from "./Header";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    console.log("klikk");
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  return (
    <div>
      <Header isMenuOpen={isMenuOpen} onMenuToggle={toggleMenuHandler} />
      {props.children}
    </div>
  );
};

export default Layout;
