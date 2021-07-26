import style from "./Screen.module.css";
import GradientLine from "../components/UI/GradientLine";

const AboutScreen = () => {
  return (
    <section className={style.placeholder}>
      <GradientLine />
      <span className={style.text}>Hamarosan</span>
      <GradientLine side="right" />
    </section>
  );
};

export default AboutScreen;
