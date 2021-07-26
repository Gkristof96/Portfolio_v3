import style from "./Screen.module.css";
import GradientLine from "../components/UI/GradientLine";

const ContactScreen = () => {
  return (
    <section className={style.placeholder}>
      <GradientLine />
      <span className={style.text}>Hamarosan</span>
      <GradientLine side="right" />
    </section>
  );
};

export default ContactScreen;
