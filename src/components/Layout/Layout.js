import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideDrawer from "./SideDrawer";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  return (
    <div>
      <Header isMenuOpen={isMenuOpen} onMenuToggle={toggleMenuHandler} />
      <SideDrawer isMenuOpen={isMenuOpen} onCloseDrawer={toggleMenuHandler} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
