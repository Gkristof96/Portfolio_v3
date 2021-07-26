import style from "./Screen.module.css";
import GradientLine from "../components/UI/GradientLine";

const ImpresszumScreen = () => {
  return (
    <section className={style.placeholder}>
      <GradientLine />
      <span className={style.text}>Hamarosan</span>
      <GradientLine side="right" />
    </section>
  );
};

export default ImpresszumScreen;
