import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillDribbbleSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className={style.content}>
        <img
          src='images/logo_white.webp'
          alt='Footer logo'
          className={style["logo-image"]}
        />
        <div className={style["social-wrapper"]}>
          <Link
            to='https://www.linkedin.com/in/krist%C3%B3f-gerencs%C3%A9r-a91a27203/'
            className={style["social-icon"]}
          >
            <AiFillLinkedin />
          </Link>
          <Link
            to='https://dribbble.com/kristefg'
            className={style["social-icon"]}
          >
            <AiFillDribbbleSquare />
          </Link>
          <Link
            to='https://github.com/Gkristof96'
            className={style["social-icon"]}
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>
      <div className={style.cta}>
        <div className={style.line} />
        <span onClick={scrollToTopHandler} className={style.text}>
          Vissza a tetejére
        </span>
        <div className={style.inverseline} />
      </div>
      <div className={style.bottom}>
        <span className={style.copyright}>Copyright ©Kristof - 2021</span>
        {/*<Link to="/impresszum" className={style.link}>
          Impresszum
        </Link>*/}
      </div>
    </footer>
  );
};

export default Footer;
