import { useState } from "react";
import Footer from "./Footer";
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
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
