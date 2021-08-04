import style from "./ContactScreen.module.css";
import Card from "../components/UI/Card";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactScreen = () => {
  return (
    <Card>
      <div className={style.container}>
        <div className={style["leftbar"]}>
          <h1>Kapcsolat</h1>
          <h2>Írj nekem üzenetet</h2>
          <p>
            Ha felkeltettem az érdeklődésedet, vagy csupán kérdezni szeretnél
            tőlem valamit, akkor itt remek lehetőséged van erre. Az alább
            felsorolt elérhetőségeken keresztül elérhetsz bármikor, vagy
            használhatod az itt megtalálható űrlapot is amit külön erre
            készítettem. Amint lehetőségem engedi válaszolni fogok a leveledre.
          </p>
          <ul className={style["contact-list"]}>
            <li>
              <FaEnvelope className={style.icon} />
              kristef.g@gmail.com
            </li>
            <li>
              <FaPhoneAlt className={style.icon} />
              06 30 879 8878
            </li>
            <li>
              <FaLinkedinIn className={style.icon} />
              LinkedIn
            </li>
            <li>
              <FaGithub className={style.icon} />
              GitHub
            </li>
          </ul>
        </div>
        <div className={style["rightbar"]}>
          <form>
            <div className={style["input-group"]}>
              <label>Név</label>
              <input />
            </div>
            <div className={style["input-group"]}>
              <label>Email</label>
              <input />
            </div>
            <div className={style["input-group"]}>
              <label>Üzenet</label>
              <textarea />
            </div>
            <button className={style.btn}>Küldés</button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default ContactScreen;
