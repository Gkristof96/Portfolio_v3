import { Fragment, useState } from "react";
import style from "./ContactScreen.module.css";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import emailjs from "emailjs-com";
import Modal from "../components/UI/Modal";

const ContactScreen = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    /*emailjs
      .sendForm(
        "gmail",
        "template_h95q1ua",
        e.target,
        "user_XKwWTJXKqLvBZMOufAXCz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();*/
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          <h1>Köszönöm a levelet!</h1>
          <p className={style.paragraph}>Igyekszem minél előbb válaszolni</p>
          <button className={style.btn} onClick={closeModalHandler}>
            Bezár
          </button>
        </Modal>
      )}
      <div className={style.container}>
        <div className={style["content-card"]}>
          <div className={style["leftbar"]}>
            <h1>Kapcsolat</h1>
            <h2>Írj nekem üzenetet</h2>
            <p>
              Ha felkeltettem az érdeklődésedet, vagy csupán kérdezni szeretnél
              tőlem valamit, akkor itt remek lehetőséged van erre. Az alább
              felsorolt elérhetőségeken keresztül elérhetsz bármikor, vagy
              használhatod az itt megtalálható Űrlapot is, amit külön erre
              készítettem. Amint lehetőségem engedi válaszolni fogok a
              leveledre.
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
                <a
                  href='https://www.linkedin.com/in/krist%C3%B3f-gerencs%C3%A9r-a91a27203/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedinIn className={style.icon} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Gkristof96'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub className={style.icon} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className={style["rightbar"]}>
            <form onSubmit={submitHandler}>
              <div className={style["input-group"]}>
                <label htmlFor='name'>Név</label>
                <input type='text' name='name' />
              </div>
              <div className={style["input-group"]}>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' />
              </div>
              <div className={style["input-group"]}>
                <label htmlFor='message'>Üzenet</label>
                <textarea name='message' />
              </div>
              <button type='submit' className={style.btn}>
                Küldés
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactScreen;
